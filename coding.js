var m=100, n=100;
var spiralMemory = new Array(m);

function clearArray()
{
  for(let i = 0; i < m; i++){
    spiralMemory[i] = new Array(n);
    for(let j = 0; j < n; j++)
     spiralMemory[i][j]=0;
  }
}
clearArray();
//var m = spiralMemory.length;
//var n = m;
// var mCenter = m / 2;
// var nCenter = n / 2;
var i = m/2, j = n/2;
var counter =1 ,counterTemp = 1,twiceCount = 2;
var k = 0;
var current = 1;
var di = [ 0, -1 , 0 , 1];
var dj = [ 1,  0 ,-1 , 0];

function resetValues(){
  console.log("resetting")
   i = m/2, j = n/2;
   counter =1 ,counterTemp = 1,twiceCount = 2;
   k = 0;
   current = 1;
   clearArray();
}


function buildSpiral(limit){
    spiralMemory[i][j] = current;
    while (current < limit){
      i += di[k];
      j += dj[k];
      current = updateSpiral(i, j);
      spiralMemory[i][j]= current;

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


function getManhattanDistance(){
  return Math.abs(i-m/2)+Math.abs(j-n/2);
}

function updateSpiral(xloc, yloc){


    if (xloc > 0 && xloc < m && yloc > 0 && yloc < n)
      return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc - 1][yloc - 1] + spiralMemory[xloc - 1][yloc + 1]
          + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc]
          + spiralMemory[xloc + 1][yloc - 1] + spiralMemory[xloc + 1][yloc + 1];

//     else if (xloc == 0 || yloc == 0) {
//       if (xloc == 0 && yloc == 0) {
//         return spiralMemory[xloc + 1][yloc] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc + 1];
//       } else if (xloc == 0)
//         return spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc]
//             + spiralMemory[xloc + 1][yloc - 1] + spiralMemory[xloc + 1][yloc + 1];
//       else
//         return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc + 1][yloc] + spiralMemory[xloc - 1][yloc + 1]
//             + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc + 1][yloc + 1];
//     }

//     else if (xloc == m || yloc == n) {
//       if (xloc == m && yloc == n) {
//         return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc - 1][yloc - 1];
//       } else if (xloc == m)
//         return spiralMemory[xloc][yloc - 1] + spiralMemory[xloc][yloc + 1] + spiralMemory[xloc - 1][yloc]
//             + spiralMemory[xloc - 1][yloc - 1] + spiralMemory[xloc - 1][yloc + 1];
//       else
//         return spiralMemory[xloc - 1][yloc] + spiralMemory[xloc + 1][yloc] + spiralMemory[xloc - 1][yloc - 1]
//             + spiralMemory[xloc][yloc - 1] + spiralMemory[xloc + 1][yloc - 1];

//     }
    //return 0;
}
function main(){
  var input = parseInt(document.getElementById("val").value)
  if(input < current )
  {
  resetValues();
  }
  console.log(" Jaga Rocks ",input);
  buildSpiral(input);
  var output = document.getElementById("output")
  output.innerHTML = getManhattanDistance();
}
