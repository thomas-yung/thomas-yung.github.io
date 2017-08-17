articles      = ["website", "tron"];
articleStatus = [false, false];


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
  if (!articleStatus[secToNum(target)]) {
    setLineWidth(target, "0%")
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
function toggleSection(target) {
  articleStatus[secToNum(target)] ? close(target) : growSection(target);
}

function hide(target) {
  document.getElementById(target+"wrapper").classList.remove("activecontent");
  articleStatus[secToNum(target)] = false;
  remLine(target);
  return;
}

function show(target) {
  // Close any OTHERS
  for (i = 0; i < articles.length; i++) {
    if (articles[i] !== target) {
      close(articles[i]);
    }
  }
  // Grow intended
  document.getElementById(target+"wrapper").classList.add("activecontent");
  articleStatus[secToNum(target)] = true;
}


/* ----- General Open/Close Animation --- */
function toggleGen(section) {
  document.getElementById(section).classList.toggle("show");
}
