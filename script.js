var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us",{
  opacity:0,
  duration:1,
  ease: "power3.out",
  y: 100,
  scrollTrigger:{
    trigger:'#about-us',
    scroller:"body",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
    scrub: 3,

  }
})

gsap.from("#card-container",{
  opacity:0,
  duration:1,
  scale:2,
  ease: "power3.out",
  stager:3,
  y: 100,
  scrollTrigger:{
    trigger:'#card-container',
    scroller:"body",
    // markers:true,
    start: "top 75%",
    end: "center 85%",
    scrub: 3,

  }
})

gsap.from("#green-div",{
  opacity:0,
  duration:1,
  // scale:1.5,
  ease: "power3.out",
  // stager:3,
  y: 100,
  scrollTrigger:{
    trigger:'#green-div',
    scroller:"body",
    // markers:true,
    start: "top 75%",
    end: "top 85%",
    scrub: 3,

  }
})

gsap.to("#left-quote",{
  left:20+"%",
  top:5+"%",
  duration:1,
  scrollTrigger:{
    trigger:"#left-quote",
    scroller:"body",
    // markers:true,
    start: "top 90%",
    end: "center 85%",
    scrub: 3,
   }
})

gsap.to("#right-quote",{
  delay:1,
  right:20+"%",
  bottom:5+"%",
  duration:1,
  scrollTrigger:{
    trigger:"#left-quote",
    scroller:"body",
    // markers:true,
    start: "top 90%",
    end: "center 85%",
    scrub: 3,
   }
})
