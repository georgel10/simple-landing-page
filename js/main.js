function validateForm(){
	var email = document.loginform.email.value;
    var password = document.loginform.password.value;
    var validation = true;

    $('#login-form').find('.error').remove();

    if (email === "") { // verificar email no este vacio
    	$('#login-form')
    	.find('input[name=email]')
    	.parent()
    	.append('<span class="text-danger error">Debe colocar un email</span>');
        validation = false;
    } else if (!validateEmail(email)) { // verificar el formato del email
    	$('#login-form')
    	.find('input[name=email]')
    	.parent()
    	.append('<span class="text-danger error">Debe colocar un email valido</span>');
        validation = false;
    }

    if (password.replace(/\s/g,'') === "" ) { //verificar que la clave no este vacia
    	$('#login-form')
    	.find('input[name=password]')
    	.parent()
    	.append('<span class="text-danger error">Debe colocar una clave</span>');
        validation = false;
    } else if (password.replace(/\s/g,'').length <= 4 ) { //verificar que tenga por lo menos 4 carácteres
    	console.log('gfgf')
    	$('#login-form')
    	.find('input[name=password]')
    	.parent()
    	.append('<span class="text-danger error">La clave debe ser mayor a 4 carácteres</span>');
        validation = false;
    }
    
    return validation;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}