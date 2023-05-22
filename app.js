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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
