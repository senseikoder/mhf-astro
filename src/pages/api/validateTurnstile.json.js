export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: "Token is required" }),
        {
          status: 400,
          statusText: "Bad Request",
        }
      );
    }

    const secret = import.meta.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY not found in environment variables");
      return new Response(
        JSON.stringify({ success: false, message: "Server configuration error" }),
        {
          status: 500,
          statusText: "Internal Server Error",
        }
      );
    }

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    if (!response.ok) {
      console.error("Failed to verify Turnstile token:", response.status);
      return new Response(
        JSON.stringify({ success: false, message: "Verification service unavailable" }),
        {
          status: 500,
          statusText: "Internal Server Error",
        }
      );
    }

    const result = await response.json();

    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.error("Error validating Turnstile token:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};