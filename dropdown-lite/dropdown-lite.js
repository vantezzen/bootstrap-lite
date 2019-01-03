/**
 * Dropdown-lite: jQuery-free replacement for bootstrap.js if all you need is dropdown functionality
 * (c) vantezzen 2018
 * Licences under MIT License
 * 
 * This file has been edited by BabelJS for better compatability. 
 * Please look at src/dropdown-lite.js for the original file.
 * 
 * https://github.com/vantezzen/boostrap-lite
 */
'use strict';
// Attach listener to dropdown toggles
var attachDropdown = function attachDropdown() {
  // Get all toggles
  var toggles = document.getElementsByClassName('dropdown-toggle');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var toggle = _step.value;

      toggle.onclick = function (element) {
        // Get dropdown menu corresponsing to the toggle
        var dropdown = toggle.parentNode.getElementsByClassName('dropdown-menu')[0];

        // Show or hide dropdown depending on current status
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        } else {
          dropdown.classList.add('show');
        }
      };
    };

    for (var _iterator = toggles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

// Attach listeners once DOM content is loaded
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
  attachDropdown();
} else {
  document.addEventListener('DOMContentLoaded', attachDropdown);
}
