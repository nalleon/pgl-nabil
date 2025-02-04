package es.iespuertodelacruz.nla.institutov2.security;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;




import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

@Service
public class JwtService {

    //@Value("${jwt.secret}")
    private String secret="readumineko";

    //@Value("${jwt.expiration}")
    private long expiration=9876543210L;

    public String generateToken(String username, String rol, int verificado) {
        return JWT.create()
                .withSubject(username)
                .withClaim("role", rol)
                .withClaim("verificado",verificado)
                .withExpiresAt(new Date(System.currentTimeMillis() + expiration))
                .sign(Algorithm.HMAC256(secret));
    }


    public  Map<String, String> validateAndGetClaims(String token) {
        Map<String, Claim> claims = JWT.require(Algorithm.HMAC256(secret))
                .build()
                .verify(token)
                .getClaims();

        Map<String,String> infoToken = new HashMap<String,String>();
        infoToken.put("username", claims.get("sub").asString());
        infoToken.put("role", claims.get("role").asString());
        infoToken.put("verificado", claims.get("verificado").asString());

        return infoToken;
    }
}
