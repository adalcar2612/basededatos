src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

	$(document).ready(function(e) {
		$('#menu1').on('click', function(){
			
			$('#content').attr('src', 'page1.html');
		});
		$('#menu2').on('click', function(){
			$('#content').attr('src', 'page2.html');
			
		});
		$('#menu3').on('click', function(){		
			$('#content').attr('src', 'http://bing.com');
			
		});
		
		
	});
