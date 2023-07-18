// Fungsi untuk memperbarui gambar latar belakang setiap beberapa detik
function updateBackground() {
  var sampul = document.querySelector('.sampul');
  var currentBackground = sampul.style.backgroundImage;
  var newBackground;

  if (currentBackground.includes('sampul1')) {
    newBackground = 'url("assets/img/sampul2.jpeg")';
  } else if (currentBackground.includes('sampul2')) {
    newBackground = 'url("assets/img/sampul3.jpeg")';
  } else if (currentBackground.includes('sampul3')) {
    newBackground = 'url("assets/img/sampul1.jpeg")';
  }

  sampul.style.backgroundImage = newBackground;
}

// Panggil fungsi updateBackground setiap 10 detik
setInterval(updateBackground, 10000);



// fungsi show gambar di galeri saat diklik
function showImagePopup(imageUrl) {
  var imagePopup = document.getElementById('imagePopup');
  var popupImage = document.getElementById('popupImage');

  popupImage.src = imageUrl;
  imagePopup.style.display = 'block';
}

function hideImagePopup() {
  var imagePopup = document.getElementById('imagePopup');
  imagePopup.style.display = 'none';
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}
