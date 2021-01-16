var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var cul = document.getElementById('cul');
var result1 = document.getElementById('result1');

clear.onclick = function()
{
    window.location.reload();
}
cul.onclick = function()
{
    result.innerHTML= number2.value - number1.value + 'L.E' ;
    if(number2.value>number1.value)
    {
     
        result1.innerHTML = "Net Profit";        ///net Profit	///Net loss

    }else if(number1.value>number2.value)
    {

    
        result1.innerHTML = "Net loss";     
    }else if(number1.value==number2.value)
    {
        result1.innerHTML = "Not loss or profit";   
    }
}
  