var keys = document.querySelectorAll('.btn');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

var error = '<span class="error">Check the Syntax</span>';

document.querySelector('.numbers').innerHTML = '0';

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function (e) {

		var display = document.querySelector('.numbers');
		var displayVal = display.innerHTML;
		var displayAction = document.querySelector('.action');
		var displayActionVal = displayAction.innerHTML;
		var btnVal = this.innerHTML;


		if(btnVal == 'C') {
			display.innerHTML = '0';
			displayAction.innerHTML = '';
			decimalAdded = false;

		}else if (btnVal == 'd') {
			var del = displayVal.substring(0, displayVal.length -1);

			if(displayVal == '0' || displayVal.length == 1){
				display.innerHTML = '0';
			}else {
				display.innerHTML = del;
			}
			

		}else if (btnVal == '=') {

			var equation = displayActionVal + displayVal;
			var lastChar = equation[equation.length-1];
			var lastActionChar = displayActionVal[displayActionVal.length -1];

			displayAction.innerHTML = '';

			// equation = equation.replace(/x/g, '*');

			if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
				equation = equation.replace(/.$/, '');
			}

			if(equation){
				display.innerHTML = '<span class="hidden">result:</span>' + eval(equation);
			}

			if(lastActionChar == '/' && lastChar == '0'){
				display.innerHTML = error;
			}


			decimalAdded = false;

		}else if (operators.indexOf(btnVal) > -1) {
			var lastChar = displayVal[displayVal.length -1];
			var lastActionChar = displayActionVal[displayActionVal.length -1];

			displayAction.innerHTML += displayVal + btnVal;
			display.innerHTML = displayVal.replace(/\d/g, '');

			

			if (displayVal == '' && btnVal == '-'){

				display.innerHTML += btnVal;
				
			}

			if(operators.indexOf(lastChar) > -1 && displayVal.length > 1) {
				display.innerHTML = displayVal.replace(/.$/, btnVal);
				
			}

			decimalAdded = false;

		}else if (btnVal == '.') {
			if(!decimalAdded) {
				display.innerHTML += btnVal;
				decimalAdded = true;

			}

		}
		else {
			var reg = /<span class="hidden">result:<\/span>[0-9]+/;
			if(displayVal == '0' || reg.exec(displayVal) || displayVal == error){
				display.innerHTML = '';
				
			}
			display.innerHTML += btnVal;
			
		}

		e.preventDefault();
	}
}