package com.bitc.boardapiserver.controller;

import com.bitc.boardapiserver.dto.BoardDto;
import com.bitc.boardapiserver.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/board")
@RestController
public class BoardController {

  private final BoardService boardService;

  @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
  public Object selectBoardList() throws Exception {
    List<BoardDto> boardList = boardService.selectBoardList();
    return boardList;
  }

  @RequestMapping(value = "/{idx}", method = RequestMethod.GET)
  public Object selectBoardDetail(@PathVariable("idx") int idx) throws Exception {
    return boardService.selectBoardDetail(idx);
  }

  @RequestMapping(value = "/write", method = RequestMethod.POST)
  public Object insertBoard( BoardDto board) throws Exception {
    boardService.insertBoard(board);

    Map<String, String> result = new HashMap<>();
    result.put("result", "success");

    return result;
  }

  @RequestMapping(value = "/{idx}", method = RequestMethod.PUT)
  public Object updateBoard(@PathVariable("idx") String idx, BoardDto board) throws Exception {
    boardService.updateBoard(board);

    Map<String, String> result = new HashMap<>();
    result.put("result", "success");

    return result;
  }

@RequestMapping(value = "/{idx}", method = RequestMethod.DELETE)
public Object deleteBoard(@PathVariable("idx") String idx) throws Exception {
    boardService.deleteBoard(Integer.parseInt(idx));

    Map<String, String> result = new HashMap<>();
    result.put("result", "success");

    return result;
  }
}
