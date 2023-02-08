package com.example.BusTicketBooking.service;


import com.example.BusTicketBooking.dto.AuthRequest;
import com.example.BusTicketBooking.dto.AuthResponse;
import com.example.BusTicketBooking.dto.JwtResponse;
import com.example.BusTicketBooking.exception.EmailAlreadyExistsException;
import com.example.BusTicketBooking.exception.ResourceNotFoundException;
import com.example.BusTicketBooking.model.User;
import com.example.BusTicketBooking.repository.RoleRepository;
import com.example.BusTicketBooking.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.BusTicketBooking.model.Role;



@Service
public class AuthService {
    final Logger logger = LoggerFactory.getLogger(AuthService.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
   public ResponseEntity<AuthResponse>registerUser(AuthRequest request){
        if(Boolean.TRUE.equals(userRepository.existsByEmail(request.getEmail()))){
            logger.error("user already exist");
            throw new EmailAlreadyExistsException("Email already exists");
        }
        User user = new User();
        Role role = roleRepository.findByName("ROLE_USER").orElseThrow(()->new UsernameNotFoundException("ROLE_USER EXCEPTION"));
        user.setRole(role);
        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(passwordEncoder.encode(request.getPassword()));
        logger.info("user registered");
        userRepository.save(user);
        return ResponseEntity.ok(new AuthResponse(user.getEmail()+" successfully registered",true));
    }

    public ResponseEntity<JwtResponse>loginUser(AuthRequest request){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            logger.info("user logged in");
            Role role=userRepository.findByEmail(request.getEmail()).get().getRole();
            return ResponseEntity.ok(new JwtResponse(jwtService.generateToken(request.getEmail()),true,role.getName())) ;
        }
        catch (AuthenticationException ex){
            logger.error("invalid user credentials");
            throw new ResourceNotFoundException("User",request.getEmail(),"invalid user email or password");
        }
    }
}
