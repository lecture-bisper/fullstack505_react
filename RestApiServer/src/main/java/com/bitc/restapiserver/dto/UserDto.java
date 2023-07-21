package com.bitc.restapiserver.dto;

import lombok.Data;

@Data
public class UserDto {
  private String userId;
  private String userPw;
  private String userName;
  private String userEmail;
}
