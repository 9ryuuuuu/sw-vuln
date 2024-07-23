<script>
window.addEventListener('load', function() {
var sw = "/uploaded/ws_js.js";
navigator.serviceWorker.register(sw, {scope: '/'})
  .then(function(registration) {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.open("GET", "http://localhost:3001/SW/success", true);
    xhttp2.send();
  }, function (err) {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.open("GET", "http://localhost:3001/SW/error", true);
    xhttp2.send();
  });
});
</script>
