const title = document.querySelector(".hello");
title.innerText = "Click Me";

function handleTitleClick() {
  if (title.style.color == "blue") {
    title.style.color = "black";
  } else {
    title.style.color = "blue";
  }
}
function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("Copied");
}
function handleWindowOffline() {
  alert("SOS, No WIFI");
}
function handleWindowOnline() {
  alert("There shall be WIFI");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
