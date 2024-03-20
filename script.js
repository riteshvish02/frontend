function inet(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

inet();

var tl =  gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 ",
      scroller:"#main",
      // markers:true,
      start:"top top",
      end:"end -60%",
      scrub:2,
      pin:true,
      snap:true,
    }
})
tl
.to("#page1 #im1",{
  rotate:0,
  x:180,
  duartion:0.3,
},"anim")
.to("#page1 #im2",{
  rotate:0,
  x:-180,
  duartion:0.3,
},"anim")
.to("#page1 #div h2",{
  y:-800,
  stagger:0.08,
  opacity:"0",
  duartion:2,
},"anim")

.to("#page1 #im2,#im1,#im3",{
  y:-1080,
  delay:0.5,
  duartion:0.9,
},"anim")



.from("#page1 #im4,#im5,#im6",{
  y:1080,
  delay:1,
},"anim")
.from("#page1 .div2",{
  y:1080,
  delay:0.8,
  delay:1,

},"anim")
.from("#page1 .div2 h2",{
  y:800,
  stagger:0.1,
  opacity:"0",
  duartion:2,
  delay:2,
},"anim")

.from("#page1 #im4",{
  rotate:0,
  delay:2.5,

  x:180
},"anim")
.from("#page1 #im6",{
  rotate:0,
  x:-180,
  delay:2.5,

},"anim")
