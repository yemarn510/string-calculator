export function add(inputNumbers: string): number {
    const exactlyTwoNumbers = new RegExp(/^[0-9]+,[0-9]+$/).test(inputNumbers)
    const oneNumber = new RegExp(/^\d$/).test(inputNumbers)
    const oneNumberAndComma = new RegExp(/^\d,/).test(inputNumbers)
    const containNextLine = new RegExp(/^\d+[\r\n]\d+,\d/).test(inputNumbers)
    const containDelimilter = new RegExp(/\/\/[^\s][\r\n]/).test(inputNumbers)
    const containBracketDelimiter = new RegExp(/^\/\/\[.*\][\r\n]/).test(inputNumbers)

    if(exactlyTwoNumbers){
        const strArray = inputNumbers.split(',');
        return strArrayToTotal(strArray);
    }
    else if(oneNumber){
        return +inputNumbers;
    }
    else if(oneNumberAndComma){
        return 0;
    }
    else if(containNextLine){
        const firstStrNumArr = inputNumbers.split('\n')
        const secStrNumArr = firstStrNumArr[1].split(',')
        firstStrNumArr.pop()
        const strArray = firstStrNumArr.concat(secStrNumArr)
        return strArrayToTotal(strArray);
    }
    else if(containDelimilter){
        const [delimiterPart, numberPart] = inputNumbers.split('\n')
        const delimiter = delimiterPart.match(/[^\/\/]/)
        const numArray = numberPart.split(delimiter[0])
        return strArrayToTotal(numArray);
    }
    else if(containBracketDelimiter){
        const [delimiterPart, numberPart] = inputNumbers.split('\n')
        const delimiters = delimiterPart.match(/[^[\]]+(?=])/g)
        if(delimiters.length > 1){
            const firstSplit = numberPart.split(delimiters[0])
            const secondSplit = firstSplit[1].split(delimiters[1])
            firstSplit.pop()
            const strArray = firstSplit.concat(secondSplit)
            return strArrayToTotal(strArray);
        }
        else{
            const strArray = numberPart.split(delimiters[0])
            return strArrayToTotal(strArray);
        }
    }
    else{
        return 0;
    }
    
}

export function strArrayToTotal(strArray: string[]): number {
    const containNegVal = strArray.some(value => +value < 0);
    if(containNegVal){
        return 0;
    }
    else{
        const intNumArray = strArray.map(element => +element)
        const add = (total, next) => { return (total + (next > 1000 ? 0 : next)) };
        const total = intNumArray.reduce(add)
        return total;
    }
}