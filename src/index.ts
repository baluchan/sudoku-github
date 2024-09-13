let inputValues: string;
let arrayInput: number[];
let arr2: number[][] = [];

function storeInput(): void {
    let input = document.getElementById('numbers') as HTMLInputElement;
    inputValues = input.value;
    console.log(inputValues);
}

function createArray(): void {
    storeInput();

    if(inputValues.length != 81){
        console.log("Nedostatocny alebo vacsi pocet cisel.");
        return;
    }
    else{
        arrayInput = inputValues.split("", 81).map(Number);

        let counter1 = 0;
        let counter2 = 9;
    
        for(let i = 0; i < 9; i++){
            let rowArr: number[] = [];
            for(let j = counter1; j < counter2; j++){
                rowArr.push(arrayInput[j]);
            }
            arr2.push(rowArr);
            counter1 = counter1 + 9;
            counter2 = counter2 + 9;
        }
    }
    console.log(arr2);
}
    
(window as any).storeInput = storeInput;
(window as any).rowArray = createArray;