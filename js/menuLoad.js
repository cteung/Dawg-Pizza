$(function() {
	loadMenu();
});


function loadMenu(){
	var menu = com.dawgpizza.menu;

	//Loading pizzas
	var pTemplate = $(".pizza");
	var Mpizzas = $(".Mpizzas");
	var Vpizzas = $(".Vpizzas");
	$.each(menu.pizzas, function(index, p) {
		var clone = pTemplate.clone();
		if(p.vegetarian != true){
			Mpizzas.append(clone);
		}else{
			Vpizzas.append(clone);
		}
		clone.find($(".name")).html(p.name);
		clone.find($(".description")).html(p.description +"</br> $"+ p.prices);
		clone.removeClass("hide");
	});

	//Loading drinks
	var drinks = $(".drinks");
	//template for drinks and desserts
	var dTemplate = $(".dd");
	$.each(menu.drinks, function(index, d) {
		var clone = dTemplate.clone();
		drinks.append(clone);
		clone.find($(".name")).html(d.name +" $"+ d.price);
		clone.removeClass("hide");
	});

	//Loading desserts
	var desserts = $(".desserts");
	$.each(menu.desserts, function(index, d) {
		var clone = dTemplate.clone();
		desserts.append(clone);
		clone.find($(".name")).html(d.name +" $"+ d.price);
		clone.removeClass("hide");
	});
}