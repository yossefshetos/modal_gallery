let myImg = document.querySelectorAll(".modal-images img"),
  modalContent = document.getElementById("modal-content"),
  modalContentImg = document.getElementById("modal-img"),
  closeIcon = document.getElementById("close");

for (let i = 0; i < myImg.length; i++) {
  myImg[i].onclick = function () {
    modalContent.style.display = "block";

    modalContentImg.src = this.src;
    document.body.style.background = "#fdcb12";

    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    nextBtn.onclick = function () {
      if (i < myImg.length - 1) {
        i++;
        modalContentImg.src = myImg[i].src;
      }
    };

    prevBtn.onclick = function () {
      if (i > 0) {
        i--;
        modalContentImg.src = myImg[i].src;
      }
    };
  };
}

closeIcon.onclick = function () {
  modalContent.style.display = "none";
  document.body.style.background = "none";
};

document.onkeydown = function (ev) {
  if (ev.keyCode == "27") {
    modalContent.style.display = "none";
    document.body.style.background = "none";
  }
};
