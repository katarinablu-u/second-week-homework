console.log("JS 파일 연결 완료!");

const button = document.getElementById("myButton");
button.addEventListener("click", runPractice);

function runPractice() {
    console.log("버튼이 클릭되었습니다!");
    // 변수 설정
    let age = 23; // 현재 나이 설정
    let name = document.getElementById("nameInput").value; 
    let isAdult = age >= 19; 

    console.log("이름:", name);
    console.log("나이:", age);
    console.log("성인인가요?", isAdult);

    let sum = age + 5;
    console.log("5년 뒤 나이:", sum);

    // 보조 함수 호출
    checkAdult(isAdult);
    
    //나이(23)를 전달하여 23, 24, 25가 출력되게 함
    runLoop(age);

    // 환영 메시지 및 화면 변경
    let message = greet(name);
    document.querySelector("h1").textContent = message;

    const profileGreeting = document.getElementById("greeting");
    if (name) {
        profileGreeting.textContent = name + "님 안녕하세요!";
    }
}

// 성인 체크
function checkAdult(isAdult) {
    if (isAdult) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}

function runLoop(currentAge) {
    console.log("반복문 시작");
    for (let i = currentAge; i < currentAge + 3; i++) {
        console.log("현재 나이:", i);
    }
}

function greet(userName) {
    return userName + "님 환영합니다!";
}