const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100)
});

let menu = document.querySelector('#menu-icon');
let nav =document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};


// const contact = document.querySelector('.contact');
// const submit = document.querySelector('.submit');
// const thanks = document.querySelector('.');

// submit.addEventListener('click', ()=>{
//     contact.classList.add('active')
// });


///////
// const container = document.querySelector('.container');
// const login = document.querySelector('.login-link');
// const register = document.querySelector('.register-link');

// const Flogin = document.querySelector('.Flogin-link');
// const FPass = document.querySelector('.forgot-link');

// register.addEventListener('click', ()=>{
//     container.classList.add('active')
// });

// login.addEventListener('click', ()=>{
//     container.classList.remove('active')
// });

// FPass.addEventListener('click', ()=>{
//     container.classList.add('act')
// });
// Flogin.addEventListener('click', ()=>{
//     container.classList.remove('act')
// });


//emailjs
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user'),
      contactName = document.getElementById('contact-name')
      myMessage = document.getElementById('cont-message')

const sendEmail = (e)=>{
    e.preventDefault()

    if(contactUser.value === '' || contactName.value === '' || myMessage === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must fill all the required fields.'

        setTimeout(()=>{
            contactMessage.textContent = ''
        },3000)
    } else{

        emailjs.sendForm('service_w80vuqe','template_9ytcksc','#contact-form','2C9Tm_4GSZFsXiqNp')
          .then(()=>{

            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'Your message just showed up in my inbox. Talk to you soon!'

            setTimeout(()=>{
                contactMessage.textContent = ''
            },3000)
          },(error)=>{

            alert('OOPS! SOMETHING WENT WRONG', error)
          })

          //to clear input field
          contactUser.value = ''
          contactName.value =''
          myMessage.value =''
    }


}
 
contactForm.addEventListener('submit', sendEmail)