var add = function(number1, number2) {
  return number1 + number2;
};

$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var ruby = 0;
    var php = 0;
    var java = 0;
    var css = 0;
    var c = 0;

    var application = $("input:radio[name=application]:checked").val();
    if (application === "ruby") {
      ruby += 1;
    } else if (application === "php") {
      php += 1;
    } else if (application === "java") {
      java += 1;
    } else if (application === "css") {
      css += 1;
    } else if (application === "c") {
      c += 1;
    }

    var company = $("input:radio[name=company]:checked").val();
    if (company === "ruby") {
      ruby += 1;
    } else if (company === "php") {
      php += 1;
    } else if (company === "java") {
      java += 1;
    } else if (company === "css") {
      css += 1;
    } else if (company === "c") {
      c += 1;
    }

    if(ruby != php != java != css != c){    //if all options are "not" selected the equal amount of times
      var result = Math.max(ruby,php,java,css,c); //this is the only  way I could think of without using array
      if(result === ruby){
        ruby = "Ruby/Rails";
        $("#result").text(name + ", you are most compatible with: " + ruby);
      }
      if(result === php){
        php = "PHP/Drupal";
        $("#result").text(name + ", you are most compatible with: " + php);
      }
      if(result === java){
        java = "Java/Android";
        $("#result").text(name + ", you are most compatible with: " + java);
      }
      if(result === css){
        css = "CSS/Design";
        $("#result").text(name + ", you are most compatible with: " + css);
      }
      if(result === c){
        c = "C#/.NET";
        $("#result").text(name + ", you are most compatible with: " + c);
      }
    } else { // all choices are selected equal amout of times, probably"
        $("#result").text(name + ", you are compatible with any track");
    }
  });
});
