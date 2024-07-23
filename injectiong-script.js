// jsonpを利用する場合のスクリプト。なぜかうまく動かない。consoleにカッコが足りないとエラーが出るが、、、
<script>
window.addEventListener('load', function() {
var sw = "/jsonp?callback=onfetch=function(e){ e.respondWith(caches.match(e.request).then(function(response){ fetch('http://localhost:3001/fetch_url/' + e.request.url) }))}//";
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