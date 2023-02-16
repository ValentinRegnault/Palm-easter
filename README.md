# Palm-easter
 Le site d'un jeu de piste dans l'istic, pour Pâque, organiser par l'association la Palme (BDE de l'istic)

# Cahier des charges
Le site doit permettre aux étudiants de l'istic d'obtenir des questions/enigme aléatoire
parmi une base de donnée.

Les questions sont répartie dans 3 parcours, avec 3 thème différent, et par niveau de difficulté. L'étudiant donne son nom et prénom, et choisit un parcours. Le site génèrent une liste d'un certain nombre de questions, en choisissant a chaque fois une question par niveau de difficulté (ou 2 par niveau de difficulté par exemple). 
Cette liste doit être générée une fois par étudiant, et l'étudiant doit pouvoir y réacceder a souhait. 

L'étudiant ne doit pas avoir accès a une question tant qu'il n'a pas répondu aux précédentes.

Les étudiants peuvent répondre aux questions et savoir s'il ont la bonne réponse.

Le staff doit avoir un accès simple aux questions qui ont été répondue par un étudiant, a partir de son nom et prénom. Cet accès doit être réservé au staff

# Liste des taches
- Faire un endpoint de l'api qui retourne les questions d'un étudiant, en prenant en paramètre le nom et le prénom de l'étudiant. Si c'est la première connection de l'étudiant, on choisira un certain nombre de question aléatoirement et on stocke la liste des questions choisi. Sinon, on renvoie la liste précédement générée.

- Faire un endpoint de l'api qui permet de valider une question. Il prends en paramètre l'id de la question et la réponse soumise par l'utilisatuer, et retourne si oui on non la réponse est correcte. De plus, si la réponse est correcte, il stocke dans la base de donnée que l'utilisateur a validé la question. 

- Faire le front : 
    - faire un formulaire qui permet de s'authentifier (nom et prénom)
    - faire une requête vers le serveur pour recupérer les questions
    - afficher les questions, de différente manière selon le type de question (choix multiple, réponse textuel, vrai/faux)
    - envoyer une requête vers le serveur quand l'utilisateur répond à une question, et afficher si la réponse est correcte ou incorrecte.