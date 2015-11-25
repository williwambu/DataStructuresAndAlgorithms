function recurFib(n){
    if(n < 2){
        return n;
    }
    else{
        return recurFib(n-1) + recurFib(n-2);
    }
}

function dynFib(n){
    var val = [];  //table to hold values

    //fill the table with 0 values
    for(var i = 0; i < n; i++){
        val[i] = 0;
    }

    if(n == 1 || n ==2){
        return n;
    }else{
        val[1] = 1; //set the 2nd value of the table to 1
        val[2] = 2; //

        for(var i=3;i < n;i++){
            val[i] = val[i - 1] + val[i - 2];
        }

        return val[n - 1]; //the array is zero-based
    }
}

var start = new Date().getTime();
recurFib(40);
var stop = new Date().getTime();

console.log('Recursive time is ' + (stop - start) + ' ms');

var start = new Date().getTime();
dynFib(40);
var stop = new Date().getTime();

console.log('Dynamic prog. time is ' + (stop - start) + ' ms');