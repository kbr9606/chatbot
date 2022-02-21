var n = 0;
var follow = 0;

var image = document.getElementById("image");
var body = document.getElementById("body");
var saysBox = document.getElementById("saysBox");

var question = "";
var answer = "";
var key = 0;

var app = document.getElementById('hamConsole');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("쮝슨과 대화를 해보세요!")
    .pauseFor(1900)
    .start()

var json = [
    {
        "question":"지금 뭐해?",
        "answer":"팬케이크를 먹고 있습니다..!!"
    },
    {
        "question":"쮝슨이 제일 좋아하는 거는?",
        "answer":"먹을 걸 제일 좋아합니다!"
    },
    {
        "question":"너의 매력포인트는 뭐야?",
        "answer":"입술이라고 생각합니다..!!"
    },
    {
        "question":"이제 가볼게",
        "answer":"다음에도 저랑 대화해 주세요!!"
    }
]

function inputText() {
    var value = document.getElementById("console").value;


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
    
        else {
            checkText();
        }
    }
}

function checkText() {
    var value = document.getElementById("console").value;

    if (key == 1) {
        if (value == "응") {
            typewriter
                .deleteAll()
                .typeString("대답을 입력해 주세요.")
                .pauseFor(1900)
                .start()
            key = 2;
        }
        else {
            typewriter
                .deleteAll()
                .typeString("쮝!")
                .pauseFor(1900)
                .start()
            key = 0;
        }
        return;
    }

    if (key == 2) {
        answer = value;
        push_json();
        return;
    }

    for (let i=0;i<json.length;i++) {
        if (value == json[0].question) {
            image.src = "./static/images/쮝슨_맛있다.png"
            typewriter
                .deleteAll()
                .typeString(json[0].answer)
                .pauseFor(1900)
                .start()
            return;
        }

        else if (value == json[3].question) {
            image.src = "./static/images/쮝슨.png";
            typewriter
                .deleteAll()
                .typeString(json[3].answer)
                .pauseFor(1900)
                .start()
            setTimeout(reload, 5800);
            return;
        }

        else if (value == json[i].question) {
            image.src = "./static/images/쮝슨.png";
            typewriter
                .deleteAll()
                .typeString(json[i].answer)
                .pauseFor(1900)
                .start()
            return;
        }
    }

    typewriter
        .deleteAll()
        .typeString("말을 가르쳐 주실래요?(응 or 아니)")
        .pauseFor(1900)
        .start()
    question = value;
    key = 1;
}

function push_json() {
    json.push({question:`${question}`, answer:`${answer}`});
    typewriter
        .deleteAll()
        .typeString("말을 배웠습니다!!")
        .pauseFor(1900)
        .start()
    key = 0;
}

function reload() {
    location.reload();
}

function onClick1() {
    inputText();
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
