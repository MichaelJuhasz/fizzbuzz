$(document).ready(function(){
	$("#fizz").click(function(){
		var text = "";
		var num = $("#num").val();
		var patt = /[^0-9]+/;
		if (patt.test(num)){
			text += "<p>I said NUMBER, numbskull.</p>";
		}
		
		else if(num > Number.MAX_SAFE_INTEGER)
		{
			text += "<p>You want to be here all day?</p>";
		}
		
		else {
			text = "<ul>"
			for (var i = 1; i <= num; i++)
			{
				if (i % 3 == 0)
					text += "<li>fizz</li>";
				else if (i % 5 == 0)
					text +="<li>buzz</li>";
				else 
					text += "<li>"+ i +"</li>";
			}
			text += "</ul><p id='wow'>Wow!</p>"
		}

		$("#output").html(text);
		$("#num").val("");
	})
})