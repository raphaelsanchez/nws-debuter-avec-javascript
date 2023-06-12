/**
 * Exercice 1
 * Déclarez une fonction `afficherMessage()` qui affiche un message dans la console.
 *
 * Puis appelez la fonction `afficherMessage()`.
 *
 * Résultat attendu :
 * ```
 * Hello World!
 * ```
 */
console.log("\n====== Exercice 1 ======\n")

function afficherMessage() {
  console.log("Hello World!")
}

afficherMessage()

/**
 * Exercice 2
 * Déclarez une fonction `afficherSomme()` qui prend deux paramètres `a` et `b`
 *
 * Puis appelez la fonction `afficherSomme()` en passant `1` et `2` comme arguments.
 *
 * Résultat attendu :
 * ```console
 * 3
 * ```
 */
console.log("\n====== Exercice 2 ======\n")

// Solution
function afficherSomme(a, b) {
  console.log(a + b)
}

afficherSomme(1, 2)

/**
 * Exercice 3
 * Déclarez une fonction `calculerSomme()` qui prend deux paramètres `a` et `b` et retourne leur somme.
 *
 * Puis, dans un `console.log()` appelez la fonction `calculerSomme()` en passant `10` et `20` comme arguments pour afficher le résultat dans la console.
 *
 * Résultat attendu :
 * ```
 * 3
 * ```
 */
console.log("\n====== Exercice 3 ======\n")

// Solution
function calculerSomme(a, b) {
  return a + b
}

console.log(calculerSomme(10, 20))

/**
 * Exercice 4
 * Déclarez une fonction `afficherSomme()` qui prend deux paramètres `a` et `b` et une fonction anonyme comme paramètre callback.
 * La fonction `afficherSomme()` doit appeler la fonction anonyme en passant la somme de `a` et `b` comme argument.
 * Appelez la fonction `afficherSomme()` en passant `100` et `200` comme arguments et en passant une fonction anonyme qui affiche le résultat dans la console.
 * La fonction anonyme doit être définie directement dans l'appel de la fonction `afficherSomme()`.
 * La fonction anonyme doit prendre un paramètre `somme`.
 * La fonction anonyme doit retrouner le console.log() suivant: `console.log(somme)`.
 *
 * Résultat attendu :
 * ```
 * 3
 * ```
 */
console.log("\n====== Exercice 4 ======\n")

// Solution
function afficherCalculeSomme(a, b, callback) {
  callback(a + b)
}

afficherCalculeSomme(100, 200, function (somme) {
  console.log(somme)
})
