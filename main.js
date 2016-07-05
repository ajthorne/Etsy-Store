// console.log('hi');
//ajax request
var earrings = {
    type: 'GET',
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=repznm6fxtdopztc6fndxnky&keywords=stud%20earrings&includes=Images,Shop',
    dataType: 'jsonp',
    success: searchData,
    error: function(errorMsg) {
        console.log('your code is broken');
    }
};
$.ajax(earrings);
//call it to make the actual ajax request

//declare function to sort through data
function searchData(data) {
  //sort through each item in the array using "forEach" function, pulling out only information I need
    data.results.forEach(function(item, i, arr) {
        // locating items in data array...
        // console.log(item);
        // console.log(item.title); --works
        // console.log(item.price); --works
        // console.log(item.Shop.shop_name); --works
        // console.log(item.Images[0].url_170x135); --works


        //define variables
        var content = $('main');
        var searchResult = $('<div class="holder"></div>');
        var source = $('<a></a>').attr('href', item.url);
        var itemDetails = $('<div></div>');
        var itemTitle = $('<div class="title"></div>').text(item.title);
        var itemPrice = $('<div class="price"></div>').text('$' + item.price);
        var itemShop = $('<div class="shop"></div>').text(item.Shop.shop_name);
        var itemImg = $('<img>').attr('src', item.Images[0].url_170x135);

        //append new html elements onto DOM
        $(content).append(searchResult);
        $(searchResult).wrap(source);
        //wrap puts anchor tag around whatever is indicated
        $(searchResult).append(itemImg);
        $(searchResult).append(itemDetails);
        $(itemDetails).append(itemTitle);
        $(itemDetails).append(itemShop);
        $(itemDetails).append(itemPrice);
});
}
