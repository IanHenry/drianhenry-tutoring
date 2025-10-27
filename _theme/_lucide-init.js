document.addEventListener("DOMContentLoaded", function() {
  if (typeof lucide !== "undefined") {
    lucide.replace();
  } else {
    console.error("Lucide not loaded");
  }
});

