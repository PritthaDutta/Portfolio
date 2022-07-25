const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let isVisible=false;

hamburger.addEventListener("click",() =>{
    const navItemsContainer = document.getElementById("nav-menu");
    if(isVisible){
        navItemsContainer.style.display = "none";
        isVisible=false;
    }
    else{
        navItemsContainer.style.display = "flex";
        isVisible=true;
    }

})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener('resize',() =>
{
    const navItemsContainer = document.getElementById("nav-menu"); 
    if(window.innerWidth > 768)
    {  
        navItemsContainer.style.display = "flex";
    }
    else{
        navItemsContainer.style.display = "none";
    }
})

const scr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
scr.reveal('.home-section',{}); 
scr.reveal('.btn',{delay: 200}); 
scr.reveal('.profile',{delay: 400}); 
scr.reveal('.heading',{delay: 200})
scr.reveal('.social-icons',{ interval: 200}); 

/*SCROLL ABOUT ME*/
scr.reveal('.image',{}); 
scr.reveal('.head',{delay: 400});  
scr.reveal('.content',{delay: 400});

/*SCROLL SKILLS*/
scr.reveal('.heading',{delay: 200});
scr.reveal('.container',{delay: 200});
scr.reveal('.row',{delay: 400}); 
scr.reveal('.skill-card',{delay: 400});

/*SCROLL EDUCATION*/
scr.reveal('.heading',{ delay: 200}); 
scr.reveal('.timeline',{delay: 400}); 
scr.reveal('.container right',{delay: 400}); 
scr.reveal('.container left',{delay: 400}); 
scr.reveal('.container right',{delay: 400});

/*SCROLL PROJECTS*/
scr.reveal('.heading',{ delay: 200});
scr.reveal('.box-container',{delay: 400}); 
scr.reveal('.work',{delay: 400}); 
scr.reveal('.box',{delay: 400}); 
scr.reveal('.pic',{delay: 400}); 
scr.reveal('.desc',{delay: 400}); 
scr.reveal('.btn',{delay: 400});
scr.reveal('.viewall',{delay: 400});

/*SCROLL CONTACT*/
scr.reveal('.contact',{interval: 200}); 
scr.reveal('.container',{delay: 400});
scr.reveal('.content',{delay: 400});
scr.reveal('.image-box',{delay: 400});
scr.reveal('.form-group',{delay: 400});
scr.reveal('.form-field',{delay: 400});
scr.reveal('.message',{delay: 400});
scr.reveal('.button-area',{delay: 400});