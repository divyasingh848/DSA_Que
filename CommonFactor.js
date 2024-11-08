// GreatestCommonFactor
let n1=20;
let n2=15;

while(n1 > 0 && n2>0){
    if(n1<n2){
     var output = n2%n1;
     console.log(output)
    }
    else{
        var output = n1%n2;
        console.log(output) 
    }
}