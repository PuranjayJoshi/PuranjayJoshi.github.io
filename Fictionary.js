document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let image = document.getElementById('dragon');
    let left = e.offsetX;
    let top = e.offsetY;
    image.style.left = 44 - left/400 + '%';
    image.style.top = -150 + top/100 + 'px';
  });

let title = document.getElementsByClassName('FicTitle');
let elements = document.getElementsByClassName('elements');


title.item(0).addEventListener('mouseover', () => {

  elements.item(0).style.transform = 'translate(-40px,-10px)';
  elements.item(1).style.transform = 'translate(-35px,-15px)';
  elements.item(2).style.transform = 'translate(-30px,-20px)';
  elements.item(3).style.transform = 'translate(-25px,-25px)';
  elements.item(4).style.transform = 'translate(-15px,-30px)';
  elements.item(5).style.transform = 'translate(0px,-30px)';
  elements.item(6).style.transform = 'translate(25px,-25px)';
  elements.item(7).style.transform = 'translate(30px,-20px)';
  elements.item(8).style.transform = 'translate(35px,-15px)';
  elements.item(9).style.transform = 'translate(40px,-10px)';




});

title.item(0).addEventListener('mouseout', () => {
  elements.item(0).style.transform = 'translate(0px,0px)';
  elements.item(1).style.transform = 'translate(0px,0px)';
  elements.item(2).style.transform = 'translate(0px,0px)';
  elements.item(3).style.transform = 'translate(0px,0px)';
  elements.item(4).style.transform = 'translate(0px,0px)';
  elements.item(5).style.transform = 'translate(0px,0px)';
  elements.item(6).style.transform = 'translate(0px,0px)';
  elements.item(7).style.transform = 'translate(0px,0px)';
  elements.item(8).style.transform = 'translate(0px,0px)';
  elements.item(9).style.transform = 'translate(0px,0px)';
});