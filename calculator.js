var calculatorInputNumber_C = document.getElementById('calculatorInputNumber');

var calculatorInputNumberPreviews_C = document.getElementById('calculatorInputNumberPreviews');

var CalculatorInputAC_c = document.getElementById('CalculatorInputAC');

var DisplayValue;

function display(DisplayValue){calculatorInputNumber_C.value+=DisplayValue;}

CalculatorInputAC_c.addEventListener('click',()=>{calculatorInputNumber_C.value="";
calculatorInputNumberPreviews_C.value="";})

function displaySolve(){let equation = calculatorInputNumber_C.value;
calculatorInputNumberPreviews_C.value=equation;
let y= eval(equation);
calculatorInputNumber_C.value=y;}