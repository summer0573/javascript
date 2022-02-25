// //개발자 도구
//배열
// var arr = []; //배열 정의
// undefined
// var arr2=[1, 2, 3, 4, 5];
// undefined
// arr2;
// [1, 2, 3, 4, 5]
// var mixed_arr = [1, true, 3.14, "string", {name:"object"}, [1,2,3] ];
// undefined
// mixed_arr;
// [1, true, 3.14, 'string', {…}, Array(3)]
// mixed_arr.length; //배열 길이 나타내기
// 6
// arr.length;
// 0
// arr2.length;
// 5
// arr2[0];
// 1
// arr2[3];
// 4
// arr2[7]; //길이를 초과할 시,undefined 출력
// undefined

//pop, push, shift, unshift
//각각 앞과 뒤에서 엘리먼트를 지우거나 추가
// var arr=[1,2,3,4,5];
// undefined
// arr.pop(); //배열의 가장 마지막에 있는 엘리먼트를 뺌
// 5
// arr;
// (4) [1, 2, 3, 4]
// arr.shift(); //배열의 가장 앞에 있는 엘리먼트를 뺌
// 1
// arr;
// (3) [2, 3, 4]
// arr.push(6); //맨 뒤에 엘리먼트를 추가함
// 4 //배열의 길이
// arr;
// (4) [2, 3, 4, 6]
// arr.unshift(0); //맨 앞에 엘리먼트를 추가함
// 5 //배열의 길이
// arr;
// (5) [0, 2, 3, 4, 6]
// arr.reverse(); //배열의 엘리먼트를 뒤집음
// (5) [6, 4, 3, 2, 0]
// arr.sort(); //배열의 엘리먼트를 정렬함
// (5) [0, 2, 3, 4, 6]
// var arr1=[1,2,3];
// undefined
// var arr2=[4,5,6];
// undefined
// arr1.concat(arr2);
// (6) [1, 2, 3, 4, 5, 6]
// var arr3=arr1.concat(arr2);
// undefined
// arr3;
// (6) [1, 2, 3, 4, 5, 6]
// var arr4=[1,2,3,1,2,3];
// undefined
// arr4.indexOf(2);
// 1
// arr4.lastIndexOf(2);
// 4
// var str="1,2,3,4,5";
// undefined
// str.split(","); //문자열을 구분자로 나눠서 배열에 넣고 반환함
// (5) ['1', '2', '3', '4', '5']
