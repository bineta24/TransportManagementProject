package com.saraya.TransportManagement.payload.response;

import com.saraya.TransportManagement.models.Branch;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
public class JwtResponse {
  private String token;
  private String type = "Bearer";
  private Long id;
  private String firstname;
  private String lastname;
  private String username;
  private String email;
  private Branch branch;
  private List<String> roles;

  public JwtResponse(String token, Long id, String firstname, String lastname, String username, String email, Branch branch, List<String> roles) {
    this.token = token;
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.branch = branch;
    this.roles = roles;

  }
}
