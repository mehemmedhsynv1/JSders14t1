let num = [10, 5, 15, 80, 31, 7, 9, 18, 23];
let countEven = 0;
let countOdd = 0;
function arrEvenOdd(){
    for(let i = 0; i < num.length; i++){
        if(num[i]%2 == 1){
            countEven++;
        }else if(num[i]%2 == 0){
            countOdd++;
        }
    }
console.log("tek ededlerin sayi:" + countEven + ";" + " " + "cut ededlerin sayi:" + countOdd); 
}
arrEvenOdd();
