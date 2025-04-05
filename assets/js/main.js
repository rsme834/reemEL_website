


const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* ===== SIDEBAR SHOW ===== */
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar');
    });
}

/* ===== SIDEBAR HIDDEN ===== */
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
    });
}

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')



        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })

        tab.classList.add('skills__active')

    })
})



/* ===== MIXITUP FILTER PORTFOLIO ===== */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener("click", activeWork));



/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        PortfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

// إغلاق النافذة عند الضغط على زر الإغلاق
document.querySelector(".portfolio__popup-close").addEventListener("click", () => {
    togglePortfolioPopup();
});

function PortfolioItemDetails(PortfolioItem) {
    document.querySelector(".pp__thumbnail img").src = PortfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = PortfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = PortfolioItem.querySelector(".portfolio__item-details").innerHTML;

}

/*===== SERVICES MODAL =====*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


// input animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



// scroll


const sections = document.querySelectorAll("section[id]");
// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        
        // محاولة العثور على العنصر
        const navLink = document.querySelector('.nav__menu a[href*="#' + sectionId + '"]');
        
        // التحقق مما إذا كان العنصر موجوداً قبل محاولة الوصول إلى classList
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}






document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".work__slider");
  
    sliders.forEach(slider => {
      const images = slider.querySelectorAll(".work__img-2");
      const prevBtn = slider.querySelector(".slider-btn.prev");
      const nextBtn = slider.querySelector(".slider-btn.next");
  
      let index = 0;
  
      // function to show image by index
      function showImage(i) {
        images.forEach((img, idx) => {
          img.classList.toggle("active", idx === i);
        });
      }
  
      if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
          index = (index + 1) % images.length;
          showImage(index);
        });
  
        prevBtn.addEventListener("click", () => {
          index = (index - 1 + images.length) % images.length;
          showImage(index);
        });
      }
  
      showImage(index); // Show first image initially
    });
  });
  