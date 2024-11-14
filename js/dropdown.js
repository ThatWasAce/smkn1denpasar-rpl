
document.getElementById("dropdown").addEventListener("click", function () {
  this.classList.toggle("active");

  var dropdownContent = this.querySelector(".dropdown-content");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

  var arrow = this.querySelector(".arrow");
  arrow.classList.toggle("up");
  arrow.classList.toggle("down");
});
