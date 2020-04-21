/* Backstretch plugin for background images */
if($("#home").length){
	$("#home").backstretch("images/home_background.jpg");
} else if($("#about").length){
	$("#about").backstretch("../images/about_background.jpg");
} else if($("#shop").length){
	$("#shop").backstretch("../images/shop_background.jpg");
} else if($("#contact").length){
	$("#contact").backstretch("../images/contact_background.jpg");
} else if($("#tutorials").length){
	$("#tutorials").backstretch("../images/tutorials_background.jpg");
}

/* Initialize Instagram feed plugin */
if($('.home').length){
	$(window).on('load', function(){
	  $.instagramFeed({
		'username': 'kaminski_flies',
		'container': "#instagram-feed-demo",
		'items': 8,
		'items_per_row': 2,
		'margin': 0
	  });
	});
}

/* Fully custom functionality to generate feed to populate shop data */
/* In the future, this would set the stage for admin functionality of adding/removing stock through the website */
if ($("#shop-section").length){
	var flies = [
	{item:"Purple Feather Fly",product:"MC001",price:7.99,stock:4,featured:true,img:"../images/shop/item-1.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Green Feather Fly",product:"MC002",price:6.99,stock:4,featured:true,img:"../images/shop/item-2.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Red Feather Fly",product:"MC003",price:4.99,stock:4,featured:false,img:"../images/shop/item-3.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Yellow Feather Fly",product:"MC004",price:9.99,stock:4,featured:false,img:"../images/shop/item-4.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Orange Feather Fly",product:"MC005",price:5.99,stock:4,featured:false,img:"../images/shop/item-5.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Brown Feather Fly",product:"MC006",price:7.99,stock:4,featured:false,img:"../images/shop/item-6.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Black Feather Fly",product:"MC007",price:7.99,stock:4,featured:false,img:"../images/shop/item-7.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"White Feather Fly",product:"MC008",price:6.99,stock:4,featured:false,img:"../images/shop/item-8.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Grey Feather Fly",product:"MC009",price:4.99,stock:4,featured:false,img:"../images/shop/item-9.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Pink Feather Fly",product:"MC010",price:9.99,stock:4,featured:false,img:"../images/shop/item-10.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Blue Feather Fly",product:"MC011",price:8.99,stock:4,featured:false,img:"../images/shop/item-11.png",description:"A feather fly used to help you catch largemouth bass."},
	{item:"Rainbow Feather Fly",product:"MC012",price:5.99,stock:4,featured:false,img:"../images/shop/item-12.png",description:"A feather fly used to help you catch largemouth bass."},
	];

	for(var i = 0; i < flies.length; i++){
		var fly = document.createElement("div");
		fly.classList.add("shop-item");
		fly.setAttribute("id", flies[i].product)
		var flyQuery = "<a href='products/" + flies[i].product + ".html'><img src='" + flies[i].img + "' /><div class='shop-text'><span class='title'>" + flies[i].item + "</span><span class='price'>$" + flies[i].price + "</span></div></a>";
		fly.insertAdjacentHTML("beforeend", flyQuery);
		if (flies[i].featured){
			fly.classList.add("shop-feature");
			var star = document.createElement("div");
			star.classList.add("star");
			fly.append(star);
		}
		document.getElementById("shop-section").append(fly);
	}
}
