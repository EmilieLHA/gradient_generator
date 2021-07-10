# Application météo géolocalisée

## Partie HTML / CSS
La partie Html et CSS est très basique: CDN de Bootstrap, container avec une width définie en vw pour la responsivité.

## Partie JS

### Initialisation
Après la sélection des éléments du DOM dont on a besoin, on initie la page avec 2 couleurs.
On passe pour cela par un template litteral. Une petite astuce consite à passer un tableau pour les couleurs initiales dans le template litteral.

### Controle de l'inclinaison
Chaque modification de l'input range correxpond à un événement input. 
oar défaut, les borne d'un input de type range vont de 0 à 100. Nous avons besoin dans notre cas de récupérer un angle entre 0 et 360 degrés. Nous pouvons donc simplement générer l'inclinaison en multipliant la valeur de range par 3.6 et en actualisant le background de notre body.

### Random color picker
C'est une pertie assez sympa. L'idée est de générer un nombre héxadécimal de façon aléatoire. 
J'aurais pu passer par cette méthode: 

var randomColor = Math.floor(Math.random()*16777215).toString(16)
Cette méthode permet de convertir en hexadécimal un chiffre compris entre 0 et 16 777 215 (ce nombre étant la dernière couleur du spectre écrite en binaire). Mais cette méthode pose un problème de bugs pour les nombres qui commencent par un ou plusieurs 0.

J'ai donc préféré une méthode moins belle mathématiquement mais plus fiable.

## Ajouter ou supprimer une couleur
Afin d'avoir un code assez court, j'ai assigné la même fonction addOrRemove aux boutons plus et moins. Je leur ai simplement ajouté un ID différent. 
J'utilise un **attribut universel** data-id pour compter le nombre de couleurs utilisées dans le gradient. Cet identifiant unique me permet également de contrôler la modification manuelle des couleurs.



