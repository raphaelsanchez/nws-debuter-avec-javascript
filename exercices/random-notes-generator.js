/**
 *
 * Comment noter des élèves qui ont laissé Copilot faire leur exercice ?
 *
 * 1. Créez un tableau `eleves` contenant les objets suivants :
 * 2. Ajoutez une propriété `note` à chaque objet de `eleves`.
 * 3. Affichez le nom et le prénom de chaque élève ainsi que ses notes.
 * 4. Calculez la moyenne de chaque élève et affichez-la.
 * 5. Cliquer sur Run et laissez Copilot donner des notes random.
 */

// On crée une fonction qui génère un nombre aléatoire entre min et max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// On crée un tableau d'éleves avec leur nom et prénom
let eleves = [
  { nom: "LALOUETTE", prénom: "Alexis" },
  { nom: "HESNARD", prénom: "Arthur" },
  { nom: "MORICE", prénom: "Axel" },
  { nom: "PESQUEUX", prénom: "Charley" },
  { nom: "PANIER-LORENZO", prénom: "Cyril" },
  { nom: "LEGER", prénom: "Erwan" },
  { nom: "MOISSON", prénom: "Eve" },
  { nom: "OGIER", prénom: "Grégoire" },
  { nom: "ROBILLOT", prénom: "Jade" },
  { nom: "JOURDAIN", prénom: "Jules" },
  { nom: "LEPAISANT", prénom: "Julia" },
  { nom: "ROGE", prénom: "Killian" },
  { nom: "TOUZE", prénom: "Laura" },
  { nom: "TIERCELIN", prénom: "Lou" },
  { nom: "QUESNEL", prénom: "Ludovic" },
  { nom: "LEROUX", prénom: "Manon" },
  { nom: "TERRADE", prénom: "Mathis" },
  { nom: "MANSUY", prénom: "Matthieu" },
  { nom: "FAVARIO", prénom: "Nathaniel" },
  { nom: "VACHE", prénom: "Raphaël" },
  { nom: "PETIT", prénom: "Raphaelle" },
  { nom: "MERAL", prénom: "Tom" },
];

// On parcourt le tableau d'éleves et on ajoute une note à chaque élève
eleves.forEach(function (eleve) {
  eleve.note = {
    exo1: generateRandomNumber(0, 2),
    exo2: generateRandomNumber(0, 2),
    exo3: generateRandomNumber(0, 2),
    exo4: generateRandomNumber(0, 4),
  };

  // On affiche le nom et le prénom de l'élève ainsi que ses notes
  console.log(eleve.nom + " " + eleve.prénom);
  console.log(
    "Notes : \n Les Tableaux = " +
      eleve.note.exo1 +
      " / 2 \n Les objets = " +
      eleve.note.exo2 +
      " / 2 \n Les fonctions = " +
      eleve.note.exo3 +
      " / 2 \n Les classes = " +
      eleve.note.exo4 +
      " / 4"
  );
  console.log("------");

  // On calcule le total des notes de l'élève et on l'affiche
  console.log(
    "Total = " +
      (eleve.note.exo1 + eleve.note.exo2 + eleve.note.exo3 + eleve.note.exo4) +
      "/8"
  );
  console.log("\n========================\n");
});
