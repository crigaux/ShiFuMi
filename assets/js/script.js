let shifumi = (playerChoice) => {
    let computerChoice = Math.floor(Math.random()*5) + 1;
    let result;

    switch (computerChoice) {
        case 1:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/rock.jpg');
            break;
        case 2:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/paper.jpg');
            break;
        case 3:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/scissors.jpg');
            break;
        case 4:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/lizard.jpg');
            break;
        case 5:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/spock.jpg');
            break;
        default:
            break;
    }
    
    if((playerChoice == 1 && (computerChoice == 4 || computerChoice == 3)) || 
        (playerChoice == 2 && (computerChoice == 1 || computerChoice == 5)) ||
        (playerChoice == 3 && (computerChoice == 2 || computerChoice == 4)) ||
        (playerChoice == 4 && (computerChoice == 5 || computerChoice == 2)) ||
        (playerChoice == 5 && (computerChoice == 3 || computerChoice == 1))) {
            document.querySelector('.answer > span').textContent = 'Gagné';
            document.querySelector('.answer > span').style.backgroundColor = '#66cc00';
            document.querySelector('.answer > span').style.borderColor = '#4d9900';
            result = 'win';
    } else if(playerChoice == computerChoice) {
        document.querySelector('.answer > span').textContent = 'Égalité';
        document.querySelector('.answer > span').style.backgroundColor = '#ffcc66';
        document.querySelector('.answer > span').style.borderColor = '#ffaa00';
    } else {
        document.querySelector('.answer > span').textContent = 'Perdu';
        document.querySelector('.answer > span').style.backgroundColor = '#e62e00';
        document.querySelector('.answer > span').style.borderColor = '#b32400';
        result = 'loose';
    }

    document.querySelector('.answer > span').style.opacity='1';

    return result;
}

let shifumiWin = (playerChoice) => {
    let computerChoice = Math.floor(Math.random()*5) + 1;

    if(playerChoice == 1) {
        if(computerChoice < 3) {
            computerChoice = 2;
        } else {
            computerChoice = 5;
        }
    } else if(playerChoice == 2) {
        if(computerChoice < 3) {
            computerChoice = 3;
        } else {
            computerChoice = 4;
        }
    } else if(playerChoice == 3) {
        if(computerChoice < 3) {
            computerChoice = 1;
        } else {
            computerChoice = 5;
        }
    } else if(playerChoice = 4) {
        if(computerChoice < 3) {
            computerChoice = 3;
        } else {
            computerChoice = 1;
        }
    } else {
        if(computerChoice <= 3) {
            computerChoice = 2;
        } else {
            computerChoice = 4;
        }
    }

    switch (computerChoice) {
        case 1:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/rock.jpg');
            break;
        case 2:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/paper.jpg');
            break;
        case 3:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/scissors.jpg');
            break;
        case 4:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/lizard.jpg');
            break;
        case 5:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/spock.jpg');
            break;
        default:
            break;
    }
    document.querySelector('.answer > span').style.opacity='1';
    document.querySelector('.answer > span').textContent = 'Gagné';
    document.querySelector('.answer > span').style.backgroundColor = '#66cc00';
    document.querySelector('.answer > span').style.borderColor = '#4d9900';
    return 'win';
}
// Choix du joueur

let player;

document.querySelectorAll('.chooseYourPlayer').forEach(element => {
    element.addEventListener('click', () => {
        player = element.getAttribute('id');
        document.querySelector('.playerChoiceImg').src = element.src;
        document.querySelector('#playerChoiceMain').classList.add('active');
    })
})

let played = document.querySelector('.played');
let win = document.querySelector('.win');
let loose = document.querySelector('.loose');
let winrate = document.querySelector('.winrate');

// Choix du joueur au clic sur les images

let playerChoiceFunction = (id, index, src) => {
    document.querySelector(id).addEventListener('click', () => {
        console.log(player);
        document.querySelector('.playerChoiceImg').setAttribute('src', src);
        if(player == 'sheldon') {
            shifumiWin(index);
            win.innerHTML = parseInt(win.innerHTML) + 1;
        }else {
            if(shifumi(index) == 'win') {
                win.innerHTML = parseInt(win.innerHTML) + 1;
            } else if(shifumi(index) == 'loose') {
                loose.innerHTML = parseInt(loose.innerHTML) + 1;
            }
        }
        played.innerHTML = parseInt(played.innerHTML) + 1;
        winrate.innerHTML = Math.floor((parseInt(win.innerHTML) / parseInt(played.innerHTML)) * 100) + '%';
    })
}

playerChoiceFunction('.rock', 1, './assets/img/rock.jpg');
playerChoiceFunction('.paper', 2, './assets/img/paper.jpg');
playerChoiceFunction('.scissors', 3, './assets/img/scissors.jpg');
playerChoiceFunction('.lizard', 4, './assets/img/lizard.jpg');
playerChoiceFunction('.spock', 5, './assets/img/spock.jpg');

// Overlay Règles du jeu

document.querySelector('.overlay > input').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlayIn');
    document.querySelector('.overlay').classList.add('overlayOut');
})

document.querySelector('.rules > input').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlayOut');
    document.querySelector('.overlay').classList.add('overlayIn');
})

// Overlay stats

document.querySelector('.statOverlay').addEventListener('click', () => {
    document.querySelector('.statOverlay').classList.remove('statOverlayIn');
    document.querySelector('.statOverlay').classList.add('statOverlayOut');
})

document.querySelector('.stats > input').addEventListener('click', () => {
    document.querySelector('.statOverlay').classList.remove('statOverlayOut');
    document.querySelector('.statOverlay').classList.add('statOverlayIn');
})


// Bouton reset

document.querySelector('.reset > input').addEventListener('click', () => {
    document.querySelector('.answer > span').style.opacity='0';
    document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/kripke.png');
    document.querySelector('.playerChoiceImg').src = document.getElementById(player).src;
    played.innerHTML = 0; 
    win.innerHTML = 0; 
    loose.innerHTML = 0;
    winrate.innerHTML = 0;
})

