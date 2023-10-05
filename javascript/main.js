/*
 ██╗   ██╗██████╗ ███████╗██████╗ ██╗███╗   ██╗
   ██║   ██║██╔══██╗██╔════╝██╔══██╗██║████╗  ██║
   ██║   ██║██████╔╝███████╗██████╔╝██║██╔██╗ ██║
   ██║   ██║██╔══██╗╚════██║██╔══██╗██║██║╚██╗██║
   ╚██████╔╝██║  ██║███████║██████╔╝██║██║ ╚████║
    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝
   
   Made by: Adilson Darwin ((CEO & Programmer/FullStack Developer))
   Data: 05 / 10 / 2023
   Main Stack - Agência Web | Luanda, Angola, all rights reserved ©
-----------------------
version 1.0.0
*/
'use strict';
// MENU BARS
const burgerMenu = document.querySelectorAll('.menu-bars-content');
const topBar = document.querySelectorAll('.bar-1');
const bottomBar = document.querySelectorAll('.bar-3');
// WINDOW MENU
const menuWindow = document.querySelector('.menu-window-container');
const closeWindow = document.querySelector('.close-window');
const overlay1 = document.querySelector('.overlay ');
// TO TOP BUTTON
const topTop = document.getElementById("to-top-button");
// FAQ-BOX
const faqTitle = document.querySelectorAll('.faq-title');
const faqDescription = document.querySelectorAll('.faq-description');
const faqChevron = document.querySelectorAll('.faq-chevron');
// HEADER ON SCROLL
const headerOnScroll = document.querySelector('.header-on-scroll');

//==================== OPEN FOR LOOP ====================
for (let i = 0; i < burgerMenu.length; i++){
    // ADD EFFECT ON MENU BAR MOUSEOVER
    burgerMenu[i].addEventListener('mouseover', () => {
        topBar[i].style.width = '40px';
        bottomBar[i].style.width = '40px';
    });
    burgerMenu[i].addEventListener('mouseout', () => {
        topBar[i].style.width = '20px';
        bottomBar[i].style.width = '20px';
    });
    // SHOWING MENU WINDOW
    burgerMenu[i].addEventListener('click', () => {
        menuWindow.style.right = '0px';
        overlay1.classList.remove('hidden');
        headerOnScroll.style.display = "none";
    });
    // closing menu window with 'x' button
    closeWindow.addEventListener('click', () => {
        menuWindow.style.right = '-360px';
        overlay1.classList.add('hidden');
        headerOnScroll.style.display = "block";
    });
}
//==================== closing menu window with overlay click ====================
overlay1.addEventListener('click', () => {
    menuWindow.style.right = '-360px';
    overlay1.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !menuWindow.classList.contains('hidden')) {
        menuWindow.style.right = '-360px';
        overlay1.classList.add('hidden');
    };
});
//==================== TO TOP EVENT ====================
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topTop.style.display = "block";
  } else {
    topTop.style.display = "none";
  };
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
//==================== MENU HEADER ON SCROLL EVENT ====================
window.addEventListener('scroll', () =>{
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        headerOnScroll.style.opacity = "1";
    }
     else {
        headerOnScroll.style.opacity = "0";
    };
});
//==================== DROPDOWN FAQ-BOX ====================
for (let i = 0; i < faqTitle.length; i++){
    faqTitle[i].addEventListener('click', () =>{
        if (faqDescription[i].classList.contains('hidden') === true){
            faqDescription[i].classList.remove('hidden');
            faqChevron[i].style.rotate = '270deg';
        } else if (faqChevron[i].classList.contains('hidden') === false){
            faqDescription[i].classList.add('hidden');
            faqChevron[i].style.rotate = '90deg';
        };
    });
};

