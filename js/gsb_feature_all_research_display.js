(function ($) {
  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {

      var all_topics = Drupal.settings.gsb_feature_all_research_display.topics;

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
        $(".topic-label").hide();
        $('.hide_topic').hide();
        $('div.form-item-exposed-field-circle-topics-tid').hide();
      }
      else {
        var current_options = [];
        var flag_on = false;
        var current_center = $('#edit-exposed-field-centers-research-programs-tid option:selected').text();
        for(i = 0; i < all_topics.length; i++){
          if (flag_on) {
            if ((all_topics[i].value).substring(0, 1) == '-') {
              current_options.push({key: all_topics[i].key,  value: all_topics[i].value.substring(1)});
            }
            else {
              break;
            }
          }
          if (all_topics[i].value == current_center) {
            flag_on = true;
          }
        }
        $('#edit-exposed-field-circle-topics-tid').empty();
        for(i = 0; i < current_options.length; i++){
          $('#edit-exposed-field-circle-topics-tid')
            .append($("<option></option>")
              .attr("value",current_options[i].key)
              .text(current_options[i].value));
        }
      }
      $('div.form-item-exposed-field-centers-research-programs-tid :input').change(function (e) {
        if ($('#edit-exposed-field-centers-research-programs-tid').val() == 'All') {
          $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor').hide();
          $(".topic-label").hide();
          $('.hide_topic').hide();
          $('div.form-item-exposed-field-circle-topics-tid').hide();
        }
        else {
          var options = [];
          var filter_on = false;
          var center_id = $('#edit-exposed-field-centers-research-programs-tid option:selected').val();
          var center = $('#edit-exposed-field-centers-research-programs-tid option:selected').text();
          for(i = 0; i < all_topics.length; i++){
            if (filter_on) {
              if ((all_topics[i].value).substring(0, 1) == '-') {
                options.push({key: all_topics[i].key,  value: all_topics[i].value.substring(1)});
              }
              else {
                break;
              }
            }
            if (all_topics[i].value == center) {
              filter_on = true;
            }
          }
          $('#edit-exposed-field-circle-topics-tid').empty();
          for(i = 0; i < options.length; i++){
            $('#edit-exposed-field-circle-topics-tid')
              .append($("<option></option>")
                .attr("value",options[i].key)
                .text(options[i].value));
          }
          $('div.form-item-exposed-filter-field-circle-topics-tid-expose-to-visitor').show();
          $(".topic-label").show();
          if ($('#edit-exposed-filter-field-circle-topics-tid-expose-to-visitor').prop('checked') ) {
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
        if ($('#edit-exposed-filter-field-circle-topics-tid-expose-to-visitor').prop('checked')) {
          $('.hide_topic').hide();
          $('div.form-item-exposed-field-circle-topics-tid').hide();
        }else {
          $('.hide_topic').show();
          $('div.form-item-exposed-field-circle-topics-tid').show();
        }
      });
    }
  };
})(jQuery);

