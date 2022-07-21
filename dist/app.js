"use strict";
// const a: string = "toto"
// const b: number = 1
// const c: boolean = true
// const d: null = null
// const arr: string[] = ["aze", "aze"]
// const arr2: any[] = ["aze", 3]
// const user: {firstname: string, [key: string]: string} = {firstname: "Carlito", nickname: "Carlital"} // lastname?: string, 
// const date: Date = new Date()
// const cb: Function = (e: MouseEvent): void => {
// }
// function printId(id: number | string): void {
//     console.log(id.toString())
// }
const compteur = document.querySelector('#compteur');
// const compteur = <HTMLButtonElement>document.querySelector('#compteur')
let i = 0;
function increment(e) {
    e.preventDefault();
    i++;
    const span = compteur.querySelector('span');
    if (span)
        span.innerText = i.toString();
}
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
