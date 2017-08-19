var articles = ["website", "tron"];
var openArticle = null;

// Return the index of the section name
function secToNum(target) {
  for (i = 0; i < articles.length; i++) {
    if (target === articles[i]) {
      return i;
    }
  }
  alert("@secToNum: Defaulting to 0")
  return 0;
}

/* ----- Menu Line Animation --- */
function addLine(target) {
  setLineWidth(target, "75%");
  return;
}

function remLine(target) {
  if (target !== openArticle) {
    setLineWidth(target, "0%");
  }
  return;
}

function setLineWidth(target, width) {
  var overline = document.getElementById(target + '-o');
  overline.style.width = width;
  var underline = document.getElementById(target + '-u');
  underline.style.width = width;
  return;
}

/* ----- Section Open/Close Animation --- */
function cover() {
  document.getElementById("cover").style.height = "100%";
  return;
}

function uncover() {
  document.getElementById("cover").style.height = "0%";
  return;
}

function hideAll() {
  for (i = 0; i < articles.length; i++) {
    var articleCL = document.getElementById(articles[i]+"content").classList;
    articleCL.add("hiddenarticle");
    articleCL.remove("activearticle");
    remLine(articles[i]);
  }
  return;
}

function show(target) {
  // Bring up cover
  cover();
  // Hide everything (after 1 second)
  setTimeout(hideAll, 1000);
  // Show intended (after 1 second)
  setTimeout(function temp() {
    var targetCL = document.getElementById(target+"content").classList;
    targetCL.add("activecontent");
    targetCL.remove("hiddenarticle");
  }, 1000);
  openArticle = target;
  setTimeout(uncover, 1000);
}


/* ----- General Open/Close Animation --- */
function toggleGen(section) {
  document.getElementById(section).classList.toggle("show");
}
