$(function() {
//footer copyright
      var footerCopy = '<p class="text-center">%data%</p>';

      var owner = myModules.footerModule.showCopyowner("CuriouzMind Tech");
      var copy = myModules.footerModule.showCopyright();

      var fullCopyright = copy + owner;

      var formattedCopy = footerCopy.replace("%data%", fullCopyright);

      $('#footer').prepend(formattedCopy);

      //footer socials
      var socialsLink = '<li><a href="%url%">%data%</a></li>';

      var socialText = myModules.footerModule.showSocials(function(text) {
          return socialsLink.replace("%data%", text);
      });

      $('#footer ul').append(socialText("Facebook"));
      $('#footer ul').append(socialText("Twitter"));
      $('#footer ul').append(socialText("Instagram"));

      //add new random method to footer module
      var person1 = new Person("App");

      var person = '<h1>%data%</h1>';
      var personaction = person1.walk();

      var personprint = person.replace("%data%", personaction);

      $(".content section").append(personprint);
});