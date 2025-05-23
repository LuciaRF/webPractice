const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
console.log("currentActive: "+currentActive)
console.log("circles: "+circles.length)

next.addEventListener('click', () => {
    currentActive++;
    console.log("numero: "+currentActive);
    if (currentActive > circles.length) {
        currentActive = circles.length;
        console.log(currentActive);
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    console.log("update")
    circles.forEach((circle,idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
            console.log("next")
        } else {
            circle.classList.remove('active')
            console.log("remove")
        }

    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    }else if(currentActive === circles.length) {
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}