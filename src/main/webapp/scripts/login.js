/**
 * Aquí voy a generar esa acción necesaria para rayar cuando se ha cumplido
 * el requisito de la contraseña
 */

 (function(){
	 let password = document.querySelector('.password');
	 
	 let helperText = {
		 charLength: document.querySelector('helper-text .largo'),
		 lowercase: document.querySelector('helper-text .minusculas'),
		 uppercase: document.querySelector('helper-text .mayusculas'),
		 special: document.querySelector('helper-text .especial')
	 };
 })();
 
 password.addEventListener("keyup", function(){
	 patternTest(pattern.charLength(), helperText.chalength); /* Chequea que el password 
	 tiene 8 caracteres */
	 
	 patternTest(pattern.lowercase(), helperText.lowercase); /* Chequea que el password 
	 tiene alguna minúscula */
	 
	 patternTest(pattern.uppercase(), helperText.uppercase); /* Chequea que elpassword 
	 tiene alguna letra mayúscula */
	 
	 patternTest(pattern.special(), helperText.special); /* Chequea que dentro del password
	  haya algún caracter especial*/
	 
	 if ( /* Con esto vamos a chequear que todo esté completo */
		 hasClass(helperText.charlength, "valid") &&
		 hasClass(helperText.lowercase, "valid") &&
		 hasClass(helperText.uppercase, "valid") &&
		 hasClass(helperText.special, "valid")
	 ){
		 addClass(password.parentElement, "valid");
	} else
	
	removeClass(password.parentElement, "valid");
	} 
 });
 
 let pattern = {
	 charLength: function () {
		 if (password.value.length >=8) {
			 return true;
		}
	},
	lowercase: function () {
		let regex = /^(?=.*[a-z]).+$/; // Patrón de caracteres en minúsculas
		if (regex.test(password.value)) {
			return true;
		}
	},
	uppercase: function () {
		let regex = /^(?=,*[A-Z]).+$/; // Patrón de las mayúsculas
		if (regex.text(password.value)) {
			return true;
		}
	},
	special: function () {
		let regex = /^(?=,*[0-9_\W]).+$/; // Patrón de los caracteres especiales o numerales
		if (regex.text(password.value)) {
			return true;
		}
	}
};

function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else
		el.className = el.className.replace(
			new RegExp(
				"(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
				"gi"
			),
			" "
		);
}

function hasClass(el, className) {
	if (el.classList) {
		console.log(el.classList);
		return el.classList.contains(className);
	} else {
		new RegExp("(^| )") + className + "( |$)","gi").test(el.className);
	}
}

function patterTest(pattern, response) {
	if (pattern) {
		addClass(response, "valid");
	} else {
		removeClass(response, "valid");
	}
}

function addClass(el, className) {
	if (el.classList) {
		el.classList.add(className);
	} else {
		el.className += " " + className;
	}
}