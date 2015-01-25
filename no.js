// Uncaught errors are nasty, and are a security threat, granted!
window.onerror = function() { return true; };

// Alerts are annoying, and should be eradicated.
alert = undefined;

// Prevent unwanted information disclosure, due to lazy programmers.
// Make sure to uncomment the following line, when going live.
// console = undefined;

// Utility function to make potentially dangerous objects more secure.
function lobotomize(obj) {
  Object.getOwnPropertyNames(obj).forEach(
    function(val, idx, array) {
      obj.__defineGetter__(val, function() { return undefined; });
      obj.__defineSetter__(val, function() { });
    }
  );
}

// Sanitize the DOM, which is the root of all evil.
lobotomize(document);
// Disable so-called features, which are doing more bad than good.
document.getElementById = undefined;
document.getElementsByClassName = undefined;
document.getElementsByName = undefined;
document.getElementsByTagName = undefined;
// There's still a lot of them to annihilate...
// Join our task force, and contribute!
