
(function ($) {
  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {

      if ($('#edit-exposed-filter-field-publication-type-value-expose-to-visitor').prop('checked'))
      {
        $('#edit-exposed-field-publication-type-value').attr('disabled', 'true');
      }
      $('div.form-item-exposed-filter-field-publication-type-value-expose-to-visitor :input').change(function(e) {
        if ($('#edit-exposed-field-publication-type-value').prop('disabled'))
        {
          $('#edit-exposed-field-publication-type-value').removeAttr('disabled');
        }
        else {
          $('#edit-exposed-field-publication-type-value').attr('disabled', 'true');
        }
      });

      if ($('#edit-exposed-filter-field-circle-topics-tid-expose-to-visitor').prop('checked'))
      {
        $('#edit-exposed-field-circle-topics-tid').attr('disabled', 'true');
      }
      $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor :input').change(function(e) {
        if ($('#edit-exposed-field-circle-topics-tid').prop('disabled'))
        {
          $('#edit-exposed-field-circle-topics-tid').removeAttr('disabled');
        }
        else {
          $('#edit-exposed-field-circle-topics-tid').attr('disabled', 'true');
        }
      });

    }
  };
})(jQuery);

