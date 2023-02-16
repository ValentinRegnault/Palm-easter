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
- Faire un endpoint de l'api qui retourne les questions d'un étudiant, en prenant en paramètre le nom et le prénom de l'étudiant. Si c'est la première connection de l'étudiant, on choisira un certain nombre de question aléatoirement et on stocke la liste des questions choisi. Sinon, on renvoie la liste précédement générée.

- Faire un endpoint de l'api qui permet de valider une question. Il prends en paramètre l'id de la question et la réponse soumise par l'utilisatuer, et retourne si oui on non la réponse est correcte. De plus, si la réponse est correcte, il stocke dans la base de donnée que l'utilisateur a validé la question, la date a laquelle il l'a validée, et vérifie si il a fini son parcours en premier.

- Faire un endpoint de l'api qui prend en paramètre un mot de passe que seul le staff connaitra, ainsi que le nom et prénom d'un étudiant, et qui retourne la liste des questions de cette personne, quelle question il a validé, et s'il a fini son parcours en premier.

- Faire le front : 
    - faire un formulaire qui permet de s'authentifier (nom et prénom)
    - faire une requête vers le serveur pour recupérer les questions
    - afficher la question en cours (la première question non validée, dans l'ordre des questions) de différente manière selon le type de question (choix multiple, réponse textuel, vrai/faux)
    - envoyer une requête vers le serveur quand l'utilisateur répond à une question, et afficher si la réponse est correcte ou incorrecte.

# Technologies utilisées :
On va utiliser firebase, le service d'hébergement de google, qui est très simple d'utilisation et pas cher. On utilisera en particulier [firebase cloud function](https://firebase.google.com/docs/functions?hl=en) pour la partie logique et [realtime database](https://firebase.google.com/docs/database?hl=en) pour la base de donnée.
