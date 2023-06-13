package grupaluno;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Inicio
 */
@WebServlet("/Inicio")
public class Inicio extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Inicio() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("login.jsp");
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("password2");
        String mail = request.getParameter("mail");

        // Crear una instancia de Validar y llamar al método validarDatos()
        Validar validar = new Validar();
        boolean datosValidos = validar.validarDatos(password, confirmPassword, mail);

        if (datosValidos) {
            response.sendRedirect("plataforma.jsp");
        } else {
        	String mensaje = "Las contraseñas no coinciden. Por favor, inténtalo nuevamente.";
            request.setAttribute("mensajeError", mensaje);
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }
    }
}