const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  event.preventDefault();
  event.target.classList.add("hovered");
}

function dragenter(event) {
  event.target.classList.add("enter");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.append(item);
  console.log(event.target);

  if (event.target.classList.contains("start-holder")) {
    document.querySelector(".start").classList.remove("free__header");
    document.querySelector(".progress").classList.add("free__header");
    document.querySelector(".done").classList.add("free__header");
  }
  if (event.target.classList.contains("progress-holder")) {
    document.querySelector(".progress").classList.remove("free__header");
    document.querySelector(".start").classList.add("free__header");
    document.querySelector(".done").classList.add("free__header");
  }
  if (event.target.classList.contains("done-holder")) {
    document.querySelector(".progress").classList.add("free__header");
    document.querySelector(".start").classList.add("free__header");
    document.querySelector(".done").classList.remove("free__header");
  }
}
