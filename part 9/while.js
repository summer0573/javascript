console.log("MENU");
console.log("1. 아이스 아메리카노");
console.log("2. 카페라떼");
console.log("3. 카푸치노");
console.log("4. 아샷추");

var count = 0;

while(count<3){

    var choice = parseInt(prompt("메뉴를 선택해 주세요."));

    console.log(choice+"번 메뉴를 선택하셨습니다.")

    switch(choice){
        case 1 :
            console.log("아이스 아메리카노는 3500원 입니다.");
            break; //switch문 빠져나오기
        case 2 :
            console.log("카페라떼는 4000원 입니다.");
            break;
        case 3 :
            console.log("카푸치노는 4500원 입니다.");
            break;
        case 4 :
            console.log("아샷추는 3500원 입니다.");
            break;
        defualt :
            console.log("주문하신 메뉴는 없습니다.");
            break;
    }
count++;
}
console.log("주문하신 음료가 나왔습니다.");