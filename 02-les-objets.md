# Le objets en javascript

## Les objets

Les objets sont des structures de données utilisées pour stocker des collections d'éléments. En JavaScript, un objet peut contenir des valeurs de différents types, tels que des nombres, des chaînes de caractères, des objets, etc.

Vous pouvez déclarer un objet en utilisant la syntaxe suivante :

```javascript
let objet = {
    propriete1: "valeur1",
    propriete2: "valeur2",
    propriete3: "valeur3"
};
```

## Opérations sur les objets :

Vous pouvez accéder à une propriété de l'objet en utilisant son nom. Par exemple, pour accéder à la propriété `propriete1` de l'objet, vous utilisez la syntaxe suivante :

```javascript
let personne = {
    firstname: "John",
    lastname: "Doe",
    age: 25
    ville: "Rouen"
};

console.log(personne.firstname); // affiche "John"
```

Vous pouvez également modifier une propriété de l'objet en utilisant son nom. Par exemple, pour modifier la propriété `firstname` de l'objet, vous utilisez la syntaxe suivante :

```javascript
let personne = {
    firstname: "John",
    lastname: "Doe",
    age: 25
    ville: "Rouen"
};

personne.firstname = "Jane";

console.log(personne.firstname); // affiche "Jane"
```

Vous pouvez également ajouter une propriété à l'objet en utilisant la syntaxe suivante :

```javascript
let personne = {
    firstname: "John",
    lastname: "Doe",
    age: 25
    ville: "Rouen"
};

personne.email = "john.doe@gmail.com";

console.log(personne.email); // affiche "john.doe@gmail"
```

Vous pouvez également supprimer une propriété de l'objet en utilisant la syntaxe suivante :

```javascript
let personne = {
    firstname: "John",
    lastname: "Doe",
    age: 25
    ville: "Rouen"
};

delete personne.age;

console.log(personne.age); // affiche "undefined"
```

## Les tableaux d'objets :

Vous pouvez déclarer un tableau d'objets en utilisant la syntaxe suivante :

```javascript
let personnes = [
    {
        firstname: "John",
        lastname: "Doe",
        age: 25
        ville: "Rouen"
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        age: 30
        ville: "Paris"
    },
    {
        firstname: "Jack",
        lastname: "Doe",
        age: 35
        ville: "Lyon"
    }
];
```

> NB : Pour la suite de ce cours, nous réutiliserons le tableau `personnes` défini ci-dessus.

Vous pouvez accéder à un élément du tableau en utilisant son index. Par exemple, pour accéder au premier élément du tableau, vous utilisez la syntaxe suivante :

```javascript
console.log(personnes[0]); // affiche "{firstname: "John", lastname: "Doe", age: 25, ville: "Rouen"}"
```

Vous pouvez également modifier un élément du tableau en utilisant son index. Par exemple, pour modifier le premier élément du tableau, vous utilisez la syntaxe suivante :

```javascript
personnes[0].firstname = "Jean";

console.log(personnes[0]); // affiche "{firstname: "Jean", lastname: "Doe", age: 25, ville: "Rouen"}"
```

Vous pouvez également ajouter un élément au tableau en utilisant la syntaxe suivante :

```javascript
personnes.push({
    firstname: "James",
    lastname: "Doe",
    age: 40
    ville: "Marseille"
});

console.log(personnes[3]); // affiche "{firstname: "James", lastname: "Doe", age: 40, ville: "Marseille"}"
```

Vous pouvez également supprimer un élément du tableau en utilisant la syntaxe suivante :

```javascript
personnes.splice(0, 1);

console.log(personnes[0]); // affiche "{firstname: "Jane", lastname: "Doe", age: 30, ville: "Paris"}"
```

## Exercices

### Exercice 1

Créez un objet `personne` avec les propriétés vous concernant suivantes :

- `firstname` : ""
- `lastname` : ""
- `age` : 
- `ville` : ""

Affichez les propriétés de l'objet `personne` dans la console.

### Exercice 2

Créez un tableau `personnes` contenant les objets suivants :

- `{firstname: "John", lastname: "Doe", age: 25, ville: "Rouen"}`

Affichez le tableau `personnes` dans la console.

### Exercice 3

Ajoutez les objets suivants au tableau `personnes` :

- `{firstname: "Jane", lastname: "Doe", age: 30, ville: "Paris"}`

Affichez le tableau `personnes` dans la console.

### Exercice 4

Modifiez le premier objet du tableau `personnes` en utilisant la syntaxe suivante :

```javascript
personnes[0].firstname = "Jean";
```

Affichez le tableau `personnes` dans la console.

### Exercice 5

Supprimez le premier objet du tableau `personnes` en utilisant la syntaxe suivante :

```javascript
personnes.splice(0, 1);
```

## Liens utils

- [MDN - Les objets](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics)
- [MDN - Les tableaux](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array)
- [MDN - Les tableaux d'objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Indexed_collections#Tableaux_d'objets)

