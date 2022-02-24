function 함수이름 (인자1, 인자2) {

    return 결과값;
}

function return_test(){
    return;
    console.log("식별되지 않는 코드");
}

function print(message){
    console.log("print fuction in");
    console.log(message);
    console.log("printf fucntion out");
}

function sum(arg1, arg2){
    var result = arg1+arg2;
    return result;
}

//개발자 도구
// return_test();
// undefined
// print("Hello Function");
// function.js:12 print fuction in
// function.js:13 Hello Function
// function.js:14 printf fucntion out
// undefined
// sum(1,2);
// 3