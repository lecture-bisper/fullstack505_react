package com.bitc.boardapiserver.mapper;

import com.bitc.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
  public List<BoardDto> selectBoardList() throws Exception;
  public BoardDto selectBoardDetail(@Param("boardIdx") int boardIdx) throws Exception;
  public void insertBoard(BoardDto board) throws Exception;
  public void updateBoard(BoardDto board) throws Exception;
  public void deleteBoard(@Param("boardIdx") int boardIdx) throws Exception;
  public void updateHitCount(@Param("boardIdx") int boardIdx) throws Exception;
}
