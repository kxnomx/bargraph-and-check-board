/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/

var row1 = 0;
var row2 = 0;
var row3 = 0;
var row4 = 0;
var row5 = 0;
var row6 = 0;
var row7 = 0;

for (var i = 0; i < 36; i++) {
        var piece = document.createElement('div');            // create an empty div
    piece.setAttribute('class', 'piece');                 // assign the div class="piece"
    document.getElementById('board').appendChild(piece);  // add the div to the id="board"
    piece.style.top = '0px';                              // assign the top/y position
    piece.style.left = i*100+'px';                            // assign the left/x position

    
       if (i >= 6) {
                 piece.style.top = '100px'; 
                 piece.style.left = row2*100+'px';
                 row2 ++;
                 
            }
            
    if (i >= 12) {
                 piece.style.top = '200px'; 
                 piece.style.left = row3*100+'px';
                 row3 ++;
                 
            }
            
             if (i >= 18) {
                 piece.style.top = '300px'; 
                 piece.style.left = row4*100+'px';
                 row4 ++;
                 
            }
            
    if (i >= 24) {
                 piece.style.top = '400px'; 
                 piece.style.left = row5*100+'px';
                 row5 ++;
                 
            }
            
             if (i >= 30) {
                 piece.style.top = '500px'; 
                 piece.style.left = row6*100+'px';
                 row6 ++;
                 
            }
            
    if (i > 35) {
                 piece.style.top = '600px'; 
                 piece.style.left = row7*100+'px';
                 row7 ++;
                 
            }
            
}

    
    /*
     if ( i < 6) {
piece.style.top = '0px'
piece.style.left = row1*100+'px';
row1 ++;
}

    if ( i < 12) {
    piece.style.top = '100px'
    piece.style.left = row2*100+'px';
    row2 ++;
    }
    
    if ( i < 18) {
    piece.style.top = '200px'
    piece.style.left = row3*100+'px';
    row3 ++;
    }
    
    if ( i < 24) {
    piece.style.top = '300px'
    piece.style.left = row4*100+'px';
    row4 ++;
    }
    
    */

    
