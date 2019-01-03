/**
 * Dropdown-lite: jQuery-free replacement for bootstrap.js if all you need is dropdown functionality
 * (c) vantezzen 2018
 * Licences under MIT License
 * 
 * https://github.com/vantezzen/boostrap-lite
 */
// Attach listener to dropdown toggles
const attachDropdown = () => {
  // Get all toggles
  let toggles = document.getElementsByClassName('dropdown-toggle');

  for (let toggle of toggles) {
    toggle.onclick = (element) => {
      // Get dropdown menu corresponsing to the toggle
      let dropdown = toggle.parentNode.getElementsByClassName('dropdown-menu')[0];
      
      // Show or hide dropdown depending on current status
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      } else {
        dropdown.classList.add('show');
      }
    }
  }
}

// Attach listeners once DOM content is loaded
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
  attachDropdown();
} else {
  document.addEventListener('DOMContentLoaded', attachDropdown);
}
