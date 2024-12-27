// Main JavaScript
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        grabCursor:true,
        centeredSlides: true,
        spaceBetween: 14,
        freeMode:false,
        autoplay:{
            delay:5000
        },
        on:{
            click(event){
                swiper.slideTo(this.clickIndex);

            },
        }
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 1200);
}

const allStars = document.querySelectorAll(".star");
allStars.forEach((star, i) =>{
    star.onclick = function(){
        console.log(star)
        let current_star_level =i + 1;


        allStars.forEach((star, j) =>{
         if(current_star_level >= j + 1)
         {
            star.innerHTML = '&#9733'
        }else{
             star.innerHTML = '&#9734'

         }

        })
    }
})


// Call remaining animations
swiperAnimation();
menuAnimation();
loaderAnimation();






function toggleMenu() {
    const options = document.getElementById("options");
    
    // Toggle the visibility of the options div
    if (options.style.display === "block") {
      options.style.display = "none";
    } else {
      options.style.display = "block";
    }
  }
  










  // Select the toggle button and menu
const toggleButton = document.getElementById('toggleProfile');
const profileMenu = document.getElementById('profileMenu');

// Add event listener to toggle the menu
toggleButton.addEventListener('click', () => {
    profileMenu.classList.toggle('show'); // Toggle the "show" class
});