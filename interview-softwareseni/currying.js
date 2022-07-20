/**
 * Currying adalah proses dalam pemrograman fungsional di mana kita dapat mengubah fungsi dengan beberapa argumen menjadi urutan fungsi bersarang(nested). Ini mengembalikan fungsi baru yang mengharapkan argumen berikutnya sebaris.
 * Currying membantu kita menghindari melewatkan variabel yang sama berulang kali.
Ini membantu untuk membuat fungsi urutan yang lebih tinggi
 */


function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3));

