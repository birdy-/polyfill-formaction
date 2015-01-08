/*
 * Implement formaction HTML5 attribute.
 * Needs addEventListener polyfill for IE7/IE8
 */
(function() {
  var elements = document.querySelectorAll('button[formaction], input[formaction]');
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.addEventListener('click', function () {
        if (this.getAttribute('formaction')) {
          this.form.action = this.getAttribute('formaction');
        }
        return true;
      });
    }
  }
})();