$(document).ready(function () {
  $("select").change(function() {
    $("table").hide();
    $("p#message").hide();
    $("p#no_service").hide();

    gender = $("select[name='gender']").val();
    service = $("select[name='service']").val();

    if(gender == 0 || service == 0) {
      $("p#message").show();
    } else if(gender == 1) {
      $("table#" + service).show();
    } else if(gender == 2) {
      $("table#" + (service*1+9)).show();
    } else if(gender == 3) {
      if(service >=1 && service <= 3) {
        $("table#19").show();
      } else if(service >= 4 && service <= 6) {
        $("p#no_service").show();
      } else if(service > 6) {
        $("table#" + (service*1+13)).show();
      }
    };

  });
});
