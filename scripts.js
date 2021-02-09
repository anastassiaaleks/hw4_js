// Задание 1

console.log('Задание 1');
let m=[1, 2, 3, 4, 5];
for (let i=0; i<m.length; i++) {
    console.log(m[i]);
}

// Задание 2

console.log('');
console.log('Задание 2');
m=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i=0; i<m.length; i++) {
    if (-10<m[i] && m[i]<-3) {
        console.log(m[i]);
    }
}

// Задание 3

console.log(''); 
console.log('Задание 3');
m=[];
let result=0;
for (i=23; i<=57; i++) {
    m.push(i);
    result+=i;
}
console.log(m);
console.log('Сумма = '+result);

// Задание 4

console.log(''); 
console.log('Задание 4');
m=['10', '20', '30', '50', '235', '3000'];
for (i=0; i<m.length; i++) {
    if (m[i][0]=='1' || m[i][0]=='2' || m[i][0]=='5') {
        console.log(m[i]);
    }
}

// Задание 5

console.log(''); 
console.log('Задание 5');
m=['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (i=0; i<m.length; i++) {
    if (m[i] == 'СБ' || m[i] == 'ВС') {
        let resultM = m[i].bold([i]);
        console.log(resultM);
    } else console.log(m[i]);
}

// Задание 6

console.log(''); 
console.log('Задание 6');
m=[12, 23, 34, 45, 56];
let mP=m.push(100);
console.log('Последнее число массива = '+m[m.length-1]);

// Задание 7
/*
console.log(''); 
console.log('Задание 7');
m=[];
let num;
for(i=0; num=0; i++) {
    num = prompt('Введите число');
    if (num!==0) {
        m[i]=num;  
    } else continue 
}
console.log(m); */

// Задание 8

console.log(''); 
console.log('Задание 8');
m=[12, false, 'Текст', 4, 2, -5, 0];
console.log('Исходный массив:');
console.log(m);
console.log('Массив в обратном порядке:');
console.log(m.reverse());

// Задание 9

console.log(''); 
console.log('Задание 9');
m=[5, 9, 21, , , 9, 78, , , , 6];
let counter =0;
for (i=0; i<m.length; i++) {
    if (m[i]==null){
        counter+=1;
    }
}
console.log(counter);

// Задание 10 
/*
console.log(''); 
console.log('Задание 10');

m=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
counter =0;
for (i=0; i<m.length; i++) {
    if (m[i]==0) {
        for (let j=0; m[j]==0; j++) {
            counter+=m[j];
        }
    }
}
console.log(counter);
*/
