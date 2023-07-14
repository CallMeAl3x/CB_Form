# Frontend Mentor - Formulaire interactif de détails de carte (Solution)

Il s'agit d'une solution pour le défi [Formulaire interactif de détails de carte](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw) sur Frontend Mentor.

## Table des matières

- [Aperçu](#aperçu)
  - [Le défi](#le-défi)
  - [Capture d'écran](#capture-décran)
  - [Liens](#liens)
- [Ma démarche](#ma-démarche)
  - [Construit avec](#construit-avec)
  - [Ce que j'ai appris](#ce-que-jai-appris)
  - [Développement continu](#développement-continu)
  - [Ressources utiles](#ressources-utiles)
- [Auteur](#auteur)
- [Remerciements](#remerciements)

## Aperçu

### Le défi

Les utilisateurs doivent pouvoir :

- Remplir le formulaire et voir les détails de la carte se mettre à jour en temps réel.
- Recevoir des messages d'erreur lorsque le formulaire est soumis si :
  - Un champ de saisie est vide.
  - Les champs de numéro de carte, de date d'expiration ou de CVC sont au mauvais format.
- Voir la mise en page optimale en fonction de la taille de l'écran de leur appareil.
- Voir les états de survol, d'activation et de focus pour les éléments interactifs de la page.

### Capture d'écran

[preview](./images/preview.png)[preview-mobile](./images/preview-mobile.png)

### Liens

- [URL du site en direct](http://alexandre.bonefons.mmi-velizy.fr/Projets_HTML-CSS-JS/card_details_form/)

## Ma démarche

J'ai commencé par diviser la page en deux blocs distincts, le côté gauche et le côté droit. Dans le bloc de gauche, j'ai placé les deux cartes bancaires, en veillant à les disposer correctement et à ajuster les informations en fonction de chaque carte. Ensuite, je me suis attaqué à la création du formulaire dans le bloc de droite, en ajoutant les champs nécessaires et en mettant en place les fonctionnalités de validation. Une fois le formulaire terminé, j'ai travaillé sur la rendu responsive de la page en tablette puis sur mobile. Enfin, j'ai réalisé la mise en place de la page finale, qui s'affiche après la soumission du formulaire.

### Construit avec

- Balisage HTML5 sémantique
- Propriétés personnalisées CSS
- Flexbox
- Javascript

### Ce que j'ai appris

Fonctions JavaScript : J'ai eu l'occasion d'approfondir mes compétences en JavaScript en utilisant des fonctions pour traiter les entrées du formulaire, effectuer des validations et mettre à jour les détails de la carte en temps réel.

Positions absolues et relatives : En travaillant sur la mise en page du formulaire interactif, j'ai utilisé les positions absolues et relatives pour positionner les éléments de manière précise. J'ai compris comment ces propriétés CSS et comment les combiner avec d'autres propriétés, telles que top, left, right et bottom, pour obtenir le résultat souhaité.

### Ressources utiles

- [Ressource exemple 1](https://developer.mozilla.org/fr/docs/Web/CSS/position) - Cela m'a aidé à bien comprendre les positions : relatives et absolute, ce qui m'a permis de faire un design responsive. J'ai vraiment aimé ce modèle et je l'utiliserai à l'avenir.
- [Ressource exemple 2](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) - En parlant de design responsive je trouves cette source très très adaptée, elle m'a permis de comprendre rapidement comment les medias querys fonctionnent.

## Auteur

- Site Web - [Bonefons Alexandre](https://www.your-site.com)
- Frontend Mentor - [@CallMeAl3x](https://www.frontendmentor.io/profile/CallMeAl3x)