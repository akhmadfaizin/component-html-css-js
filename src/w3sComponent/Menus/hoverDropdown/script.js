function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const toggleIcon = document.querySelector('.toggle-btn i');
  sidebar.classList.toggle('compact');
  if (sidebar.classList.contains('compact')) {
    toggleIcon.classList.remove('fa-chevron-right');
    toggleIcon.classList.add('fa-chevron-left');
  } else {
    toggleIcon.classList.remove('fa-chevron-left');
    toggleIcon.classList.add('fa-chevron-right');
  }
}

const genreButtonContainer = document.getElementById("genre-button-container")
const dropdownContainer = document.getElementById("dropdown-container")

genreButtonContainer.addEventListener("mouseenter", function () {
  dropdownContainer.classList.add("active")
})

genreButtonContainer.addEventListener("mouseleave", function () {
  dropdownContainer.classList.remove("active")
})