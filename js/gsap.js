

gsap.from('footer .mountain', {
  scrollTrigger: {
      trigger: '.mountain',
      start: 'top center+=50%',
      end: "bottom bottom",
  },
  duration: 0.8,
  opacity: 0,
  y: 80
})




gsap.utils.toArray('footer ').forEach(section => {
    const elems = section.querySelectorAll('.peak-info svg g.peak');
    
    // Set things up
    gsap.set(elems, { y: -50, opacity: 0 });
    
    ScrollTrigger.create({
      trigger: section,
      start: 'top 90%',
      onEnter: () => gsap.to(elems, {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        delay: 0.8,
        ease: 'power3.out',
      }),
    });
  })