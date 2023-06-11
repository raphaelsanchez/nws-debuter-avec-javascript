# Les fonctions en javascript pour débutants

Dans ce chapitre, nous allons voir comment déclarer et utiliser des fonctions en javascript.

## Déclarer une fonction

Pour déclarer une fonction en javascript, vous utilisez la syntaxe suivante :

```javascript
function nom_de_la_fonction() {
    // instructions
}
```

Par exemple, la fonction suivante affiche un message dans la console :

```javascript
function afficherMessage() {
    console.log("Bonjour !");
}
```

## Appeler une fonction

Pour appeler une fonction, vous utilisez la syntaxe suivante :

```javascript
nom_de_la_fonction();
```

Par exemple, pour appeler la fonction `afficherMessage()`, vous utilisez la syntaxe suivante :

```javascript
afficherMessage();
```

## Les paramètres d'une fonction

Une fonction peut avoir des paramètres. Les paramètres sont des variables qui stockent les valeurs passées à la fonction lors de son appel.

Par exemple, la fonction suivante prend deux paramètres `a` et `b` et affiche leur somme dans la console :

```javascript
function afficherSomme(a, b) {
    console.log(a + b);
}
```

Pour appeler la fonction `afficherSomme()`, vous devez passer deux arguments :

```javascript
afficherSomme(2, 3); // affiche 5
```

## La valeur de retour d'une fonction

Une fonction peut retourner une valeur. Pour retourner une valeur, vous utilisez le mot-clé `return` suivi de la valeur à retourner.

Par exemple, la fonction suivante retourne la somme de deux nombres :

```javascript
function calculerSomme(a, b) {
    return a + b;
}
```

Pour utiliser la valeur de retour de la fonction `calculerSomme()`, vous devez l'appeler comme suit :

```javascript
let somme = calculerSomme(2, 3);
console.log(somme); // affiche 5
```

## Les fonctions anonymes

Une fonction anonyme est une fonction qui n'a pas de nom. 
Les fonctions anonymes sont souvent utilisées comme valeurs de paramètres d'autres fonctions.

Pour déclarer une fonction anonyme, vous utilisez la syntaxe suivante :

```javascript
function() {
    // instructions
}
```

Par exemple, la fonction suivante prend une fonction anonyme comme paramètre :

```javascript
function afficherMessage(f) {
    f();
}
```

Pour appeler la fonction `afficherMessage()`, vous devez passer une fonction anonyme comme paramètre :

```javascript
afficherMessage(function() {
    console.log("Bonjour !");
});
```

Ce ci n'est qu'une introduction aux fonctions en javascript. Nous aborderons les fonctions en détail dans un chapitre dédié.

## Exercices

### Exercice 1

Déclarez une fonction `afficherMessage()` qui affiche un message dans la console.

### Exercice 2

Déclarez une fonction `afficherSomme()` qui prend deux paramètres `a` et `b` et affiche leur somme dans la console.

### Exercice 3

Déclarez une fonction `calculerSomme()` qui prend deux paramètres `a` et `b` et retourne leur somme.

### Exercice 4

Déclarez une fonction `afficherSomme()` qui prend deux paramètres `a` et `b` et une fonction anonyme comme paramètre. La fonction `afficherSomme()` doit appeler la fonction anonyme en passant la somme de `a` et `b` comme argument.

### Exercice 5

Déclarez une fonction `afficherSomme()` qui prend deux paramètres `a` et `b` et une fonction anonyme comme paramètre. La fonction `afficherSomme()` doit appeler la fonction anonyme en passant la somme de `a` et `b` comme argument.


## Liens utiles

- [Les fonctions en javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)
- [Les fonctions anonymes en javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions#Fonctions_anonymes)
