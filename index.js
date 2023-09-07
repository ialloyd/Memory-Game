const elements = document.getElementsByTagName('div');
const arr = Array.from(elements).splice(1);
let i = 0;
let res = [];
let count = 0;

const animals = ['🐲', '🐵', '🐶', '🐎', '🐇', '🐅', '🐲', '🐵', '🐶', '🐎', '🐇', '🐅'];
animals.sort(() => 0.5 - Math.random());

const setOrReset = () => {

    res[0].style.background = 'conic-gradient(red, yellow, green, blue, black)';
    res[1].style.background = 'conic-gradient(red, yellow, green, blue, black)';
    res[0].textContent = '';
    res[1].textContent = '';
    res = [];
}

const checkforMatch = () => {

    if (res[0].textContent !== res[1].textContent) {
        const incorrectSound = new Audio('resources/invalid-selection-39351.mp3');
        incorrectSound.play();
        setTimeout(() => {
            alert('Sorry, Try Again!');
            setOrReset();
        }, 100);

    }
    else if (res[0].textContent === res[1].textContent && res[0].getAttribute('id') !== res[1].getAttribute('id')) {

        const correctSound = new Audio('resources/rightanswer-95219.mp3');
        correctSound.play();
        setTimeout(() => {
            alert('Match Found!');
        }, 100);
        ++count;
        console.log(count);
        if (count === animals.length / 2) {

            window.location.reload(true);
        }

        res[0].removeEventListener('click', addContent);
        res[1].removeEventListener('click', addContent);
        res = [];

    }
    else {

        setOrReset();

    }
}

const addContent = event => {

    event.target.style.background = 'none';
    event.target.textContent = animals[Number(event.target.getAttribute('id'))]
    res.push(event.target);
    if (res.length === 2) {

        checkforMatch();

    }

}

arr.forEach(item => {
    item.setAttribute('id', i++)

    item.addEventListener('click', addContent)

})