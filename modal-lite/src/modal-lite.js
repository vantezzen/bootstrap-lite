/**
 * modal-lite: jQuery-free replacement for bootstrap.js if all you need is modal functionality
 * (c) vantezzen 2018
 * Licences under MIT License
 * 
 * https://github.com/vantezzen/bootstrap-lite
 */
let isModalOpen = true;

window.mlconfig =  {
    closeOn: {
        click: true,
        escape: true,
        button: true
    },
    ...window.mlconfig || {}
};

// Attach listener to modal toggles
const attachModal = () => {
    // Get all toggles
    let toggles = document.querySelectorAll('[data-toggle="modal"]');

    for (let toggle of toggles) {
        toggle.onclick = () => {
            // Get modal corresponsing to the toggle
            let modal = document.querySelector(toggle.dataset.target);
            toggleModal(modal)
        };
    }
}

const toggleModal = (modal) => {
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
            document.onclick = () => {};
        }

        // Remove escape close handler
        if (window.mlconfig.closeOn.escape) {
            document.onkeydown = (e) => {};
        }

        // Remove button close handler
        if (window.mlconfig.closeOn.button) {
            let buttons = modal.querySelectorAll('[data-dismiss="modal"]');

            for (let button of buttons) {
                button.onclick = () => {}
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
            setTimeout(() => {
                document.onclick = (e) => {
                    // Check if modal is open at all
                    if (!isModalOpen) {
                        return;
                    }
        
                    // Check if click was on .modal-content element
                    for (let element of e.path) {
                        if (element.classList && element.classList.contains('modal-dialog')) {
                            // Don't close modal
                            return;
                        }
                    }
                    toggleModal(modal);
                }
            }, 0);
        }
        document.body.appendChild(newNode); 

        // Attach escape close handler
        if (window.mlconfig.closeOn.escape) {
            document.onkeydown = (e) => {
                if(e.key === "Escape") {
                    // Check if modal is open at all
                    if (!isModalOpen) {
                        return;
                    }

                    toggleModal(modal);
                }
            }
        }

        // Attach button close handler
        if (window.mlconfig.closeOn.button) {
            let buttons = modal.querySelectorAll('[data-dismiss="modal"]');

            for (let button of buttons) {
                button.onclick = () => {
                    toggleModal(modal);
                }
            }
        }

        isModalOpen = true;
    }
}

// Attach listeners once DOM content is loaded
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    attachModal();
} else {
    document.addEventListener('DOMContentLoaded', attachModal);
}