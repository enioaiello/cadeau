const pixel1 = document.querySelector('.btn-skip');
const merlin1 = document.querySelector('.slide-1');

pixel1.addEventListener('click', () => {
    merlin1.classList.add('slide-active');
});

const pixel2 = document.querySelector('.btn-skip-2');
const merlin2 = document.querySelector('.slide-2');

pixel2.addEventListener('click', () => {
    merlin2.classList.add('slide-active');
    merlin1.classList.add('hidden')
});
