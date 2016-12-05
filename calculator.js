controls = '';
n1 = '';
n2 = '';
op = '';
reachedop = false;
result = 0;

document.getElementById("result").innerHTML = result;


document.getElementById("one").addEventListener("click", function(){
    console.log(1);
    controls += '1';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("two").addEventListener("click", function(){
    console.log(2);
    controls += '2';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("three").addEventListener("click", function(){
    console.log(3);
    controls += '3';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("four").addEventListener("click", function(){
    console.log(4);
    controls += '4';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("five").addEventListener("click", function(){
    console.log(5);
    controls += '5';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("six").addEventListener("click", function(){
    console.log(6);
    controls += '6';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("seven").addEventListener("click", function(){
    console.log(7);
    controls += '7';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("eight").addEventListener("click", function(){
    console.log(8);
    controls += '8';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("nine").addEventListener("click", function(){
    console.log(9);
    controls += '9';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("zero").addEventListener("click", function(){
    console.log(0);
    controls += '0';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("point").addEventListener("click", function(){
    console.log(".");
    controls += '.';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("plus").addEventListener("click", function(){
    console.log("+");
    controls += '+';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("minus").addEventListener("click", function(){
    console.log("-");
    controls += '-';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("times").addEventListener("click", function(){
    console.log("*");
    controls += '*';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("divide").addEventListener("click", function(){
    console.log("/");
    controls += '/';
    document.getElementById("result").innerHTML = controls;
});
document.getElementById("clear").addEventListener("click", function(){
    console.log("C");
    controls = '';
	n1 = '';
	n2 = '';
	op = '';
	reachedop = false;
	result = 0;
    document.getElementById("result").innerHTML = result;
});
document.getElementById("equals").addEventListener("click", function(){
    console.log("=");

    for(var i = 0; i < controls.length; i++) {
    	if (isNumeric(controls[i]) && reachedop === false) {
    		n1 += controls[i];
    	}
    	else if (isNumeric(controls[i]) && reachedop === true) {
    		n2 += controls[i];
    	}
    	else {
    		op += controls[i];
    		reachedop = true;
    	}
    }

    int1 = parseInt(n1, 10);
    int2 = parseInt(n2, 10);

    if (op=='+') {
    	result = add(int1, int2);
    }
    else if (op=='-') {
    	result = subtract(int1, int2);
    }
    else if (op=='*') {
    	result = multiply(int1, int2);
    }
    else if (op=='/') {
    	result = divide(int1, int2);
    }
    document.getElementById("result").innerHTML = result;
});

function isNumeric(num){
    return !isNaN(num)
}

var add = function(num1, num2) {
	return num1 + num2;
}

var subtract = function(num1, num2) {
	return num1 - num2;
}

var multiply = function(num1, num2) {
	return num1 * num2;
}

var divide = function(num1, num2) {
	return num1 / num2;
}

