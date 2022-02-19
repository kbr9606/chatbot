var n = 0;
var follow = 0;

var app = document.getElementById('hamConsole');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("쮝슨과 대화를 해보세요!")
    .pauseFor(1900)
    .start()

function checkText() {
    var hamSays = document.getElementsByClassName("hamSays");
    var image = document.getElementById("image");
    var body = document.getElementById("body");
    var saysBox = document.getElementById("saysBox");
    var value = document.getElementById("console").value;
    console.log(value);

    if (follow == 1) {
        if (value.includes("그만")) {
            typewriter
                .deleteAll()
                .typeString("네엡..!!")
                .pauseFor(1900)
                .start()
            follow = 0;
        }

        else {
            typewriter
                .deleteAll()
                .typeString(value + " 쮝!")
                .pauseFor(1900)
                .start()
        }
    }

    else if (follow == 0) {
        if (value.includes("따라")) {
            typewriter
                .deleteAll()
                .typeString("넵!!")
                .pauseFor(1900)
                .start()
            image.src = "./static/images/쮝슨.png";
            follow = 1;
        }

        else if (value.includes("안녕")) {
            if (value.includes("쮝슨")) {
                typewriter
                    .deleteAll()
                    .typeString("안녕하세요! 쮝슨입니다.")
                    .pauseFor(1900)
                    .start()          
            }
            else {
                alert("저는 쮝슨입니다..!!");
            }
        }
    
        else if (value.includes("디저트") && value.includes("?")) {
            typewriter
                .deleteAll()
                .typeString("저는 팬케이크를 제일 좋아합니다!")
                .pauseFor(1900)
                .start() 
            image.src = "./static/images/쮝슨.png" 
        }
    
        else if (value=="") {
            alert("쮝슨에게 말을 걸어주세요!");
        }
    
        else if (value=="지금 뭐해?") {
            typewriter
                .deleteAll()
                .typeString("팬케이크를 먹고 있습니다..!!")
                .pauseFor(1900)
                .start()
            image.src = "./static/images/쮝슨_맛있다.png"
        }
    
        else if (value.includes("불") && value.includes("꺼")) {
            if (n==0) {
                n++;
                saysBox.style.backgroundColor = "rgb(65, 65, 65)";
                typewriter
                    .deleteAll()
                    .typeString("불을 껐습니다!")
                    .pauseFor(1900)
                    .start()
                image.src = "./static/images/쮝슨.png"
            }
    
            else if (n==1) {
                n++;
                saysBox.style.backgroundColor = "";
                body.style.backgroundColor = "rgb(65, 65, 65)";   
                typewriter
                    .deleteAll()
                    .typeString("전체 불을 껐습니다!")
                    .pauseFor(1900)
                    .start()
                image.src = "./static/images/쮝슨.png"
            }
    
            else if (n>=2) {              
                typewriter
                    .deleteAll()
                    .typeString("불이 이미 꺼져있습니다!")
                    .pauseFor(1900)
                    .start()            
                image.src = "./static/images/쮝슨.png"
            }
        }
    
        else if (value.includes("불") && value.includes("켜")) {
            if (saysBox.style.backgroundColor == "rgb(65, 65, 65)" || ((saysBox.style.backgroundColor == "") && (body.style.backgroundColor == "rgb(65, 65, 65)"))) {
                saysBox.style.backgroundColor = "rgb(255, 238, 246)";
                typewriter
                    .deleteAll()
                    .typeString("불을 켰습니다!")
                    .pauseFor(1900)
                    .start()              
            }
    
            else if (body.style.backgroundColor =="rgb(255, 238, 246)") {     
                typewriter
                    .deleteAll()
                    .typeString("이미 밝은 것 같습니다!")
                    .pauseFor(1900)
                    .start()              
            }
    
            else if (saysBox.style.backgroundColor == "rgb(255, 238, 246)") {
                body.style.backgroundColor = "rgb(255, 238, 246)";
                typewriter
                    .deleteAll()
                    .typeString("전체 불을 켰습니다!")
                    .pauseFor(1900)
                    .start()       
                image.src = "./static/images/쮝슨.png";
            } 
    
        }
    
        else if (value=="이제 가볼게") {
            typewriter
                .deleteAll()
                .typeString("다음에도 저랑 대화해 주세요!!")
                .pauseFor(1900)
                .start()
            image.src = "./static/images/쮝슨.png";
            setTimeout(reload, 5800);
        }
    
        else {
            typewriter
                .deleteAll()
                .typeString("무슨 뜻인지 잘 모르겠습니다,,,")
                .pauseFor(1900)
                .start()
        }
    }
}

function reload() {
    location.reload();
}

function onClick1() {
    checkText();
}

document.getElementById("send").addEventListener("click", onClick1)




function popUpOpen() {
    document.getElementById("howtoBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function onClick2() {
    popUpOpen();
}

document.getElementById("howto").addEventListener("click", onClick2)




function popUpClose() {
    document.getElementById("howtoBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function onClick3() {
    popUpClose();
}

document.getElementById("btn-close").addEventListener("click", onClick3)
