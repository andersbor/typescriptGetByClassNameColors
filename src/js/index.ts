let colorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("colorInput");
let changeColorButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("changeColorButton");
let elements: HTMLCollectionOf<Element> = document.getElementsByClassName("color");
changeColorButton.addEventListener("click", changeColor);

function changeColor(): void {
    let newColor: string = colorInput.value;
    for (let index = 0; index < elements.length; index++) {
        const element: HTMLElement = <HTMLElement>elements[index];
        element.style.backgroundColor = newColor;

    }
}