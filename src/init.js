// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var textObj = {
  firstName: "Trent",
  lastName: "Ingram",
  jobTitle: "Technical Relationship Manager",
  homeOffice: "Penn Field",
  about: "More info about me..."
};

$('.firstName').click(function(){

     $('.textArea').text(textObj.firstName);
event.preventDefault();
});
$('.lastName').click(function(){

     $('.textArea').text(textObj.lastName);
event.preventDefault();
});
$('.role').click(function(){
     $('.textArea').text(textObj.jobTitle);
event.preventDefault();
});
$('.office').click(function(){

     $('.textArea').text(textObj.homeOffice);
     event.preventDefault();
});
$('.moreInfo').click(function(){

     $('.textArea').text(textObj.about);
       event.preventDefault();
});

// mouse shadow fun courtesy of Wes Bos (wesbos.com)
const fun = document.querySelector('.whoah');
const text = fun.querySelector('h1');
const walk = 300; // 500px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = fun;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;

}

fun.addEventListener('mousemove', shadow);
