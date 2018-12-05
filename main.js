function insert(num){
    calculator.textview.value = calculator.textview.value+num;
}

function equal(){
    var num = calculator.textview.value;
    if(num){
        calculator.textview.value = eval(num);
    }
}

function clean(){
    calculator.textview.value = "";
}