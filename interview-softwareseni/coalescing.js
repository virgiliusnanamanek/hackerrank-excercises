/**
 * Operator nullish coalescing (??) merupakan operator logika yang mengembalikan operan sisi kanan jika operan sisi kiri bernilai null atau undefined.
 * 
 * Truthy atau nilai kebenaran adalah nilai yang dikonversi menjadi boolean true saat ditemui dalam konteks yang membutuhkan nilai boolean.
 * 
 * Kebalikan dari truthy, falsy adalah nilai yang akan dikonversi menjadi false saat ditemui dalam konteks boolean.
 */


const student = {
    name: 'John',
    grade: 79
};

const grade = student.age ?? 0;

console.log(grade)