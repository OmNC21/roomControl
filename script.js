document.getElementById('lightSwitch').addEventListener('change', function() {
  var status = this.checked ? 1 : 0;
  updateBlynkData(0, status);
});

document.getElementById('fanSwitch').addEventListener('change', function() {
  var status = this.checked ? 1 : 0;
  updateBlynkData(1, status);
});

function updateBlynkData(pin, value) {
  var url = 'https://blr1.blynk.cloud/external/api/update';
  var token = 'f-SNIlN65mMZVuu2FWPq7fqweT-fX-fq';
  var params = 'token=' + token + '&V' + pin + '=' + value;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + '?' + params, true);
  xhr.send();
}
