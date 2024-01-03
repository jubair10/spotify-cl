
document.querySelector(".card").addEventListener("mouseover", () => {
  gsap.to(".card  .play", {
    duration: 0.3,
    scale: 1.2,
    bottom: 105,
    opacity: 1,
    zIndex: 1000,
  });
});
document.querySelector(".card").addEventListener("mouseleave", () => {
  gsap.to(".card  .play", {
    duration: 0.3,
    bottom: 90,
    opacity: 0,
    zIndex: -10,
    scale: 1,
  });
});
let cards = document.querySelectorAll(".card");
cards.forEach(element => {
  
  
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.2,
  debug: true,
});
Shery.makeMagnet(".btn" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
  debug: true,
});
