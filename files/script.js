let linkButton = document.getElementById("links-button");
let aboutButton = document.getElementById("about-button");

let linksPanel = document.getElementsByClassName("links")[0];
let aboutPanel = document.getElementsByClassName("about")[0];

const showAbout = () => {
  linksPanel.style.display = "none";
  aboutPanel.style.display = "block";
};
const showLinks = () => {
  linksPanel.style.display = "block";
  aboutPanel.style.display = "none";
};
linkButton.addEventListener("click", showLinks);
aboutButton.addEventListener("click", showAbout);
