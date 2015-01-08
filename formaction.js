/*
 * Implement formaction HTML5 attribute.
 * Needs addEventListener polyfill for IE7/IE8
 */
(function () {
  window.addEventListener('load', function () {
    if (!("formAction" in document.createElement("input"))) {
      var elements = document.querySelectorAll('button');
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element.attributes.formAction) {
            element.addEventListener('click', function () {
              this.form.action = this.attributes.formAction.value;
              return true;
            });
          }
        }
      }
    }
  });
})();
