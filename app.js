let slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

// FETCH....

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const imageContainer = document.getElementById("imageContainer");
  let startIndex = 0;

  loadMoreBtn.addEventListener("click", function () {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const slicedData = data.slice(startIndex, startIndex + 3);
        startIndex += 3;
        displayImages(slicedData);
      });
  });

  function displayImages(images) {
    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.image;
      imageContainer.appendChild(imgElement);
    });
  }

  loadMoreBtn.click();
});

// POPUP IMAGES

document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

function navSlide() {
  let nav = document.querySelector(".navbar");
  let menu = document.querySelector(".nav-links");
  let burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}

navSlide();
