

const sun = document.querySelector('.sun');
const scene = document.querySelector('.scene');


// Toggle between nightmode and daymode
sun.addEventListener('click', () => {
    scene.classList.toggle('night');
});

setTimeout(() => {
    alert('Click the sun to toggle the timemode');
}, 0);