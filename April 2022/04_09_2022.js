function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let totalSaved=0
    let monthNumber
    for (monthNumber=0;startPriceOld+totalSaved<startPriceNew;monthNumber++){
        if ((monthNumber)%2==0&&monthNumber){percentLossByMonth+=.5}
        console.log(monthNumber, percentLossByMonth)
        let interestLostOld = startPriceOld*(1+(percentLossByMonth/100))-startPriceOld
        let interestLostNew = startPriceNew*(1+(percentLossByMonth/100))-startPriceNew
        startPriceOld-=interestLostOld
        startPriceNew-=interestLostNew
        totalSaved+=savingperMonth
        console.log(monthNumber,totalSaved,startPriceOld, startPriceNew)
    }return [monthNumber,(totalSaved+startPriceOld-startPriceNew)]
}
nbMonths(2000, 8000, 1000, 1.5)

//s: C.I.= P×(1+r)nt−P

///didnt work. looklike i should have used a while loop