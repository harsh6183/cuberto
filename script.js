Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%", // scroll through each .fleftelm
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
let images = document.querySelectorAll(".images img");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveImage(index),
    onEnterBack: () => setActiveImage(index),
  });
});

function setActiveImage(index) {
  if (!images[index]) return;
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

