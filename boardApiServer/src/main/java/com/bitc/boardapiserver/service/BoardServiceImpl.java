package com.bitc.boardapiserver.service;

import com.bitc.boardapiserver.dto.BoardDto;
import com.bitc.boardapiserver.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

  private final BoardMapper boardMapper;

  @Override
  public List<BoardDto> selectBoardList() throws Exception {
    return boardMapper.selectBoardList();
  }

  @Override
  public BoardDto selectBoardDetail(int boardIdx) throws Exception {
    boardMapper.updateHitCount(boardIdx);
    return boardMapper.selectBoardDetail(boardIdx);
  }

  @Override
  public void insertBoard(BoardDto board) throws Exception {
    boardMapper.insertBoard(board);
  }

  @Override
  public void updateBoard(BoardDto board) throws Exception {
    boardMapper.updateBoard(board);
  }

  @Override
  public void deleteBoard(int boardIdx) throws Exception {
    boardMapper.deleteBoard(boardIdx);
  }
}
