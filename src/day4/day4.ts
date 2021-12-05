const transposeBoard = (board: number[][]) => board[0].map((row, col) => board.map((row) => row[col]));

export class Bingo {
    private numbers: number[] = [];
    private boards: number[][][] = [];
    private lastSaidNumber: number = 0;

    constructor(data: string) {
        const parts = data.split('\n\n');
        this.numbers = parts.shift()!.split(',').map(Number);
        this.boards = parts.map((board) => board.split('\n').map((row) => row.trim().split(/\s+/g).map(Number)));
    }

    private checkWins(): number {
        for (const board of this.boards) {
            const horizontal = board.some((row) => row.every((cell) => cell === -1));
            const vertical = transposeBoard(board).some((row) => row.every((cell) => cell === -1));

            if (horizontal || vertical) {
                const sumUnmarked = ([] as number[])
                    .concat(...board)
                    .filter((cell) => cell !== -1)
                    .reduce((a, b) => a + b);

                return sumUnmarked * this.lastSaidNumber;
            }
        }
        return -1;
    }

    markBoards(number: number) {
        this.boards = this.boards.map((board) =>
            board.map((row) =>
                row.map((cell) => (cell === number ? -1 : cell))
            )
        );
    }

    sayNextNumber(): number {
        this.lastSaidNumber = this.numbers.shift()!;
        return this.lastSaidNumber;
    }

    public solve(): number {
        let result = -1;
        while (result < 0) {
            this.markBoards(this.sayNextNumber());
            result = this.checkWins();
        }
        return result;
    }
}

export const day4 = (input: string) => new Bingo(input).solve();
