
gsap.registerPlugin(ScrollTrigger);

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
        overwrite: 'auto'
      }),
      // onLeaveBack: () => gsap.to(elems, {
      //   y: -50,
      //   opacity: 0,
      //   duration: 1,
      //   stagger: 0.2,
      //   delay: 0.3,
      //   ease: 'power3.out',
      //   overwrite: 'auto'
      // })
    });
  })


// The mouseover event triggers when the mouse pointer enters the div element, 
// and its child elements. The mouseenter event is only triggered when the mouse 
// pointer enters the div element.

let picContainers = document.querySelectorAll("footer .peak-info g.peak");

picContainers.forEach(container => {
  container.addEventListener('mouseover' , ()=> {
    // $("g.info").classList.toggle('skylight');
    let info = container.querySelector('g.info')
    var tl = new TimelineMax();
    tl.to(info, 0.3, {
      // class: '+=active',
      scale: 1.1
    });
  })

  container.addEventListener('mouseout' , ()=> {
    let info = container.querySelector('g.info')
    var tl = new TimelineMax();
    tl.to(info, 0.3, {
      // class: '+=active',
      scale: 1
    });
  })
})

// $("footer").hover(function(){
//   $(".peak-info").toggleClass('skylight');
// });
