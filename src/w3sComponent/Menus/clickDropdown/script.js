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

const genreButton = document.getElementById("genre-button")
const dropdownContainer = document.getElementById("dropdown-container")

genreButton.addEventListener("click", function () {
  dropdownContainer.classList.toggle("active")
})
