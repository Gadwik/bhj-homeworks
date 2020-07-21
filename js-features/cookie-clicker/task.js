const clicker__counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");


cookie.onclick = function() {
    let counter = clicker__counter.textContent++;
  
    if (counter % 2 === 0) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    };
}

