// Start
document.querySelector(".start").onclick = function() {
  document.querySelector(".video-box").innerText = "Connecting...";
}

// Next
document.querySelector(".next").onclick = function() {
  document.querySelector(".video-box").innerText = "New User Connected";
}

// Stop
document.querySelector(".stop").onclick = function() {
  document.querySelector(".video-box").innerText = "Disconnected";
}