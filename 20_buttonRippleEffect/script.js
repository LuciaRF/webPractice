const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (event){
        const x = event.clientX; /*position where a click*/
        const y = event.clientY;

        const buttonTop = event.target.offsetTop; /*position of the button*/
        const buttonLeft = event.target.offsetLeft;

        const xInside = x - buttonLeft; /*position of the click inside the button*/
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = `${xInside}px`;
        circle.style.top = `${yInside}px`;

        this.appendChild(circle); //this does not work in arrow function

        setTimeout(() => circle.remove(),500); //remove the circle after 500ms
    })
})