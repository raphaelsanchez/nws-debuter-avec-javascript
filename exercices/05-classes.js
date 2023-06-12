/**
 * Exercice 1
 * -------------------------------------------------------------------------
 * Créez une class `Personne` avec les propriétés suivantes :
 *
 * - `firstname` : prénom de la personne
 * - `lastname` : nom de la personne
 * - `age` : âge de la personne
 * - `ville` : ville de la personne
 *
 * Ajouter une méthode `getFullName()` à la class `Personne` pour retourner le nom complet de la personne.
 * Ajouter une méthode `setAge()` à la classe `Personne` pour modifier la propriété `age` de l'objet.
 *
 * Créer une instance de la classe `Personne` avec les propriétés suivantes :
 * - `firstname` : John
 * - `lastname` : Doe
 * - `age` : 25
 * - `ville` : Rouen
 *
 * Modifier l'âge de la personne avec la méthode `setAge()` à 30.
 *
 * Afficher dans la console avec : console.log(`${personne.getFullName()} à ${personne.age} ans et habite à ${personne.ville}`)
 *
 * Résultat attendu :
 * ```console
 * John Doe à 30 ans et habite à Rouen
 * ```
 */
console.log("\n====== Exercice 1 ======\n")

// Ajouter votre code ici ⬇ ======================

/**
 * Exercice 2
 * -------------------------------------------------------------------------
 * Créer une classe `Etudiant` qui hérite de la classe `Personne` avec la propriété supplémentaire suivante :
 *
 * - `classRoom` qui correspond classe dans laquelle l'étudiant est inscrit
 *
 * Créer une instance de la classe `Etudiant` et appeler les méthodes `getFullName()` et `setAge()` ou age = 20.
 *
 * Afficher dans la console avec : console.log(`${etudiant.getFullName()}, ${etudiant.age} ans étudiant ${etudiant.classe}`)
 *
 * Résultat attendu :
 * ```
 * John Doe, 20 ans étudiant NWS A1 G2
 * ```
 */
console.log("\n====== Exercice 2 ======\n")

// Ajouter votre code ici ⬇ ======================

/**
 * Exercice 3
 * -------------------------------------------------------------------------
 * Créer une classe `Employe` qui hérite de la classe `Personne` avec la propriété supplémentaire suivante :
 *
 * - `salary` : salaire de l'employé
 *
 * Créer les méthodes `getSalary()` et `setSalary()` pour accéder à la propriété `salary`.
 *
 * Créer une instance de la classe `Employe` et appeler les méthodes `getFullName()` et `setSalary()` avec un salaire de 2000.
 *
 * Modifier le salaire de l'employé avec la méthode `setSalary()` à 3500.
 *
 * Afficher dans la console avec : console.log(`${employe.getFullName()} gagne maintenant ${employe.getSalary()}€ par mois`)
 *
 * Résultat attendu :
 * ```console
 John Doe gagne maintenant 3500€ par mois
 * ```
 */
console.log("\n====== Exercice 3 ======\n")

// Ajouter votre code ici ⬇ ======================

/**
 * Exercice 4
 * -------------------------------------------------------------------------
 * Créer une classe `Entreprise` avec les propriétés suivantes :
 *
 * - `nom` : nom de l'entreprise
 * - `adresse` : adresse de l'entreprise
 * - `employes` : tableau d'employés
 *
 * Ajouter une méthode `addEmploye()` à la classe `Entreprise` pour ajouter un employé à l'entreprise.
 * Ajouter une méthode `getEmployes()` à la classe `Entreprise` pour retourner la liste des employés de l'entreprise.
 * Créer une instance de la classe `Entreprise` et ajouter des employés à l'entreprise :
 * - John Doe, 25 ans, Rouen, 2000€
 * - Jane Doe, 30 ans, Rouen, 2500€
 * - Jim Doe, 35 ans, Rouen, 3500€
 *
 * En utilisant la boucle `for...of`, vue dans les cours précédents,
 * afficher dans la console le nom complet de chaque employé de l'entreprise et son age.
 *
 * Résultat attendu :
 * ```
 * John Doe à 25 ans
 * Jane Doe à 25 ans
 * Jim Doe à 42 ans
 * ```
 */
console.log("\n====== Exercice 4 ======\n")

// Ajouter votre code ici ⬇ ======================
