var height=prompt("키를 입력해 주세요.");
console.log(height, typeof(height)); //변수의 타입이 string으로 저장됨.

var height_int = parseInt(height);//문자열을 정수로 변환함
console.log(height_int, typeof(height_int)); //정수

var height_float = parseFloat(height); //문자열을 실수로 변환함
console.log(height_float, typeof(height_float)); //소수