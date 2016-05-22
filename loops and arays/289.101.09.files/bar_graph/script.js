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

var left = 0
var color = 0


    for (var i = 0; i <=18 ; i++) {

        var bar = document.createElement('div');           
    bar.setAttribute('class', 'bar');                 
    document.getElementById('frame').appendChild(bar);  
    bar.style.height = '100px';
    bar.style.backgroundColor = data[color];
    bar.style.left = left +'px';
    left += 40;
    color += 2;
    height += 2;
    };

/*
         console.log(data[1])

    for (var i = 0; i < data.length; i++) {
            document.write(data[i]);
            document.write ('</br>')
        var bar = document.createElement('div');           
    bar.setAttribute('class', 'bar');                 
    document.getElementById('frame').appendChild(bar);  
    bar.style.top = '0px';                             
    bar.style.left = i*100+'px';
    
    /*
    <div class="bar" style="height:400px; left:20px; background-color:green"></div>
    <div class="bar" style="height:200px; left:60px; background-color:yellow"></div>
    <div class="bar" style="height:40px; left:100px; background-color:orange"></div>
    <div class="bar" style="height:300px; left:140px; background-color:purple"></div>
    */
    /*
var green = 0;
var yellow = 0;
var orange = 0;
var purple = 0;


        if (i < data.length) {
                 bar.style.height = '400px';
                 bar.style.left = green*100+'20px';
                 bar.style.backgroundColor = 'green';
                 green ++;
                 
            }
            
   else if (i < data.length) {
        
                 bar.style.height = '200px';
                 bar.style.left = yellow*100+'60px';
                 bar.style.backgroundColor = 'yellow';
                 yellow ++;
                 
            }
            
       else  if (i < data.length) {
                bar.style.height = '40px'
                 bar.style.top = '100px'; 
                 bar.style.left = orange*100+'100px';
                 bar.style.backgroundColor = 'orange'
                 orange ++;
                 
            }
            
   else if (i < data.length) {
                 bar.style.top = '200px'; 
                 bar.style.left = purple*100+'140px';
                 purple ++;
                 
            }
            
}





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
