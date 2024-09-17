document.querySelectorAll('.animate-btn').forEach(button => {
    button.addEventListener('click', () => {
        const effectId = button.getAttribute('data-effect');
        const effectDivs = document.querySelectorAll('.effect');
        effectDivs.forEach(div => {
            div.style.display = 'none'; // Hide all effects
        });
        const effectDiv = document.getElementById(effectId);
        if (effectDiv) {
            effectDiv.style.display = 'flex';
            effectDiv.style.animation = 'fadeIn 1s forwards';
            setTimeout(() => {
                effectDiv.style.animation = 'fadeOut 1s forwards';
                setTimeout(() => {
                    effectDiv.style.display = 'none';
                }, 1000); // Match duration of fadeOut animation
            }, 3000); // Duration to show effect before fading out
        }
    });
});

document.getElementById('info-btn').addEventListener('click', () => {
    const infoDiv = document.getElementById('info');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
});
