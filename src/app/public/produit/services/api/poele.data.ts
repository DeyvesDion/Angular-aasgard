// import {InMemoryDbService} from 'angular-in-memory-web-api'
// import { Injectable } from '@angular/core';
// import { IPoele } from '../../models/interface/poele';

// @Injectable({
//   providedIn: 'root'
// })
// export class PoeleData implements InMemoryDbService {


//     createDb():Record<string, IPoele[]> {
        
//       const poeles: IPoele[] = [

// {
//     id: 1,
//     name: "Buea sweet life",
//     description: "Belle vue au bord de la mer",
//     type: "Poêle à bois",
//     imageUrl: "i",
//   },
//   {
//      id: 2,
//     name: "Buea sweet life",
//     description: "Belle vue au bord de la mer",
//     type: "Poêle à granulés",
//     imageUrl: "a",
//   },
//   {
//      id: 3,
//     name: "Buea sweet life",
//     description: "Belle vue au bord de la mer",
//     type: "Poêle mixte",
//     imageUrl: "k",
//   },
//   {
//      id: 4,
//     name: "Buea sweet life",
//     description: "Belle vue au bord de la mer",
//     type: "Poêle à charbon",
//     imageUrl: "k",
//   },
  

// ];
// return {poeles}
        
//       }
  
// }

export const DataPoele = [
  {
    id: 1,
    name: "CONTURA 596 STYLE",
    base:"poele-a-bois-contura-596",
    description: "Plus qu’un simple poêle à bois, le Contura 596 ne peut vous laisser indifférent et deviendra l’élément central de votre intérieur. Son design réinterprète les codes du genre sans craindre le temps qui passe. Avec lui, c’est la promesse de nombreux moments de convivialité à vivre en solo ou à partager avec vos proches qui s’annoncent!",
    description2:"Sa forme cylindrique permet au Contura 596 de s'intégrer à tout type d'aménagement, particulièrement aux endroits où il est difficile de placer des meubles. Véritable objet design, il se fait lieu de rassemblement et de contemplation. Vous profiterez du confort d’une chaleur douce et admirez la danse des flammes grâce à son foyer surélevé. Le grand panel de finitions fera du poêle Contura 596 le compagnon idéal de vos soirées au coin du feu.",
    type: "Poêle à bois",
    imageUrl: "../../../assets/596vignette.png",
    imageUrl2: "../../../assets/slider.png",
  },
    {
    id: 2,
    name: "RIKA DOMO",
    base:"poele-granules-rika-domo",
    description: "Le poêle Rika Domo n’est pas seulement remarquable à son design unique. Il s’agit aussi d’un poêle regroupant les toutes dernières innovations pour vous apporter un contrôle sans faille et un confort optimal.",
    description2:"Peu profond et disponible en plusieurs finitions, le Rika Corso sait s’adapter à tout type d’intérieur. Délivrant une chaleur douce et puissante, il regorge de trésors d’ingéniosité : écran tactile, interface USB, commande vocale (Rika Voice), contrôle à distance. Il ravira les plus technophiles comme ceux qui recherche la performance et la praticité.",
    type: "Poêle à granulés",
    imageUrl: "../../../assets/Rika Domo vignette.png",
    imageUrl2: "../../../assets/Rika Domo 3D Desktop.png",
  },
      {
    id: 3,
    name: "NORDPEIS QUADRO 1 BASIC",
    base:"poele-a-bois-nordpeis-quadro",
    description: "La gamme de poêle à bois Quadro est idéale pour ceux qui souhaitent chauffer des petites surfaces (60 à 120 m2) en y apportant le charme du design norvégien. Modulables et disponibles en 4 modèles, les poêles Quadro de Nordpeis peuvent se nicher aussi bien dans un angle qu’au milieu de votre pièce à vivre.",
    description2:"En complément du système de convection naturelle, vous pouvez opter pour le réservoir de chaleur PowerStone®. La pierre PowerStone® est composée de Magnésium et d’Olivine dont la densité est très élevée. Ainsi la pierre PowerStone® accumule efficacement la chaleur et la restitue très lentement. Cette technologie délivre une chaleur très appréciable et permet de réaliser des économies significatives au quotidien.",
    type: "Poêle à bois",
    imageUrl: "../../../assets/NORDPEISQUADRO1BASIC.png",
    imageUrl2: "../../../assets/Nordpeis Quadro 3D desktop.png"
  },
      {
    id: 4,
    name: "ANIMO AVITO",
     base:"poele-a-granules-animo-avito",
    description: "Vous pensez que le compromis idéal entre design et performance relève de l'impossible ? Le modèle Avito par Animo saura vous démontrer que la recherche du poêle à granulés qui vous ressemble n'a rien de bien difficile.",
    description2:"La gamme Avito est l’incontournable d’Animo. Ses trois poêles à granulés Multiair/Rao/Slim ont chacun une particularité permettant ainsi de mieux s’adapter à votre environnement. Sa mission est de rendre votre intérieur plus confortable.",
    type: "Poêle à granulés",
    imageUrl: "../../../assets/Avito vignette.jpg",
    imageUrl2: "../../../assets/Animo Adevo 3D desktop.png",
  },
      {
    id: 5,
    name: "ANIMO ADEVO",
     base:"poele-granules-animo-adevo",
    description: "Vous pensez que le compromis idéal entre design et performance relève de l'impossible ? Le modèle Adevo par Animo saura vous démontrer que la recherche du poêle à granulés qui vous ressemble n'a rien de bien difficile.",
    description2:"Grâce à sa petite taille le poêle à granulés Adevo s'intègre parfaitement dans votre intérieur. Il sait épouser les formes de votre pièce en la réchauffant pour les longues journées d’hiver. Plusieurs habillages sont disponibles pour personnaliser votre intérieur.",
    type: "Poêle à granulés",
    imageUrl: "../../../assets/Adevo vignette.jpg",
    imageUrl2: "../../../assets/Animo Adevo 3D desktop.png",
  },
      {
    id: 6,
    base:"poele-mixte-animo-aduo",
    name: "ANIMO ADUO",
    description: "Bûches ou pellets – les poêles mixtes Animo combinent les deux. Confort et chaleur d'une simple pression de bouton sont devenus réalité. Efficacité et respect de l'environnement s'ajoutant, chauffer devient un plaisir pur. Les poêles mixtes Animo comblent tous vos désirs.",
    description2:"Les avantages des deux combustibles ont été combinés en un seul poêle – Aduo offre un feu classique et tous les bénéfices d'un poêle à pellets. Chauffer devient un jeu d'enfant grâce à une utilisation simple et intuitive ainsi qu'au nettoyage et à la reconnaissance entièrement automatique du combustible. L'Aduo Multi Air garantit également le chauffage simultané de plusieurs pièces.",
    type: "Poêle mixte",
    imageUrl: "../../../assets/Aduo vignette.jpeg",
    imageUrl2: "../../../assets/Animo Aduo 3D desktop.png",
  },
           {
    id: 7,
    name: "TERMATECH TT30G CLASSIC",
    base:"poele-a-bois-termatech-tt30g-classic",
    description: "Avec ses vitres latérales en complément de la porte vitrée, le TT30G vous laisse profiter du feu de tous les angles. C’est presque comme autour d’un feu de camp. Le design est minimaliste, élégant et intemporel.",
    description2:"La gamme TT30 de la marque Termatech a été créée pour les vrais amateurs du feu. Fabriqués avec de la fonte et de l’acier, les poêles à bois de la gamme TT30 sont solides et robustes. Plusieurs appareils avec différentes finitions sont disponibles dans cette gamme.",
    type: "Poêle à bois",
    imageUrl: "../../../assets/TT30G vignette.jpeg",
    imageUrl2: "../../../assets/Termatech TT30G 3D Desktop.png",
  },
  {
    id: 8,
    name: "RIKA SUMO",
    base:"poele-granules-termatech-tt30g-classic",
    description: "Un poêle à granulés marie l’atmosphère d‘un poêle à bois classique avec une technologie de pointe et un confort de commande maximal.",
    description2: "Le Sumo, poêle à granulés de la marque Rika, dispose d’un choix important de parures latérales pouvant répondre à tous les goûts. Haut de gamme, il est équipé d’innovations technologiques améliorant votre confort.",
    type: "Poêle à granulés",
    imageUrl: "../../../assets/Sumo vignette.jpeg",
    imageUrl2: "../../../assets/Rika Sumo 3D Desktop.png",
 },
  
]