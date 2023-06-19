import './App.css';
import { useState, useEffect } from 'react';

// Properly splice for wild ingredient w/3-ingredient cocktails //
// Properly splice for double wild situations //

function Customer() {
  const customers = [
    {
      category: "customer",
      name: "Alpha",
      text: "+20 for each vodka-based cocktail",
      id: "alpha",
      img: "",
      ability: "",
      value: 0,
      points: 20,
      requirements: "Vodka"
     },
     {
      category: "customer",
      name: "Beta",
      text: "+20 for each gin-based cocktail",
      id: "beta",
      img: "",
      ability: "",
      value: 1,
      points: 20,
      requirements: "Gin"
     },
     {
      category: "customer",
      name: "Gamma",
      text: "+20 for each tequila-based cocktail",
      id: "gamma",
      img: "",
      ability: "",
      value: 2,
      points: 20,
      requirements: "Tequila"
     },
     {
      category: "customer",
      name: "Delta",
      text: "+20 for each rum-based cocktail",
      id: "delta",
      img: "",
      ability: "",
      value: 3,
      points: 20,
      requirements: "Rum"
     },
     {
      category: "customer",
      name: "Epsilon",
      text: "+20 for each whiskey-based cocktail",
      id: "epsilon",
      img: "",
      ability: "",
      value: 4,
      points: 20,
      requirements: "Whiskey"
     },
     {
      category: "customer",
      name: "Zeta",
      text: "+10 for each cocktail w/vermouth",
      id: "zeta",
      img: "",
      ability: "",
      value: 5,
      points: 10,
      requirements: "Vermouth"
     },
     {
      category: "customer",
      name: "Eta",
      text: "+10 for each cocktail w/juice",
      id: "eta",
      img: "",
      ability: "",
      value: 6,
      points: 10,
      requirements: "Juice"
     },
     {
      category: "customer",
      name: "Theta",
      text: "+10 for each cocktail w/soda",
      id: "theta",
      img: "",
      ability: "",
      value: 7,
      points: 10,
      requirements: "Soda"
     },
     {
      category: "customer",
      name: "Iota",
      text: "+30 for vodka martini",
      id: "iota",
      img: "",
      ability: "",
      value: 8,
      points: 30,
      requirements: "Vodka Martini"
     },
     {
      category: "customer",
      name: "Kappa",
      text: "+30 for bourbon highball",
      id: "kappa",
      img: "",
      ability: "",
      value: 9,
      points: 30,
      requirements: "Bourbon Highball"
     },
     {
      category: "customer",
      name: "Lambda",
      text: "+30 for paloma",
      id: "lambda",
      img: "",
      ability: "",
      value: 10,
      points: 30,
      requirements: "Paloma"
     },
     {
      category: "customer",
      name: "Mu",
      text: "+30 for gin martini",
      id: "mu",
      img: "",
      ability: "",
      value: 45,
      points: 30,
      requirements: "Gin Martini"
     },
     {
      category: "customer",
      name: "Nu",
      text: "+30 for rum & coke",
      id: "nu",
      img: "",
      ability: "",
      value: 46,
      points: 30,
      requirements: "Rum & Coke"
     },
     {
      category: "customer",
      name: "Xi",
      text: "-10 for each cocktail w/vermouth",
      id: "xi",
      img: "",
      ability: "",
      value: 11,
      points: -10,
      requirements: "Vermouth"
     },
     {
      category: "customer",
      name: "Omicron",
      text: "-10 for each cocktail w/juice",
      id: "omicron",
      img: "",
      ability: "",
      value: 12,
      points: -10,
      requirements: "Juice"
     },
     {
      category: "customer",
      name: "Pi",
      text: "-10 for each cocktail w/soda",
      id: "pi",
      img: "",
      ability: "",
      value: 13,
      points: -10,
      requirements: "Soda"
     },
     {
      category: "customer",
      name: "Rho",
      text: "-20 for each vodka-based cocktail",
      id: "rho",
      img: "",
      ability: "",
      value: 14,
      points: -20,
      requirements: "Vodka"
     },
     {
      category: "customer",
      name: "Sigma",
      text: "-20 for each gin-based cocktail",
      id: "sigma",
      img: "",
      ability: "",
      value: 15,
      points: -20,
      requirements: "Gin"
     },
     {
      category: "customer",
      name: "Tau",
      text: "-20 for each tequila-based cocktail",
      id: "tau",
      img: "",
      ability: "",
      value: 16,
      points: -20,
      requirements: "Tequila"
     },
     {
      category: "customer",
      name: "Upsilon",
      text: "-20 for each rum-based cocktail",
      id: "upsilon",
      img: "",
      ability: "",
      value: 17,
      points: -20,
      requirements: "Rum"
     },
     {
      category: "customer",
      name: "Phi",
      text: "-20 for each whiskey-based cocktail",
      id: "phi",
      img: "",
      ability: "",
      value: 18,
      points: -20,
      requirements: "Whiskey"
     },
     {
      category: "customer",
      name: "Chi",
      text: "-30 for trio",
      id: "chi",
      img: "",
      ability: "",
      value: 19,
      points: -30,
      requirements: "Trio"
     },
     {
      category: "customer",
      name: "Psi",
      text: "-60 for full band",
      id: "psi",
      img: "",
      ability: "",
      value: 20,
      points: -60,
      requirements: "Full Band"
     },
     {
      category: "customer",
      name: "Omega",
      text: "+30 for trio",
      id: "omega",
      img: "",
      ability: "",
      value: 21,
      points: 30,
      requirements: "Trio"
     },
     {
      category: "customer",
      name: "Alef",
      text: "+50 for trumpet-led quartet",
      id: "alef",
      img: "",
      ability: "",
      value: 22,
      points: 50,
      requirements: "Trumpet Led Quartet"
     },
     {
      category: "customer",
      name: "Beit",
      text: "+50 for saxophone-led quartet",
      id: "beit",
      img: "",
      ability: "",
      value: 23,
      points: 50,
      requirements: "Saxophone Led Quartet"
     },
     {
      category: "customer",
      name: "Gimel",
      text: "+50 for vocal-led quartet",
      id: "gimel",
      img: "",
      ability: "",
      value: 24,
      points: 50,
      requirements: "Vocal Led Quartet"
     },
     {
      category: "customer",
      name: "Dalet",
      text: "+60 for full band",
      id: "dalet",
      img: "",
      ability: "",
      value: 25,
      points: 60,
      requirements: "Full Band"
     },
     {
      category: "customer",
      name: "Hei",
      text: "+20 for each different minimalist decor element",
      id: "hei",
      img: "",
      ability: "",
      value: 26,
      points: 20,
      requirements: "Minimalist"
     },
     {
      category: "customer",
      name: "Vav",
      text: "-20 for each different minimalist decor element",
      id: "vav",
      img: "",
      ability: "",
      value: 27,
      points: -20,
      requirements: "Minimalist"
     },
     {
      category: "customer",
      name: "Zayin",
      text: "+20 for each different bohemian decor element",
      id: "zayin",
      img: "",
      ability: "",
      value: 28,
      points: 20,
      requirements: "Bohemian"
     },
     {
      category: "customer",
      name: "Cheit",
      text: "-20 for each different bohemian decor element",
      id: "cheit",
      img: "",
      ability: "",
      value: 29,
      points: -20,
      requirements: "Bohemian"
     },
     {
      category: "customer",
      name: "Teit",
      text: "+20 for each different zen decor element",
      id: "teit",
      img: "",
      ability: "",
      value: 30,
      points: 20,
      requirements: "Zen"
     },
     {
      category: "customer",
      name: "Yod",
      text: "-20 for each different zen decor element",
      id: "yod",
      img: "",
      ability: "",
      value: 31,
      points: -20,
      requirements: "Zen"
     },
     {
      category: "customer",
      name: "Kaf",
      text: "+50 for BOTH negroni & daiquiri",
      id: "kaf",
      img: "",
      ability: "",
      value: 32,
      points: 50,
      requirements: "Negroni,Daiquiri"
     },
     {
      category: "customer",
      name: "Lamed",
      text: "+50 for BOTH dark & stormy & gimlet",
      id: "lamed",
      img: "",
      ability: "",
      value: 33,
      points: 50,
      requirements: "Dark & Stormy,Gimlet"
     },
     {
      category: "customer",
      name: "Mem",
      text: "+50 for BOTH teqroni & old fashioned",
      id: "mem",
      img: "",
      ability: "",
      value: 34,
      points: 50,
      requirements: "Teqroni,Old Fashioned"
     },
     {
      category: "customer",
      name: "Nun",
      text: "+50 for BOTH tequila sunrise & manhattan",
      id: "nun",
      img: "",
      ability: "",
      value: 35,
      points: 50,
      requirements: "Tequila Sunrise,Manhattan"
     },
     {
      category: "customer",
      name: "Samekh",
      text: "+50 for BOTH moscow mule & hairy navel",
      id: "samekh",
      img: "",
      ability: "",
      value: 36,
      points: 50,
      requirements: "Moscow Mule,Hairy Navel"
     },
     {
      category: "customer",
      name: "Ayin",
      text: "+50 for ALL THREE: vodka martini, bourbon highball, & paloma",
      id: "ayin",
      img: "",
      ability: "",
      value: 37,
      points: 50,
      requirements: "Vodka Martini,Bourbon Highball,Paloma"
     },
     {
      category: "customer",
      name: "Ayin",
      text: "+50 for ALL THREE: vodka martini, bourbon highball, & paloma",
      id: "ayin",
      img: "",
      ability: "",
      value: 37,
      points: 50,
      requirements: "Vodka Martini,Bourbon Highball,Paloma"
     },
     {
      category: "customer",
      name: "Pei",
      text: "+50 for ALL THREE: gin martini, vodka martini, & rum & coke",
      id: "pei",
      img: "",
      ability: "",
      value: 38,
      points: 50,
      requirements: "Gin Martini,Vodka Martini,Rum & Coke"
     },
     {
      category: "customer",
      name: "Tzadei",
      text: "+50 for ALL THREE: gin martini, bourbon highball, & rum & coke",
      id: "tzadei",
      img: "",
      ability: "",
      value: 39,
      points: 50,
      requirements: "Gin Martini,Bourbon Highball,Rum & Coke"
     },
     {
      category: "customer",
      name: "Qof",
      text: "-30 for ANY minimalist decor element",
      id: "qof",
      img: "",
      ability: "",
      value: 40,
      points: -30,
      requirements: "Minimalist"
     },
     {
      category: "customer",
      name: "Reish",
      text: "-30 for ANY bohemian decor element",
      id: "reish",
      img: "",
      ability: "",
      value: 41,
      points: -30,
      requirements: "Bohemian"
     },
     {
      category: "customer",
      name: "Sin",
      text: "-30 for ANY zen decor element",
      id: "sin",
      img: "",
      ability: "",
      value: 42,
      points: -30,
      requirements: "Zen"
     },
     {
      category: "customer",
      name: "Shin",
      text: "-30 for pillows",
      id: "shin",
      img: "",
      ability: "",
      value: 43,
      points: -30,
      requirements: "Pillows"
     },
     {
      category: "customer",
      name: "Tav",
      text: "+30 for bonsai tree",
      id: "qof",
      img: "",
      ability: "",
      value: 44,
      points: 30,
      requirements: "Bonsai Tree"
     },
  ];

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  };

  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
     </div>
    )
  };

  function generateCustomerDisplay(arr) {
    let count = 0;
    let arr2 = [];
    do {
     let possibleCust = arr[randomNumber(arr.length)];
     let custName = possibleCust.name;
     if (arr2.some(e => e.name === custName) === true) {
      count += 0;
     } else {
      arr2.push(possibleCust);
      count += 1;
     }
  } while (count < 11);
    return arr2;
  };

  const playerCustomers = generateCustomerDisplay(customers);

  const customerDisplay = playerCustomers.map(element => createCard(element));

  return(
    <div id="customer-display">{customerDisplay}</div>
  )
};

function CardsInPlay(props) {

  const january = [
    {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-jan-1",
      img: "",
      ability: "",
      value: 0
     },
     {
       category: "spirit",
       name: "Whiskey",
       text: "",
       id: "whiskey-jan-2",
       img: "",
       ability: "",
       value: 1
      },
      {
       category: "spirit",
       name: "Gin",
       text: "",
       id: "gin-jan-1",
       img: "",
       ability: "",
       value: 2
      },
      {
       category: "spirit",
       name: "Gin",
       text: "",
       id: "gin-jan-2",
       img: "",
       ability: "",
       value: 3
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-1",
       img: "",
       ability: "",
       value: 4
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-2",
       img: "",
       ability: "",
       value: 5
      },
      {
       category: "spirit",
       name: "Rum",
       text: "",
       id: "rum-jan-1",
       img: "",
       ability: "",
       value: 6
      },
      {
       category: "spirit",
       name: "Rum",
       text: "",
       id: "rum-jan-2",
       img: "",
       ability: "",
       value: 7
      },
      {
       category: "spirit",
       name: "Tequila",
       text: "",
       id: "tequila-jan-1",
       img: "",
       ability: "",
       value: 8
      },
      {
       category: "spirit",
       name: "Tequila",
       text: "",
       id: "tequila-jan-2",
       img: "",
       ability: "",
       value: 9
      },
      {
       category: "ingredient",
       name: "Vermouth",
       text: "",
       id: "vermouth-jan",
       img: "",
       ability: "",
       value: 10
      },
      {
       category: "ingredient",
       name: "Soda",
       text: "",
       id: "soda-jan",
       img: "",
       ability: "",
       value: 11
      },
      {
       category: "musician",
       name: "Pianist",
       text: "",
       id: "pianist-jan",
       img: "",
       ability: "",
       value: 12
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-3",
       img: "",
       ability: "",
       value: 13
      },
      {
       category: "decor",
       name: "White Paint",
       text: "Minimalist",
       id: "white-paint-jan",
       img: "",
       ability: "",
       value: 14
      },
      {
       category: "ability",
       name: "Saving for Later",
       text: "Draw and keep both cards next round.",
       id: "ability-a-jan",
       img: "",
       ability: "",
       value: 15
      }
  ];
  
  const february = [
    {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "vodka-feb",
      img: "",
      ability: "",
      value: 0
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-feb",
      img: "",
      ability: "",
      value: 1
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-feb",
      img: "",
      ability: "",
      value: 2
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-feb",
      img: "",
      ability: "",
      value: 3
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-feb-1",
      img: "",
      ability: "",
      value: 4
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-feb-2",
      img: "",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-feb",
      img: "",
      ability: "",
      value: 6
     },
     {
      category: "ability",
      name: "Digging thru the Trash",
      text: "Draw 3 from the discard and select 1.",
      id: "ability-b-feb",
      img: "",
      ability: "",
      value: 7
     },
     {
      category: "musician",
      name: "Drummer",
      text: "",
      id: "drummer-feb",
      img: "",
      ability: "",
      value: 8
     },
     {
      category: "decor",
      name: "Hanging Plant",
      text: "Bohemian",
      id: "hanging-plant-feb",
      img: "",
      ability: "",
      value: 9
     },  
     {
      category: "decor",
      name: "Wood Stools",
      text: "Minimalist",
      id: "wood-stools-feb",
      img: "",
      ability: "",
      value: 10
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-feb",
      img: "",
      ability: "",
      value: 11
     },
     {
      category: "ability",
      name: "Hoarding the Trash",
      text: "Draw 2 from the discard and keep both.",
      id: "ability-c-feb",
      img: "",
      ability: "",
      value: 12
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-feb",
      img: "",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-feb",
      img: "",
      ability: "",
      value: 14
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-feb",
      img: "",
      ability: "",
      value: 15
     }
  ];
  
  const march = [
    {
      category: "musician",
      name: "Bassist",
      text: "",
      id: "bassist-mar",
      img: "",
      ability: "",
      value: 0
     },
     {
      category: "ability",
      name: "Hoarding the Trash",
      text: "Draw 2 from the discard and keep both.",
      id: "ability-c-mar",
      img: "",
      ability: "",
      value: 1
     },
     {
      category: "decor",
      name: "Kaleidoscope Mural",
      text: "Bohemian",
      id: "kaleidoscope-mural-mar",
      img: "",
      ability: "",
      value: 2
     },
     {
      category: "decor",
      name: "Hanging Edison Lights",
      text: "Minimalist",
      id: "hanging-edison-lights-mar",
      img: "",
      ability: "",
      value: 3
     },
     {
      category: "decor",
      name: "Pillows",
      text: "Bohemian",
      id: "pillows-mar",
      img: "",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-mar",
      img: "",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-mar",
      img: "",
      ability: "",
      value: 6
     },
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-mar",
      img: "",
      ability: "",
      value: 7
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-mar",
      img: "",
      ability: "",
      value: 8
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-mar",
      img: "",
      ability: "",
      value: 9
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-mar",
      img: "",
      ability: "",
      value: 10
     },
     {
      category: "musician",
      name: "Pianist",
      text: "",
      id: "pianist-mar",
      img: "",
      ability: "",
      value: 11
     },
     {
      category: "decor",
      name: "White Paint",
      text: "Minimalist",
      id: "white-paint-mar",
      img: "",
      ability: "",
      value: 12
     },
     {
      category: "ability",
      name: "Saving for Later",
      text: "Draw and keep both cards next round.",
      id: "ability-a-mar",
      img: "",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Schnapps",
      text: "",
      id: "schnapps-mar",
      img: "",
      ability: "",
      value: 14
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-mar",
      img: "",
      ability: "",
      value: 15
     },
  ];
  
  const april = [
    {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-apr",
      img: "",
      ability: "",
      value: 0
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-apr-1",
      img: "",
      ability: "",
      value: 1
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "vodka-apr",
      img: "",
      ability: "",
      value: 2
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-apr",
      img: "",
      ability: "",
      value: 3
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-apr",
      img: "",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-apr",
      img: "",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Campari",
      text: "",
      id: "campari-apr",
      img: "",
      ability: "",
      value: 6
     },
     {
      category: "ingredient",
      name: "Schnapps",
      text: "",
      id: "schnapps-apr",
      img: "",
      ability: "",
      value: 7
     },
     {
      category: "spirit",
      name: "WILD Spirit",
      text: "Functions as a spirit of your choice in June.",
      id: "wild-spirit-apr",
      img: "",
      ability: "",
      value: 8
     },
     {
      category: "musician",
      name: "Trumpeter",
      text: "",
      id: "trumpeter-apr",
      img: "",
      ability: "",
      value: 9
     },
     {
      category: "decor",
      name: "Bonsai Tree",
      text: "Zen",
      id: "bonsai-tree-apr",
      img: "",
      ability: "",
      value: 10
     },
     {
      category: "musician",
      name: "Drummer",
      text: "",
      id: "drummer-apr",
      img: "",
      ability: "",
      value: 11
     },
     {
      category: "decor",
      name: "Hanging Plant",
      text: "Bohemian",
      id: "hanging-plant-apr",
      img: "",
      ability: "",
      value: 12
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-apr",
      img: "",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-apr",
      img: "",
      ability: "",
      value: 14
     },
     {
      category: "ingredient",
      name: "Grenadine",
      text: "",
      id: "grenadine-apr",
      img: "",
      ability: "",
      value: 15
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-apr-2",
      img: "",
      ability: "",
      value: 16
     }
  ];
  
  const may = [
    {
      category: "musician",
      name: "Saxophonist",
      text: "",
      id: "saxophonist-may",
      img: "",
      ability: "",
      value: 0
     },
     {
      category: "musician",
      name: "Vocalist",
      text: "",
      id: "vocalist-may",
      img: "",
      ability: "",
      value: 1
     },
     {
      category: "decor",
      name: "Old Meditating Scholar Art",
      text: "Zen",
      id: "old-meditating-scholar-art-may",
      img: "",
      ability: "",
      value: 2
     },
     {
      category: "decor",
      name: "Sliding Glass Door",
      text: "Zen",
      id: "sliding-glass-door-may",
      img: "",
      ability: "",
      value: 3
     },
     {
      category: "ingredient",
      name: "WILD Ingredient",
      text: "Functions as an ingredient of your choice in June.",
      id: "wild-ingredient-may",
      img: "",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Grenadine",
      text: "",
      id: "grenadine-may",
      img: "",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-may",
      img: "",
      ability: "",
      value: 6
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-may",
      img: "",
      ability: "",
      value: 7
     },
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-may",
      img: "",
      ability: "",
      value: 8
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-may",
      img: "",
      ability: "",
      value: 9
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-may",
      img: "",
      ability: "",
      value: 10
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-may",
      img: "",
      ability: "",
      value: 11,
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-may",
      img: "",
      ability: "",
      value: 12
     },
     {
      category: "ability",
      name: "Digging thru the Trash",
      text: "Draw 3 from the discard and select 1.",
      id: "ability-b-may",
      img: "",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Campari",
      text: "",
      id: "campari-may",
      img: "",
      ability: "",
      value: 14
     },
     {
      category: "musician",
      name: "Bassist",
      text: "",
      id: "bassist-may",
      img: "",
      ability: "",
      value: 15,
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-may",
      img: "",
      ability: "",
      value: 16
     }
  ];

  const completed = [
    {
      category: "completed",
      name: "Vodka Martini",
      text: "Vodka & Vermouth - 10",
      id: "vodka-martini",
      img: "",
      ability: "",
      value: 10,
      requirements: ["Vodka", "Vermouth"]
     },
     {
      category: "completed",
      name: "Gin Martini",
      text: "Gin & Vermouth - 10",
      id: "gin-martini",
      img: "",
      ability: "",
      value: 10,
      requirements: ["Gin", "Vermouth"]
     },
     {
      category: "completed",
      name: "Bourbon Highball",
      text: "Whiskey & Soda - 11",
      id: "bourbon-highball",
      img: "",
      ability: "",
      value: 11,
      requirements: ["Whiskey", "Soda"]
     },
     {
      category: "completed",
      name: "Rum & Coke",
      text: "Rum & Soda - 11",
      id: "rum-and-coke",
      img: "",
      ability: "",
      value: 11,
      requirements: ["Rum", "Soda"]
     },
     {
      category: "completed",
      name: "Paloma",
      text: "Tequila & Juice - 12",
      id: "paloma",
      img: "",
      ability: "",
      value: 12,
      requirements: ["Tequila", "Juice"]
     },
     {
      category: "completed",
      name: "Daiquiri",
      text: "Rum, Lime, & Simple - 17",
      id: "daquiri",
      img: "",
      ability: "",
      value: 17,
      requirements: ["Rum", "Lime", "Simple"]
     },
     {
      category: "completed",
      name: "Gimlet",
      text: "Gin, Lime, & Simple - 17",
      id: "gimlet",
      img: "",
      ability: "",
      value: 17,
      requirements: ["Gin", "Lime", "Simple"]
     },
     {
      category: "completed",
      name: "Manhattan",
      text: "Whiskey, Bitters, & Vermouth - 18",
      id: "manhattan",
      img: "",
      ability: "",
      value: 18,
      requirements: ["Whiskey", "Bitters", "Vermouth"]
     },
     {
      category: "completed",
      name: "Moscow Mule",
      text: "Vodka, Lime, & Ginger Beer - 19",
      id: "moscow-mule",
      img: "",
      ability: "",
      value: 19,
      requirements: ["Vodka", "Lime", "Ginger Beer"]
     },
     {
      category: "completed",
      name: "Dark & Stormy",
      text: "Rum, Lime, & Ginger Beer - 19",
      id: "dark-and-stormy",
      img: "",
      ability: "",
      value: 19,
      requirements: ["Rum", "Lime", "Ginger Beer"]
     },
     {
      category: "completed",
      name: "Old Fashioned",
      text: "Whiskey, Bitters, & Simple - 20",
      id: "old-fashioned",
      img: "",
      ability: "",
      value: 20,
      requirements: ["Whiskey", "Bitters", "Simple"]
     },
     {
      category: "completed",
      name: "Negroni",
      text: "Gin, Vermouth, & Campari - 21",
      id: "negroni",
      img: "",
      ability: "",
      value: 21,
      requirements: ["Gin", "Vermouth", "Campari"]
     },
     {
      category: "completed",
      name: "Teqroni",
      text: "Tequila, Vermouth, & Campari - 21",
      id: "teqroni",
      img: "",
      ability: "",
      value: 21,
      requirements: ["Tequila", "Vermouth", "Campari"]
     },
     {
      category: "completed",
      name: "Hairy Navel",
      text: "Vodka, Juice, & Schnapps - 22",
      id: "hairy-navel",
      img: "",
      ability: "",
      value: 22,
      requirements: ["Vodka", "Juice", "Schnapps"]
     },
     {
      category: "completed",
      name: "Tequila Sunrise",
      text: "Tequila, Juice, & Grenadine - 22",
      id: "tequila-sunrise",
      img: "",
      ability: "",
      value: 22,
      requirements: ["Tequila", "Juice", "Grenadine"]
     },
     {
      category: "completed",
      name: "Trio",
      text: "Drummer, Pianist, & Bassist - 20",
      id: "trio",
      img: "",
      ability: "",
      value: 20,
      requirements: ["Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Trumpet Led Quartet",
      text: "Trumpeter, Drummer, Pianist, & Bassist - 26",
      id: "trumpet-led-quartet",
      img: "",
      ability: "",
      value: 26,
      requirements: ["Trumpeter", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Saxophone Led Quartet",
      text: "Saxophonist, Drummer, Pianist, & Bassist - 26",
      id: "saxophone-led-quartet",
      img: "",
      ability: "",
      value: 26,
      requirements: ["Saxophonist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Vocal Led Quartet",
      text: "Vocalist, Drummer, Pianist, & Bassist - 26",
      id: "vocal-led-quartet",
      img: "",
      ability: "",
      value: 26,
      requirements: ["Vocalist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Full Band",
      text: "Trumpeter, Vocalist, Saxophonist, Drummer, Pianist, & Bassist - 40",
      id: "full-band",
      img: "",
      ability: "",
      value: 40,
      requirements: ["Trumpeter", "Saxophonist", "Vocalist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Minimalist Master",
      text: "3 different kinds of Minimalist decor - 22",
      id: "minimalist-master",
      img: "",
      ability: "",
      value: 22,
      requirements: ["White Paint", "Wood Stools", "Hanging Edison Lights"]
     },
     {
      category: "completed",
      name: "Bohemian Master",
      text: "3 different kinds of Bohemian decor - 22",
      id: "bohemian-master",
      img: "",
      ability: "",
      value: 22,
      requirements: ["Hanging Plant", "Kaleidoscope Mural", "Pillows"]
     },
     {
      category: "completed",
      name: "Zen Master",
      text: "3 different kinds of Zen decor - 30",
      id: "zen-master",
      img: "",
      ability: "",
      value: 30,
      requirements: ["Bonsai Tree", "Sliding Glass Door", "Old Meditating Scholar Art"]
     }
  ];

  const weirdCompleted = [
    {
      category: "completed",
      name: "Minimalist Vibe",
      text: "2 different kinds of Minimalist decor - 15",
      id: "minimalist-vibe",
      img: "",
      ability: "",
      value: 15,
     },
     {
      category: "completed",
      name: "Bohemian Vibe",
      text: "2 different kinds of Bohemian decor - 15",
      id: "bohemian-vibe",
      img: "",
      ability: "",
      value: 15,
      requirements: ["Hanging Plant", "Kaleidoscope Mural", "Pillows"]
     },
     {
      category: "completed",
      name: "Zen Vibe",
      text: "2 different kinds of Zen decor - 18",
      id: "zen-vibe",
      img: "",
      ability: "",
      value: 18,
      requirements: ["Bonsai Tree", "Sliding Glass Door", "Old Meditating Scholar Art"]
     }
  ];

  const date = ["JAN-1", "JAN-2", "JAN-3", "JAN-4", "JAN-5", "JAN-6", "FEB-1", "FEB-2", "FEB-3", "FEB-4", "FEB-5", "FEB-6", "MAR-1", "MAR-2", "MAR-3", "MAR-4", "MAR-5", "MAR-6", "APR-1", "APR-2", "APR-3", "APR-4", "APR-5", "APR-6", "MAY-1", "MAY-2", "MAY-3", "MAY-4", "MAY-5", "MAY-6", "JUNE"];
  
  const [dateDisplay, updateDate] = useState(date[0]);

  const [playerPoints, updatePlayerPoints] = useState(0);

  const ownerHand = props.initialHand;

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  };
  
  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
     </div>
    )
  };

  const [arrayInPlay, updateInPlay] = useState([...january]);

  const [firstCard, updateFirstCard] = useState("");

  const [secondCard, updateSecondCard] = useState("");

  const [thirdCard, updateThirdCard] =  useState("");

  const [playerChoice, updatePlayerChoice] = useState("")

  const firstCardIndex = arrayInPlay.findIndex(element => element.id === firstCard.id);
  
  const secondCardIndex = arrayInPlay.findIndex(element => element.id === secondCard.id);

  useEffect(() => {
    if (firstCardIndex !== -1) {
      if (firstCardIndex < secondCardIndex) {
        arrayInPlay.splice(firstCardIndex, 1);
        arrayInPlay.splice((secondCardIndex - 1), 1);
      } else {
        arrayInPlay.splice(secondCardIndex, 1);
        arrayInPlay.splice((firstCardIndex - 1), 1);
      }
    };
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[firstCard]);

  useEffect(() => {
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[secondCard]);

  useEffect(() => {
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[thirdCard])

  const [playerDiscard, updatePlayerDiscard] = useState("");

  const [newCardArr, updateNewCardArr] = useState([...ownerHand]);

  useEffect(() => {
    if (abilityCheck(playerChoice) !== false) {
      abilityCheck(playerChoice);
      if (playerChoice.name === "Digging thru the Trash") {
        discardArr.splice(0, 3);
      }
      if (playerChoice.name === "Hoarding the Trash") {
        discardArr.splice(0, 2);
      } 
    }
    updateNewCardArr([...newCardArr, playerChoice]); 
  },[playerChoice]);

  const [discardArr, updateDiscardArr] = useState(["hi"]); 
  
  useEffect(() => {
    updateDiscardArr([playerDiscard, ...discardArr]);
  },[playerDiscard]);

  function isItHi(arr) {
    if (arr[0] === "hi") {
      return "hi"
    } else if (/JUNE/.test(dateDisplay) === true) {
      return <h3 id="player-hand-header">Final Hand!</h3>
    } else {
      return createCard(arr[0]);
    }
  };

  function monthCheck(x) {
      if (/JAN-6/.test(x) === true) {
        updateInPlay([...february])
      } else if (/FEB-6/.test(x) === true) {
        updateInPlay([...march])
      } else if (/MAR-6/.test(x) === true) {
        updateInPlay([...april])
      } else if (/APR-6/.test(x) === true) {
        updateInPlay([...may])
      } else {
        return false;
      }
  };

  function abilityCheck(x) {
    if(x.name === "Saving for Later") {
      updateFirstCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
    } else if (x.name === "Digging thru the Trash") {
      updateFirstCard(discardArr[0]);
      updateSecondCard(discardArr[1]);
      updateThirdCard(discardArr[2]);
      updateDate(date[date.indexOf(dateDisplay) - 1]);
    } else if (x.name === "Hoarding the Trash") {
      updateFirstCard(discardArr[0]);
      updateSecondCard(discardArr[1]);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
    } else {
      return false;
    }
  };

  function sameCardCheck(x, y, z) {
    if (x !== "" && y !== -1 && y === z) {
      updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)])
    }
  };

  function wildSpiritCheck(arr, arr2) {
    if (arr.includes("WILD Spirit") && arr2.includes("Vodka") && !arr.includes("Vodka")) {
      let vodkaIndex = arr2.findIndex(element => element === "Vodka");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Whiskey") && !arr.includes("Whiskey")) {
      let vodkaIndex = arr2.findIndex(element => element === "Whiskey");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Tequila") && !arr.includes("Tequila")) {
      let vodkaIndex = arr2.findIndex(element => element === "Tequila");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Gin") && !arr.includes("Gin")) {
      let vodkaIndex = arr2.findIndex(element => element === "Gin");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Rum") && !arr.includes("Rum")) {
      let vodkaIndex = arr2.findIndex(element => element === "Rum");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } else {
      return false;
    }
  };

  function wildIngredientCheck(arr, arr2) {
    if (arr.includes("WILD Ingredient") && arr2.includes("Soda") && !arr.includes("Soda")) {
      let sodaIndex = arr2.findIndex(element => element === "Soda");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Lime") && !arr.includes("Lime")) {
      let sodaIndex = arr2.findIndex(element => element === "Lime");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Juice") && !arr.includes("Juice")) {
      let sodaIndex = arr2.findIndex(element => element === "Juice");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Vermouth") && !arr.includes("Vermouth")) {
      let sodaIndex = arr2.findIndex(element => element === "Vermouth");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Campari") && !arr.includes("Campari")) {
      let sodaIndex = arr2.findIndex(element => element === "Campari");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }    
    if (arr.includes("WILD Ingredient") && arr2.includes("Grenadine") && !arr.includes("Grenadine")) {
      let sodaIndex = arr2.findIndex(element => element === "Grenadine");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Schnapps") && !arr.includes("Schnapps")) {
      let sodaIndex = arr2.findIndex(element => element === "Schnapps");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }  
    if (arr.includes("WILD Ingredient") && arr2.includes("Bitters") && !arr.includes("Bitters")) {
      let sodaIndex = arr2.findIndex(element => element === "Bitters");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } 
    if (arr.includes("WILD Ingredient") && arr2.includes("Simple") && !arr.includes("Simple")) {
      let sodaIndex = arr2.findIndex(element => element === "Simple");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } 
    if (arr.includes("WILD Ingredient") && arr2.includes("Ginger Beer") && !arr.includes("Ginger Beer")) {
      let sodaIndex = arr2.findIndex(element => element === "Ginger Beer");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }               
  };

  function bothWildCheck (arr, arr2) {
    if (arr.includes("WILD Spirit") === true && arr.includes("WILD Ingredient") === true) {
        if (arr2.length === 2) {
          return true;
        }
        if (arr2.length === 3) {
          if (arr2.includes("Vodka") || arr2.includes("Whiskey") || arr2.includes("Gin") || arr2.includes("Rum") || arr2.includes("Tequila")) {
            for (let i = 0; i < arr2.length; i++) {
              if (arr2[i] === "Soda" || arr2[i] === "Vermouth" || arr2[i] === "Juice" || arr2[i] === "Lime" || arr2[i] === "Schnapps" || arr2[i] === "Campari" || arr2[i] === "Bitters" || arr2[i] === "Ginger Beer" || arr2[i] === "Simple" || arr2[i] === "Grenadine") {
               if (arr.includes(arr2[i])) {
                return true;
               } else {
                return false;
               }
            }
          }
          }
        }
    }
  }

  const isJune = () => {
    if (/JUNE/.test(dateDisplay) === true) {
        return <div id="june">
          <h2>Opening Day!</h2>
          <div id="point-display"><h1>{playerPoints}</h1></div>
          <div id="completed-cards">
          {completed.map(element => createFinalCard(element, newCardArr))}
          {weirdCompleted.map(element => createWeirdFinalCard(element, newCardArr, fullHandNames))}
          </div>
          </div>
    }
  };
  
  function finalCardCheck (arr, arr2) {
    if (arr2.every(v => arr.includes(v)) === true) {
      return true;
    }
    if (wildSpiritCheck(arr, arr2) === true) {
      return true;
    }
    if (wildIngredientCheck(arr, arr2) === true) {
      return true;
    }
    if (bothWildCheck(arr, arr2) === true) {
      return true;
    }               
  };

  function weirdFinalCardCheck (arr, item) {
    if (item === "Minimalist Vibe") {
      if ((arr.includes("White Paint") === true && arr.includes("Wood Stools") === true) || (arr.includes("White Paint") === true && arr.includes("Hanging Edison Lights") === true) || (arr.includes("Hanging Edison Lights") === true && arr.includes("Wood Stools") === true)) {
          return true;
        } else {
          return false;
        }
      }
    if (item === "Bohemian Vibe") {
      if ((arr.includes("Hanging Plant") === true && arr.includes("Kaleidoscope Mural") === true) || (arr.includes("Hanging Plant") === true && arr.includes("Pillows") === true) || (arr.includes("Pillows") === true && arr.includes("Kaleidoscope Mural") === true)) {
        return true;
      } else {
        return false;
      }
    }
    if (item === "Zen Vibe") {
      if ((arr.includes("Bonsai Tree") === true && arr.includes("Sliding Glass Door") === true) || (arr.includes("Bonsai Tree") === true && arr.includes("Old Meditating Scholar Art") === true) || (arr.includes("Old Meditating Scholar Art") === true && arr.includes("Sliding Glass Door") === true)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const fullHandNames = newCardArr.map(element => element.name);

  function createFinalCard(obj, arr) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
      <button className={obj.category} disabled={finalCardCheck(fullHandNames, obj.requirements) === true ? false : true} onClick={() => {
        updatePlayerChoice(obj);
        updatePlayerPoints(obj.value += playerPoints);
        let requiredPieces = obj.requirements;
        if (requiredPieces.length === 2) {
         if (wildSpiritCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Vodka")) {
             let vodkaIndex = requiredPieces.findIndex(element => element === "Vodka");
             if (vodkaIndex === 0) {
               let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                 arr.splice(firstIndex, 1);
               let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                 arr.splice(wildSpiritIndex, 1);
             } if (vodkaIndex === 1) {
               let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                 arr.splice(firstIndex, 1);
               let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                 arr.splice(wildSpiritIndex, 1);              
             }
          }
          if (!fullHandNames.includes("Whiskey")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Whiskey");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          } 
          if (!fullHandNames.includes("Gin")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Gin");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          }
          if (!fullHandNames.includes("Tequila")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Tequila");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          } 
          if (!fullHandNames.includes("Rum")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Rum");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          }                                       
         }
         if (wildIngredientCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Soda")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Soda");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }
          if (!fullHandNames.includes("Juice")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Juice");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Vermouth")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Vermouth");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }  
          if (!fullHandNames.includes("Campari")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Campari");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }  
          if (!fullHandNames.includes("Ginger Beer")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Ginger Beer");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Bitters")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Bitters");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }  
          if (!fullHandNames.includes("Grenadine")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Grenadine");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Schnapps")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Schnapps");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Simple")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Simple");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }    
          if (!fullHandNames.includes("Lime")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Lime");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }                                                                            
          } else {
           let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
             arr.splice(firstIndex, 1);
           let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
             arr.splice(secondIndex, 1);
         }
        }
        if (requiredPieces.length === 3) {
         if (wildSpiritCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Vodka")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Vodka");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }
          if (!fullHandNames.includes("Rum")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Rum");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }
          if (!fullHandNames.includes("Tequila")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Tequila");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }
          if (!fullHandNames.includes("Whiskey")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Whiskey");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }
          if (!fullHandNames.includes("Gin")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Gin");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }                              
         }
         if (wildIngredientCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Soda")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Soda");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }
          if (!fullHandNames.includes("Juice")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Juice");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }  
          if (!fullHandNames.includes("Simple")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Simple");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }  
          if (!fullHandNames.includes("Vermouth")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Vermouth");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }   
          if (!fullHandNames.includes("Grenadine")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Grenadine");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }  
          if (!fullHandNames.includes("Ginger Beer")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Ginger Beer");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Lime")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Lime");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Bitters")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Bitters");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }
          if (!fullHandNames.includes("Schanpps")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Schnapps");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Campari")) {
            let sodaIndex = requiredPieces.findIndex(element => element.name === "Campari");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }                                                                              
         }
         else {
          let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
            arr.splice(firstIndex, 1);
          let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
            arr.splice(secondIndex, 1);
          let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
            arr.splice(thirdIndex, 1);
          }
        }
        if (requiredPieces.length === 4) {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);
        let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
          arr.splice(thirdIndex, 1);
        let fourthIndex = arr.findIndex(element => element.name === requiredPieces[3]);
          arr.splice(fourthIndex, 1);
        }
        if (requiredPieces.length === 6) {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);
        let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
          arr.splice(thirdIndex, 1);
        let fourthIndex = arr.findIndex(element => element.name === requiredPieces[3]);
          arr.splice(fourthIndex, 1);
        let fifthIndex = arr.findIndex(element => element.name === requiredPieces[4]);
          arr.splice(fifthIndex, 1);
        let sixthIndex = arr.findIndex(element => element.name === requiredPieces[5]);
          arr.splice(sixthIndex, 1);
        }
        let goodBye = document.getElementById(obj.id);
        goodBye.remove();
      }}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
       </button>
     </div>
    )
  };

  function createWeirdFinalCard(obj, arr, arr2) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
      <button className={obj.category} id={obj.id} disabled={weirdFinalCardCheck(fullHandNames, obj.name) ? false : true} onClick={() => {
        updatePlayerChoice(obj);
        updatePlayerPoints(obj.value += playerPoints);
        if (obj.name === "Minimalist Vibe") {
          if (arr2.includes("White Paint") === true && arr2.includes("Wood Stools") === true) {
            let firstIndex = arr.findIndex(element => element.name === "White Paint");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Wood Stools");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("White Paint") === true && arr2.includes("Hanging Edison Lights") === true) {
            let firstIndex = arr.findIndex(element => element.name === "White Paint");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Hanging Edison Lights");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Hanging Edison Lights") === true && arr2.includes("Wood Stools") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Hanging Edison Lights");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Wood Stools");
              arr.splice(secondIndex, 1);
          }
        }
        if (obj.name === "Bohemian Vibe") {
          if (arr2.includes("Pillows") === true && arr2.includes("Kaleidoscope Mural") === true) {
             let firstIndex = arr.findIndex(element => element.name === "Pillows");
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === "Kaleidoscope Mural");
               arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Hanging Plant") === true && arr2.includes("Kaleidoscope Mural") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Hanging Plant");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Kaleidoscope Mural");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Pillows") === true && arr2.includes("Hanging Plant") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Pillows");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Hanging Plant");
              arr.splice(secondIndex, 1);
          }
        }
        if (obj.name === "Zen Vibe") {
          if (arr2.includes("Old Meditating Scholar Art") === true && arr2.includes("Bonsai Tree") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Old Meditating Scholar Art");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Bonsai Tree");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Old Meditating Scholar Art") === true && arr2.includes("Sliding Glass Door") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Old Meditating Scholar Art");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Sliding Glass Door");
              arr.splice(secondIndex, 1);
          }    
          if (arr2.includes("Sliding Glass Door") === true && arr2.includes("Bonsai Tree") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Sliding Glass Door");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Bonsai Tree");
              arr.splice(secondIndex, 1);
          }                
        }
        let goodBye = document.getElementById(obj.id);
        goodBye.remove();
      }}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
       </button>
     </div>
    )
  };

  sameCardCheck(firstCard, firstCard.id, secondCard.id);

  console.log(fullHandNames);

  return (
    <div id="cards-in-play">
    <div id="date-display"><h1>{dateDisplay}</h1></div>
    <button id="draw-new" onClick={() => {
        if (monthCheck(dateDisplay) !== false) {
          monthCheck(dateDisplay);
        };
        if (playerChoice.name === "Saving for Later") {
          updatePlayerChoice("");
          if (/-1/.test(dateDisplay) === true) {
            if (/FEB/.test(dateDisplay) === true) {
              updateInPlay([...february]);
            } else if (/MAR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/APR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/MAY/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            }
          }
        };
        if (playerChoice.name === "Hoarding the Trash") {
          updatePlayerChoice("");
          if (/-1/.test(dateDisplay) === true) {
            if (/FEB/.test(dateDisplay) === true) {
              updateInPlay([...february]);
            } else if (/MAR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/APR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/MAY/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            }
          }
        };
        updateFirstCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
        updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      }} disabled={firstCard !== "" ? true : false}>Draw 2 New?</button>
    <button id="draw-discard" onClick={() => {
      if (monthCheck(dateDisplay) !== false) {
       monthCheck(dateDisplay);
      };
      if (playerChoice.name === "Saving for Later") {
        updatePlayerChoice("");
        if (/-1/.test(dateDisplay) === true) {
          if (/FEB/.test(dateDisplay) === true) {
            updateInPlay([...february]);
          } else if (/MAR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/APR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/MAY/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          }
        }
      };
      if (playerChoice.name === "Hoarding the Trash") {
        updatePlayerChoice("");
        if (/-1/.test(dateDisplay) === true) {
          if (/FEB/.test(dateDisplay) === true) {
            updateInPlay([...february]);
          } else if (/MAR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/APR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/MAY/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          }
        }
      };
      updatePlayerChoice(playerDiscard);
      discardArr.splice(0, 1);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
      }} disabled={firstCard !== "" || discardArr.length <= 2 ? true : false || discardArr[0].name === "Digging thru the Trash" && discardArr.length < 7 || discardArr[0].name === "Hoarding the Trash" && discardArr.length < 6 ? true : false || discardArr[0].name === "Hoarding the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false || discardArr[0].name === "Saving for Later" && /MAY-6/.test(dateDisplay) === true ? true : false}>Draw Top Discard?</button>
    <div id="new-deck"></div>
    <div id="discard-deck"></div>
    <div id="new-cards">
      <div id="first-card"><button onClick={() => {
        updatePlayerChoice(firstCard);
        updatePlayerDiscard(secondCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
         const drawNew = document.getElementById("draw-new");
         const newDeck = document.getElementById("new-deck");
         const discardDeck = document.getElementById("discard-deck");
         const newCards = document.getElementById("new-cards");
         const drawDiscard = document.getElementById("draw-discard");
         drawNew.remove(); 
         newDeck.remove();
         discardDeck.remove();
         newCards.remove();
         drawDiscard.remove();
        }         
      }} disabled={firstCard.name === "Digging thru the Trash" && discardArr.length < 6 || firstCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false || firstCard === "" ? true : false || firstCard.name === "Hoarding the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false || firstCard.name === "Saving for Later" && /MAY-6/.test(dateDisplay) === true ? true : false}>{createCard(firstCard)}</button></div>
      <div id="second-card"><button onClick={() => {
        updatePlayerChoice(secondCard);
        updatePlayerDiscard(firstCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
          const drawNew = document.getElementById("draw-new");
          const newDeck = document.getElementById("new-deck");
          const discardDeck = document.getElementById("discard-deck");
          const newCards = document.getElementById("new-cards");
          const drawDiscard = document.getElementById("draw-discard");
          drawNew.remove(); 
          newDeck.remove();
          discardDeck.remove();
          newCards.remove();
          drawDiscard.remove();
         }  
        }} disabled={secondCard.name === "Digging thru the Trash" && discardArr.length < 6 || secondCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false || secondCard === "" ? true : false || secondCard.name === "Hoarding the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false || secondCard.name === "Saving for Later" && /MAY-6/.test(dateDisplay) === true ? true : false}>{createCard(secondCard)}</button></div>
      <div id="third-card"><button onClick={() => {
        updatePlayerChoice(thirdCard);
        updatePlayerDiscard(firstCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
          const drawNew = document.getElementById("draw-new");
          const newDeck = document.getElementById("new-deck");
          const discardDeck = document.getElementById("discard-deck");
          const newCards = document.getElementById("new-cards");
          const drawDiscard = document.getElementById("draw-discard");
          drawNew.remove(); 
          newDeck.remove();
          discardDeck.remove();
          newCards.remove();
          drawDiscard.remove();
         }  
      }} disabled={thirdCard.name === "Digging thru the Trash" && discardArr.length < 6 || thirdCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false || thirdCard === "" ? true : false || thirdCard.name === "Hoarding the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false || thirdCard.name === "Saving for Later" && /MAY-6/.test(dateDisplay) === true ? true : false}>{createCard(thirdCard)}</button></div>
    </div>
    {isJune()}
    <div id="discard">{isItHi(discardArr)}</div>
    <HandleCards updatedHand={newCardArr}/>
   </div>
  );
};

function HandleCards(props) {

  const playerHand = props.updatedHand;

  const playerSpirits = [];

  const playerIngredients = [];

  const playerMusicians = [];

  const playerDecor = [];

  const playerFinal = [];
  
  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
     </div>
    )
  };
  
  function filterCards(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === "spirit") {
      playerSpirits.push(arr[i]);
      playerSpirits.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "ingredient") {
      playerIngredients.push(arr[i]);
      playerIngredients.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "musician") {
      playerMusicians.push(arr[i]);
      playerMusicians.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "decor") {
      playerDecor.push(arr[i]);
      playerDecor.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        } if (b.text < a.text) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "completed") {
      playerFinal.push(arr[i]);
      playerFinal.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
  }
  };

  filterCards(playerHand);

  return(
    <div id="card-handling">
     <div id="player-hand">
      <div id="player-spirits">{playerSpirits.map(element => createCard(element))}</div>
      <div id="player-ingredients">{playerIngredients.map(element => createCard(element))}</div>
      <div id="player-musicians">{playerMusicians.map(element => createCard(element))}</div>
      <div id="player-decor">{playerDecor.map(element => createCard(element))}</div>
      <div id="player-final">{playerFinal.map(element => createCard(element))}</div>
     </div>
    </div>
  )
};

function App() {

  const owner = [
    {
      category: "owner",
      name: "Irina",
      text: "Rum, Gin, & Juice",
      id: "irina",
      img: "",
      ability: "",
      value: 0,
     },
     {
      category: "owner",
      name: "Ilya",
      text: "Vodka, Tequila, & Soda",
      id: "ilya",
      img: "",
      ability: "",
      value: 1,
     },
     {
      category: "owner",
      name: "Osweald",
      text: "Whiskey, Rum, & Vermouth",
      id: "osweald",
      img: "",
      ability: "",
      value: 2,
     },
     {
      category: "owner",
      name: "Lionel",
      text: "Gin, Vodka, & Soda",
      id: "lionel",
      img: "",
      ability: "",
      value: 3,
     },
     {
      category: "owner",
      name: "José",
      text: "Tequila, Whiskey, & Vermouth",
      id: "jose",
      img: "",
      ability: "",
      value: 4,
     },
     {
      category: "owner",
      name: "Kilian",
      text: "Rum, Juice, & Vermouth",
      id: "kilian",
      img: "",
      ability: "",
      value: 5,
     },
     {
      category: "owner",
      name: "Rian",
      text: "Gin, Soda, & Juice",
      id: "rian",
      img: "",
      ability: "",
      value: 6,
     },
     {
      category: "owner",
      name: "Shivani",
      text: "Vodka, Soda, & Juice",
      id: "shivani",
      img: "",
      ability: "",
      value: 7,
     },
     {
      category: "owner",
      name: "Matilde",
      text: "Tequila, Soda, & Vermouth",
      id: "matilde",
      img: "",
      ability: "",
      value: 8,
     },
     {
      category: "owner",
      name: "Tao",
      text: "Whiskey, Juice, & Vermouth",
      id: "tao",
      img: "",
      ability: "",
      value: 9,
     }
  ];

  const ownerCards = [
    {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "irina-rum",
      ownerName: "irina",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "irina-gin",
      ownerName: "irina",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "irina-juice",
      ownerName: "irina",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "ilya-vodka",
      ownerName: "ilya",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "ilya-tequila",
      ownerName: "ilya",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "ilya-soda",
      ownerName: "ilya",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "osweald-whiskey",
      ownerName: "osweald",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "osweald-rum",
      ownerName: "osweald",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "osweald-vermouth",
      ownerName: "osweald",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "lionel-gin",
      ownerName: "lionel",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "lionel-vodka",
      ownerName: "lionel",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "lionel-soda",
      ownerName: "lionel",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "jose-tequila",
      ownerName: "jose",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "jose-whiskey",
      ownerName: "jose",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "jose-vermouth",
      ownerName: "jose",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "kilian-rum",
      ownerName: "kilian",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "kilian-juice",
      ownerName: "kilian",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "kilian-vermouth",
      ownerName: "kilian",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "rian-gin",
      ownerName: "rian",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "rian-soda",
      ownerName: "rian",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "rian-juice",
      ownerName: "rian",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "shivani-vodka",
      ownerName: "shivani",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "shivani-juice",
      ownerName: "shivani",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "shivani-soda",
      ownerName: "shivani",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "matilde-tequila",
      ownerName: "matilde",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "matilde-soda",
      ownerName: "matilde",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "matilde-vermouth",
      ownerName: "matilde",
      img: "",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "tao-whiskey",
      ownerName: "tao",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "tao-juice",
      ownerName: "tao",
      img: "",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "tao-vermouth",
      ownerName: "tao",
      img: "",
      ability: ""
     }
  ];

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  };

  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h1>{obj.name}</h1>
       <div>{obj.img}</div>
       <p>{obj.text}</p>
     </div>
    )
  };

  const playerOwner = owner[randomNumber(10)];

  const ownerDisplay = createCard(playerOwner);

  const ownerHand = [];

  function retrievePlayerOwnerCards(arr, x, arr2) {
    for (let i = 0; i < arr.length; i++) {
      if (x.id === arr[i].ownerName) {
        arr2.push(arr[i])
      }
    }
  };

  retrievePlayerOwnerCards(ownerCards, playerOwner, ownerHand);

  return (
    <div id="cocktail-clash">
     <div id="display-elements">
     <div id="owner-display">{ownerDisplay}</div>
      <Customer />
      <div id="difficulty-display"></div>
     </div>
     <CardsInPlay initialHand={ownerHand}/>
    </div>
  )
}

export default App;
