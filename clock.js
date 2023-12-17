// let hr=document.getElementById('hour');
// let min=document.getElementById('min');
// let sec=document.getElementById('sec');

// function op()
// {
// 	let date = new Date();

// 	//Getting hour,mins,secs from date
// 	let hh=date.getHours();
// 	let mm=date.getMinutes();
// 	let ss=date.getSeconds();

// 	let hRotation= 30*hh + mm/2;
// 	let mRotation= 6*mm;
// 	let sRotation= 6*ss;

// 	hr.style.transfrom=`rotate(${hRotation}deg)`;
// 	min.style.transfrom=`rotate(${mRotation}deg)`;
// 	sec.style.transfrom=`rotate(${sRotation}deg)`;
// }

// setInterval(op,1000)
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function updateClock() {
    let date = new Date();

    // Getting hour, minutes, seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculating rotations
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Applying rotations to the clock hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Call the function once to set the initial clock state
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
