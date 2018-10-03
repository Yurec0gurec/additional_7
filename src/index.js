module.exports = function solveSudoku(matrix) {
    
    for (let k = 0; k < 9; k++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[k][j] === 0) {
                for (let suggestNumber = 1; suggestNumber <= 9; suggestNumber++) {
                    //если вспомогательная функция возвращает true вставляем на данную позицию предполагаемое число
                    if (rightCandidate(matrix, k, j, suggestNumber)) {
                        matrix[k][j] = suggestNumber;
                        //проверяем всё ли на месте
                        if (solveSudoku(matrix)) {
                            return matrix;
                        }
                        matrix[k][j] = 0;
                    }
                }
                return false;
            }
        }
    }
  return true;
}

function rightCandidate(matrix, vert, horz, suggestNumber) {
    // инициализация переменных для боксов 3х3
    let mainColumn = Math.floor(horz / 3) * 3;
    let mainRow = Math.floor(vert / 3) * 3;
    
    // проверяем на наличие кандидата по вертикали
    for (let cl = 0; cl < 9; cl++) {
        if (matrix[vert][cl] === suggestNumber && cl != horz) {
            return false;
        }
    }

    // проверяем на наличие кандидата по горизонтали

    for (let rw = 0; rw < 9; rw++) {
        if (matrix[rw][horz] === suggestNumber && rw != vert ) {
            return false;
        }
    }

    // проверяем на наличие кандидата в боксе 3х3
    for (let rw = 0; rw < 3; rw++) {
        for (let cl = 0; cl < 3; cl++) {
            if (matrix[mainRow + rw][mainColumn + cl] === suggestNumber && rw != vert && cl != horz) {
                return false;
            }
        }
    }

    return true;
}
