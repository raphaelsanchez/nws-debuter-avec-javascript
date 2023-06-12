/**
 * Exercice 1
 * Affichez les nombres de 1 à 5 en utilisant une boucle `for`.
 *
 * Résultat attendu :
 * ```
 * 1
 * 2
 * 3
 * 4
 * 5
 * ```
 */
console.log("\n====== Exercice 1 ======\n")

// Solution
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

/**
 * Exercice 2
 * Affichez les propriétés de l'objet `personne` en utilisant une boucle `for...in`.
 * Vous pouvez utiliser la syntaxe `personne[key]` pour accéder à la valeur de la propriété `key`.
 * Vous pouvez utiliser `console.log(`${key}: ${personne[key]}`);` pour afficher le résultat.
 *
 * Résultat attendu :
 * ```
 * firstname: John
 * lastname: Doe
 * age: 25
 * ville: Rouen
 * ```
 */
console.log("\n====== Exercice 2 ======\n")

// Solution
const personne = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
  ville: "Rouen",
}

for (const key in personne) {
  console.log(`${key}: ${personne[key]}`)
}

/**
 * Exercice 3
 * Affichez les éléments du tableau `fruits` en utilisant une boucle `for...of`.
 * Vous pouvez utiliser `console.log(fruit);` dans votre boucle pour afficher les résultats.
 *
 * Résultat attendu :
 * ```
 * pomme
 * poire
 * banane
 * ```
 */
console.log("\n====== Exercice 3 ======\n")

// Solution
const fruits = ["pomme", "poire", "banane"]

for (const fruit of fruits) {
  console.log(fruit)
}

/**
 * Exercice 4
 *
 * Affichez les nombres de 5 à 10 en utilisant une boucle `while`.
 * Vous pouvez utiliser `console.log(i);` dans votre boucle pour afficher les résultats.
 *
 * Résultat attendu :
 * ```
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 * ```
 */
console.log("\n====== Exercice 4 ======\n")

// Solution
let i = 5

while (i <= 10) {
  console.log(i)
  i++
}
