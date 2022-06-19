
let test1 = 365
let test2 = 4245
let test3 = 45
//let remainder = test1%100
//console.log("Remainder: ", test1%100)
//console.log("Quotient: ", (test1 - remainder )/100)


// loop through numerals array, find remainder and quotient
//if remainder and quotient = 0, go to next element; push("")
//if remainder !=0, then for i in range(remainder): push(numeral)
// set remainder back to 0, keep quotient as is
//let remainder = 0
//let quotient = 0
//let romNum = ""

function romanNumeral(arg) {
    let remainder = 0
    let quotient = 0
    let romNum = ""
    let numerals = [[1000,"M"], [900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"], [50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]

    for (let i=0; i<numerals.length; i++) {
        if (numerals[i][0]<=arg) {
            remainder = arg%numerals[i][0]
            quotient = (arg - remainder)/numerals[i][0]
            for (let j=0; j<quotient; j++) {
                romNum += numerals[i][1]
            }
            arg = remainder
            quotient = 0
        }
    }
    return romNum
}
console.log(test1, romanNumeral(test1))
console.log(test2, romanNumeral(test2))
console.log(test3, romanNumeral(test3))