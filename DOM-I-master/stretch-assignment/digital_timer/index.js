let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");


let time = 0;
let interval;

function createInterval(start) {
    let tmp = window.setInterval( () => {
        time +=1;
        let tmp = time;
        if(secondTens.textContent !== "10") {

            //let tmp = parseInt(msTens.textContent);
            secondTens.textContent = Math.floor(tmp/1000);
            tmp = tmp % 1000;
            secondOnes.textContent = Math.floor(tmp/100);
            tmp = tmp % 100;
            msHundreds.textContent = Math.floor(tmp/10);
            tmp = tmp % 10;
            msTens.textContent = tmp;
        }
    }, 10);
    return tmp;
}



document.querySelector(".go").onclick = function() {
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    if(time === 0) interval = createInterval(0);
}

document.querySelector(".stop").onclick = function() {
    clearInterval(interval);
}

document.querySelector(".continue").onclick = function() {
    interval = createInterval(time);
}

document.querySelector(".reset").onclick = function() {
    clearInterval(interval);
    secondTens.textContent = '-';
    secondOnes.textContent = '-';
    msHundreds.textContent = '-';
    msTens.textContent = '-';
    time = 0;

}

