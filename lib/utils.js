// Function names in this helper file follow a strict convention, so that
//  various front-end implementations can work independently
window.utils = window.utils || {};
utils.openModal = function(selector) {
  $(selector).modal('show');
}
utils.closeModal = function(selector) {
  $(selector).modal('hide');
}