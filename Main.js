//JavaScript 

//global variables declares 
const btn = document.getElementById('btn');
let headerList = document.querySelector('.header_list');
const menu = document.getElementById('menu');
const navLink = document.querySelectorAll('.navLi');


//nav box toggle function when clicked

btn.addEventListener('click',()=>{
    headerList.classList.toggle('active');
});

//function for active li and remove navbox
function activeate(){
navLink.forEach(n =>n.classList.remove('activeLink'));
this.classList.add('activeLink');

//remove navbox when li clicked
menu.classList.remove('active');
}
//callback function when li clicked
navLink.forEach(n =>n.addEventListener('click',activeate));

//scroll effect via cdn
//object of scroll effects
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2000,
    reset : true
});

//scroll effect for home
sr.reveal('h2',{});
sr.reveal('.btn-contact' ,{delay : 100});
sr.reveal('imgBox',{delay : 120});

//scroll effect for about
sr.reveal('h3',{delay: 100});
sr.reveal('.about_content',{delay : 150});
sr.reveal('.btn-contact',{delay : 100});
sr.reveal('.about_img',{delay : 200});

//scroll effect for skills
sr.reveal('h3',{delay: 100});
sr.reveal('.skill_bars',{delay : 120});
sr.reveal('.skill_details',{delay : 140});

//scroll effect for work
sr.reveal('.work_img',{delay: 160});

//scroll effect for contact
sr.reveal('.contact_box',{delay:100});
sr.reveal('.contactInput',{delay: 150});

//scroll effect for footer
sr.reveal('h4',{delay: 90});
sr.reveal('.social',{delay:120});