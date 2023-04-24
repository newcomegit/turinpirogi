import { Component } from '@angular/core';

@Component({
  selector: 'app-xo',
  templateUrl: './xo.component.html',
  styleUrls: ['./xo.component.css']
})
export class XoComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  player: string = 'X';
  status: string = '';

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.player;
      if (this.checkWin()) {
        this.status = `${this.player} yutdi!`;
      } else if (this.checkTie()) {
        this.status = 'Durrang!';
      } else {
        this.player = this.player === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWin(): boolean {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (this.board[0][j] !== '' && this.board[0][j] === this.board[1][j] && this.board[1][j] === this.board[2][j]) {
        return true;
      }
    }
    // Check diagonals
    if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return true;
    }
    return false;
  }

  checkTie(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }

  reset() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.player = 'X';
    this.status = '';
  }

}
