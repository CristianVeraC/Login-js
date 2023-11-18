const signInBtnLink = document.querySelector('.signIn-link');
const signUpBtnLink = document.querySelector('.signUp-link');
const signRegist = document.querySelector('.signRegist-link');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signRegistLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
