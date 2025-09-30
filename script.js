// Optional: Subtle floating animation for card
const card = document.querySelector('.card');
if(card){
    let x = 0, y = 0;
    document.addEventListener('mousemove', (e) => {
        x = (window.innerWidth / 2 - e.clientX) / 40;
        y = (window.innerHeight / 2 - e.clientY) / 40;
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
}