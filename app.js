const btn = document.getElementById('btn');
const clock =document.getElementById('time-left');

let seconds = 60;
clock.textContent = (`00:${seconds}`);

alert("To begin, press start and answer before your time runs out!")

btn.addEventListener('click', () => {
    const countdown = setInterval (() => {
        seconds--;
        clock.textContent = (`00:${seconds}`);
        if(seconds < 0 ) {
            clearInterval;
        }
    },1000);

})


