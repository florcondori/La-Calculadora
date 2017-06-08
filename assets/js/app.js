$( _=>{
	let screenVal = $("input:text");

	$("input:button").on("click",function(){
		var eachNumber = $(this).val();
		var currentScreen = screenVal.val();

		currentScreen += eachNumber;
		screenVal.val(currentScreen);

		if(eachNumber == "C"){
			screenVal.val("");
		}
	});

	$("button").click(function(e){
		e.preventDefault();
		screenVal.val(eval(screenVal.val()));
	});
});
