var btn = document.querySelector('.button');
var y = 45;
btn.addEventListener('click', function () {
    function rand(from, to) {
        return Math.floor((Math.random() * (to - from + 1)) + from);
    }
    var x = rand(1, 6);
    switch (x) {
    case 1:
        block1.style.backgroundImage = "url('images/1.png')";
        break;
    case 2:
        block1.style.backgroundImage = "url('images/2.png')";
        break;
    case 3:
        block1.style.backgroundImage = "url('images/3.png')";
        break;
    case 4:
        block1.style.backgroundImage = "url('images/4.png')";
        break;
    case 5:
        block1.style.backgroundImage = "url('images/5.png')";
        break;
    case 6:
        block1.style.backgroundImage = "url('images/6.png')";
        break;
    default:
        alert('Я таких значений не знаю');
    };
    
    y += (x * 150);
    
    if (y > 1096){
       y = y - 1095 + 45 - 150;}
   
    
    document.querySelector('.fishka').style.left = y + 'px';
});