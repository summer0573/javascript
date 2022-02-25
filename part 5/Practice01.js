//개발자 도구
//length, concat
// var str="Hello";
// undefined
// str.length; //length 길이를 나타내는 함수
// 5
// str["length"];
// 5
// var str2=" World";
// undefined
// str.concat(str2); //concat 문자를 합치는 변수
// 'Hello World'
// str.concat(str2);
// 'Hello World'
// var str3=str.concat(str2);
// undefined
// str3;
// 'Hello World'
// str.concat(str2).concat("!");
// 'Hello World!'
// "Hello".concat(" World").concat("!");
// 'Hello World!'
// "Hello".length;
// 5
// str+str2;
// 'Hello World'
// "Hello"+" World";
// 'Hello World'
// "p1 is "+3.14;
// 'p1 is 3.14'
// 3.14+"is pi";
// '3.14is pi'


//개발자도구
//charAt, substring, substr, indexOf, lastIndexOf
// var str="abcdefg";
// undefined
// str.charAt(0); //해당 위치에 있는 글자를 나타냄
// 'a'
// str.length;
// 7
// str.charAt(4);
// 'e'
// str.charAt(9); //범위를 벗어날 시, 공백이 출력
// ''
// str.charAt(-1);
// ''
// str[1];
// 'b'
// str[10]; //charAt을 쓰지 않고 범위를 벗어날 시, undefined가 출력됨
// undefined
// str[-1];
// undefined
// str.substring(2,4); //처음 숫자의 자리와 마지막 숫자의 자리의 문자를 출력함.
// 'cd'
// str.substr(2,4); //처음 숫자부터 마지막 숫자 자리의 문자를 출력
// 'cdef'
// str.substring(2); //두번째 자리의 숫자가 없을 시, 처음 숫자의 자리부터 마지막 자리의 문자를 출력함
// 'cdefg'
// str.substr(3);
// 'defg'
// str.substr(-4); //뒤에 자리부터 카운트함.
// 'defg'
// str.substr(-4,2); //뒤에 자리부터 두번째 자리의 수의 문자까지 출력함
// 'de'
//var str = "abcdsfbc";
//str.indexOf("bc"); //해당 문자의 시작 위치를 알림
//1
//str.lastIndexOf(""); //해당 문자의 마지막 위치를 알림
//6
//str.lastIndexOf("z"); //없는 문자일 시, -1이 출력됨
//-1