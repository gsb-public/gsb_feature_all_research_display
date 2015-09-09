(function ($) {
  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {
      $('#edit-narrow-search').wrap('<div class="narrow-search-wrapper"/>')
      $fieldset = $('.narrow-search-wrapper').detach();
      $fieldset.insertAfter('.views-submit-button');
      $submitbutton = $('.views-submit-button').detach();
      $submitbutton.insertAfter('.form-item-field-search-field-value');
    }
  }
})(jQuery);

