function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js",200);
  });

function openPageTwo() {
  document.getElementById("pageOney").style.display = "none";
  document.getElementById("btn").style.display = "none";
  const audio = new Audio("DatGroove.mp3");
  audio.play();
  confetti.start();
  document.getElementById("btnTwo").style.display = "block";
  document.getElementById("happyy").style.display = "block";
}


function memories() {
  confetti.stop(); 
  let imagesArray = ["pone.png", "ptwo.png", "pthree.png", "pfour.png", "pfive.png", "psix.png", "pseven.png", "peight.png", "pnine.png", "pten.png", "peleven.png", "pthirteen.png", "pfourteen.png", "pfifteen.png", "psixteen.png", "pseventeen.png", "peighteen.png", "pnineteen.png"]

  let num = Math.floor(Math.random() * imagesArray.length);
  let img = (imagesArray[num]);
  let randImg = `${img}`;
  
  document.getElementById("picy").style.display = "block";
  document.getElementById("memory").src = randImg;
  console.log(randImg);
  
}














