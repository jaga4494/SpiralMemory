var m=100, n=100;
var spiralMemory = new Array(m);
// Initialize the array elements to zero
function clearArray()
{
  for(let i = 0; i < m; i++){
    spiralMemory[i] = new Array(n);
    for(let j = 0; j < n; j++)
     spiralMemory[i][j]=0;
  }
}
clearArray();

// Start filling the elements from center of the array
var i = m/2, j = n/2;
var counter =1 ,counterTemp = 1,twiceCount = 2;
var k = 0;
var current = 1;
var di = [ 0, -1 , 0 , 1];
var dj = [ 1,  0 ,-1 , 0];

// Reset values of the variables because we start calculating from first when
// current user input is less than the previous one
function resetValues(){
   i = m/2, j = n/2;
   counter =1;
   counterTemp = 1;
   twiceCount = 2;
   k = 0;
   current = 1;
   clearArray();
}

// Builds the spiral array
function buildSpiral(limit){
    spiralMemory[i][j] = current;
    // Calculate till input(limit) becomes less than the current calculated element
    while (current < limit){
      // move to the next position in array
      i += di[k];
      j += dj[k];
      //add the neighbor values
      current = updateSpiral(i, j);
      // store calculated value in array
      spiralMemory[i][j]= current;
      // finds number of steps to move in a direction of the spiral array
      if (--counter == 0){
        k = ( k+1 ) %4;
        if(--twiceCount != 0)
          counter = counterTemp;

        else{
          counterTemp++;
          counter=counterTemp;
          twiceCount=2;
        }
      }
    }
}

// Finds the Manhattan distance
function getManhattanDistance(){
  return Math.abs(i-m/2) + Math.abs(j-n/2);
}

function updateSpiral(xloc, yloc){
    if (xloc > 0 && xloc < m && yloc > 0 && yloc < n)
      return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc - 1][yloc - 1] + spiralMemory[xloc - 1][yloc + 1]
          + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc]
          + spiralMemory[xloc + 1][yloc - 1] + spiralMemory[xloc + 1][yloc + 1];

    // Handles corner cases of xloc and yloc values. Mostly not required for our problem
    // since the values fall in the range.
    else if (xloc == 0 || yloc == 0) {
      if (xloc == 0 && yloc == 0) {
        return spiralMemory[xloc + 1][yloc] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc + 1];
      } else if (xloc == 0)
        return spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc]
            + spiralMemory[xloc + 1][yloc - 1] + spiralMemory[xloc + 1][yloc + 1];
      else
        return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc + 1][yloc] + spiralMemory[xloc - 1][yloc + 1]
            + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc + 1];
    }

    else if (xloc == m || yloc == n) {
      if (xloc == m && yloc == n) {
        return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc - 1][yloc - 1];
      } else if (xloc == m)
        return spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc - 1][yloc]
            + spiralMemory[xloc - 1][yloc - 1] + spiralMemory[xloc - 1][yloc + 1];
      else
        return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc + 1][yloc] + spiralMemory[xloc - 1][yloc - 1]
            + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc + 1][yloc - 1];

    }
    return 0;
}
// Function which is called when user clicks on the calculate button
function main(){
  var input = parseInt(document.getElementById("val").value)
  // Reset the values of all variables when the current user input is less than
  // the previous one else make use of already built array
  if(input < current )
    resetValues();
  // Build the spiral array
  buildSpiral(input);
  var output = document.getElementById("output")
  output.innerHTML = getManhattanDistance();
}
