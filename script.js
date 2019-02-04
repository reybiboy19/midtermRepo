$(document).ready(function(){
	var key = null;

	$('.clean').click(function(){
		$('output').text("");
	}
});

$('.show').click(function(){
	var Etext = $("#output").val();
	if (Etext != "0"){
		var val1 = Etext;
		var buttonVal = $(this);
		var val2 = buttonVal.text();
		var Res = val1 + val2;
		$('#output').val(Res);
	}
	else {
		$('#output').val()
	}
});

$(function(){
	var interRes = null;
	var operator;
	$('operator').click(function(){
		var value1 = $('#output').val();
		if (interRes != null){
			var output = ApplyOperation(interRes,value1,operator);
			interRes = output;
		}
		else {
			interRes = value1;
		}
		operator = $(this).text();
		$('input').val("");
	}
});
$("#Calculate").click(function(){
	var op = operator;
	var res;
	var value2 = $('#output').val();
	if (value2 != ""){
		res = ApplyOperation(interRes,value2,op);
	}
	else{
		res = interRes;
	}
	$('#output').val(res);
	interRes = null;
});
});

function ApplyOperation(value1,value2,operator){
	var res;
	switch(operator){
		case "+":
		res = addition(value1,value2);
		break;
		case "-":
		res = subtraction(value1,value2);
		break;
		case "*":
		res = multiplication(value1,value2);
		break;
		case "/":
		res = division(value1,value2);
		break;
	}
	return res;
}

function addition(first,second){
	var a = parsefloat(first);
	var b = parsefloat(second);
	var total = a+b;
	return total;
}
function multiplication(first,second){
	var a = parsefloat(first);
	var b = parsefloat(second);
	var total = a*b;
	return total;
}
function subtraction(first,second){
	var a = parsefloat(first);
	var b = parsefloat(second);
	var total = a-b;
	return total;
}
function division(first,second){
	var a = parsefloat(first);
	var b = parsefloat(second);
	var total = a/b;
	return total;
}

