let linkButton = document.getElementById("links-button");
let aboutButton = document.getElementById("about-button");

let linksPanel = document.getElementsByClassName("links")[0];
let aboutPanel = document.getElementsByClassName("about")[0];

const showAbout = () => {
  linksPanel.style.display = "none";
  linkButton.style.color = "#C8C8C8";
  aboutPanel.style.display = "block";
  aboutButton.style.color = "#FF00BB";
};
const showLinks = () => {
  linksPanel.style.display = "block";
  linkButton.style.color = "#FF00BB";
  aboutPanel.style.display = "none";
  aboutButton.style.color = "#C8C8C8";
};
linkButton.addEventListener("click", showLinks);
aboutButton.addEventListener("click", showAbout);
