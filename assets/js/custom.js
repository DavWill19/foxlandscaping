

let contact = document.getElementById('contact');
let email = document.getElementById('email');
let message = document.getElementById('message');
let contactForm = document.querySelector('.footer-content');
let contactUs = document.querySelector('#contact-us');
let footer = document.querySelector('.footer-section');
let subfooter = document.querySelector('.sub-footer');


function mail() {
    let img = document.createElement('img');
    img.src = 'assets/images/mail.png';
    img.style.width = '40%';
    img.style.position = "relative";
    img.classList.add('animate__animated', 'animate__fadeOutUpBig', 'animate__slower');
    subfooter.appendChild(img);
    footer.style.height = "200px";
}

document.querySelector('#frm1').addEventListener('submit', function (e) {
    let formSubmission = ` Name: ${contact.value} Email: ${email.value} Message: ${message.value}`;
    console.log(formSubmission);
    mail();
    setTimeout(function () {
        contactForm.classList.add('thankYou', 'animate__animated', 'animate__fadeInUp');
        contactForm.innerHTML = "<h1 class> Thank you for your message!</h1>";
    }, 100);
    e.preventDefault();

    var templateParams = {
        contact: contact.value,
        email: email.value,
        message: message.value
    };

    emailjs.send('service_otasa49', 'template_8zy3hz9', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        })
    })