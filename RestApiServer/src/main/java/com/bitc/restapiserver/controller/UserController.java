package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.dto.UserDto;
import com.bitc.restapiserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@Autowired 대신 사용
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/user/")
public class UserController {

//  @RequiredArgsConstructor 사용 시 final로 설정
  private final UserService userService;

  @RequestMapping(value = "/selectUserList", method = RequestMethod.GET)
  public Object getUserList() throws Exception {
    Map<String, Object> result = new HashMap<String, Object>();

    List<UserDto> userList = userService.getUserList();

    if (userList.size() > 0) {
      result.put("result", "success");
      result.put("msg", "result OK");
      result.put("data", userList);
    }
    else {
      result.put("result", "error");
      result.put("msg", "result 0");
    }

    return result;
  }

  @RequestMapping(value = "/insertUser", method = RequestMethod.POST)
  public Object setUser(
      @RequestParam("userId") String userId,
      @RequestParam("userPw") String userPw,
      @RequestParam("userName") String userName,
      @RequestParam("userEmail") String userEmail
  ) throws Exception {
    UserDto user = new UserDto();
    user.setUserId(userId);
    user.setUserPw(userPw);
    user.setUserName(userName);
    user.setUserEmail(userEmail);

    userService.setUser(user);
    int isUser = userService.isUser(userId);

    Map<String, Object> result = new HashMap<>();

    if (isUser == 1) {
      result.put("result", "success");
      result.put("msg", "정상 등록되었습니다.");
    }
    else {
      result.put("result", "error");
      result.put("msg", "DB 등록 중 오류가 발생했습니다.");
    }

    return result;
  }

  @RequestMapping(value = "/insertUserDto", method = RequestMethod.POST)
  public Object setUser(UserDto user) throws Exception {
    userService.setUser(user);
    int isUser = userService.isUser(user.getUserId());

    Map<String, Object> result = new HashMap<>();

    if (isUser == 1) {
      result.put("result", "success");
      result.put("msg", "정상 등록되었습니다.");
    }
    else {
      result.put("result", "error");
      result.put("msg", "DB 등록 중 오류가 발생했습니다.");
    }

    return result;
  }

}
