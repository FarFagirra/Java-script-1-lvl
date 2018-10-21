
var basket = {
	goods: [
				{
					name : "Флорариум Марсианская любовь", 
					price : 1200,
					weight : 1000,
					purpose : "home",
					size : 2.5,
					status : true
				},
				{
					name : "Флорариум Одинокий суррикат",
					price : 700,
					weight : 700,
					purpose : "office",
					size : 1.5,
					status : true
				},
				{
					name : "Флорариум Морская тишина",
					price : 800,
					weight : 750,
					purpose : "office",
					size : 1.2,
					status : false
				},
				{
					name : "Флорариум Путь через пустыню",
					price : 1500,
					weight : 2500,
					purpose : "home",
					size : 2.5,
					status : false
				}
			],
	activeBasket: function() {
		for (var i = 0; i <=3; i++) {
			if (this.goods[i].status = true) {
				var activePrice;
				activePrice += this.goods[i].price;
				console.log("Полная стоимость: " + activePrice); 
// Не могу понять, почему выдает в результате NaN, ниже проверка, все переменные - числа..
				console.log(typeof this.goods[i].price);
				console.log(typeof activePrice);
			}
		}
	}
}
basket.activeBasket();

