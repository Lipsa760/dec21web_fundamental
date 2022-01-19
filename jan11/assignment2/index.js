var n = prompt("Enter a Number to print pyramid");
n = parseInt(n);

var x = "";
for (var i=1; i<=n; i=i+1){
   for(var j=1; j<=i; j=j+1){
       x = x + "*";
   }
   x = x + "</br>";
}
document.write(x);