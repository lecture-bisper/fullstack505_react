package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

  List<UserDto> getUserList() throws Exception;

  void setUser(UserDto user) throws Exception;

  int isUser(String userId) throws Exception;
}
