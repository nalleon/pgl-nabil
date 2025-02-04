package es.iespuertodelacruz.nla.institutov2.security;

import java.io.IOException;
import java.util.*;

import es.iespuertodelacruz.nla.institutov2.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import static java.lang.Integer.parseInt;

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

@Component
public class JwtFilter extends OncePerRequestFilter {

    public static final String authHeader="Authorization";
    public static final String authHeaderTokenPrefix="Bearer ";

    @Autowired
    private JwtService jwtTokenManager;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {


        String path = request.getRequestURI();

        Set<String> rutasPermitidas = Set.of(
                "/swagger-ui.html", "/swagger-ui/", "/v2/", "/configuration/",
                "/swagger", "/webjars/", "/instituto/api/login", "/instituto/api/register",
                "/v3/", "/websocket", "/index.html", "/instituto/api/v1/",
                "/instituto/api/confirmation"
        );

        for (String ruta : rutasPermitidas) {
            if (path.startsWith(ruta)) {
                filterChain.doFilter(request, response);
                return;
            }
        }

        //rutas permitidas sin estar autenticado

        //String rutasPermitidas[] = {};

        //el token viene en un header Authorization
        String header = request.getHeader(authHeader);

        //típicamente se precede el token con bearer:  Bearer token
        if (header != null && header.startsWith(authHeaderTokenPrefix)) {

            String token = header.substring(authHeaderTokenPrefix.length());
            try {
                Map<String, String> mapInfoToken = jwtTokenManager.validateAndGetClaims(token);

                System.out.println(mapInfoToken);
                //System.out.println(mapInfoToken);
                final String nombreusuario=mapInfoToken.get("username");

                final String rol = mapInfoToken.get("role");

                final String verificado = mapInfoToken.get("verificado");

                if ("0".equals(verificado)) {
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    response.getWriter().write("Account not verified");
                    return;
                }

                //UserDetails en Spring Security es un interfaz basado en Principal de java
                //y es la forma que tiene Spring de mantener la información de usuario "autenticado"
                //en el contexto de seguridad. Nos permite guardar la información de username
                //y authorities ( los roles si se admiten múltiples roles ) Creamos un objeto de clase anónima UserDetails:
                UserDetails userDetails = new UserDetails() {

                    String username=nombreusuario;

                    @Override
                    public Collection<? extends GrantedAuthority> getAuthorities() {
                        List<GrantedAuthority> authorities = new ArrayList<>();

                        authorities.add(new SimpleGrantedAuthority(rol));
                        return authorities;
                    }

                    @Override
                    public String getPassword() { return null; 	}

                    @Override
                    public String getUsername() {
                        return username;
                    }

                };



                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);



                filterChain.doFilter(request, response);

            } catch (JWTVerificationException e) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }

        }
    }
}
