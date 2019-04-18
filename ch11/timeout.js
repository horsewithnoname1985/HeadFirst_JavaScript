function setTimer(doneMessage, n) {
  setTimeout(function() {
    alert(doneMessage);
  }, n);
  doneMessage = "Ouch!";
}
setTimer("Cookies are done!", 1000);
