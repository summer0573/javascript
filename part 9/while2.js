var count = 0;

while(true){
    var ans;
    ans=parseInt(prompt("1+1=?"));
    if(ans!=2){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans=parseInt(prompt("7-3=?"));
    if(ans!=4){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans=parseInt(prompt("9*5=?"));
    if(ans!=45){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    break;
}

console.log("수고하셨습니다.");