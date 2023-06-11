# Les tableaux :
Les tableaux sont des structures de données utilisées pour stocker des collections d'éléments. En JavaScript, un tableau peut contenir des valeurs de différents types, tels que des nombres, des chaînes de caractères, des objets, etc. 

Vous pouvez déclarer un tableau en utilisant la syntaxe suivante :

```javascript
let tableau = [1, 2, 3, 4, 5];
```

## Opérations sur les tableaux :

Vous pouvez accéder à un élément du tableau en utilisant son index. Par exemple, pour accéder au premier élément du tableau, vous utilisez l'index 0, comme ceci :

```javascript
let tableau = [1, 2, 3, 4, 5];
console.log(tableau[0]); // affiche 1
```

Vous pouvez également modifier un élément du tableau en utilisant son index. Par exemple, pour modifier le premier élément du tableau, vous utilisez l'index 0, comme ceci :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau[0] = 10;
console.log(tableau[0]); // affiche 10
```

Vous pouvez également ajouter un élément à la fin du tableau en utilisant la méthode push() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.push(6);
console.log(tableau); // affiche [1, 2, 3, 4, 5, 6]
```

Vous pouvez également supprimer le dernier élément du tableau en utilisant la méthode pop() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.pop();
console.log(tableau); // affiche [1, 2, 3, 4]
```

Vous pouvez également supprimer le premier élément du tableau en utilisant la méthode shift() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.shift();
console.log(tableau); // affiche [2, 3, 4, 5]
```

Vous pouvez également ajouter un élément au début du tableau en utilisant la méthode unshift() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.unshift(0);
console.log(tableau); // affiche [0, 1, 2, 3, 4, 5]
```

Vous pouvez également supprimer un élément du tableau en utilisant la méthode splice() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.splice(2, 1);
console.log(tableau); // affiche [1, 2, 4, 5]
```

Vous pouvez également concaténer deux tableaux en utilisant la méthode concat() :

```javascript
let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];
let tableau3 = tableau1.concat(tableau2);
console.log(tableau3); // affiche [1, 2, 3, 4, 5, 6]
```

Vous pouvez également trier un tableau en utilisant la méthode sort() :

```javascript
let tableau = [3, 2, 1, 4, 5];
tableau.sort();
console.log(tableau); // affiche [1, 2, 3, 4, 5]
```

Vous pouvez également inverser un tableau en utilisant la méthode reverse() :

```javascript
let tableau = [1, 2, 3, 4, 5];
tableau.reverse();
console.log(tableau); // affiche [5, 4, 3, 2, 1]
```

Vous pouvez également joindre les éléments d'un tableau en utilisant la méthode join() :

```javascript
let tableau = [1, 2, 3, 4, 5];
let chaine = tableau.join();
console.log(chaine); // affiche 1,2,3,4,5
```

Vous pouvez également obtenir la longueur d'un tableau en utilisant la propriété length :

```javascript
let tableau = [1, 2, 3, 4, 5];
console.log(tableau.length); // affiche 5
```

Nous verrons plus tard comment parcourir un tableau en utilisant une boucle for.

## Exercices

### Exercice 1

Créez un tableau contenant les nombres de 1 à 10. Affichez le premier élément du tableau. Affichez le dernier élément du tableau. Affichez la longueur du tableau.

### Exercice 2

Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Inversez le tableau. Affichez le tableau.

### Exercice 3

Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Triez le tableau. Affichez le tableau.

### Exercice 4

Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Ajoutez le nombre 11 à la fin du tableau. Affichez le tableau. Supprimez le nombre 11 du tableau. Affichez le tableau.

### Exercice 5

Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Ajoutez le nombre 0 au début du tableau. Affichez le tableau. Supprimez le nombre 0 du tableau. Affichez le tableau.

### Exercice 6

Créez un tableau contenant les nombres de 1 à 10. Affichez le tableau. Supprimez les nombres 3 et 4 du tableau. Affichez le tableau.

## Liens utiles

- [MDN : Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array)
- [MDN : Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
- [MDN : Array.prototype.pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop)
- [MDN : Array.prototype.unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift)
- [MDN : Array.prototype.shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift)
- [MDN : Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice)
- [MDN : Array.prototype.reverse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse)
- [MDN : Array.prototype.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)
