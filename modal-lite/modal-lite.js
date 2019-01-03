'use strict';
/**
 * modal-lite: jQuery-free replacement for bootstrap.js if all you need is modal functionality
 * (c) vantezzen 2018
 * Licences under MIT License
 * 
 * This file has been edited by BabelJS for better compatability. 
 * Please look at src/dropdown-lite.js for the original file.
 * 
 * https://github.com/vantezzen/bootstrap-lite
 */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var isModalOpen = true;

window.mlconfig = _extends({
    closeOn: {
        click: true,
        escape: true,
        button: true
    }
}, window.mlconfig || {});

// Attach listener to modal toggles
var attachModal = function attachModal() {
    // Get all toggles
    var toggles = document.querySelectorAll('[data-toggle="modal"]');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var toggle = _step.value;

            toggle.onclick = function () {
                // Get modal corresponsing to the toggle
                var modal = document.querySelector(toggle.dataset.target);
                toggleModal(modal);
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

var toggleModal = function toggleModal(modal) {
    // Show or hide dropdown depending on current status
    if (modal.classList.contains('show')) {
        isModalOpen = false;

        // Hide modal
        modal.classList.remove('show');
        modal.style.display = 'none';

        // Remove modal-open class from body
        document.body.classList.remove('modal-open');

        // Remove backdrop
        document.getElementById("modal-backdrop").outerHTML = "";
        if (window.mlconfig.closeOn.click) {
            document.onclick = function () {};
        }

        // Remove escape close handler
        if (window.mlconfig.closeOn.escape) {
            document.onkeydown = function (e) {};
        }

        // Remove button close handler
        if (window.mlconfig.closeOn.button) {
            var buttons = modal.querySelectorAll('[data-dismiss="modal"]');

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var button = _step2.value;

                    button.onclick = function () {};
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } else {
        // Show modal
        modal.classList.add('show');
        modal.style.display = 'block';

        // Add modal-open class to body
        document.body.classList.add('modal-open');

        // Create and show backdrop
        var newNode = document.createElement('div');
        newNode.className = 'modal-backdrop fade show';
        newNode.id = 'modal-backdrop';
        if (window.mlconfig.closeOn.click) {
            // Set click event with timeout to prevent immediate closing of modal
            setTimeout(function () {
                document.onclick = function (e) {
                    // Check if modal is open at all
                    if (!isModalOpen) {
                        return;
                    }

                    // Check if click was on .modal-content element
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = e.path[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var element = _step3.value;

                            if (element.classList && element.classList.contains('modal-dialog')) {
                                // Don't close modal
                                return;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    toggleModal(modal);
                };
            }, 0);
        }
        document.body.appendChild(newNode);

        // Attach escape close handler
        if (window.mlconfig.closeOn.escape) {
            document.onkeydown = function (e) {
                if (e.key === "Escape") {
                    // Check if modal is open at all
                    if (!isModalOpen) {
                        return;
                    }

                    toggleModal(modal);
                }
            };
        }

        // Attach button close handler
        if (window.mlconfig.closeOn.button) {
            var _buttons = modal.querySelectorAll('[data-dismiss="modal"]');

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _buttons[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _button = _step4.value;

                    _button.onclick = function () {
                        toggleModal(modal);
                    };
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }

        isModalOpen = true;
    }
};

// Attach listeners once DOM content is loaded
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    attachModal();
} else {
    document.addEventListener('DOMContentLoaded', attachModal);
}