var my_max = function(arr) {
	var max = arr[0];
	for (var i =0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}

	return max;
}

var vowel_count = function(string) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u' || string[i].toLowerCase() === 'y') {
			count++;
		}
	}
	return count;
}

var reverse = function(string) {
	reversed = '';
	for (var i = string.length-1; i >= 0; i--) {
		reversed += string[i];
	}
	return reversed;
}