/**
 * Exercice 1
 * Créez un objet `personne` avec les propriétés vous concernant suivantes :
 *
 * - `firstname` : ""
 * - `lastname` : ""
 * - `age` :
 * - `city` : ""
 *
 * Affichez les propriétés `firstname`, `lastname`, `age`et `city` de l'objet `personne` dans des console.log() séparés.
 *
 * Résultat attendu :
 * ```
 * John
 * Doe
 * 25
 * Rouen
 * ```
 */
console.log("\n====== Exercice 1 ======\n")

// Solution
const personne = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
  city: "Rouen",
}

console.log(personne.firstname)
console.log(personne.lastname)
console.log(personne.age)
console.log(personne.city)

/**
 * Exercice 2
 * Créez un tableau `personnes` contenant les objets suivants :
 * - `{firstname: "John", lastname: "Doe", age: 25, city: "Rouen"}`
 * - `{firstname: "Jane", lastname: "Doe", age: 30, city: "Paris"}`
 * - `{firstname: "Jim", lastname: "Doe", age: 35, city: "Lyon"}`
 *
 * Affichez le tableau `personnes` dans la console en utilisant `console.log(personnes);`.
 *
 * Résultat attendu :
 * ```
 * [
 *    {firstname: "John", lastname: "Doe", age: 25, city: "Rouen"},
 *    {firstname: "Jane", lastname: "Doe", age: 30, city: "Paris"},
 *    {firstname: "Jim", lastname: "Doe", age: 35, city: "Lyon"}
 * ]
 * ```
 */
console.log("\n====== Exercice 2 ======\n")

// Solution
const personnes = [
  { firstname: "John", lastname: "Doe", age: 25, city: "Rouen" },
  { firstname: "Jane", lastname: "Doe", age: 30, city: "Paris" },
  { firstname: "Jim", lastname: "Doe", age: 35, city: "Lyon" },
]

console.log(personnes)

/**
 * Exercice 3
 * En se basant l'objet `personnes` de l'exercice 2 (il existe déjà normalement, pas besoin de le refaire), ajoutez un objet à la fin du tableau `personnes` :
 * - `{firstname: "Polo", lastname: "Doe", age: 30, city: "Marseille"}`
 *
 * Vous pouvez utiliser la méthode `push()` pour ajouter un élément à un tableau :
 *
 * Affichez le tableau `personnes` dans la console.
 *
 * Résultat attendu :
 * ```
 * [
 *    {firstname: "John", lastname: "Doe", age: 25, city: "Rouen"},
 *    {firstname: "Jane", lastname: "Doe", age: 30, city: "Paris"},
 *    {firstname: "Jim", lastname: "Doe", age: 35, city: "Lyon"},
 *    {firstname: "Polo", lastname: "Doe", age: 30, city: "Marseille"}
 * ]
 * ```
 */
console.log("\n====== Exercice 3 ======\n")

// Solution
personnes.push({
  firstname: "Polo",
  lastname: "Doe",
  age: 30,
  city: "Marseille",
})

console.log(personnes)

/**
 * Exercice 4
 * Modifiez le premier objet du tableau `personnes` en utilisant la syntaxe suivante : `personnes[0].firstname = "Jean";`
 *
 * Supprimer le deuxième objet du tableau `personnes` en utilisant la méthode `splice()` :
 *
 * Affichez le tableau `personnes` dans la console.
 *
 * Résultat attendu :
 * ```
 * [
 *    { firstname: 'Jean', lastname: 'Doe', age: 25, city: 'Rouen' },
 *    { firstname: 'Jim', lastname: 'Doe', age: 35, city: 'Lyon' },
 *    { firstname: 'Polo', lastname: 'Doe', age: 30, city: 'Marseille' }
 * ]
 */

console.log("\n====== Exercice 4 ======\n")

// Solution
personnes[0].firstname = "Jean"
personnes.splice(1, 1)
console.log(personnes)
