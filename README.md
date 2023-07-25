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

## Amelioratons apportés :
1. Implémentation des tests unitaires et leur configuration.

2. Correction du fonctionnement du panier - la quantité qui augmente pour chaque produit ajouté est maintenant gérée directement dans le reducer "addItem".

3. Amélioration de la page Produit - le bouton indique que le produit est ajouté, mais l'utilisateur peut changer la quantité à la fois sur la page produit et sur la page panier - les deux sont synchronisés avec le store.

4. Ajout de Redux Persist pour stocker le state dans le "localStorage".

## Liste RAF pour améliorer le projet:
1. UI - Ajouter les effets de gradient sur les boutons et les autres éléments du site.

2. UI - Ajouter les photos aux éléments des produits, améliorer le design pour le rendre plus convivial (encore beaucoup de travail à faire).

3. SCSS - Créer davantage de mixins ou de fonctions (au fur et à mesure que le projet grandit, il est nécessaire de revoir régulièrement la CSS et de procéder à de la refacto, en regroupant les règles en mixins, en créant des fonctions en cas de besoin, et en ajoutant plus de variables pour les tailles de polices, les marges, etc.).

4. Définir 2 ou 3 breakpoints maximum pour éviter d'en avoir trop.

5. UX - Transformer le carré gris avec la quantité en un champ de saisie (input) et permettre à l'utilisateur de saisir directement le nombre de produits.

6. J'aurais amélioré un peu les polices - Implémenter une police plus attrayante (?) - Réduire les tailles.

7. Améliorer la compatibilité cross-browser - (léger décalage de l'affichage flex sur Firefox).

8. LazyScroll - J'aurais bien aimé ajouter un useEffect qui récupère la hauteur de la page et détermine le nombre d'éléments initialement chargés automatiquement. Si on ne saisit pas le nombre exact, le composant affiche les éléments qui entrent dans la partie visible de la fenêtre, puis les éléments s'ajoutent progressivement au défilement (scroll).

9. Comme pour chaque site, il faut ajouter un composant loader.

10. Créer un hook pour récupérer les données avec la gestion des erreurs et le loader - quelque chose comme :
https://github.com/edytaskibinska/P12/blob/master/src/hooks/useFetchAsync.js
- Si cette implémentation correspond à l'état initial du store (à tester), sinon améliorer la fonction fetch dans utils. Ce point nécessiterait une mise en place si l'on attend la réponse des vraies données de l'API.

11. Composant swipable : Si besoin, créer un composant simple qui prend en enfant la liste des éléments (par exemple divs) et, en fonction du nombre et de la longueur de ces éléments, permet un swipe de gauche à droite. À voir si on en a besoin dans d'autres parties de l'application.

12. Améliorer l'affichage de la "grille" des produits, ajuster les hauteurs, etc.

## Ameliorations a faire :
1. UI - ajouter les effets gradient sur le boutons et autres elements du site
2. UI - ajouter les photos aux elements des produits, améliorer le deign pour le rendre plus user friendly (encore pas mal de travail)
3. SCSS - creer plus de mixins ou fonctions (en fonction de comment le projet grandit il faut revoir regulierement la css et faire de la refacto, rassembler les règles en mixins, créer des fonctions au besoin, ajouter plus de variables de tailles de polices, marges etc..)
4. Definir 2 ou 3 breakpoints (max) pour eviter d'en avoir trop
5. UX - transformer le carré gris avec la quantité en input et permettre à l'utilisateur de saisir le nombre des produits directement.
6. J'aurai amélioré un peu les polices - implementer un font plus joli (?) - reduire les tailles
7. LazyScroll - j'aurai bien aimé ajouter un useEffect qui recupere la hauteur de la page et determine le nombre des elements initialement chargés automatiquement. Si on ne saisit pas le nombre exacte, le composant affiche le nombre des elements qui entrent dans la partie visible de du window et ensuite les elements s'ajoutent progresssivement au scroll.
8. Comme pour chaque site, il faut ajouter un composant loader.
9. Créer un hook pour fetcher data avec la gestion d'erreurs et le loader - quelques chose comme :
https://github.com/edytaskibinska/P12/blob/master/src/hooks/useFetchAsync.js
- si cette implementation match avec l'initial state du store (à tester) sinon améliorer la fonction fetch dans utils. Ce point aurait besoin de la mise en place si on attend la reponse des vrais data de l'API. 
10. Component swipable : si besoin créer un composant simple qui prend en children la liste des elements (par exemple divs) et en fonction de nombre et longueur de ces élements swipe du gauche a droite. A voir si on en a besoin dans d'autres endroits de l'application. 
11. Améliorer l'affichage de la "grille" des produits, ajuster les hauteurs etc
12. Implementer circle CI pour la partie ops




Ameliorations effectués dans les fichiers  :
```
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
    ```





