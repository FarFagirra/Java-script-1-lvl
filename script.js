var number = {
	hundreds: 0,
	tens: 0,
	units: 0,
	Count: function(){
		var x = +prompt("Введите число (от 0 до 999): ");
		if (x <= 9) {
			this.hundreds = 0;
			this.tens = 0;
			this.units = x;
		} if (x > 9 && x <= 99) {
			this.hundreds = 0;
			this.tens = Math.floor((x % 100) / 10);
			this.units = x % 10;
		} if (x > 99 && x <= 999) {
			this.hundreds = Math.floor(x / 100);
			this.tens = Math.floor((x % 100) / 10);
			this.units = x % 10;		
		} else if (x <0 && x >999) {
			alert("Вы ввели неверное число");
			delete this.hundreds;
			delete this.tens;
			delete this.units;
		}
	}
}
number.Count();
for (let prop in number) {
	if (typeof number[prop] != "function") {
	console.log(prop +": " + number[prop]);
	}
}


