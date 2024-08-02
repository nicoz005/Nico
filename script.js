document.getElementById('englishButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "If you move, you're gay!";
    document.getElementById('prankImage').src = 'meow.jpg';
    document.getElementById('prankImage').style.display = 'block';
    playAudio();
});

document.getElementById('spanishButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "Si te mueves, eres gay!";
    document.getElementById('prankImage').src = 'meow.jpg';
    document.getElementById('prankImage').style.display = 'block';
    playAudio();
});

function playAudio() {
    var audio = document.getElementById('prankAudio');
    audio.play();
}