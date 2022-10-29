package com.saraya.TransportManagement.payload.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.saraya.TransportManagement.models.Branch;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Set;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.*;

@Data
@Getter
@Setter
public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String firstname;

  @NotBlank
  @Size(min = 3, max = 20)
  private String lastname;

  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;


 @OneToOne
  @JoinColumn(name = "branch_id")
  @JsonIgnoreProperties
  @OnDelete(action = OnDeleteAction.CASCADE)
  private Branch branch;

  private Set<String> role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;



}
