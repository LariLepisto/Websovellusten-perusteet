
document.getElementById('dice').addEventListener('click', function() {
    
    var satunnaisluku = Math.floor(Math.random() * 6) + 1;

    
    var nopanKuva = document.querySelector('#dice img');
    nopanKuva.src = './img/' + satunnaisluku + '.png';
});