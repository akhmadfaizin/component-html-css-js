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

// Auto-resize textarea based on content
document.querySelectorAll('.input-auto-resize').forEach(textarea => {
  textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset height to recalculate
    this.style.height = `${this.scrollHeight}px`; // Set to content height
  });
});