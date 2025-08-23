
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".form-page");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => page.classList.toggle("active", i === index));
  }

  document.querySelectorAll(".next").forEach(btn =>
    btn.addEventListener("click", () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    })
  );

  document.querySelectorAll(".prev").forEach(btn =>
    btn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    })
  );

  const form = document.getElementById("rentalForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(() => {
      form.classList.add("hidden");
      document.getElementById("successMessage").classList.remove("hidden");
    }, (err) => {
      alert("Failed to send application: " + JSON.stringify(err));
    });
  });

  showPage(currentPage);
});
