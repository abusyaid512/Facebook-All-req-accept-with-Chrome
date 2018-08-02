Facebook All req accept with Chrome

Link>> https://www.facebook.com/reqs.php

Console
Past Code: 

var confirmBtns = document.getElementsByTagName('button');
for (var i = 0; i < confirmBtns.length; i++) {
if (confirmBtns[i].innerHTML == "Confirm") {
confirmBtns[i].click();
}
}