document.querySelector('.order-button').addEventListener('click', function() {
    document.querySelector('#hide-content').style.height= 'auto';
    this.style.display= 'none';
});


var v = document.getElementById("videoTeaser");
v.addEventListener(
    'play', 
    function() { 
        v.play();
    }, 
    false);

v.onclick = function() {
    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }

    return false;
};