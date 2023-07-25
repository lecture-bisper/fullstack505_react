package com.bitc.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:3000")
@RestController
public class BackEndController {

  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  public String hello() throws Exception {
    return "Hello World!!";
  }
}
