function divland() {
  let div_count = parseInt(document.getElementById("div_count").value);

  for (x = 1; x <= div_count; x++) {
    var boardik = document.createElement("div");
    boardik.innerHTML = x;
    boardik.className = "blah";
    boardik.setAttribute("onclick", "none(this)");
    document.getElementById("board").appendChild(boardik);
  }
}

const music = document.getElementById('WAK');

function none(e){
  music.play();
  e.classList.add("div_border");

  if (blah.class == "a1") {
    music.play()
  }
  else {
    music.pause()
    music.play()
  }
}




