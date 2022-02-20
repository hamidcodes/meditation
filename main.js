const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 19000;
const breatheTime = totalTime*(4/19);
const holdTime = totalTime * (7/19);
breatheAnimation();

function breatheAnimation(){
    text.innerText = "Breathe In!";
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Breathe Out!"
            container.className = "container shrink"
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime)



