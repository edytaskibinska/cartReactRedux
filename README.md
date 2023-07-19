## Objectif :

L’exercice consiste à tester vos capacités à concevoir une architecture d’application FrontEnd en ReactJS / Redux. Le but de cet exercice est de créer une page simple adaptée pour mobile où l’utilisateur peut ajouter / supprimer des éléments dans son panier virtuel.


## Tech Stack :
- React 18.2.0
- Typescript 5.0.2
- React - Redux 8.1.1
- @reduxjs/toolkit 1.9.5
- sass 1.63.6
- node-sass 9.0.0
- Vite 4.4.0

## Architecture

The Application and NPM Module Architecture is based on S.O.L.I.D principles abstracted to use them in modern React Typescript application.
You can see examples by searching the keyword S.O.L.I.D in the code.

## To run the application : 

Install node-modules :
```
npm install
```

Development : 
```
npm run dev
```

Build : 
```
npm run build
```
Typescript check CLI : 
```
tsc
```

## Fonctionnalités : 
L'application possède 2 routes:
#
Un pour la page produit, l'autre pour panier.
#

La liste des produits de la page produit est encapsulé dans le composant LazyScroll mais pas les produits de la page Panier car ca me semblait pas très coherent de ne pas afficher toute de suite tous les items du panier.
On peut neanmoins encapsuler n'importe quel composant avec n'importe quel structure de données (la seule condition que ce soit un array of objects) dans le composant Lazyscroll et definir via props le nombre des produits initiale a afficher et nombre des produits qui s'ajouteront au scroll.
#

On ajoute un produit au panier, le bouton "ajouter au panier" se desactive pour le meilleure experience UX. On peut neanmins desactiver cette condition et ajouter autant de produits qu'on veut, par exemple si on ajoute IPhone 3x sur la page produit -> sur la page panier on verra Iphone une fois avec la quantité 3. 
#
Sur la page Panier (Cart) on peut changer des quantités de produits. Si on met la quantité d'un produit à 0 - un bouton de confirlation de la suppression s'active. On ne peut pas aller plus bas que 0.

Le Swipe : le swipe fonctionne en mode mobile et aussi en mode desktop via onClick sur une zone a gauche de chaque element d ela liste. Que la liste de panier est swipable. Les deux listes utilisent le meme composant reutilisable CartElement.

Le modal provient de ma librairie que je viens de créer et publier ce week-end sur le repo npm. Il est stylé avec styled-components mais s'intègre très bien dans cette application et on peu le modifier comme on veu. Pour en savoir plus :
https://github.com/edytaskibinska/proton-design-system



## Dependances : 

Modal importé de repo npm de la librairie Proton design System que j'ai crée il y a quelques jours avec React Typescript et styled-components - il s'ingègre très bien dans l'application:
https://www.npmjs.com/package/@e-skibinska/proton-design-system

## Notes : 
Le LazyScroll et Swipe est developpé from scratch .
Swipe pourrait etre refactoré et isolé entant que composant <SwipableBlock leftContent={ButtonDeleteComponent}  rightContent={RightComponent}> 