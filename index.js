// Get references to DOM elements
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch"),
    digitalClock = document.querySelector(".digital-clock");

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
    // add "dark" class to body and set modeSwitch text to "Light Mode"
    body.classList.add("dark");
    modeSwitch.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>`;
}

// add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
    // toggle the "dark" class on the body element
    body.classList.toggle("dark");
    // check if the "dark" class is currently present on the body element
    const isDarkMode = body.classList.contains("dark");
    // set modeSwitch text based on "dark" class presence
    modeSwitch.innerHTML = isDarkMode ?
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>` :
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>`;
    // set localStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    // Get current time and calculate degrees for clock hands
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12 + date.getMinutes() / 60) * 360;

    let options = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
    digitalClock.textContent = date.toLocaleTimeString('fa-IR', options);

    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// call updateTime to set clock hands every second
setInterval(updateTime, 1000);

//call updateTime function on page load
updateTime();
