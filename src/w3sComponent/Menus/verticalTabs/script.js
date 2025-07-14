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

const listOfCities = [
  {
    nameOfCity: "London",
    description: "London is capital city of England"
  },
  {
    nameOfCity: "Paris",
    description: "Paris is capital city of France"
  },
  {
    nameOfCity: "Tokyo",
    description: "Tokyo is capital city of Japan"
  }
]

const acc = document.getElementsByClassName("tabs-item");

const cityName = document.getElementById('tabs-desc-city-name')
const cityDesc = document.getElementById('tabs-desc-city-desc')
cityName.textContent = listOfCities[0].nameOfCity
cityDesc.textContent = listOfCities[0].description

for(let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    cityName.textContent = listOfCities[i].nameOfCity
    cityDesc.textContent = listOfCities[i].description

    for(let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
    }

    this.classList.add("active")
  })
}