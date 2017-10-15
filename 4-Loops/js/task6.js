var students = [
    ['David',80],
    ['Vinoth',77],
    ['Divya',88],
    ['Ishitha',95],
    ['Thomas',68]
];
var avg=0;
for (i=0;i<students.length;i++) avg+=students[i][1];
avg /= students.length;

if (avg < 60) console.log('F')
else if (avg < 70) console.log('D')
else if (avg < 80) console.log('C')
else if (avg < 90) console.log('B')
else console.log('A');