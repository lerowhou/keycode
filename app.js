var kc = document.getElementById('keyCode');
var kn = document.getElementById('kn');
var ke = document.getElementById('ke');
document.addEventListener('keydown', function(event) {
  kc.innerHTML = event.keyCode;
  kn.innerHTML = event.key;
  ke.innerHTML = event.code;
});
