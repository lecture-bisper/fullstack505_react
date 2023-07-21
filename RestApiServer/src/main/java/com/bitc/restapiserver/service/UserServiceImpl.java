package com.bitc.restapiserver.service;

import com.bitc.restapiserver.dto.UserDto;
import com.bitc.restapiserver.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

  private final UserMapper userMapper;

  @Override
  public List<UserDto> getUserList() throws Exception {
    return userMapper.getUserList();
  }

  @Override
  public void setUser(UserDto user) throws Exception {
    userMapper.setUser(user);
  }

  @Override
  public int isUser(String userId) throws Exception {
    return userMapper.isUser(userId);
  }
}
