// using $.ajax to add the items

$(document).ready(function(){

	$('form').on('submit', function(){

		var item = $('form input'),
		todo = {item: item.val()};

		$.ajax({
			type:'POST',
			url: '/todo',
			data: todo,
			success: function(data){
				// do something with data
				location.reload();
			}

		});

	});

	// delete
	$('li').on('click', function(){
		var item = $(this).text().replace(/ /g, "-");
		$.ajax({
			type: 'DELETE',
			url: '/todo/'+ item,
			success: function(data){
				// 
				location.reload();
			}
		});
	});
	
});