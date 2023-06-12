/**
 * EXERCICE 1
 * -------------------------------------------------------------------------
 * Créez un tableau contenant les nombres de 1 à 10.
 *
 * - Affichez le premier élément du tableau.
 * - Affichez le dernier élément du tableau.
 * - Affichez la longueur du tableau.
 *
 * Souvenez-vous que les indices des tableaux commencent à 0
 * et que la longueur d'un tableau se récupère avec la propriété `length`.
 * Noubliez pas que vous pouvez récupérer le dernier élément d'un tableau avec `tableau[tableau.length - 1]`.
 *
 * Résultat attendu :
 *
 * ```
 * 1
 * 10
 * 10
 * ```
 */
console.log("\n====== EXERCICE 1 ======\n")

// Solution
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nombres[0])
console.log(nombres[nombres.length - 1])
console.log(nombres.length)

/**
 * EXERCICE 2
 * -------------------------------------------------------------------------
 * Créez un tableau contenant les chiffres de 10 à 100 de 10 en 10.
 * Affichez le tableau. Inversez le tableau. Affichez le tableau.
 *
 * Résultat attendu :
 * ```
 * [
 *   10, 20, 30, 40,  50,
 *   60, 70, 80, 90, 100
 * ]
 * [
 *   100, 90, 80, 70, 60,
 *    50, 40, 30, 20, 10
 * ]
 * ```
 */
console.log("\n====== EXERCICE 2 ======\n")

// Solution
const chiffres = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(chiffres)

chiffres.reverse()
console.log(chiffres)

/**
 * EXERCICE 3
 * -------------------------------------------------------------------------
 * Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Triez le tableau. Affichez le tableau.
 *
 * Résultat attendu :
 *
 * ```
 * [
 *   2, 5, 1, 9, 0,
 *   3, 7, 4, 6, 8
 * ]
 * [
 *   0, 1, 2, 3, 4,
 *   5, 6, 7, 8, 9
 * ]
 * ```
 */
console.log("\n====== EXERCICE 3 ======\n")

// Solution
const nombresEnDesordres = [2, 5, 1, 9, 0, 3, 7, 4, 6, 8]
console.log(nombresEnDesordres)

nombresEnDesordres.sort()
console.log(nombresEnDesordres)

/**
 * EXERCICE 4
 * -------------------------------------------------------------------------
 * En repartant du tableau `nombres` de l'EXERCICE 1,
 * ajoutez le nombre 11 à la fin du tableau.
 * Affichez le tableau.
 * Ajoutez le nombre 0 au début du tableau.
 * Affichez le tableau.
 * Supprimez le dernier élément du tableau.
 * Affichez le tableau.
 *
 * Résultat attendu :
 *
 * ```
 * [
 *    1, 2, 3, 4,  5,
 *    6, 7, 8, 9, 10,
 *   11
 * ]
 * [
 *    0,  1, 2, 3, 4,
 *    5,  6, 7, 8, 9,
 *   10, 11
 * ]
 * [
 *    0, 1, 2, 3, 4,
 *    5, 6, 7, 8, 9,
 *   10
 * ]
 * ```
 */
console.log("\n====== EXERCICE 4 ======\n")

// Solution
nombres.push(11)
console.log(nombres)

nombres.unshift(0)
console.log(nombres)

nombres.pop()
console.log(nombres)

/**
 * EXERCICE 5
 * -------------------------------------------------------------------------
 * En repartant du tableau `nombres` de l'EXERCICE 1,
 * Affichez le tableau avec `console.log(nombres)`.
 * Supprimez les 5 premiers nombres.
 * Affichez le tableau.
 *
 * Rappelez-vous que vous pouvez supprimer un élément d'un tableau avec la méthode `splice`
 * qui prend en paramètre l'index de l'élément à supprimer et le nombre d'éléments à supprimer.
 *
 * Résultat attendu :
 *
 * ```
 * [
 *    0, 1, 2, 3, 4,
 *    5, 6, 7, 8, 9, 10
 * ]
 * [ 5, 6, 7, 8, 9, 10 ]
 * ```
 */
console.log("\n====== EXERCICE 5 ======\n")

// Solution
console.log(nombres)

nombres.splice(0, 5)
console.log(nombres)
