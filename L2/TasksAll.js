/* 
//####Задача 1

//Перепишите код, заменив оператор `if` на тернарный оператор `?`

//```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
//```
var result;
if (a+b < 4){
  result = true;
} else{
  result = false;
}

Решение
var result = (a+b < 4) ? true : false;

####Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`.

Для читаемости — оформляйте код в несколько строк.

```js
var message;

if (login == 'Pitter') {
message = 'Hi';
} else if (login == 'Owner') {
message = 'Hello';
} else if (login == '') {
message = 'unknown';
} else {
message = '';
}
```

Решение

var message = (login == 'Pitter') ? 'Hi' :
(login == 'Owner') ? 'Hello' :
(login == '') ? 'unknown' :
'';





####Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
```

Решение

if (val == 'a'){
	console.log( 'a' );
} else if (val == case 'b'
|| case 'c'
|| case 'd' 
|| case 'e' ) {
	console.log( 'others' );
} else {
	console.log( 'unknown' );
}


####Задача 4

Перепишите код с использованием одной конструкции `switch`:

```js
var a = 0;

if (a == 0) {
console.log( 0 );
}
if (a == 1) {
console.log( 1 );
}

if (a == 2 || a == 3) {
console.log( '2,3' );
}
```
Решение

var a = 0;

switch (a) {
  case 0:
    console.log( 0 );
    break;

  case 1:
    console.log( 1 );
    break;

  case 2:
  case 3:
    console.log( '2,3' );
    break;
}






####Задача 5

Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

```js
for (var i = 0; i < 3; i++) {
console.log(i);
}
```

Решение

var i = 0;
while (i < 3){
	console.log(i);
	i++;
}











####Задача 6

Написать код который посчитает сумму всех элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.


Решение
var arr = [1,2,3,4];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum); !!!!!!!!!!!!!!!!!!!!!!!!
}
arraySum(arr);





####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.



Решение

четных элементов по значеню т.е. делятся на 2 без остатка 

let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));

Мой 

var arr = [1,2,3,4];

function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
	if (numStr[i] % 2 === 0){
		sum += array[i];
	}
        }
console.log(sum); !!!!!!!!!!!!!!!!!!!!!!!!
}
arraySum(arr);


и четных элементов по порядку 2-й 4-й..... 













####Задача 8

Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

Решение

var arr = [1,2,3,4];

function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
	if (numStr[i] % 2 === 0 & numStr[i] > 3 ){
		sum += array[i];
	}
        }
console.log(sum); !!!!!!!!!!!!!!!!!!!!!!!!
}
arraySum(arr)










#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

Решение
var arr = [1,2,3,4,5,6];
arr.sort((a, b) => b - a);
console.log(arr);


#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

Решение
var arr = [6,5,4,3,2,1];
arr.sort((a, b) => a - b);
console.log(arr);


#### Задача 11

Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. 
С помощью цикла `for` и оператора `if` выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

**Внимание**!

- Не разрашается использовать специальные методы массивов.

Решение

let s = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < s.length; i++) {
  if (s[i] <= 3)
    continue;
  if (s[i] >= 10)
    continue;

  console.log(s[i]);
}


var arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 3)
    continue;
  if (arr[i] >= 10)
    continue;

  console.log(arr[i]);
}




#### Задача 12

Дан массив с числами: `[1,2,3,-5,-2,1,-4]`

Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

**Внимание**!

- Не разрашается использовать специальные методы массивов.

#### Задача 13

Решение

var arr = [2, 5, 9, 15, 0, 4, -9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
console.log(sum);

Мой 

var arr = [1,2,3,-5,-2,1,-4];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
console.log(sum);







Дан массив с элементами `[1, 2, 5, 9, 4, 13, 4, 10]`. 
С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. 
Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.

Решение

var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < arr.length; i++) {
if (arr[i] == 4) {
alert('Есть!');
break;
}
}

Мой

var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < arr.length; i++) {
if (arr[i] == 4) {
console.log('Есть!');
break;
}
}




#### Задача 14

Дано число `n=1000`. 
Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
Какое число получится? 
Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`. 


Решение

let num = 500;
while (num > 10) {
	num = num / 2;
}
console.log(num);

Мой

let num = 1000;
while (num > 50) {
	num = num / 2;
}
console.log(num);

for (let n = 1000, num = 0; n > 50; num++) 
        {
        n /= 2;
        console.log( n );
        }


*/