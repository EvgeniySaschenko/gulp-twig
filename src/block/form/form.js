(function(){
	let reset= (form) =>{
		let field= form.querySelectorAll('[name]');
		for( let i= 0, l= field.length; l > i; i++ ){
			field[i].value= '';
		}
	}

	// document.querySelector('form [type="submit"]').addEventListener("click", function(e){
	// 	e.preventDefault();
	// 	for(let i= 0, l= e.path.length; l > i; i++ ){
	// 		if( e.path[i].tagName.toLowerCase() == 'form' ){
	// 			reset(e.path[i]);
	// 			break;
	// 		}
	// 	}
	// });
	// var element = document.getElementById('[name="name"]');
	// var maskOptions = {
	// 	mask: '+{7}(000)000-00-00'
	// };
	// var mask = new IMask(element, maskOptions);
})();