
$(function() {

	var result = " ";
	var next_url = " ";
	var $display = $('.grid');

	$('.search-button').on('click', function(event){
		event.preventDefault();

		$('.loading-image').show();
		var hashtag = $('.search-bar').val();
		$display.empty();

		photogrid('https://api.instagram.com/v1/tags/'+ hashtag +'/media/recent?count=12&client_id=b8586475183a4ad89a5a0ebd4a36fbc2');
	});

	$('.load-more-button').hide().on('click', function () {
		photogrid(next_url);
	});

	function photogrid(url) {

		$.ajax ({
			dataType: 'jsonp',
			method: 'GET',
			url: url
		})

		.done(function(instaData) {
			result = ' ';
			$('header').height('auto');
			$('.loading-image').fadeOut();
			$.each(instaData.data, function(index, value) {
				result += '<li class="ig-photo-wrap">';
				result += '<a target="_blank" href="' + value.link + '"><img class="ig-image" src=' + value.images.standard_resolution.url + '></a>';
				result += '<div class="ig-transparent">';
				result += '<div class="profile-pic-wrap"><img src=' + value.user.profile_picture + '></div>';
				result += '<div class="ig-details-wrap">';
				result += '<div class="username">' + value.user.username + '</div>';
				result += '<div class="comments-likes-wrap"><i class="fa fa-comments"></i><p>' + value.comments.count + '</p><i class="fa fa-heart"></i><p>' + value.likes.count + '</p></div>';
				result += '</div></div></li>';
			});

			next_url = instaData.pagination.next_url;
			$('.load-more-button').show();

			$display.append(result);
		})

		.fail(function(argument) {
			console.log(argument);
		});
	}
});
