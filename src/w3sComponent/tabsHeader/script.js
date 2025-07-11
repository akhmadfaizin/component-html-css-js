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
    description: "London is capital city of England",
    bgColor: "#f44336"
  },
  {
    nameOfCity: "Paris",
    description: "Paris is capital city of France",
    bgColor: "#04aa6d"
  },
  {
    nameOfCity: "Tokyo",
    description: "Tokyo is capital city of Japan",
    bgColor: "#2196f3"
  },
  {
    nameOfCity: "Jakarta",
    description: "Jakarta is capital city of Indonesia",
    bgColor: "#ff5722"
  }
]

const tabs = document.getElementsByClassName("tabs-item")

const cityName = document.getElementById('tabs-desc-city-name')
const cityDesc = document.getElementById('tabs-desc-city-desc')
const cityBgColor = document.getElementById("tabs-desc")
cityName.textContent = listOfCities[0].nameOfCity
cityDesc.textContent = listOfCities[0].description
cityBgColor.style.background = listOfCities[0].bgColor
tabs[0].style.background = listOfCities[0].bgColor

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    cityName.textContent = listOfCities[i].nameOfCity
    cityDesc.textContent = listOfCities[i].description
    cityBgColor.style.background = listOfCities[i].bgColor

    for(let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active")
      tabs[j].style.background = "";
    }

    this.classList.add("active")
    this.style.background = listOfCities[i].bgColor
  })
}