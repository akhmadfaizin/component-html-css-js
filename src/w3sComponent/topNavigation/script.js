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

const navg = document.getElementsByClassName("top-navbar-content-item")

for(let i=0; i < navg.length; i++) {
  navg[i].addEventListener("click", function () {
    for(let j=0; j < navg.length; j++) {
      navg[j].classList.remove("active")
    }

    this.classList.add("active")
  })
}