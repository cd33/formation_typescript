const a: string = "toto"
const b: number = 1
const c: boolean = true
const d: null = null
const arr: string[] = ["aze", "aze"]
const arr2: any[] = ["aze", 3]
const user: {firstname: string, [key: string]: string} = {firstname: "Carlito", nickname: "Carlital"} // lastname?: string,
const date: Date = new Date()
const cb: Function = (e: MouseEvent): void => {

}

const compteur = document.querySelector("#compteur")
// const compteur = <HTMLButtonElement>document.querySelector('#compteur')
let i: number = 0;

function increment(e: Event) {
  e.preventDefault();
  i++;
  const span = compteur?.querySelector("span");
  if (span) span.innerText = i.toString();
}

function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log((id * 3).toString());
  } else {
    console.log(id.toUpperCase());
  }
}

function example(a: string | boolean, b: string | number) {
  if (a === b) {
    // il sait que a est un string
  }
}

function example2(a: string | Date) {
  if (a instanceof Date) {
  }
}

function example3(a: string | string[]) {
  if (Array.isArray(a)) {
  }
}

compteur?.addEventListener("click", increment);
