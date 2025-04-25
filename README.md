# 🏠 Kasa – Application de Location Immobilière

![Présentation Kasa responsive](https://github.com/user-attachments/assets/fbd1e444-68ba-493f-9342-0fe023b78688)

---

## 📝 Description

Ce projet consiste à développer une **application web de location immobilière** pour **Kasa**, une entreprise spécialisée dans la location d'appartements entre particuliers.

L'objectif est de créer une interface **moderne**, **réactive**, et **entièrement responsive**, en utilisant **React** et **React Router**. Le site inclut des fonctionnalités avancées comme une galerie d'images interactive et des animations CSS élégantes.

---

## 🛠️ Technologies Utilisées

- ⚛️ **React** (via Create React App)
- 🧭 **React Router** pour la navigation entre pages
- 🎨 **Sass** pour la gestion des styles modulaires
- ✨ **Animations CSS** pour l'interactivité et la fluidité
- 📄 **JSON** comme source de données simulée (mock data)

---

## 🎯 Objectifs Pédagogiques

- Initialiser une application avec **Create React App**
- Mettre en place une navigation SPA avec **React Router**
- Créer des **composants dynamiques et réutilisables**
- Utiliser **Sass** pour une gestion de style propre et scalable
- Rendre l'application **responsive** à partir des maquettes Figma

---

## 🚀 Fonctionnalités Principales

1. 🔁 **Navigation fluide entre les pages** (SPA) grâce à React Router
2. 🖼️ **Galerie d'images** avec navigation en boucle (Précédent/Suivant)
3. 📂 **Collapse dynamique** pour afficher ou masquer des sections d’infos
4. 📱 **Responsive design** sur desktop, tablette et mobile
5. 🧪 **Données mockées en JSON** pour simuler un back-end

---

## 🧩 Problématiques Rencontrées & Solutions

- 📐 **Respect des maquettes sur tous les formats**  
  ➤ Utilisation de Flexbox, CSS Grid, et media queries pour coller au design fourni sur Figma.

- 🧱 **Organisation CSS avec Sass**  
  ➤ Sass a permis de mieux structurer les fichiers, éviter les duplications et rendre les styles facilement maintenables.

- 🖼️ **Navigation circulaire dans la galerie**  
  ➤ Mise en place d'une logique conditionnelle pour faire défiler les images en boucle.

- 🔽 **Gestion des collapses (sections pliables)**  
  ➤ Utilisation du hook `useState` de React avec des transitions CSS pour une expérience utilisateur fluide.

---

## ⚙️ Installation & Lancement

```bash
git clone https://github.com/ton-utilisateur/kasa.git
cd kasa
npm install
npm start
