# modal-lite
3.5kb, jQuery-free replacement for bootstrap.js if all you need is modal functionality.

Minified jQuery and Bootstrap.js together need almost 150KB to be loaded into the browser - if you only use this for Bootstrap modal functionality you can reduce this to not event 4KB by using `modal-lite`. 

`modal-lite` is a drop-in replacement for bootstrap.js + jQuery that adds the same functionality to Bootstrap modal menues without the need of additional libraries.

# Features
- Basic modal functionality
- Close modal with button, ESC key or click on backdrop
- No configuration needed when using defaults (see the [config section](#config) for more information)
- Only 3.5kb minified
- jQuery-free
- Optimized with BabelJS for improved compatablity

# Usage
Simply download `modal-lite.js`(~8 KB) or `modal-lite.min.js`(~3.5kb) and include it in your project.

`modal-lite` should automatically detect your modals if your dropdown follow the [official Bootstrap modal example](https://getbootstrap.com/docs/4.1/components/modal/#examples). 
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
The modal toggle should have the `data-toggle="modal"` and `data-target="#MODAL_ID"` attributes, the modal should have the defined ID and a `.modal-dialog` element in it.

Buttons that should close the modal should have the `data-dismiss="modal"` attribute and be inside the modal element.

# Config
You can configure modal-lite by defining `window.mlconfig` before including `modal-lite.js`.

Here is an example of all availible settings:
```html
<script>
// Set config
window.mlconfig =  {
    // When to close the modal
    closeOn: {
        // Close modal on click anywhere but the .modal-dialog
        click: true,

        // Close modal when clicking ESC key
        escape: true,

        // Close modal via elements/buttons with `data-dismiss="modal"` attribute
        button: true
    },
};
</script>
<script src="modal-lite.min.js"></script>
```

# TODO
- Support for multiple modals open at the same time (e.g. one modal opens another)
- JavaScript API to open/close modals

# Bugs and feature requests
Bugs and feature request are tracked on [GitHub](https://github.com/vantezzen/bootstrap-lite/issues).

# License
modal-lite is licensed under the MIT License - view the `LICENSE` file for details.

# Contributing
Pull requests are always appreciated