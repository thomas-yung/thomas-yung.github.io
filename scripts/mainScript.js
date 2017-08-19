// Position of entry on sectionStatus corresponds to sections
var sections      = ["work", "blog", "music", "contact"];
var openSection = null;

// Return the index of the section name
function secToNum(target) {
  for (i = 0; i < sections.length; i++) {
    if (target === sections[i]) {
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
  if (target !== openSection) {
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
  if (target === openSection) {
    close(target); 
    openSection = null;
  } else {
    growSection(target);
  }
}

function close(target) {
  document.getElementById(target+"wrapper").style.maxHeight = "0px";
  if (target === "music") {
    document.getElementsByTagName("body")[0].classList.remove("onMusic");
  }
  closeSubSections(target);
  remLine(target);
  return;
}

function closeSubSections(target) {
  switch (target) {
    case "work":
      document.getElementById("educationcontent").classList.remove("grown");
      document.getElementById("employmentcontent").classList.remove("grown");
      return;
    default:
      return;
  }
}

function growSection(target) {
  // Close any OTHERS
  for (i = 0; i < sections.length; i++) {
    if ((sections[i] !== target) && (sections[i] !== "blog")) {
      close(sections[i]);
    }
  }
  // Grow intended
  if (target === "music") {
    document.getElementsByTagName("body")[0].classList.add("onMusic");
  }
  document.getElementById(target+"wrapper").style.maxHeight = "1000px";
  openSection = target;
  addLine(target);
}


/* ----- General Open/Close Animation --- */
function toggleGen(section) {
  document.getElementById(section).classList.toggle("grown");
}
