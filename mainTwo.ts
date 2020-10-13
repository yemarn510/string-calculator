

export function add(numbers: string): number {
    if(numbers){
        const correctFormat = new RegExp(/[0-9]+,[0-9]/).test(numbers)
        const oneNumber = new RegExp(/\d$/).test(numbers)
        const containNextLine = new RegExp(/[\r\n]/).test(numbers)
        const containDelimiter = new RegExp(/\/\/[^\/][\r\n]/).test(numbers)
        
        // console.warn("Number : "+ numbers)
        // console.warn("correctFormat "+ correctFormat)
        // console.warn("oneNumber " + oneNumber)
        // console.warn('containNextLine '+ containNextLine)
        // console.warn('containDelimiter '+ containDelimiter)

        if (correctFormat){
            let numArray = []
            if(containNextLine && !containDelimiter ){
                numArray = numbers.split('\n')
                let commaIndex = numArray[1].split(',')
                numArray[1] = +commaIndex[0] + +commaIndex[1]
            }
            
            else{
                numArray = numbers.split(',')
            }

            return +numArray[0] + +numArray[1]
        }
        else if(containDelimiter){
            let numArray = []
            numArray = numbers.match(/[^\\n]*\d/g)
            const delimiterPart = numbers.match(/[^\/]+(?=[^][^%s\n])/g)
            console.warn("dellllsdalsdlas :" +delimiterPart)
            console.warn("Num Part :" + numArray)
            const numPart = numArray[1]
            let number = numPart.split(delimiterPart)
            console.warn("numbers :"+number)
            let allNumbersArePositive = true;
            number.map((element) => element < 0 ? allNumbersArePositive = false : {});

            if(allNumbersArePositive){
                let total = 0;
                number.map((element) => element > 1000 ? total += 0 : total += +element);
                return total
            }
            else {
                return 0
            }
        } 
        else if( oneNumber && containNextLine){
            let words = numbers.match(/[^[\]]+(?=])/g)
            console.warn(" Yoooo : "+ words)
            return 0;
        }
        else if(oneNumber){
            return +numbers;
        }
        else{
            return 0;
        }
    }
    else{
        return 0;
    }
    
}