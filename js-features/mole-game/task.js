const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


const getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
        hole.className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++;

        if (dead.textContent == 10) {
            window.alert('Вы победили');
            resetGame();
        }

        if (lost.textContent == 5) {
            window.alert('Вы проиграли');
            resetGame();
        }
    }
}

function resetGame() {
	dead.textContent = 0;
	lost.textContent = 0;
}