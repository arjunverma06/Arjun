function genticket(n){
    let arr=new Array(n);

    for(let i=0; i<n; i++){
        arr[i]= Math.floor(Math.random()*10);
    }
    return arr;
    // function Sum(arr){
    //    return arr.reduce((Sum,curr)=>Sum+curr,0);
    // }


}

function sum(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error('Input must be an array');
//   }

  return arr.reduce((su, curr) => su + curr, 0);
}
export{genticket,sum};