// Function to get Monday of the current week
export function getMonday(date) {
   const day = date.getDay();
   const diff = date.getDate() - day + (day == 0 ? -6 : 1);
   return new Date(date.setDate(diff));
}

// Function to get Sunday of the current week
export function getSunday(monday) {
   return new Date(monday.getTime() + 6 * 24 * 60 * 60 * 1000);
}

export function formatDate(date) {
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const day = String(date.getDate()).padStart(2, "0");
   return `${year}-${month}-${day}`;
}
