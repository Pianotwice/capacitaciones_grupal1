<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
=======
	<head>
		<html lang=en>
		<meta charset="ISO-8859-1">
		<title>LOG IN</title>
		<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
		<link rel="stylesheet" href="estilos/estilodos.css">
	</head>
	<body>
		<!-- Menú y sección importante del trabajo -->
		
		<div class="menu-container">
			<div class="contenedor-header">
        		<header>
            		<div class="logo">
                		<a href="#">Log In || Sign up</a>
                	</div>
            		<nav id="nav">
                		<ul>
                    		<li><a href="#inicio">INICIO</a></li>
                    		<li><a href="#sobrenosotros">NOSOTROS</a></li>
                    		<li><a href="#capacitaciones">CAPACITACIONES</a></li>
                    		<li><a href="#contacto">CONTACTO</a></li>
                    		<li><a href="#login" id="login-btn">LOG IN</a></li>
                		</ul>
            		</nav>
            	<div class="nav-responsive">
                	<i class="fa-solid fa-bars"></i>
            	</div>
        		</header>
    		</div>
    	</div>
    	<div class="section">
			<div class="container">
				<div class="row full-height justify-content-center">
					<div class="col-12 text-center align-self-center py-5">
						<div class="section pb-5 pt-5 pt-sm-2 text-center">
							<h6 class="mb-0 pb-3 center-text"><span>Log In </span><span>Sign Up</span></h6>
			          		<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          		<label for="reg-log"></label>
							<div class="card-3d-wrap mx-auto">
								<div class="card-3d-wrapper">
									<div class="card-front">
										<div class="center-wrap">
											<div class="section text-center">
												<h4 class="card-title">Log In</h4>
    												<form action="Holamundo" method="POST">
        												<label for="username">Usuario:</label>
        												<input type="text" id="username" name="username" required><br><br>
        												<label for="password">Contraseña:</label>
        												<input type="password" id="password" name="password" required><br><br>
        												<input type="submit" value="Submit">
        											</form>
        									</div>
			      						</div>
			      					</div>
			      					<div class="card-back">
										<div class="center-wrap">
											<div class="section text-center">
												<h4 class="card-title">Sign up</h4>
													<form action="Holamundo" method="POST">
        												<label for="username">Usuario:</label>
        												<input type="text" id="username" name="username" required><br><br>
        												<label for="password">Contraseña:</label>
        												<input type="password" id="password" name="password" required><br><br>
        												<ul class="helper-text">
        													<li class="largo">Debe tener al menos 8 caracteres de largo.</li>
        													<li class="minusculas">Debe tener al menos 1 letra en minúsculas.</li>
        													<li class="mayusculas">Debe tener al menos 1 letra en mayúsculas.</li>
        													<li class="especial">Debe tener al menos 1 caracter especial.</li>
        												</ul>
        												<label for="password">Confirmar contraseña:</label>
        												<input type="password" id="confirmPassword" name="password2" required><br><br>
        												<span id="password-error" style="color: red;"></span>
        												<label for="mail">Correo electrónico:</label>
        												<input type="email" id="mail" name="mail" required><br><br>
        												<input type="submit" value="Submit">
        											</form>
											</div>
>>>>>>> b3b95d67e810822920f145ee6feed063ff344e36
										</div>
									</div>
								</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="card-title">Sign up</h4>
											<form action="Holamundo" method="POST">
												<label for="username">Usuario:</label> <input type="text"
													id="username" name="username" required><br>
												<br> <label for="password">Contraseña:</label> <input
													type="password" id="password" name="password" required><br>
												<br>
												<ul class="helper-text">
													<li class="largo">Debe tener al menos 8 caracteres de
														largo.</li>
													<li class="minusculas">Debe tener al menos 1 letra en
														minúsculas.</li>
													<li class="mayusculas">Debe tener al menos 1 letra en
														mayúsculas.</li>
													<li class="especial">Debe tener al menos 1 caracter
														especial.</li>
												</ul>
												<label for="password">Confirmar contraseña:</label> <input
													type="password" id="confirmPassword" name="password2"
													required><br>
												<br> <span id="password-error" style="color: red;"></span>
												<label for="mail">Correo electrónico:</label> <input
													type="text" id="mail" name="mail" required><br>
												<br> <input type="submit" value="Submit">
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mensaje-error">
		<% String mensajeError = (String) request.getAttribute("mensajeError");
				if (mensajeError != null) { %>
		<p><%= mensajeError %></p>
		<% } %>
	</div>
</body>
</html>