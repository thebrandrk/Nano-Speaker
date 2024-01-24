var tl = gsap.timeline();

tl.to("#ver-line", {
    height: "30px",  // Set the target height
    duration: 0.8,      // Animation duration in seconds
    ease: "power2.inOut", // Easing function
});

tl.to("#lft-txt>h1", {
  x: -79,
  duration: 0.7
});
tl.to("#rght-txt>h1", {
  x: 90,
  duration: 1
});
tl.to("#lft-txt>h1", {
  y: 79,
  duration: 0.7
},'loader-text');

tl.to("#rght-txt>h1", {
  y: 90,
  duration: 1
},'loader-text');

tl.to("#ver-line", {
    y:10,
    opacity:0
},'loader-text');

tl.to("#loader", {
    // opacity: 0, 
    y: -800, 
    duration: 2
  });
tl.to("#circle", {
    // opacity: 0, 
    rotation:180, 
    duration: 1
  });
gsap.to("#main-img",{
  scale: 0.9,
  delay:4
}) 

var tl2 = gsap.timeline({scrollTrigger:{
  trigger: "#section3",
  start: "60% 95%",
  end: "70% 50%",
  scrub: true,
  // markers: true,
}})

tl2.to("#base-img",{
  y:100
})

var tl4 = gsap.timeline({scrollTrigger:{
  trigger: "#section2",
  start: "50% 95%",
  end: "70% 70%",
  scrub: true,
  // markers: true,      
  onEnter: callScroll2,
}});

tl4.to("#word p",{
  opacity:1,
  
})

var tl3 = gsap.timeline({scrollTrigger:{
  trigger: "#footer",
  start: "31% 90%",
  end: "70% 90%",
  scrub: true,
  // markers: true,
  onEnter: callScroll,
}});

tl3.to("#nova-text h1",{
  opacity:1,
  visibility: "visible"
})

var tl5 = gsap.timeline({scrollTrigger:{
  trigger: "#section4",
  start: "0% 10%",
  end: "20% 30%",
  scrub: true,
  // markers: true,
  onEnter: callScroll3,
}});

tl5.to("#section4 .main-text h1",{
  opacity:1,
  visibility: "visible"
})
var tl6 = gsap.timeline({scrollTrigger:{
  trigger: "#section5",
  start: "10% 40%",
  end: "20% 30%",
  scrub: true,
  // markers: true,
  onEnter: callScroll5,
}});

tl6.to("#section5 #word p",{
  opacity:1,
  visibility: "visible"
})

var tl7 = gsap.timeline({scrollTrigger:{
  trigger: "#section5",
  start: "20% 90%",
  end: "50% 80%",
  scrub: true,
  markers: true,
  onEnter: callScroll4,
}});

tl7.to("#section5 .feature-text h1",{
  opacity:1,
  visibility: "visible"
})


function callScroll5() {
  $("#section5 #word p").textillate({initialDelay: 10, in: { effect: 'fadeInUp',delayScale:2, delay: 3 }});
}
function callScroll4() {
  $("#section5 .feature-text h1").textillate({initialDelay: 10, in: { effect: 'fadeInUp',delayScale:2, delay: 3 }});
}
function callScroll3() {
  $('#section4 .main-text h1').textillate({initialDelay: 10, in: { effect: 'fadeInUp',delayScale:2, delay: 3 }});
}
function callScroll2() {
  $('#section2 #word p').textillate({initialDelay: 10, in: { effect: 'fadeInUp',delayScale:2, delay: 3 }});
}
function callScroll() {
  $('#nova-text h1').textillate({initialDelay: 100, in: { effect: 'fadeInUp',delayScale:19, delay: 5 }});
}
$('#firsth1').textillate({initialDelay: 2000, in: { effect: 'fadeInUp',delayScale:1, delay: 70 } });