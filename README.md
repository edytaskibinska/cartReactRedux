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

L'Application est basé sur les principes on S.O.L.I.D qui ont étés abstraits pour pouvoir les utiliser dans l'application React Typescript moderne.
Recherchez les mots-clés S.O.L.I.D dans le code pour voir les exemples.


## Installation  : 

Clone the repo:
```
git clone https://github.com/edytaskibinska/cartReactRedux.git
```

Once you cloned the project, you need to need to install the node-modules on the project repository (root) : 
```
npm install
```

Make sure that you have the last version of Proton Design System modules:
```
npm i @e-skibinska/proton-design-system
```

Development : 
```
npm run dev
```

Build : 
```
npm run build
```

Run typescript checker : 
```
tsc
```

If needed, to have tha last version of packages please run:
```
npm update
```

## Fonctionnalités : 
### Routes
L'application possède 2 routes:

Un pour la page produit, l'autre pour panier.

### Lazy Scroll from scratch et réutilisable
La liste des produits de la page produit est encapsulé dans le composant LazyScroll mais pas les produits de la page Panier car ca me semblait pas très coherent de ne pas afficher toute de suite tous les items du panier.
On peut neanmoins encapsuler n'importe quel composant avec n'importe quel structure de données (la seule condition que ce soit un array of objects) dans le composant Lazyscroll et definir via props le nombre des produits initiale a afficher et nombre des produits qui s'ajouteront au scroll.

### Ajout au panier / gestion du panier
On ajoute un produit au panier, le bouton "ajouter au panier" se desactive pour le meilleure experience UX. On peut neanmins desactiver cette condition et ajouter autant de produits qu'on veut, par exemple si on ajoute IPhone 3x sur la page produit -> sur la page panier on verra Iphone une fois avec la quantité 3. 

### Panier + fonctionnalités bonus
Sur la page Panier (Cart) on peut changer des quantités de produits. Si on met la quantité d'un produit à 0 - un bouton orange de confirmation de la suppression s'active. On ne peut pas aller plus bas que 0.

### Le Swipe : 
Le swipe fonctionne en mode mobile et aussi en mode desktop via onClick sur une zone a gauche de chaque element de la liste. Que la liste de panier est swipable. Les deux listes utilisent le meme composant reutilisable.

Axe d'amélioration pour swipe :
Swipe pourrait etre refactoré et isolé entant que composant reutilisable <SwipableBlock leftContent={ButtonDeleteComponent}  rightContent={RightComponent}> ou bien <SwipableBlock > qui prend en paramentres les enfants descendants directs puis gere le swipe comme une pagination.

### Footer et modal.

Le modal provient de la librairie Proton Design System que je viens de créer et publier ce week-end sur le repo npm. Il est stylé avec styled-components mais s'intègre très bien dans cette application et on peu le modifier comme on veut. Pour en savoir plus :
https://github.com/edytaskibinska/proton-design-system

Il n'y a que Modal dans la lib pour le moment :)

npm : https://www.npmjs.com/package/@e-skibinska/proton-design-system


## Store : 

Est crée avec Redux-toolkit et possese deux fichiers slices, un pour les actions/reducers de Cart, l'autre pour Product.
Axe d'amélioration pour Store : on peut aussi implementer redux-persiste pour pouvoir stocker le array des produits ajouté au panier dans localstorage. Projet exemple avec redux persist et l'envoie des datas au backend:

https://github.com/edytaskibinska/p13bank


## Design : 
J'ai opté pour un s-design simple pour assurer l'affichage en mobile (mobile first) et au desktop. On peut toujours l'amléliorer mais le rendu pour un test est suffisant.

Si vous avez des questions n'hesitez pas a revenir vers moi. 

## Amelioratons :
1. Implementation des tests unitaires et le config 
2. Correction de fonctionnement de panier - la quantité qui augmente pour chaque produit ajoute est maintenant geré directement dans reducer addItem
3. Amélioration de la page Produit - le bouton indique que le produit est ajouté mais l'utilisateur peut changer la quantité et sur la page produit et sur la page panier - les deux sont synchronisés avec le store
4. Ajout de redux persist pour stocker le state dans localstorage 

FILES :
    modified:   README.md // MAJ de readme - plus clair
    new file:   empty-module.js //En résumé, utiliser module.exports = {}; (ou export default {} en TypeScript) dans empty-module.js  permet de créer un module vide qui peut être utilisé pour des mocks, éviter des erreurs de module manquant ou remplacer temporairement des modules lors de l'écriture de tests unitaires avec Jest.
    new file:   jest.config.ts // config pour JEST
    modified:   package.json // adding testing library and dependencies
    new file:   src/Components/Button/Button.test.tsx // enhancing properties on buttons elements
    new file:   src/Containers/CartList/CartList.test.tsx //adding tests for cart list
    renamed:    src/Interfaces/ICartElement.ts -> src/Interfaces/InterfaceCartElement.ts //change naming
    modified:   src/Pages/CartPage/CartPage.tsx //updatitg card page, removin LazyScroll, adding state from store
    modified:   src/Store/reducers/cartSlice.ts //refacto of reducers with updateQuantity function etc..
    new file:   src/Store/reducers/productSlice.test.ts /:addin-ng simple test to product slice
    new file:   src/modules.d.ts // file that is used to declare types for external modules that are not shipped with official type declaration files. It enhances the development experience by providing type information for these modules, enabling the TypeScript compiler to better understand their structure and detect potential errors in the code.
    new src/__mocks__/fetchdata.ts // Mock the Fetch Function: I have created te mock implementation of the fetch function that returns mock data for testing purposes. 
    modified:   src/Store/configureStore // adding redux-persist


