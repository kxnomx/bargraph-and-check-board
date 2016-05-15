// generate the graph's bars using this data array

data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

var green = 100;
var yellow = 50;
var orange = 0;
var purple = 0;
var brown = 0;

         console.log(data[1])

    for (var i = 0; i < data.length; i++) {
            document.write(data[i]);
            document.write ('</br>')
        var bar = document.createElement('div');           
    bar.setAttribute('class', 'bar');                 
    document.getElementById('frame').appendChild(bar);  
    bar.style.top = '0px';                             
    bar.style.left = i*100+'px';

if (i >= 100) {
                 bar.style.top = '100px'; 
                 bar.style.left = green*100+'px';
                 green ++;
                 
            }
            
    if (i >= 50) {
                 piece.style.top = '200px'; 
                 piece.style.left = yellow*100+'px';
                 yellow ++;
                 
            }
            
}

var data = [
  {
    x: ['green', 'orange', 'yellow'],
    y: [20, 14, 23],
    type: 'bar'
  }
];



/*
        function drawBarChart(dataset, idOfCOntainer) {
            var chartContainer = _div(idOfCOntainer);
            
            if (typeof(dataset) !="object") {
                return;
            }
        }

console.log(data[1])

var data = 100;
var data2 = 50;
var data = 0;
var data = 0;
var data = 0;
 
    for(var i =0; i < dataset.length ; i++) {
            document.write(data[i]);
            document.write ('</br>')
    data = document.createElement('div');            // create an empty div
    data.setAttribute('class', 'bar');                 // assign the div class="piece"
    document.getElementById('board').appendChild(data);  // add the div to the id="board"
    data.style.top = '0px';                              // assign the top/y position
    data.style.left = i*100+'px';                            // assign the left/x position
    }
    
    
       if (i >= 100 ) {
                 data.style.top = '100px'; 
                 data.style.left = data*100+'px';
                 data ++;
                 
            }
            
    if (i >= 50) {
                 data.style.top = '200px'; 
                 data.style.left = data2*100+'px';
                 data2 ++;
                 
            }
            
}


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
