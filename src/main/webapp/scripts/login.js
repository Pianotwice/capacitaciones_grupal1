/**
 * Aquí voy a generar esa acción necesaria para rayar cuando se ha cumplido
 * el requisito de la contraseña
 */

 (function() {
	let password = document.querySelector('.password');

	let helperText = {
		charLength: document.querySelector('helper-text .largo'),
		lowercase: document.querySelector('helper-text .minusculas'),
		uppercase: document.querySelector('helper-text .mayusculas'),
		special: document.querySelector('helper-text .especial')
	};
})();

password.addEventListener('keyup', function() {
  // Chequeamos que la contraeña contenga por lo menos 8 caracteres
	patternTest(pattern.charLength(), helperText.charlength);

  // Chequeamos que la contraseña obtenga por lo menos un caracter con minúsculas
	patternTest(pattern.lowercase(), helperText.lowercase);

  // Chequeamos que la contraseña obtenga por lo menos un caracter con mayúsculas
	patternTest(pattern.uppercase(), helperText.uppercase);

  // Chequeamos que la contraseña obtenga por lo menos un caracter especial
	patternTest(pattern.special(), helperText.special);

  // Chequeamos que todos los requerimientos se han cumplido
	if (
		hasClass(helperText.charlength, 'valid') &&
		hasClass(helperText.lowercase, 'valid') &&
		hasClass(helperText.uppercase, 'valid') &&
		hasClass(helperText.special, 'valid')
	) {
    addClass(password.parentElement, 'valid');
  } else {
    removeClass(password.parentElement, 'valid');
  }
});

let pattern = {
  charLength: function() {
    if (password.value.length >= 8) {
      return true;
    }
  },
  lowercase: function() {
    let regex = /^(?=.*[a-z]).+$/; // Patrón de caracteres con minúsculas
    return regex.test(password.value);
  },
  uppercase: function() {
    let regex = /^(?=.*[A-Z]).+$/; // Patrón de caracteres con mayúsculas
    return regex.test(password.value);
  },
  special: function() {
    let regex = /^(?=.*[0-9_\W]).+$/; // Pattern for special characters
    return regex.test(password.value);
  }
};

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(
      new RegExp(
        "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
        "gi"
      ),
      ""
    );
  }
}

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp("(^|\\s)" + className + "(\\s|$)","i").test(el.className);
	}
}

function patternTest(pattern, response) {
	if (pattern) {
		addClass(response, 'valid');
  	} else {
    	removeClass(response, 'valid');
	}
}

function addClass(el, className) {
	if (el.classList) {
    	el.classList.add(className);
	} else {
		el.className += " " + className;
	}
}