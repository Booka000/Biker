var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
// xD method
var rentPriceParce = document.getElementById("total");


//countUp function
var countUp = function () {
    var currentSeconds = parseFloat(seconds.textContent);
    seconds.textContent = currentSeconds + 1;
    if (currentSeconds === 60) {
        var currentMinutes = parseFloat(minutes.textContent);
        minutes.textContent = currentMinutes + 1;
        seconds.textContent = "0";
    }
    if (currentMinutes === 59) {
        var currentHours = parseFloat(hours.textContent);
        hours.textContent = currentHours + 1;
        minutes.textContent = "0";
    }
}

function getTotal(rentPriceParce) {
    var minute = parseInt(minutes.textContent, 10);
    var hour = parseInt(hours.textContent, 10);
    if (hour === 0) {
        hour = 1;
    }
    else if (hour > 0 && minute > 5) {
        hour++;
    }
    return (rentPriceParce * hour)
}

//start count
var Count = function () {
    if (startButton.textContent === 'START') {
        countUp();
        timer = window.setInterval(countUp, 1000);
        startButton.textContent = 'FINISH';
    } else {
        window.clearInterval(timer);
        var total=getTotal(parseInt(rentPriceParce.innerText,10));
        rentPriceParce.innerText=("Total:  " + total);
        document.getElementById("show").style.display = "block";
    }
}
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", Count);
