# Palm-easter
Le site d'un jeu de piste dans l'Istic, pour Pâques, organisé par l'association la Palme (BDE de l'Istic).


# Cahier des charges
Le site doit permettre aux étudiants de l'Istic d'obtenir des questions/énigmes aléatoires
Parmi une base de données.


Les questions sont réparties dans 3 parcours, avec 3 thèmes différents, et par niveau de difficulté. L'étudiant donne son nom et prénom, et choisit un parcours. Le site génère une liste d'un certain nombre de questions, en choisissant à chaque fois une question par niveau de difficulté (ou 2 par niveau de difficulté par exemple).
Cette liste doit être générée une fois par étudiant, et l'étudiant doit pouvoir y ré-acceder à souhait.


L'étudiant ne doit pas avoir accès à une question tant qu'il n'a pas répondu aux précédentes.


Les étudiants peuvent répondre aux questions et savoir s'ils ont la bonne réponse.


Les étudiants peuvent répondre à leur dernière question et savoir s'ils ont répondu en premier.


Le staff doit avoir un accès simple aux parcours et aux questions qui ont été répondues par un étudiant, à partir de son nom et prénom, et savoir si une personne est la première à avoir complété toutes ses questions. Cet accès doit être réservé au staff par un mot de passe.


# Liste des tâches
- [x] Faire un endpoint de l'api qui déploie les questions dans la base de données. Il prend en paramètre un mot de passe. Il charge les questions qui se trouvent dans `functions/questions.json`.
- [x] Faire une cloud function qui génère les questions d'un étudiant quand un nouvel étudiant est ajouté. Il choisit un certain nombre de questions aléatoirement.

- [ ] Faire un endpoint de l'api (cloud function) qui permet de valider une question. Il prend en paramètre l'id de la question et la réponse soumise par l'utilisateur, et retourne si oui on non la réponse est correcte. De plus, si la réponse est correcte, il stocke dans la base de données que l'utilisateur a validé la question, la date a laquelle il l'a validée, et vérifie s’il a fini son parcours en premier.

- [ ] mettre en place des règles realtime database pour éviter que n'importe qui fasse n'importe quoi.

- [ ] Ajouter a chaque utilisateur un compteur de chocolat restant à aller chercher

- [ ] réfléchir et mettre en place un système pour bloquer le site avant une certaine date.

- [ ] faire un système pour vérifier si un utilisateur est le premier a remplir toutes ses questions 

- [ ] Faire le front :
    - [ ] Faire un formulaire qui permet de s'authentifier (nom et prénom). Il ajoute à la bdd l'étudiant si c'est sa première connexion. Il faut le faire en deux étapes : d'abord on demande le nom/prenom/numero etudiant, puis si c'est la première connection on demande le parcours.
    - [ ] Faire un système de cookie de connection
    - [ ] Écouter la bdd pour les updates des questions de l'étudiant.
    - [ ] Afficher la question en cours (la première question non validée, dans l'ordre des questions) de différente manière selon le type de question (choix multiple, réponse textuelle, vrai/faux)
    - [ ] Envoyer une requête vers le serveur quand l'utilisateur répond à une question, et afficher si la réponse est correcte ou incorrecte.
    - [ ] Faire une page administrateur qui permet de savoir le nombre de chocolat d'un etudiant + de reset ce compteur.


# Technologies utilisées :
On va utiliser firebase, le service d'hébergement de google, qui est très simple d'utilisation et pas cher. On utilisera en particulier [firebase cloud function] (https://firebase.google.com/docs/functions?hl=en) pour la partie logique et [realtime database] (https://firebase.google.com/docs/database?hl=en) pour la base de données.


Le front sera fait avec svelte (un framework pour aller *beaucoup* plus vite), vite.js (un gestionnaire de paquets, qui va permettre d'installer des dépendances facilement), et tailwindcss pour faire du css plus rapidement. Beaucoup de truc pas évident à utiliser, mais qui font aller vraiment beaucoup plus vite quand on connait.


**Structure de la base de données**
Realtime database est une base de données en arborescence, comme un fichier JSON. La structure de ce JSON est la suivante :


- Il y a deux objets racines : *questions* et *users*
- *questions* contient toutes les questions. Chaque question a différent champs :
    - *questionText* le texte de la question
    - *answer* la réponse de la question
    - *questionType* le type de la question. Peut-être "textAnswer" (une question qui attend une réponse sous forme d'un texte) ou "multipleChoices" (une question à choix multiple).
    - *choices* dans le cas ou *questionType* est "textAnswer", ce champs est nul. Sinon il contient un tableau des choix possibles de réponses.
    - *level* Le niveau de la question. Les niveaux vont de 0 à QUESTION_MAX_LEVEL (constante dans le fichier index.js du dossier functions)
- *users* contient tous les utilisateurs. Chaque utilisateur a différent champs :
    - *firstName* le prénom de l'utilisateur
    - *lastName* le nom de famille de l'utilisateur
    - *choosenPath* le parcours choisi par l'utilisateur
    - *pathValidationDate* Si l'utilisateur a terminé son parcours, la date a laquelle il l'a complété, sinon null.
    - *firstToCompletePath* true si et seulement si l'utilisateur est le premier a avoir terminé son parcours.
    - *questions* un tableau des questions qui ont été assignées a l'utilisateur. Chaque question a les champs suivants :
        - *id* un identifiant unique
        - *validated* true si et seulement si l'utilisateur a répondu correctement a cette question
        - *validationDate* si la question a été validée, la date a laquelle elle a été validée, sinon null


Voici un exemple :


```
{
questions : [
    "ID UNIQUE": {
        questionText : "Dans le guide du voyageur galactique, quelle est la réponse à la Vie, l'Univers et le Reste, qui a été calculée par un supercalculateur construit autour d'une étoile, pendant des millions d'années ?"
        answer : "42",
        choices : null,
        questionType : "textAnswer",
    },
    "ID UNIQUE 2":{
        id : "0000001",
        questionText : "Parmi les choix suivants, qui est l'informaticien qui a fondé la calculabilité ?"
        answer : "Alan Turing",
        choices : ["Alan Turing", "Ada Lovelace", "Linus Torwald"],
        questionType : "multipleChoices",
    }
],
    users : [
        "ID UNIQUE" :{
            id : "000000001",
            firstName : "Alexis",
            lastName : "Deffains",
            choosenPath : "cybersecurity",
            pathValidationDate : null,
            firstToCompletePath : false,
            questions : [
                {
                    id : "00000001",
                    validated : false,
                    validationDate : null,
                },
                {
                    id : "00000002",
                    validated : true,
                    validationDate : "2023 2 March 12 : 00 : 01 : 43",
                }
            ],
        }
    ]
}
```
# Comment commencer


Pour lancer l'application sur votre machine vous aurez besoin d'installer [node.js] (https://nodejs.org/en/). Une fois que c'est fait vous pourrez utiliser la commande `npm install -g firebase-tools` pour installer les outils de développement de firebase.
Vous avez fait le plus dur !


Pour lancer le projet sur votre machine, vous avez deux étapes a faire :
- Compiler le frontend de l'application.
- Lancer l'émulateur de firebase.


1) Le dossier **front** à la racine du projet contient le frontend de l'application (les fichiers. html, . css et. js). On utilise [vite.js] (https://vitejs.dev/). Pour compiler le front, ouvrez un terminal, allez dans le dossier front avec la commande `cd`. Si c'est la première fois que vous lancez le projet, utiliser la commande `npm install`, pour installer toutes les dépendances. Puis pour compiler l'application utilisez `npm run build`. Cela va générer un dossier `dist` qui contient votre page.


2) Vous pouvez alors revenir a la racine du projet avec `cd..` et utiliser la commande `firebase emulators:start`. Cela lancer un émulateur de firebase. Le site est alors hébergé sur votre machine et accessible depuis votre réseau local. Vous pouvez accéder à l’interface de l’émulateur à l’adresse `http ://127.0.0.1:4000/`. Pour voir le front de l’application, c’est à l’adresse `http ://127.0.0.1:5000/`.