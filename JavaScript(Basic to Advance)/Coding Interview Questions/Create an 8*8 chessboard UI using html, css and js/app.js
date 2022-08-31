//Create an 8*8 chessboard UI using html, css and js 
let table = document.createElement('table');

for(let i = 0; i < 8; i++){
    let row = document.createElement('tr');
    for(let j = 0; j < 8; j++) {
        let col = document.createElement('td');
        if((i + j)%2 === 0){
            col.setAttribute('class', 'cell white-cell');
            row.append(col);
        }
        else{
            col.setAttribute('class', 'cell black-cell');
            row.append(col);
        }
    }
    table.append(row);
}
table.setAttribute('cellspacing', '0');
document.body.append(table);
