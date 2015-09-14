(function ($) {
  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {
      //
        $('#edit-narrow-search').wrap('<div class="narrow-search-wrapper"/>');
        $fieldset = $('.narrow-search-wrapper').detach();
        $fieldset.insertAfter('#views-exposed-form-gsb-all-research-listing-all-research-panel-pane .views-submit-button');

        if ($('.views-submit-button').length == 1) {
          $submitbutton = $('.views-submit-button').detach();
          $submitbutton.insertAfter('.form-item-field-search-field-value');
        }
    }
  }
})(jQuery);

