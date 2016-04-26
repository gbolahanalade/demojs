/**
 * Created by Developer on 4/24/2016.
 */

//declaring my main namespace
var myModules = myModules || {};

//declaring footer module
myModules.footerModule = (function() {
        var createCopyright = function(copyright) {
            var copy = '\xA9';
            return  copy + copyright + ", ";
        };
        var createCopyowner = function(copyowner) {
            return copyowner;
        };
        var createSocials = function(socials) {
            return socials;
        };
        return {
            showCopyright: function(copyright) {
                var d = new Date();
                var currentYear = d.getFullYear();
                return createCopyright(currentYear);
            },
            showCopyowner: function(copyowner) {
                return createCopyowner(copyowner);
            },
            showSocials: function(socials) {
                return createSocials(socials);
            }
        }
    }
)();

//declaring header module
myModules.headerModule = (function () {

})();


//random module
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    return this.name + ", " + "is walking";
}
