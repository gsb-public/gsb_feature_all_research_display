(function ($) {
  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {

      if ($('#edit-exposed-filter-field-publication-type-value-expose-to-visitor').prop('checked')) {
        $('.hide_pub').hide();
        $('div.form-item-exposed-field-publication-type-value').hide();

      }
      $('div.form-item-exposed-filter-field-publication-type-value-expose-to-visitor :input').change(function (e) {
        $('.hide_pub').toggle();
        $('div.form-item-exposed-field-publication-type-value').toggle();
      });

      if ($('#edit-exposed-field-centers-research-programs-tid').val() == 'All') {
        $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor').hide();
        $('.hide_topic').hide();
        $('div.form-item-exposed-field-circle-topics-tid').hide();
      }
      $('div.form-item-exposed-field-centers-research-programs-tid :input').change(function (e) {
        if ($('#edit-exposed-field-centers-research-programs-tid').val() == 'All') {
          $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor').hide();
          $('.hide_topic').hide();
          $('div.form-item-exposed-field-circle-topics-tid').hide();
        }
        else {
          $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor').show();
          if ($('#edit-exposed-filter-field-circle-topics-tid-expose-to-visitor').prop('checked')) {
            $('.hide_topic').hide();
            $('div.form-item-exposed-field-circle-topics-tid').hide();
          } else {
            $('.hide_topic').show();
            $('div.form-item-exposed-field-circle-topics-tid').show();
          }
        }
      });

      if ($('#edit-exposed-filter-field-circle-topics-tid-expose-to-visitor').prop('checked')) {
        $('.hide_topic').hide();
        $('div.form-item-exposed-field-circle-topics-tid').hide();
      }
      $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor :input').change(function (e) {
        $('.hide_topic').toggle();
        $('div.form-item-exposed-field-circle-topics-tid').toggle();
      });
    }
  };
})(jQuery);

