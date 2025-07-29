document.addEventListener("astro:page-load", () => {
  //   chatbot OpenWidget   //

  window.__ow = window.__ow || {};
  window.__ow.organizationId = "3e061902-7c69-480f-8b82-ae0a21f6b0e8";
  window.__ow.asyncInit = true;
  (function (n, t, c) {
    function i(n) {
      return e._h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = {
      _q: [],
      _h: null,
      _v: "2.0",
      on: function () {
        i(["on", c.call(arguments)]);
      },
      once: function () {
        i(["once", c.call(arguments)]);
      },
      off: function () {
        i(["off", c.call(arguments)]);
      },
      get: function () {
        if (!e._h)
          throw new Error("[OpenWidget] You can't use getters before load.");
        return i(["get", c.call(arguments)]);
      },
      call: function () {
        i(["call", c.call(arguments)]);
      },
      init: function () {
        var n = t.createElement("script");
        (n.async = !0),
          (n.type = "text/javascript"),
          (n.src = "https://cdn.openwidget.com/openwidget.js"),
          t.head.appendChild(n);
      },
    };
    !n.__ow.asyncInit && e.init(), (n.OpenWidget = n.OpenWidget || e);
  })(window, document, [].slice);

  const chatbot = document.getElementById("chatbot");

  chatbot.addEventListener("click", () => {
    console.log("click");
    OpenWidget.init();
});


setTimeout(() => {
   console.log("init");
   console.log(OpenWidget);
   OpenWidget.init();
  }, 4000);
});
