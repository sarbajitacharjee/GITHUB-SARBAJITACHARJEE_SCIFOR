function maxx(a, b, c) {
    let maxNumber = a; 
    if (c > maxNumber) maxNumber = c;
    if (b > maxNumber) maxNumber = b; 
     return maxNumber;
}
console.log(" max number : ")
console.log(maxx(110, 120, 115));