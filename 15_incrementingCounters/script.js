const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerHTML = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); /*The + symbol convert target into a number */
        const c = +counter.innerHTML; 

        const increment = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout (updateCounter, 1);
        }
        else{
            counter.innerText = target;
        }
    }

    updateCounter();
})