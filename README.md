# Palm-easter
 Le site d'un jeu de piste dans l'istic, pour Pâque, organiser par l'association la Palme (BDE de l'istic)

# Cahier des charges
Le site doit permettre aux étudiants de l'istic d'obtenir des questions/enigme aléatoire
parmi une base de donnée.

Les questions sont répartie dans 3 parcours, avec 3 thème différent, et par niveau de difficulté. L'étudiant donne son nom et prénom, et choisit un parcours. Le site génèrent une liste d'un certain nombre de questions, en choisissant a chaque fois une question par niveau de difficulté (ou 2 par niveau de difficulté par exemple). 
Cette liste doit être générée une fois par étudiant, et l'étudiant doit pouvoir y réacceder a souhait. 

L'étudiant ne doit pas avoir accès a une question tant qu'il n'a pas répondu aux précédentes.

Les étudiants peuvent répondre aux questions et savoir s'il ont la bonne réponse.

Les étudiants peuvent répondre a leur dernière question et savoir s'ils ont répondu en premier.

Le staff doit avoir un accès simple aux parcours et aux questions qui ont été répondue par un étudiant, a partir de son nom et prénom, et savoir si une personne est la première a avoir completer toute ses questions. Cet accès doit être réservé au staff par un mot de passe.

# Liste des taches
- [x] Faire un endpoint de l'api qui déploie les questions dans la base de donnée. Il prends en paramètre un mot de passe. Il charge les questions qui se trouve dans `functions/questions.json`.
- [ ] Faire un endpoint de l'api qui retourne les questions d'un étudiant, en prenant en paramètre le nom et le prénom de l'étudiant. Si c'est la première connection de l'étudiant, on choisira un certain nombre de question aléatoirement et on stocke la liste des questions choisi. Sinon, on renvoie la liste précédement générée.

- [ ] Faire un endpoint de l'api qui permet de valider une question. Il prends en paramètre l'id de la question et la réponse soumise par l'utilisatuer, et retourne si oui on non la réponse est correcte. De plus, si la réponse est correcte, il stocke dans la base de donnée que l'utilisateur a validé la question, la date a laquelle il l'a validée, et vérifie si il a fini son parcours en premier.

- [ ] Faire un endpoint de l'api qui prend en paramètre un mot de passe que seul le staff connaitra, ainsi que le nom et prénom d'un étudiant, et qui retourne la liste des questions de cette personne, quelle question il a validé, et s'il a fini son parcours en premier.

- [ ] Faire le front : 
    - [ ] faire un formulaire qui permet de s'authentifier (nom et prénom)
    - [ ] faire une requête vers le serveur pour recupérer les questions
    - [ ] afficher la question en cours (la première question non validée, dans l'ordre des questions) de différente manière selon le type de question (choix multiple, réponse textuel, vrai/faux)
    - [ ] envoyer une requête vers le serveur quand l'utilisateur répond à une question, et afficher si la réponse est correcte ou incorrecte.

# Technologies utilisées :
On va utiliser firebase, le service d'hébergement de google, qui est très simple d'utilisation et pas cher. On utilisera en particulier [firebase cloud function](https://firebase.google.com/docs/functions?hl=en) pour la partie logique et [realtime database](https://firebase.google.com/docs/database?hl=en) pour la base de donnée.

Le front sera fait sans framework, seulement vite.js (un gestionnaire de paquets, qui va permettre d'installer des dépendances facilement)

**Structure de la base de donnée**
Realtime database est une base de donnée en arborescence, comme un fichier JSON. La structure de ce JSON est la suivante :

- Il y a deux objets racines : *questions* et *users*
    - *questions* est un tableau de toutes les questions. Chaque questions a différent champs:
        - *id* un identifiant unique
        - *questionText* le texte de la question
        - *answer* la réponse de la question
        - *questionType* le type de la question. Peut être "textAnswer" (une question qui attends une réponse sous forme d'un texte) ou "multipleChoices" (une question à choix multiple)
        - *choices* dans le cas ou *questionType* est "textAnswer", ce champs est nul. Sinon il contient un tableau des choix possibles de réponses.
    - *users* un tableau de tout les utilisateurs. Chaque utilisateur a différent champs :
        - *id* un identifiant unique
        - *firstName* le prénom de l'utilisateur 
        - *lastName* le nom de famille de l'utilisateur
        - *choosenPath* le parcours choisi par l'utilisateur
        - *pathValidationDate* Si l'utilisateur a terminé son parcours, la date a laquelle il l'a complété, sinon null.
        - *firstToCompletePath* true si et seulement si l'utilisateur est le premier a avoir terminé son parcours.
        - *questions* un tableau des questions qui ont été assignée a l'utilisateur. Chaque question a les champs suivants :
            - *id* un identifiant unique
            - *validated* true si et seulement si l'utilisateur a répondu correctement a cette question
            - *validationDate* si la question a été validé, la date a laquelle elle a été validé, sinon null 

Voici un exemple :

```
{
    questions: [
        {
            id: "0000000",
            questionText: "Dans le guide du voyager galactique, quel est la réponse à la Vie, l'Univers et le Reste, qui a été calculée par un supercalculateur construit autour d'une étoile, pendant des millions d'années ?"
            answer: "42",
            choices: null,
            questionType: "textAnswer",
        },
        {
            id: "0000001",
            questionText: "Parmi les choix suivants, qui est l'informaticien qui a fondé la calculabilité ?"
            answer: "Alan Turing",
            choices: ["Alan Turing", "Ada Lovelace", "Linus Torwald"],
            questionType: "multipleChoices",
        }
    ],
    users: [
        {
            id: "000000001",
            firstName: "Alexis",
            lastName: "Deffains",
            choosenPath: "cybersecurity",
            pathValidationDate: null,
            firstToCompletePath: false,
            questions: [
                {
                    id: "00000001",
                    validated: false,
                    validationDate: null,
                },
                {
                    id: "00000002",
                    validated: true,
                    validationDate: "2023 2 March 12:00:01:43",
                }
            ],
        }
    ]
}
``` 
# Comment commencer

Pour lancer l'application sur votre machine vous aurez besoin d'installer [node.js](https://nodejs.org/en/). Une fois que c'est fait vous pourrez utiliser la commande `npm install -g firebase-tools` pour installer les outils de developpement de firebase. 
Vous avez fait le plus dur !

Pour lancer le projet sur votre machine, vous avez deux étapes a faire :
- compiler le frontend de l'application.
- lancer l'émulateur de firebase.

1) Le dossier **front** à la racine du projet contient le frontend de l'application (les fichiers .html, .css et .js). On utilise [vite.js](https://vitejs.dev/). Pour compiler le front, ouvrez un terminal, allez dans le dossier front avec la commande `cd`. Si c'est la première fois que vous lancer le projet, utiliser la commande `npm install`, pour installer toutes les dépendances. Puis pour compiler l'application utilisez `npm run build`. Cela va générer un dossiere `dist` qui contient votre page. 

2) Vous pouvez alors revenir a la racine du projet avec `cd ..` et utiliser la commande `firebase emulators:start`. Cela lancer un émulateur de firebase. Le site est alors héberger sur votre machine et accessible depuis votre réseau local. Vous pouvez acceder a l'interface de l'émulateur à l'adresse `http://127.0.0.1:4000/`. Pour voir le front de l'application, c'est à l'adresse `http://127.0.0.1:5000/`. 

