// Change greeting based on time of day
const greetingElement = document.getElementById("greeting");

const currentTime = new Date();
const hours = currentTime.getHours();

if (hours >= 0 && hours < 12) {
    greetingElement.textContent = "Good Morning, Zoyya! Happy Birthday!";
} else if (hours >= 12 && hours < 18) {
    greetingElement.textContent = "Good Afternoon, Zoyya! Happy Birthday!";
} else {
    greetingElement.textContent = "Good Evening, Zoyya! Happy Birthday!";
}

// Confetti Animation
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    const startPosX = Math.random() * window.innerWidth;
    const startPosY = -50;

    confetti.style.left = `${startPosX}px`;
    confetti.style.top = `${startPosY}px`;
    confetti.style.animation = `fall 2s ease-out infinite`;

    setTimeout(() => {
        confetti.remove();
    }, 2000);
}

setInterval(createConfetti, 100);

// Add confetti styles to the CSS
const style = document.createElement('style');
style.innerHTML = `
    .confetti {
        width: 10px;
        height: 10px;
        background-color: #ff66b2;
        position: absolute;
        border-radius: 50%;
        animation: fall 2s ease-out infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
