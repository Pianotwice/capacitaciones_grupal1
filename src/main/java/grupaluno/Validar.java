package grupaluno;

public class Validar {
	public boolean validarDatos(String password, String confirmPassword, String email) {
	    if (!password.equals(confirmPassword)) {
	        return false; // Las contraseñas no coinciden
	    }

	    if (!email.contains("@") || !email.contains(".")) {
	        return false; // El correo no cumple con el formato válido
	    }

	    return true; // Los datos son válidos
	}
}