# Mémo

## Commandes Utiles
* Installer typescript au sein de son projet
```
npm i typescript --save-dev
```
* Convertir en js
```
npx tsc app.ts
```
* Fichier de configuration tsconfig.json
```
{
    "compilerOptions": {
        "outDir": "dist", // destination de sortie du fichier js
        "target": "ES6", // version de js
        "noEmitOnError": true, // conversion impossible si il y a une erreur de compilation
        "strict": true // typescript ne laisse passer aucune erreur !
    },
    "files": [
        "src/app.ts", // fichier à compiler
    ]
}
```
* Lancer la compilation --watch pour conversion automatique
```
npx tsc --watch
```

## Syntaxe de base
```
const a: string = "toto"
const b: number = 1
const c: boolean = true
const d: null = null
const arr: string[] = ["aze", "aze"]
const arr2: any[] = ["aze", 3] // pas conseillé
const user: {firstname: string, lastname?: string} = {firstname: "Carlito"} // avec ? lastname n'est pas obligatoire
const user: {firstname: string, [key: string]: string} = {firstname: "Carlito", nickname: "Carlital"} // infinité de clé possible en string
const date: Date = new Date()
const cb: Function = (e: MouseEvent): void => {

}
```
* Function foobar (a: TYPE): RETURN {}
```
function foobar (a: string): boolean {
    return typeof a === "string"
}
```
* Retour void si la fonction ne retourne rien
```
function foobar (a: string): void {
    console.log(a)
}
```
* Forcer le type d'une variable avec "as" ou <TYPE>:
```
const compteur = document.querySelector("#compteur") as HTMLButtonElement;
const compteur = <HTMLButtonElement>document.querySelector('#compteur')
```
* Union "|", plusieurs types possibles:
```
function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log((id * 3).toString());
  } else {
    console.log(id.toUpperCase());
  }
}
```
* Régler le problème de l'élément possiblement null, if ou "?":
```
if (compteur) compteur.addEventListener("click", increment);  
ou  
compteur?.addEventListener("click", increment);
```

## Narrowing
Processus qui permet, via des conditions, de réduire les types possible.  
Le Narrowing peut se faire grâce à plusieurs méthodes :
* typeof
```
if (typeof id === "number") {}
```
* instanceof
```
if (a instanceof Date) {}
```
* l'égalité entre 2 union type qui ont des types en commun
```
function example(a: string | boolean, b: string | number) {
  if (a === b) { // il sait que a est un string
```
* L'opérateur in
```
function example(a: MouseEvent | HTMLInputElement) {
    if ("value" in a) // il sait que a est un HTMLInputElement
```
* Certaines méthodes qui permettent de prédire le type : Array.isArray par exemple.
```
function foobar (a: any): a is Date {
    return a instanceof Date
}
```
```
function example(a: string | string[]) {
  if (Array.isArray(a)) {
```

* Dangereux: Retirer l'option que ce soit null, avec le "!" ou "le as TYPE"
const compteur = document.querySelector("#compteur")!;
const compteur = document.querySelector("#compteur") as HTMLButtonElement;
