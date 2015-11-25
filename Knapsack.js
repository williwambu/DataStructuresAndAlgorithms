function max(a,b){
    return (a > b)? a : b;
}
/**
 *
 * Recursive solution to Knapsack problem
 * @param capacity
 * @param size
 * @param value
 * @param n
 * @returns {number}
 */
function RecurKnapsack(capacity, size, value, n){
    if(capacity == 0 || n == 0){
        return 0;
    }
    else{
        if(size[n -1] > capacity){
            return RecurKnapsack(capacity,size,value,n-1);
        }
        else{
            return max(value[n-1] +
                RecurKnapsack(capacity - size[n-1],size,value,n-1),
                RecurKnapsack(capacity,size,value,n-1));
        }
    }
}

/**
 * Dynamic Programming solution to Knapsack problem
 * @param capacity
 * @param size
 * @param value
 * @param n
 * @returns {*}
 * @constructor
 */
function DynKnapsack(capacity, size,value,n){
    var k = [];

    for(var i = 0 ;i <= capacity + 1;i++){
        k[i] = [];
    }

    for(var i = 0; i <= n; i++){
        for(var w=0; w <= capacity; w++){
            if(i == 0 || w == 0){
                k[i][w] = 0;
            }
            else if(size[i-1] <= w){
                k[i][w] = max(value[i-1] + k[i-1][w-size[i-1]],k[i-1][w]);
            }
            else{
                k[i][w] = k[i-1][w];
            }
        }
    }
    return k[n][capacity]
}

var capacity = 16;
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var n = 5;
console.log(RecurKnapsack(capacity,size,value,n));
console.log(DynKnapsack(capacity,size,value,n)); //23