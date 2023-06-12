# Les Classes en javascript

Les classes sont un moyen de créer des objets avec des propriétés et des méthodes prédéfinies.

Pour définir une classe, vous pouvez utiliser le mot-clé `class` suivi du nom de la classe. Le nom de la classe doit commencer par une lettre majuscule.

```javascript
class Personne {
  constructor(firstname, lastname, age, ville) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.ville = ville
  }
}
```

La méthode `constructor()` est appelée automatiquement lors de la création d'un nouvel objet.

On appelle cela créer une instance de la classe `Personne`.

```javascript
let personne = new Personne("John", "Doe", 25, "Rouen")
```

Vous pouvez également ajouter des méthodes à la classe. Par exemple, nous pouvons ajouter une méthode `getFullName()` à la classe `Personne` pour retourner le nom complet de la personne.

```javascript
class Personne {
  constructor(firstname, lastname, age, ville) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.ville = ville
  }

  getFullName() {
    return this.firstname + " " + this.lastname
  }
}
```

Vous pouvez ensuite appeler la méthode `getFullName()` sur l'objet `personne` comme suit :

```javascript
let personne = new Personne("John", "Doe", 25, "Rouen")
let fullname = personne.getFullName()

console.log(fullname) // affiche "John Doe"
```

Nous pouvons ajouter une méthode `setAge()` à la classe `Personne` pour modifier la propriété `age` de l'objet.

```javascript
class Personne {
  constructor(firstname, lastname, age, ville) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.ville = ville
  }

  getFullName() {
    return this.firstname + " " + this.lastname
  }

  setAge(age) {
    this.age = age
  }
}
```

Vous pouvez ensuite appeler la méthode `setAge()` sur l'objet `personne` comme suit :

```javascript
let personne = new Personne("John", "Doe", 25, "Rouen")
personne.setAge(30)

console.log(personne.age) // affiche 30
```

> On appelle les méthodes `getFullName()` et `setAge()` des méthodes d'accès. Les méthodes d'accès sont utilisées pour obtenir et/ou modifier les valeurs des propriétés d'un objet. Il est une bonne pratique de nommer les méthodes d'accès en utilisant le préfixe `get` et `set` suivi du nom de la propriété.

## Héritage

L'héritage est un mécanisme qui permet à une classe d'hériter des propriétés et des méthodes d'une autre classe.

Pour créer une classe qui hérite d'une autre classe, vous utilisez le mot-clé `extends` suivi du nom de la classe parente.

Reprenons l'exemple de la classe `Personne` et créons une classe `Etudiant` qui hérite de la classe `Personne`.

```javascript
class Etudiant extends Personne {
  constructor(firstname, lastname, age, ville, classe) {
    super(firstname, lastname, age, ville)
    this.classe = classe
  }
}
```

La classe `Etudiant` hérite des propriétés et des méthodes de la classe `Personne`. La classe `Etudiant` a également une propriété `classe` qui n'existe pas dans la classe `Personne`.

Pour appeler le constructeur de la classe parente, vous utilisez le mot-clé `super` suivi des arguments du constructeur de la classe parente.

```javascript
let etudiant = new Etudiant("John", "Doe", 25, "Rouen", "BTS SIO")
```

Vous pouvez ensuite appeler la méthode `getFullName()` sur l'objet `etudiant` comme suit :

```javascript
let fullname = etudiant.getFullName()

console.log(fullname) // affiche "John Doe"
```

Vous pouvez également appeler la méthode `setAge()` sur l'objet `etudiant` comme suit :

```javascript
etudiant.setAge(30)

console.log(etudiant.age) // affiche 30
```

## Exercices

> Attention, les exercices suivants sont à réaliser dans le fichier `VOTRE_NOM-exercices-les-classes.js`.  
> L'ensemble des classes doivent être définies dans ce fichier puisqu'elles seront depandantes les unes des autres.

## Liens utiles

- [Classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
- [Héritage](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/extends)
