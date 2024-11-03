function navbar() {
  //  the classList property on the tag is
  //  allow as to toggle a class if it exist
  //  will remove it and if does not exist it
  //  will put it on the tag.
  const gridExpanded = document.querySelector(".outer-grid");
  gridExpanded.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
