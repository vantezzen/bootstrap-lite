# dropdown-lite
700 byte, jQuery-free replacement for bootstrap.js if all you need is dropdown functionality.

Minified jQuery and Bootstrap.js together need almost 150KB to be loaded into the browser - if you only use this for Bootstrap dropdown functionality you can reduce this to not event 1KB by using `dropdown-lite`. 

`dropdown-lite` is a drop-in replacement for bootstrap.js + jQuery that adds the same functionality to Bootstrap dropdown menues without the need of additional libraries.

# Usage
Simply download `dropdown-lite.js`(~2 KB) or `dropdown-lite.min.js`(~700 bytes) and include it in your project.

`dropdown-lite` should automatically detect your dropdown menues if your dropdown follow the [official Bootstrap dropdown example](https://getbootstrap.com/docs/4.1/components/dropdowns/#examples). 
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```
The dropdown toggle should have the the `dropdown-toggle` class, the menu should have the `dropdown-menu` class. Both should together be inside a container, this way one dropdown toggle won't activate a different dropdown menu.

# Bugs and feature requests
Bugs and feature request are tracked on [GitHub](https://github.com/vantezzen/bootstrap-lite/issues).

# License
dropdown-lite is licensed under the MIT License - view the `LICENSE` file for details.

# Contributing
Pull requests are always appreciated