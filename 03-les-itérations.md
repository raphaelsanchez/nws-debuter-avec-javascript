# Les itérations : for, for...in, for...of et while

## La boucle for

La boucle `for` est utilisée pour exécuter un bloc de code un nombre spécifié de fois. La boucle `for` est souvent utilisée pour parcourir les éléments d'un tableau.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## La boucle for...in

La boucle `for...in` est utilisée pour parcourir les propriétés d'un objet.

```javascript
let personne = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
  ville: "Rouen"
};

for (let x in personne) {
  console.log(personne[x]);
}
```

## La boucle for...of

La boucle `for...of` est utilisée pour parcourir les éléments d'un tableau.

```javascript
let fruits = ["Apple", "Banana", "Orange"];

for (let x of fruits) {
  console.log(x);
}
```

## La boucle while

La boucle `while` est utilisée pour exécuter un bloc de code tant qu'une condition spécifiée est vraie.

```javascript
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

## La boucle do...while

La boucle `do...while` est utilisée pour exécuter un bloc de code une fois, avant de vérifier si la condition est vraie, puis elle sera répétée tant que la condition est vraie.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
}
while (i < 10);
```

C'est toutefois une boucle moins utilisée que les autres.

## Exercices

### Exercice 1 : la boucle for

Affichez les nombres de 1 à 10 en utilisant une boucle `for`.

### Exercice 2 : la boucle for...in

Affichez les propriétés de l'objet `personne` en utilisant une boucle `for...in`.

### Exercice 3 : la boucle for...of

Affichez les éléments du tableau `fruits` en utilisant une boucle `for...of`.

### Exercice 4 : la boucle while

Affichez les nombres de 1 à 10 en utilisant une boucle `while`.

### Exercice 5 : la boucle do...while

Affichez les nombres de 1 à 10 en utilisant une boucle `do...while`.


## Liens utiles

- [MDN - Boucles et itérations](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration)
- [MDN - for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)
- [MDN - for...in](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in)
- [MDN - for...of](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [MDN - while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while)
- [MDN - do...while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/do...while)

