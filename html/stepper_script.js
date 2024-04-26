


const stepLinks = document.querySelectorAll('.stepper li a');
const stepContent = document.querySelectorAll('.step-content div');

stepLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    stepLinks.forEach((otherLink) => otherLink.classList.remove('active'));
    stepContent.forEach((content) => content.classList.remove('active'));

    link.classList.add('active');
    stepContent[index].classList.add('active');
  });
});


