const input = document.getElementById("number")
const button = document.getElementById("convert-btn")
const output = document.getElementById("output")

output.innerText = "";

const lookupTable = [
{number: 1000, numeral: "M"},
{number: 900, numeral: "CM"},
{number: 500, numeral: "D"},
{number: 400, numeral: "CD"},
{number: 100, numeral: "C"},
{number: 90, numeral: "XC"},
{number: 50, numeral: "L"},
{number: 40, numeral: "XL"},
{number: 10, numeral: "X"},
{number: 9, numeral: "IX"},
{number: 5, numeral: "V"},
{number: 4, numeral: "IV"},
{number: 1, numeral: "I"}
]

const convertNumber = (value) => {
    if (value === 0 || !value) {
        output.innerText = "PLEASE ENTER A VALID NUMBER";
        output.style.color = "red";
        output.style.backgroundColor = "#8E1F2F";
        output.style.border = "4px solid red";
        return;
    } else if (value < 0) {
        output.innerText = "PLEASE ENTER A NUMBER GREATER THAN OR EQUAL TO 1";
        output.style.color = "red";
        output.style.backgroundColor = "#8E1F2F";
        output.style.border = "4px solid red";
        return;
    } else if (value > 3999) {
        output.innerText = "PLEASE ENTER A NUMBER LESS THAN OR EQUAL TO 3999";
        output.style.color = "red";
        output.style.backgroundColor = "#8E1F2F";
        output.style.border = "4px solid red";
        return;
    }

    output.innerText = "";
    
    for (const entry of lookupTable) {
        while (value >= entry.number) {
            output.innerText += entry.numeral;
            value -= entry.number;
        }
    }
}

button.addEventListener("click", () => {
    output.style.display = "flex";
    output.style.color = "#8E1F2F";
    output.style.backgroundColor = "#F0BC42";
    output.style.border = "4px solid #977629"
    let number = parseInt(input.value)
    convertNumber(number);
})