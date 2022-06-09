let string = `
.container{
    width:320px;
    height:460px;
    position:relative;
    margin:10vh auto;
  }
.left-ear{
    position: absolute;
    top: -0px;
    width: 36px;
    height: 160px;
    left: 48px;
    background: #fed823;
    border-bottom-left-radius: 80px 70%;
    border-top-left-radius: 100%;   
    border-top-right-radius: 100%; 
    -webkit-transform: rotateZ(25deg);
    transform: rotateZ(25deg);
    border-left: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
    overflow: hidden;
    z-index: 100;
}
.punta{
    position: absolute;
    content: '';
    display: block;
    left: 4px;
    width: 38px;
    height: 50px;
    background: #231815;
    -webkit-transform: rotateZ(12deg);
    transform: rotateZ(12deg);
    border-top-right-radius:  250%; 
    border-bottom-left-radius: 15px;
    border-bottom: 3px solid #0A0A0A;
}
.right-ear{
    position: absolute;
    top: 69px;
    right: 80px;
    width: 30px;
    height: 140px;
    background: #231815;
    border-bottom-left-radius: 80px 150%;
    border-top-left-radius: 190%;
    border-top-right-radius: 150%;
    transform: rotateZ(80deg);
    -webkit-transform: rotateZ(80deg);
    -moz-transform: rotateZ(80deg);
    -ms-transform: rotateZ(80deg);
    -o-transform: rotateZ(80deg);
    border: 1px solid #0A0A0A;
    border-bottom: none;
    z-index: 500;
    overflow: hidden;
}
.fillear{
    position: absolute;
    bottom: 0;
    background: #fed823;
    width: 40px;
    height: 110px;
    border-radius: 0 80% 0 0 ;
    -webkit-border-radius: 0 80% 0 0 ;
    -moz-border-radius: 0 80% 0 0 ;
    -ms-border-radius: 0 80% 0 0 ;
    -o-border-radius: 0 80% 0 0 ;
    border-top: 3px solid #0A0A0A;
}

.pik-body{
    border-top-left-radius: 130px 120px;
    border-top-right-radius: 150px 100px;
    border-bottom-left-radius: 100px 130px;
    border-bottom-right-radius: 150px 100px;
    width:185px;
    height:340px;
    position:absolute;
    border: 3px solid rgba(0,0,0,0);
    bottom: 0;
    transform: rotateZ(-1deg);
    z-index: 300;
}

.pik-head{
    top: 0;
    position: absolute;
    width: 160px;
    height: 160px;
    background: #fed823;
    right: 7px;
    border-top-left-radius: 130px 120px;
    border-top-right-radius: 150px 100px;
    border-bottom-left-radius: 80px 80px;
    border-bottom-right-radius: 25px 120px;
    border: 3px solid #0A0A0A;
    border-bottom: none;
}

.pik-head::before{
    content:"";
    position: absolute;
    display: block;
    width: 30px;
    height: 70px;
    background: #fed823;
    border-left:4px solid #0a0a0a;
    left: -14px;
    top: 81px;
    transform: rotateZ(-28deg);
    -webkit-transform: rotateZ(-28deg);
    -moz-transform: rotateZ(-28deg);
    -ms-transform: rotateZ(-28deg);
    -o-transform: rotateZ(-28deg);
    border-top-left-radius: 150% 90px;
    border-bottom-left-radius: 150% 90px;
}

.pik-head::after{
    content:"";
    position: absolute;
    display: block;
    width: 23px;
    height: 40px;
    background: #e94e24;
    border-radius: 50%;
    border-left:4px solid #0a0a0a;
    left: -18px;
    top: 75px;
    border-right: 3px solid #0A0A0A;
    border-top: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
}

.cheek-right{
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    background: #e94e24;
    border: 3px solid #0A0A0A;
    top: 90px;
    right: 18px;
}
.eye-right{
    position: absolute;
    width: 30px;
    height: 33px;
    background: #0a0a0a;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    top: 57px;
    right: 36px;
}
.eye-right::before{
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 12px;
    background: white;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    left: 8px;
    top: 5px;
}
.eye-right::after{
    content: "";
    position: absolute;
    display: block;
    right: 3px;
    width: 28px;
    height: 3px;
    background: #0a0a0a;
    transform: rotateZ(-28deg);
    -webkit-transform: rotateZ(-28deg);
    -moz-transform: rotateZ(-28deg);
    -ms-transform: rotateZ(-28deg);
    -o-transform: rotateZ(-28deg);
}
.eye-left{
    position: absolute;
    width: 20px;
    height: 32px;
    background: #0a0a0a;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transform: rotateZ(10deg);
    -webkit-transform: rotateZ(10deg);
    -moz-transform: rotateZ(10deg);
    -ms-transform: rotateZ(10deg);
    -o-transform: rotateZ(10deg);
    top: 50px;
    left: 10px;
}
.eye-left::before{
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 13px;
    background: white;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transform: rotateZ(8deg);
    left: 10px;
    top: 5px;
    -webkit-transform: rotateZ(8deg);
    -moz-transform: rotateZ(8deg);
    -ms-transform: rotateZ(8deg);
    -o-transform: rotateZ(8deg);
}
.eye-left::after{
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 3px;
    background: #0a0a0a;
    transform: rotateZ(28deg);
    -webkit-transform: rotateZ(28deg);
    -moz-transform: rotateZ(28deg);
    -ms-transform: rotateZ(28deg);
    -o-transform: rotateZ(28deg);
}

.nose{
    position: absolute;
    width: 10px;
    height: 11px;
    background: #0a0a0a;
    top: 75px;
    left: 40px;
    border-radius: 0 50% 30% 50%;
    -webkit-border-radius: 0 50% 30% 50%;
    -moz-border-radius: 0 50% 30% 50%;
    -ms-border-radius: 0 50% 30% 50%;
    -o-border-radius: 0 50% 30% 50%;
    transform: rotateZ(-36deg);
    -webkit-transform: rotateZ(-36deg);
    -moz-transform: rotateZ(-36deg);
    -ms-transform: rotateZ(-36deg);
    -o-transform: rotateZ(-36deg);
}
.mouth{
    position: absolute;
    width: 25px;
    height: 20px;
    border-radius: 0 0 100%  0;
    -webkit-border-radius: 0 0 100%  0;
    -moz-border-radius: 0 0 100%  0;
    -ms-border-radius: 0 0 100%  0;
    -o-border-radius: 0 0 100%  0;
    border-bottom: 4px solid #0a0a0a;
    border-right: 3px solid #0a0a0a;
    top: 90px;
    left: 48px;
    transform: rotateZ(55deg);
    -webkit-transform: rotateZ(55deg);
    -moz-transform: rotateZ(55deg);
    -ms-transform: rotateZ(55deg);
    -o-transform: rotateZ(55deg);
}
.mouth::before{
    content: "";
    display: block;
    position: absolute;
    width: 17px;
    height: 15px;
    border-radius: 0 0 90% 0;
    -webkit-border-radius: 0 0 90% 0;
    -moz-border-radius: 0 0 90% 0;
    -ms-border-radius: 0 0 90% 0;
    -o-border-radius: 0 0 90% 0;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    top: 22px;
    right: 20px;
    transform: rotateZ(-10deg);
    -webkit-transform: rotateZ(-10deg);
    -moz-transform: rotateZ(-10deg);
    -ms-transform: rotateZ(-10deg);
    -o-transform: rotateZ(-10deg);
}
.mid{
    position: absolute;
    width: 160px;
    height: 150px;
    top: 165px;
    left: 30px;
    background: #fed823;
    border-top-right-radius: 70px 140px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 30px;
    border-bottom: 3px solid #0a0a0a;
    border-right: 3px solid #0a0a0a;
    z-index: 1;
}
.mid::before{
    position: absolute;
    content: '';
    display: block;
    width: 150px;
    height: 40px;
    border-right: 3px solid #0a0a0a;
    background: #fed823;
    right: 15px;
    transform: rotateZ(-8deg);
    -webkit-transform: rotateZ(-8deg);
    -moz-transform: rotateZ(-8deg);
    -ms-transform: rotateZ(-8deg);
    -o-transform: rotateZ(-8deg);
}
.mid::after{
    position: absolute;
    content: '';
    display: block;
    bottom: -2px;
    width: 70px;
    height: 100px;
    left: -20px;
    border-radius: 90% 30% 0 80%;
    -webkit-border-radius: 90% 30% 0 80%;
    -moz-border-radius: 90% 30% 0 80%;
    -ms-border-radius: 90% 30% 0 80%;
    -o-border-radius: 90% 30% 0 80%;
    background: #fed823;
    border-bottom: 3px solid #0a0a0a;
    border-left: 3px solid #0a0a0a;
}

.mark1{
    position: absolute;
    width: 18px;
    height: 12px;
    border-top-left-radius: 50px 100%;
    border-bottom-left-radius: 50px 100%;
    background: #c76e29;
    border: 2px solid #0a0a0a;
    border-right: none;
    transform: rotateZ(-15deg);
    -webkit-transform: rotateZ(-15deg);
    -moz-transform: rotateZ(-15deg);
    -ms-transform: rotateZ(-15deg);
    -o-transform: rotateZ(-15deg);
    right: 13px;
    top: 27px;
    z-index: 20;
}
.mark2{
    position: absolute;
    width: 28px;
    height: 16px;
    border-top-left-radius: 100px 190%;
    border-bottom-left-radius: 50px 130%;
    background: #c76e29;
    border: 2px solid #0A0A0A;
    border-right: none;
    -webkit-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg);
    right: 0px;
    top: 82px;
    z-index: 20;
}

.left-hand{
    position: absolute;
    width: 65px;
    height: 65px;
    left: -20px;
    top: -10px;
    border-radius: 70% 50% 80% 60%;
    -webkit-border-radius: 70% 50% 80% 60%;
    -moz-border-radius: 70% 50% 80% 60%;
    -ms-border-radius: 70% 50% 80% 60%;
    -o-border-radius: 70% 50% 80% 60%;
    border-left: 3px solid #0a0a0a;
    border-bottom: 3px solid #0a0a0a;
    background-color: #fed823;
    z-index: 5;
}
.left-hand::before{
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 10px;
    border-radius: 40%;
    -webkit-border-radius: 40%;
    -moz-border-radius: 40%;
    -ms-border-radius: 40%;
    -o-border-radius: 40%;
    border-top: 2px solid #0A0A0A;
    transform: rotateZ(17deg);
    -webkit-transform: rotateZ(17deg);
    -moz-transform: rotateZ(17deg);
    -ms-transform: rotateZ(17deg);
    -o-transform: rotateZ(17deg);
    top: 16px;
    left: 17px;
}
.right-hand{
    background: #fed823;
    border-left: 3px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    position: absolute;
    width: 85px;
    height: 65px;
    right: 45px;
    top: -5px;
    border-top-left-radius: 150px 150%;
    border-bottom-left-radius: 50px 70%;
    border-bottom-right-radius: 50px 70%;
    z-index: 25;
}

.left-foot{
    position: absolute;
    bottom: 0;
    width: 70px;
    height: 30px;
    background-color: #fed823;
    border-radius: 75%;
    -webkit-border-radius: 75%;
    -moz-border-radius: 75%;
    -ms-border-radius: 75%;
    -o-border-radius: 75%;
    border: 3px solid #0A0A0A;
    transform: rotateZ(-18deg);
    -webkit-transform: rotateZ(-18deg);
    -moz-transform: rotateZ(-18deg);
    -ms-transform: rotateZ(-18deg);
    -o-transform: rotateZ(-18deg);
}
.left-foot::before{
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 6px;
    border-top: 3px solid #0A0A0A;
    border-radius: 40%;
    -webkit-border-radius: 40%;
    -moz-border-radius: 40%;
    -ms-border-radius: 40%;
    -o-border-radius: 40%;
    transform: rotateZ(-15deg);
    -webkit-transform: rotateZ(-15deg);
    -moz-transform: rotateZ(-15deg);
    -ms-transform: rotateZ(-15deg);
    -o-transform: rotateZ(-15deg);
    bottom: 8px;
}
.left-foot::after{
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 8px;
    border-top: 3px solid #0A0A0A;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transform: rotateZ(-15deg);
    -webkit-transform: rotateZ(-15deg);
    -moz-transform: rotateZ(-15deg);
    -ms-transform: rotateZ(-15deg);
    -o-transform: rotateZ(-15deg);
    bottom: 12px;
    left: -1px;
}

.right-foot{
    position: absolute;
    bottom: 0;
    width: 70px;
    height: 27px;
    right: -12px;
    background: #fed823;
    border-radius: 85%;
    -webkit-transform: rotateZ(17deg);
    transform: rotateZ(17deg);
    border-bottom: 3px solid #0A0A0A;
}
.right-foot::before{
    content: '';
        display: block;
        position: absolute;
        width: 25px;
        height: 6px;
        border-top: 3px solid #0A0A0A;
        border-radius: 40%;
        -webkit-transform: rotateZ(15deg);
        transform: rotateZ(15deg);
        bottom: 3px;
        right: 0;
}

.right-foot::after{
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 8px;
    border-top: 3px solid #0A0A0A;
    border-radius: 50%;
    -webkit-transform: rotateZ(15deg);
    transform: rotateZ(15deg);
    bottom: 8px;
    right: -1px;
}

.tail{
    position: absolute;
    width: 150px;
    height: 250px;
    right: 0;
    top: 140px;
    transform-origin: 0 bottom;
    animation: tailmove 3s ease infinite;
    -webkit-animation: tailmove 3s ease infinite;
}

.part1{
    position: absolute;
    bottom: 18px;
    width: 60px;
    height: 15px;
    background-color: #983c0d;
    border-bottom: 2px solid #0A0A0A;
    border-top: 2px solid #0A0A0A;
    transform: rotateZ(-50deg);
    -webkit-transform: rotateZ(-50deg);
    -moz-transform: rotateZ(-50deg);
    -ms-transform: rotateZ(-50deg);
    -o-transform: rotateZ(-50deg);
}
.part2{
    position: absolute;
    bottom: 49px;
    width: 50px;
    height: 18px;
    left: 9px;
    border-top: 2px solid #0A0A0A;
    background: #983c0d;
    transform: rotateZ(40deg);
    -webkit-transform: rotateZ(40deg);
    -moz-transform: rotateZ(40deg);
    -ms-transform: rotateZ(40deg);
    -o-transform: rotateZ(40deg);
    border-right: 2px solid #0A0A0A;
}
.part2:before{
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    left: 15px;
    top: -1px;
    border-left: 9px solid #fed823;
    border-right: 9px solid  rgba(0,0,0,0);
    border-bottom: 5px solid  rgba(0,0,0,0);
    border-top: 5px solid  rgba(0,0,0,0);
}
.part2:after{
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    left: 14px;
    top: 8px;
    border-left: 9px solid #fed823;
    border-right: 9px solid  rgba(0,0,0,0);
    border-bottom: 5px solid  rgba(0,0,0,0);
    border-top: 5px solid  rgba(0,0,0,0);
}
.part3{
    position: absolute;
    width: 70px;
    height: 25px;
    bottom: 78px;
    background-color: #fed823;
    border-top: 2px solid #0A0A0A;
    transform: rotateZ(-45deg);
    -webkit-transform: rotateZ(-45deg);
    -moz-transform: rotateZ(-45deg);
    -ms-transform: rotateZ(-45deg);
    -o-transform: rotateZ(-45deg);
}
.part4{
    position: absolute;
    bottom: 105px;
    width: 80px;
    height: 35px;
    border-top: 2px solid #0A0A0A;
    background: #fed823;
    transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    left: -10px;
}
.part5{
    position: absolute;
    bottom: 145px;
    width: 150px;
    height: 85px;
    border-top: 3px solid #0A0A0A;
    border-left: 2px solid #0A0A0A;
    background: #fed823;
    transform: rotateZ(-7deg);
    -webkit-transform: rotateZ(-7deg);
    -moz-transform: rotateZ(-7deg);
    -ms-transform: rotateZ(-7deg);
    -o-transform: rotateZ(-7deg);
    left: -20px;
    top: 23px;
    border-top-left-radius: 100% 30px;
    border-bottom-left-radius: 20% 10px;
    border-right: 2px solid #0A0A0A;
}

.shock-left{
    position: absolute;
    left: -130px;
    top: 80px;
    -webkit-transform: rotateZ(140deg);
    transform: rotateZ(140deg);
    width: 140px;
    z-index: 10;
  }
  
  .shock-right{
    position: absolute;
    right: -110px;
    top: 100px;
    -webkit-transform: rotateZ(-14deg);
    transform: rotateZ(-14deg);
    z-index: 10;
  }

@keyframes tailmove {
    0%{
        transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        -moz-transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -o-transform: rotateZ(0deg);
}
50%{
    transform: rotateZ(20deg);
    -webkit-transform: rotateZ(20deg);
    -moz-transform: rotateZ(20deg);
    -ms-transform: rotateZ(20deg);
    -o-transform: rotateZ(20deg);
}
100%{
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
}
}
`;

let css = document.querySelector("#css");
let shock = document.querySelectorAll(".shock");
let font = document.querySelector(".font");

class Play {
  constructor(speed) {
    this.speed = speed;
    this.n = 1;
    this.timer;
  }
  play() {
    if (this.timer) return;
    if (typeof arguments[0]) {
      this.speed = arguments[0];
    }
    this.timer = setInterval(this.run, this.speed);
  }
  run() {
    if (player.n > string.length) {
      clearInterval(player.timer);
      shock.forEach((ele) => {
        ele.style.opacity = 1;
      });
    }
    css.innerHTML = string.slice(0, player.n);
    font.innerText = string.slice(0, player.n);
    font.scrollTop = font.scrollHeight;
    player.n++;
  }
}

let player = new Play(1);
player.play();
