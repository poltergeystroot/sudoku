"use strict"
module.exports = function solveSudoku(matrix) {
    solution(matrix);
    return matrix;
  }
  function solution(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix.length; j++) {
        if (matrix[i][j] == 0) {
          var line = functionLine(matrix, i);
          var column = functionColumn(matrix, j);
          var block = functionBlock(matrix, i, j);
          for (var k = 1; k < 10; k++) {
            if (verification(block, line, column, k)) {
              matrix[i][j] = k;
              if (solution(matrix)) return true;
              matrix[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;  
  }
  function functionLine(matrix, index) {
    var line = [];
    for (var i = 0; i < 9; i++) {
      line.push(matrix[index][i])
    }
    return line;
  }
  function functionColumn(matrix, index) {
    var column = [];
    for (var i = 0; i < 9; i++) {
      column.push(matrix[i][index])
    }
    return column;
  }
  function functionBlock(matrix, i, j) {
    var block = [];
    for (var a = 0; a < 3; a++) {
      for (var b = 0; b < 3; b++) {
        block.push(matrix[Math.floor((i / 3)) * 3 + a][Math.floor((j / 3)) * 3 + b]);
      }
    }
    return block;
  }
  function verification(block, line, column, k) {
    for (var i = 0; i < 9; i++) {
      if (k == block[i] || k == line[i] || k == column[i]) {
        return false;
      }
    }
    return true;
    };