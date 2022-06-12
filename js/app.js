const steps = document.querySelectorAll(".step");
const options = {
  rootMargin: "0px",
  threshold: 0.1,
};

let callback = (e) => {
  e.forEach((v) => {
    if (v.isIntersecting) {
      console.log(e);
      v.target.classList.add("active-step");
    } else {
      v.target.classList.remove("active-step");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

steps.forEach((v, i) => {
  observer.observe(v);
});

window.onwheel = (e) => {
  let activity = true;
  if (e.deltaY >= 0) {
    // Scrolling Down with mouse
    console.log("Scroll Down");
    let curretStep = document.querySelector(".active-step");
    let currentIndex = curretStep.getAttribute("scroll-step");
    document
      .querySelector(
        '.step[scroll-step="' + (parseInt(currentIndex) + 1) + '"]'
      )
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else {
    // Scrolling Up with mouse
    console.log("Scroll Down");
    let curretStep = document.querySelector(".active-step");
    let currentIndex = curretStep.getAttribute("scroll-step");
    document
      .querySelector(
        '.step[scroll-step="' + (parseInt(currentIndex) - 1) + '"]'
      )
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
};
