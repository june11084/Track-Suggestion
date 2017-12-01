 $(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var ruby = 0;
    var php = 0;                //initializing all the variables with int
    var java = 0;
    var css = 0;
    var c = 0;

    // all the different radio button sections
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

    var work = $("input:radio[name=work]:checked").val();
    if (work === "ruby") {
      ruby += 1;
    } else if (work === "php") {
      php += 1;
    } else if (work === "java") {
      java += 1;
    } else if (work === "css") {
      css += 1;
    } else if (work === "c") {
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

    var checked = $("input:radio[name=level]:checked").val();
    if (checked === "ruby") {
      ruby += 1;
    } else if (checked === "php") {
      php += 1;
    } else if (checked === "java") {
      java += 1;
    } else if (checked === "css") {
      css += 1;
    } else if (checked === "c") {
      c += 1;
    }

    var favorite = $("input:radio[name=favorite]:checked").val();
    if (favorite === "ruby") {
      ruby += 1;
    } else if (favorite === "php") {
      php += 1;
    } else if (favorite === "java") {
      java += 1;
    } else if (favorite === "css") {
      css += 1;
    } else if (favorite === "c") {
      c += 1;
    }

    $("#resultNumber").text("You have selected: Ruby:" + ruby + "," + "php:" + php + "," + "java:" + java + "," + "css:" +css + "," + "c#:" + c);

    if(ruby === php === java === css === c){
      $("#result").text(name + ", you are compatible with any track");   //if all options are "not" selected the equal amount of times
    } else { // all choices are selected equal amout of times, probably"
      var result = Math.max(ruby,php,java,css,c); //returning the highest variable, then set them to strings.
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
    }
  });
});
