package com.bitc.boardapiserver.service;

import com.bitc.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardService {
  public List<BoardDto> selectBoardList() throws Exception;
  public BoardDto selectBoardDetail(@Param("boardIdx") int boardIdx) throws Exception;
  public void insertBoard(BoardDto board) throws Exception;
  public void updateBoard(BoardDto board) throws Exception;
  public void deleteBoard(@Param("boardIdx") int boardIdx) throws Exception;
}
