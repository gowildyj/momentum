const hi = document.querySelector("div.hello:first-child h1");
hi.innerText = "Click Me";

function handleTitleClick() {
  const clickedClass = "clicked";
  if (hi.className === clickedClass) {
    hi.className = "";
  } else {
    hi.className = clickedClass;
  }
}

hi.addEventListener("click", handleTitleClick);
