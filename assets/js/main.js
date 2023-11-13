/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop:true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/
// let mixerFeatured = mixitup('.featured__content', {
//   selectors: {
//       target: '.featured__card'
//   },
//   animation: {
//       duration: 300
//   }
// });

// /* Link active featured */ 
// const linkFeatured = document.querySelectorAll(".featured__item")

// function activeFeatured(){
//   linkFeatured.forEach(l=> l.classList.remove('active-featured'))
//   this.classList.add('active-featured')
// }
// linkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))



/*=============== Copyright year ===============*/ 
document.getElementById('year').textContent = new Date().getFullYear();
/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true
})

// sr.reveal(`.home__title, .popular__container`)
// sr.reveal(`.home__subtitle`, {delay: 100})
// sr.reveal(`.home__elec`, {delay: 100})
// sr.reveal(`.home__image`, {delay: 100})
// sr.reveal(`.home__car-data`, {delay: 100, interval: 100, origin: 'bottom  '})
// sr.reveal(`.home__button`, {delay: 100, origin: 'bottom'})
// sr.reveal(`.about__group, .offer__data`, { origin: 'left'})
// sr.reveal(`.about__data, .offer__img`, { origin: 'right'})
// sr.reveal(`.features__map`, {delay:200, origin: 'bottom'})
// sr.reveal(`.features__card`, {interval: 300})
// sr.reveal(`.featured__card, .logos__content, .footer__content, .counter-element, .benefits__list-item, .facts__card, .offer__description li, .footer__description`, {interval: 100})


/*=============== Countdown ===============*/
function timingCalc(endtime) {
  
  var timeTotal = Date.parse(endtime) - Date.now(),
  timeSeconds = Math.floor((timeTotal / 1000) % 60),
  timeMinutes = Math.floor((timeTotal / 1000 / 60) % 60),
  timeHours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24),
  timeDays = Math.floor(timeTotal / (1000 * 60 * 60 * 24));
  
  return {
    total: timeTotal,
    seconds: timeSeconds,
    minutes: timeMinutes,
    hours: timeHours,
    days: timeDays
  };
}

function animateCounter(selector, targetValue) {
  var $element = $(selector);
  var currentValue = parseInt($element.text(), 10);
  
  if (currentValue === targetValue) {
    return;
  }

  $element.addClass("counter-animate");
  $element.text(targetValue);
  
  setTimeout(function () {
    $element.addClass("show");
  }, 10);
  
  setTimeout(function () {
    $element.removeClass("counter-animate show");
  }, 500);
}

function startCalc(endtime) {
  var timeTotal = timingCalc(endtime);
  
  animateCounter(".days", timeTotal.days);
  animateCounter(".hours", timeTotal.hours);
  animateCounter(".minutes", timeTotal.minutes);
  animateCounter(".seconds", timeTotal.seconds);
  
  if (timeTotal.total <= 0) {
    clearInterval(timingNow);
  }
}

var DeadLine = new Date(Date.parse("15 Nov 2023 00:00:00 GMT"));

setInterval(function () {
  startCalc(DeadLine);
}, 1000);

/*=============== Popup ===============*/
const viewBtns = document.querySelectorAll(".view-modal"),
popup = document.querySelector(".popup"),
close = popup.querySelectorAll(".close"),
field = popup.querySelector(".field"),
overlay = document.querySelector('.popup__overlay'), 
input = field.querySelector("input"),
copy = field.querySelector("button");

viewBtns.forEach((viewBtn) => {
  viewBtn.onclick = () => {
      popup.classList.toggle("show");
      overlay.classList.remove('hidden');
  };
});

close.forEach((closeButton) => {
  closeButton.onclick = () => {
    popup.classList.remove("show");  // Hide the popup
    overlay.classList.add("hidden");  // Hide the overlay
  };
});

// copy.onclick = ()=>{
//   input.select(); //select input value
//   if(document.execCommand("copy")){ //if the selected text copy
//     field.classList.add("active");
//     copy.innerText = "Copied";
//     setTimeout(()=>{
//       window.getSelection().removeAllRanges(); //remove selection from document
//       field.classList.remove("active");
//       copy.innerText = "Copy";
//     }, 3000);
//   }
// }



/*===============  Telegram message ===============*/
document.addEventListener('DOMContentLoaded', () => {
  // Get the form elements
  const nameInput = document.getElementById('nameInput');
  const telInput = document.getElementById('telInput');
  // const nameInputLabel = document.querySelector("label[for='nameInput']");
  const nameInputLabel = document.querySelector("label[for='nameInput']");
  console.log("nameInputLabel:", nameInputLabel);
  const telInputLabel = document.querySelector("label[for='telInput']");
  // const nameInputLabel = document.querySelector("label[for='nameInput']");
  // const telInputLabel = document.querySelector("label[for='telInput']");
  const sendMsgButton = document.getElementById('sendMsg');
  const viewBtns = document.querySelectorAll(".view-modal");
  
  
  // Get the status modals
  const successModal = document.getElementById('successModal');
  const errorModal = document.getElementById('errorModal');
  
  let selectedProduct = ''; // Variable to store the selected product

  function resetLabels() {
    if (nameInputLabel) nameInputLabel.style.color = '';
    if (telInputLabel) telInputLabel.style.color = '';
  }

  

  // Telegram API settings
  const botToken = '6383753138:AAEZ2_IThH0ZRb_XpfkVLJ7-YyDKPaOvvfc';
  const chatId = '-961228440';

  // Event listener for product selection
  viewBtns.forEach((viewBtn) => {
    viewBtn.addEventListener('click', () => {
      selectedProduct = viewBtn.getAttribute("data-product");
      resetLabels(); // Reset label colors when a new product is selected
    });
  });
  
  // Event listener for the send message button
  sendMsgButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const tel = telInput.value.trim();
    
    let isValid = true; // Variable to check if inputs are valid
    let errorMessage = ''; // Variable to store the error message
  
    resetLabels(); // Reset label colors


    if (!name && !tel) {
      errorMessage = 'Iltimos ismingiz va telefon raqamingizni kiriting';
      isValid = false;
    } else {
      if (!name) {
        nameInputLabel.style.color = 'red';
        errorMessage = 'Iltimos ismingizni kiriting';
        isValid = false;
      }
  
      if (!tel || tel.length < 9) {
        telInputLabel.style.color = 'red';
        errorMessage = 'Iltimos telefon raqamingizni kiriting';
        isValid = false;
      }
    }


    // Validate your inputs here (e.g. check if empty, valid phone number, etc.)

    if (!isValid) {
      // Set the error message
      errorModal.innerHTML = `<p>${errorMessage}</p>`;
  
      // Show error modal
      errorModal.classList.add('show');
      errorModal.classList.remove('hidden');
      
      setTimeout(() => {
        errorModal.classList.add('hidden');
        errorModal.classList.remove('show');
      }, 2000);
  
      return;
    }
    
    // Construct message text
    const messageText = `Yangi buyurtma:\nMahsulot: ${selectedProduct}\nIsm: ${name}\nTel: ${tel}`;


    // Use the fetch API to send a message to the Telegram chat
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
        }),
      })
      .then(response => response.json())
      .then(data => {
  console.log('Message sent:', data);

      // Show success modal
      successModal.classList.add('show');
      successModal.classList.remove('hidden');

      // Hide it after 2.5 seconds
      setTimeout(() => {
        successModal.classList.add('hidden');
        successModal.classList.remove('show');
      }, 2000);

       popup.classList.remove("show");  // Hide the popup
  overlay.classList.add("hidden");  // Hide the overlay
  
    })
    .catch((error) => {
      console.error('Error:', error);

      // Show error modal
      errorModal.classList.add('show');
      errorModal.classList.remove('hidden');

      // Hide it after 2 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
        errorModal.classList.remove('show');
      }, 2000);
    });
  });
});


/*===============  theme switcher ===============*/
const toggleButton = document.getElementById("toggle-button");
let delgoImg = document.querySelector(".delgo");
let  sunmeeimg = document.querySelector(".sunmee");
let goodbookImg = document.querySelector(".goodbook")
let goodclubImg = document.querySelector(".goodclub")
let click = document.querySelector(".click")
let payme = document.querySelector(".payme")
let paynet = document.querySelector(".paynet")
let oson = document.querySelector(".oson")
let nasiya = document.querySelector(".nasiya")

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    delgoImg.src = '../../img/logo/Delgo Logo Black.png';
    sunmeeimg.src = '../../img/logo/logo short black.png';
    goodbookImg.src = '../../img/logo/Goodbook logo bl (2).png';
    goodclubImg.src = '../../img/logo/logo black 2.png';
    click.src = '../../img/logo/dark(1).png';
    payme.src = '../../img/logo/payme dark.png';
    paynet.src = '../../img/logo/paynet (1).png';
    oson.src = '../../img/logo/oson.png';
    nasiya.src = '../../img/logo/dark.png';


  }else{
    delgoImg.src = "../../img/logo/Delgo Logo Black.png";
    sunmeeimg.src = '../../img/logo/logo short white.png';
    goodbookImg.src = '../../img/logo/Goodbook logo wh (2).png';
    goodclubImg.src = '../../img/logo/Group 18.png';
    click.src = '../../img/logo/clickwh.png';
    payme.src = '../../img/logo/light.png';
    paynet.src = '../../img/logo/paynet (2).png';
    oson.src = '../../img/logo/white.png';
    nasiya.src = '../../img/logo/uzumwh.png';

  }
});
