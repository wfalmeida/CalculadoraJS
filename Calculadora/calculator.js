const display = document.querySelector("div#display")

let expression = []

const operators = ['+', '-', '/', '*']

const displayInsert = (value) => display.innerHTML += value 

const displayRefresh = (value) => display.innerHTML = value

const displayBackspace = () => {
    const displayText = display.innerHTML
    if(displayText.length > 0){ 
        display.innerHTML = displayText.substring(0,displayText.length-1)
        expression.length -= 1 
    }
}

const isDuplicateOperator = (value) => (
    expression.length > 0 ? value == expression[expression.length-1] : value == expression[0]
)

const isOperator = (value) => operators.includes(value)

const insert = (value) => {
    if(isOperator(value)){
        if(!isDuplicateOperator(value)){
            expression.push(value)
            displayInsert(value)
        }
        else{
            window.alert("[ERRO - Expressão incorreta! Operadores em sequência]")
        }
    }
    else{
        expression.push(value)
        displayInsert(value)
    }
}

const clearAll = () => {
    displayRefresh('')
    expression = [];
}

const backspace = () => {
    displayBackspace()    
}

const result = () => displayRefresh (eval(expression.join("")))
