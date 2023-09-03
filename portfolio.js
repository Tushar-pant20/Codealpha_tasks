

window.onscroll = () =>{
   
    let header = document.getElementById("header");

    header.classList.toggle("sticky", window.scrollY > 100); 
};

  // Get all the scroll-to links
const scrollToLinks = document.querySelectorAll('a[href^="#"]');

  // Attach click event listeners to the links
scrollToLinks.forEach(link => {
    
      link.addEventListener('click', e => {
      e.preventDefault(); // Prevent default anchor behavior

      // Get the target element by its ID from the href attribute
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
        
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });

    
    });
});
 


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let crossIcon = document.querySelector('#cross-icon');

menuIcon.onclick = ()=>{
  navbar.classList.toggle('active');
}

crossIcon.onclick = ()=>{
  navbar.classList.toggle('active');
}


navbar.onclick = ()=>{
  navbar.classList.remove("active");
  console.log("hello");
}