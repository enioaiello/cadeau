// fond du site
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#50fa7b';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});


// Easter Egg
const card = document.querySelector('.card');
const easterEgg = document.querySelector('.easter-egg');
const magicWord = 'mila';
let currentLetter = 0;
let timeoutId;

document.addEventListener('keypress', (e) => {
	if(e.key.toLowerCase() === magicWord[currentLetter]) {
		currentLetter++;
	} else {
		currentLetter = 0;
	}

	if(currentLetter === magicWord.length) {
		card.classList.add('hidden');
		easterEgg.classList.remove('hidden');
		setTimeout(() => {
			card.classList.remove('hidden');
			easterEgg.classList.add('hidden');
		}, 3_000)
		currentLetter = 0;
	}

	clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        currentLetter = 0;
    }, 1_000);
})