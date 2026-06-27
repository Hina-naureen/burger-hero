// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function(){
  document.getElementById("navLinks").classList.toggle("open");
});

// GSAP animations
gsap.from(".navbar", { y:-60, opacity:0, duration:0.8 });

gsap.from([".tag",".title",".desc",".buttons"], {
  y:40, opacity:0, duration:0.8, stagger:0.2, delay:0.5
});

gsap.from(".image img", { x:80, opacity:0, duration:1, delay:0.4 });
