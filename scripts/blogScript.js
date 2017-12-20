var openArticle = "";
var articleContent = "";

/* ----- Menu Line Animation --- */
function addLine(target) {
  setLineWidth(target, "75%");
  return;
}

function remLine(target) {
  setLineWidth(target, "0%");
  return;
}

function setLineWidth(target, width) {
  var overline = document.getElementById(target + '-o');
  overline.style.width = width;
  var underline = document.getElementById(target + '-u');
  underline.style.width = width;
  return;
}
