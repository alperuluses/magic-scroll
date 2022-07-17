const steps = document.querySelectorAll(".step");
const options = {
  rootMargin: "0px",
  threshold: 0.1,
};

let callback = (e) => {
  for (const entry of e) {
    console.log(entry);
    entry.target.classList.toggle("active-step", entry.isIntersecting);
    entry.target.children[0].classList.toggle(
      "animate__backInRight",
      entry.isIntersecting
    );
  }
};

const observer = new IntersectionObserver(callback, options);

steps.forEach((v, i) => {
  observer.observe(v);
});
function nextStep(direction) {
  let curretStep = document.querySelector(".active-step");
  let currentIndex = parseInt(curretStep.getAttribute("scroll-step"));
  let nextElement = document.querySelector(
    '.step[scroll-step="' +
      (direction == "down" ? currentIndex + 1 : currentIndex - 1) +
      '"]'
  );
  if (nextElement) {
    nextElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}

let shouldWait = false;
window.onwheel = (e) => {
  if (e.deltaY >= 0) {
    // Scrolling Down 
    console.log("Scroll Down");

    if (shouldWait) {
      console.log("waiting....");
    } else {
      shouldWait = true;
      nextStep("down");
      setTimeout(() => {
        shouldWait = false;
      }, 1000);
    }
  } else {
    // Scrolling Up 
    console.log("Scroll Up");
    if (shouldWait) {
      console.log("waiting2....");
    } else {
      shouldWait = true;
      nextStep("up");
      setTimeout(() => {
        shouldWait = false;
      }, 1000);
    }

  }
};
