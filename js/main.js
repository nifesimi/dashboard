$(document).ready(function(){
	//alert("hi I am jquery");
	//$("#msg").addClass("newclass");

	//$("#msg").removeClass("newclass");
 //$("#msg").addClass("newclass").removeClass("newclass").css({'font-size': '30px', 'opacity' : '0.5'});

 //$('#msg').show('slow');
 //var span = $('button').parents()
 //$("button").on('click', function(){
 	//console.log($(this).text());
 //});

 	$.ajax({
 		url : 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
 	}).done(function(data){
 		console.log(data);
 	});
	//document.getElementById('msg').classList.add('newclass');
	//document.getElementById('msg').classList.remove('newclass');
});