function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const toggleIcon = document.querySelector(".toggle-btn i");
  sidebar.classList.toggle("compact");
  if (sidebar.classList.contains("compact")) {
    toggleIcon.classList.remove("fa-chevron-right");
    toggleIcon.classList.add("fa-chevron-left");
  } else {
    toggleIcon.classList.remove("fa-chevron-left");
    toggleIcon.classList.add("fa-chevron-right");
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
