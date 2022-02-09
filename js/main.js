var x = document.getElementById("uptime");
var i = 0;
function changeUptime() {
    var h = Math.floor(i / 3600).toString().padStart(2,'0'),
    m = Math.floor(i % 3600 / 60).toString().padStart(2,'0'),
    s = Math.floor(i % 60).toString().padStart(2,'0');
    i++;
    x.textContent = "Hours: " + h + " ,Minutes: " + m + " ,Seconds: " + s;
}
setInterval(changeUptime, 1000)
