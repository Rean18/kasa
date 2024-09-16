# Kasa - Application de location immobilière

## Description

Ce projet consiste à développer une application web de location immobilière pour Kasa, une entreprise spécialisée dans la location d’appartements entre particuliers. L’objectif est de créer une interface utilisateur moderne et réactive en utilisant React et React Router. Le site doit être entièrement responsive et intégrer des fonctionnalités avancées telles qu’une galerie d’images et des animations CSS.

## Technologies utilisées

	•	React (avec Create React App)
	•	React Router pour la gestion de la navigation
	•	Sass pour la gestion des styles
	•	CSS animations pour les transitions et l’interactivité
	•	JSON pour simuler les données

## Objectifs pédagogiques

	•	Initialiser une application avec Create React App
	•	Configurer la navigation avec React Router
	•	Développer des composants réutilisables et dynamiques avec React
	•	Mettre en œuvre des animations CSS et un style maintenable avec Sass
	•	Rendre l’application responsive à partir des maquettes fournies sur Figma

## Fonctionnalités

	1.	Navigation entre les pages : La navigation dans l’application est gérée avec React Router pour une expérience fluide et sans rechargement.
	2.	Galerie d’images : Une galerie d’images permet de naviguer entre les photos avec des boutons “Suivant” et “Précédent”. La galerie supporte une navigation en boucle.
	3.	Système de collapse : Les sections d’information peuvent être affichées ou masquées grâce à un système de collapse avec des animations fluides.
	4.	Responsivité : Le site est entièrement responsive, s’adaptant aux écrans de bureau, tablettes et mobiles, conformément aux maquettes Figma.
	5.	Utilisation de données simulées : Les données de logement sont extraites d’un fichier JSON, ce qui permet de simuler un back-end en attendant son implémentation.

## Problématiques rencontrées et solutions

	•	Respect des maquettes sur tous les formats : Grâce à l’utilisation de Flexbox, CSS Grid et des media queries, l’application respecte les maquettes fournies sur Figma pour les formats desktop, tablette et mobile.
	•	Organisation du CSS avec Sass : Sass a été utilisé pour organiser les styles, éviter les répétitions et faciliter la maintenance du code. L’approche modulaire a permis une gestion claire des styles à grande échelle.
	•	Navigation dans la galerie d’images : Pour répondre à la contrainte de navigation en boucle dans la galerie, j’ai mis en place une logique conditionnelle qui vérifie si l’utilisateur se trouve sur la première ou la dernière image et ajuste le défilement en conséquence.
	•	Gestion des états des collapses : J’ai utilisé le hook useState de React pour gérer l’ouverture et la fermeture des sections de contenu (collapse), avec des animations CSS pour rendre la transition fluide.
