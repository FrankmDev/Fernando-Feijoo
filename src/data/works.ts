export interface Work {
  slug: string;
  title: string;
  description: string;
  medium: string;
  dimensions?: string;
  edition?: number;
  price?: string;
  imageUrls: string[];
}

export interface Collection {
  slug: string;
  title: string;
  description?: string;
  works: Work[];
}

export interface Category {
  slug: string;
  title: string;
  collections?: Collection[];
  works?: Work[];
}

export const WORKS: Category[] = [
  {
    slug: "prints",
    title: "Prints",
    collections: [
      {
        slug: "citizens&wastrels",
        title: "Citizens & Wastrels",
        description: "",
        works: [
          {
            slug: "after-hours",
            title: "Afterhours",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/afterHours.avif",
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
          },
          {
            slug: "angel-of-victory",
            title: "Angel of Victory",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
          },
          {
            slug: "early-hour-of-the-morning",
            title: "Early Hour of the Morning",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
          },
          {
            slug: "getting-weighed",
            title: "Getting Weighed",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
          },
          {
            slug: "nightcap",
            title: "Nightcap",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/citizensWastrels/nightcap.avif"],
          },
          {
            slug: "selfmade-man",
            title: "Selfmade Man",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/selfMadeMan.avif",
            ],
          },
          {
            slug: "time-is-just-an-illusion",
            title: "Time is just an illusion",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/timeIsJustAnIllution.avif",
            ],
          },
          {
            slug: "busted",
            title: "Busted",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/busted.avif",
            ],
          },
          {
            slug: "contracter",
            title: "Contracter",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/contracter.avif",
            ],
          },
          {
            slug: "driven",
            title: "Driven",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/driven.avif",
            ],
          },
          {
            slug: "wacked",
            title: "Wacked",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/wacked.avif",
            ],
          },
        ],
      },
      {
        slug: "death-dances",
        title: "Death Dances",
        description: "",
        works: [
          {
            slug: "joker-playing-card",
            title: "Joker Playing Card",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/deathDance/jokerPlayingCard.avif",
            ],
          },
        ],
      },
      {
        slug: "games&players",
        title: "Games & Players",
        description: "",
        works: [
          {
            slug: "hierarchi-of-anarchy",
            title: "Hierarchi of Anarchy",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/hierarchiOfAnarchy.avif",
            ],
          },
          {
            slug: "machiavellian",
            title: "Machiavellian",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/gamesPlayer/machiavellian.avif"],
          },
          {
            slug: "ace-of-diamonds",
            title: "Ace of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/aceOfDiamonds.avif",
            ],
          },
          {
            slug: "eight-of-diamonds",
            title: "Eight of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/eightOfDiamonds.avif",
            ],
          },
          {
            slug: "five-of-diamonds",
            title: "Five of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fiveOfDiamonds.avif",
            ],
          },
          {
            slug: "four-of-diamonds",
            title: "Four of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fourOfDiamonds.avif",
            ],
          },
          {
            slug: "nine-of-diamonds",
            title: "Nine of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/nineOfDiamonds.avif",
            ],
          },
          {
            slug: "jack-of-diamonds",
            title: "Jack of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/jackOfDiamonds.avif",
            ],
          },
          {
            slug: "king-of-diamonds",
            title: "King of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/kingOfDiamonds.avif",
            ],
          },
          {
            slug: "queen-of-diamonds",
            title: "Queen of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/queenOfDiamonds.avif",
            ],
          },
          {
            slug: "seven-of-diamonds",
            title: "Seven of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sevenOfDiamonds.avif",
            ],
          },
          {
            slug: "six-of-diamonds",
            title: "Six of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sixOfDiamonds.avif",
            ],
          },
          {
            slug: "three-of-diamonds",
            title: "Three of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/threeOfDiamonds.avif",
            ],
          },
          {
            slug: "two-of-diamonds",
            title: "Two of Diamonds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/twoOfDiamonds.avif",
            ],
          },
          {
            slug: "joker1",
            title: "Joker 1",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker1.avif",
            ],
          },
          {
            slug: "joker2",
            title: "Joker 2",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker2.avif",
            ],
          },
        ],
      },
      {
        slug: "gods&monsters",
        title: "Gods & Monsters",
        description: "",
        works: [
          {
            slug: "agni",
            title: "Agni",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/agni.avif"],
          },
          {
            slug: "bala",
            title: "Bala",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/bala.avif"],
          },
          {
            slug: "cerbus",
            title: "Cerbus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/cerbus.avif"],
          },
          {
            slug: "draco",
            title: "Draco",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/draco.avif"],
          },
          {
            slug: "europa",
            title: "Europa",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/europa.avif"],
          },
          {
            slug: "fenir",
            title: "Fenir",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/fenir.avif"],
          },
          {
            slug: "gala",
            title: "Gala",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/gala.avif"],
          },
          {
            slug: "hercules",
            title: "Hercules",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/hercules.avif"],
          },
          {
            slug: "icarus",
            title: "Icarus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/icarus.avif"],
          },
          {
            slug: "janus",
            title: "Janus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/janus.avif"],
          },
          {
            slug: "kraken",
            title: "Kraken",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/kraken.avif"],
          },
          {
            slug: "lucifer",
            title: "Lucifer",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/lucifer.avif"],
          },
          {
            slug: "medusa",
            title: "Medusa",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/medusa.avif"],
          },
          {
            slug: "monsterExtra",
            title: "Monster Extra",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/monsterExtra.avif"],
          },
          {
            slug: "neptune",
            title: "Neptune",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/neptune.avif"],
          },
          {
            slug: "odin",
            title: "Odin",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/odin.avif"],
          },
          {
            slug: "prometheus",
            title: "Prometheus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/prometheus.avif"],
          },
          {
            slug: "quetzalcoatl",
            title: "Quetzalcoatl",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/quetzlcoatl.avif"],
          },
          {
            slug: "ra",
            title: "Ra",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/ra.avif"],
          },
          {
            slug: "shu",
            title: "Shu",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/shu.avif"],
          },
          {
            slug: "theseus",
            title: "Theseus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/theseus.avif"],
          },
          {
            slug: "urania",
            title: "Urania",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/urania.avif"],
          },
          {
            slug: "volcan",
            title: "Volcan",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/volcan.avif"],
          },
          {
            slug: "walpurgis",
            title: "Walpurgis",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/walpurgis.avif"],
          },
          {
            slug: "xanthos",
            title: "Xanthos",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/xanthos.avif"],
          },
          {
            slug: "yggdrasil",
            title: "Yggdrasil",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/yggdrasil.avif"],
          },
          {
            slug: "zephyr",
            title: "Zephyr",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/godsMonsters/zephyr.avif"],
          },
        ],
      },
      {
        slug: "inferno",
        title: "Inferno",
        description: "",
        works: [
          {
            slug: "descent-into-darkness",
            title: "Descent into Darkness",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/inferno/descentIntoDarkness.avif",
            ],
          },
          {
            slug: "hell-is-empty",
            title: "Hell is Empty",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/hellIsEmpty.avif"],
          },
          {
            slug: "hell-on-earth",
            title: "Hell on Earth",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/hellOnEarth.avif"],
          },
          {
            slug: "stewpot",
            title: "Stewpot",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/stewpot.avif"],
          },
          {
            slug: "swamp",
            title: "Swamp",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/swamp.avif"],
          },
          {
            slug: "the-future",
            title: "The Future",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theFuture.avif"],
          },
          {
            slug: "the-war",
            title: "The War",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theWar.avif"],
          },
          {
            slug: "the-war-1",
            title: "The War 1",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theWar1.avif"],
          },
          {
            slug: "the-war-2",
            title: "The War 2",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theWar2.avif"],
          },
          {
            slug: "the-war-3",
            title: "The War 3",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theWar3.avif"],
          },
          {
            slug: "the-war-4",
            title: "The War 4",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/theWar4.avif"],
          },
          {
            slug: "the-fall",
            title: "The Fall",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/thFall.avif"],
          },
          {
            slug: "today",
            title: "Today",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/inferno/today.avif"],
          },
        ],
      },
      {
        slug: "persons&personas",
        title: "Persons & Personas",
        description: "",
        works: [
          {
            slug: "emilio",
            title: "Emilio",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons/Emilio.avif",
              "@assets/works/prints/persons/EmilioColor.avif",
            ],
          },
          {
            slug: "enzo",
            title: "Enzo",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Enzo.avif"],
          },
          {
            slug: "hector",
            title: "Hector",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Hector.avif"],
          },
          {
            slug: "lorenzo",
            title: "Lorenzo",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons/Lorenzo.avif",
              "@assets/works/prints/persons/LorenzoColor.avif",
            ],
          },
          {
            slug: "marcus",
            title: "Marcus",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Marcus.avif"],
          },
          {
            slug: "santiago",
            title: "Santiago",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Santiago.avif"],
          },
          {
            slug: "joaquin",
            title: "Joaquin",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Joaquin.avif"],
          },
          {
            slug: "jose",
            title: "Jose",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Jose.avif"],
          },
          {
            slug: "siesta",
            title: "Siesta",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/persons/Siesta.avif"],
          },
        ],
      },
      {
        slug: "robots&cranks",
        title: "Robots & Cranks",
        description: "",
        works: [
          {
            slug: "revolution",
            title: "Revolution",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/revolution.avif"],
          },
          {
            slug: "search-and-destroy",
            title: "Search & Destroy",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/searchDestroy.avif"],
          },
          {
            slug: "10seconds",
            title: "10 Seconds",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/10seconds.avif"],
          },
          {
            slug: "big-boss",
            title: "Big Boss",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/bigBoss.avif"],
          },
          {
            slug: "hilda",
            title: "Hilda",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/hilda.avif"],
          },
          {
            slug: "phoenix",
            title: "Phoenix",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/phoenix.avif"],
          },
          {
            slug: "rocketman",
            title: "Rocketman",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/rocketman.avif"],
          },
          {
            slug: "space-x",
            title: "Space X",
            description: "",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: ["@assets/works/prints/robotsCranks/spaceX.avif"],
          },
        ],
      },
      {
        slug: "run",
        title: "Run",
        description: "",
        works: [],
      },
      {
        slug: "struct-and-destruct",
        title: "Struct and Destruct",
        description: "",
        works: [],
      },
      {
        slug: "the-journey-man-prints",
        title: "The Journey Man",
        description: "",
        works: [],
      },
      {
        slug: "the-three-progresses",
        title: "The Three Progresses",
        description: "",
        works: [],
      },
      {
        slug: "watch-and-bewitched",
        title: "Watch & Bewitched",
        description: "",
        works: [],
      },
    ],
  },
  {
    slug: "ceramics",
    title: "Ceramics",
    works: [
      {
        slug: "afterlife",
        title: "Afterlife",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/afterLife/afterlife.avif"],
      },
      {
        slug: "azrael",
        title: "Azrael",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "25 x 25 x 5 cm",
        price: "£800",
        imageUrls: ["@assets/works/ceramics/azrael/azrael.avif"],
      },
      {
        slug: "bala",
        title: "Bala",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/bala/bala1.avif"],
      },
      {
        slug: "burn-in-hell",
        title: "Burn in Hell",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1200",
        imageUrls: ["@assets/works/ceramics/burnInHell/burnInHell.avif"],
      },
      {
        slug: "chaos",
        title: "Chaos",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/chaos/chaos.avif"],
      },
      {
        slug: "lockdown",
        title: "Lockdown",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/lockdown/lockdown.avif"],
      },
      {
        slug: "los-tres-amigos",
        title: "Los Tres Amigos",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/losTresAmigos/www1.avif"],
      },
      {
        slug: "medusa",
        title: "Medusa",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/medusa/medusaPlate.avif"],
      },
      {
        slug: "rocket-man",
        title: "Rocket Man",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/rocketMan/rocketMan.avif"],
      },
      {
        slug: "safe-passage",
        title: "Safe Passage",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/safePassage/safePassage.avif"],
      },
      {
        slug: "freedom",
        title: "Freedom",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/freedom.avif"],
      },
      {
        slug: "fish-car",
        title: "Fish Car",
        description: "",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/fishCar.avif"],
      },
    ],
  },
  {
    slug: "drawings",
    title: "Drawings",
    works: [
      {
        slug: "botanical-garden-malaga",
        title: "Botanical Garden Malaga",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/botanicalGardenMalaga.avif"],
      },
      {
        slug: "cadaques",
        title: "Cadaques",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/cadaques.avif"],
      },
      {
        slug: "castel-de-ferro",
        title: "Castel de Ferro",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/castelDeFerro.avif"],
      },
      {
        slug: "character-design",
        title: "Character Design",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/characterDesign.avif"],
      },
      {
        slug: "circus",
        title: "Circus",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/circus.avif"],
      },
      {
        slug: "malaga",
        title: "Malaga",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/malaga.avif"],
      },
      {
        slug: "playa",
        title: "Playa",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/playa.avif"],
      },
      {
        slug: "repent",
        title: "Repent",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/repent.avif"],
      },
      {
        slug: "semana-santa",
        title: "Semana Santa",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/semanaSanta.avif"],
      },
      {
        slug: "view-into-the-distance",
        title: "View Into The Distance",
        description: "",
        medium: "Linocut, wood block & Letterpress",
        imageUrls: ["@assets/works/drawings/viewIntoTheDistance.avif"],
      },
    ],
  },
  {
    slug: "artist-books",
    title: "Artist Books",
    collections: [
      {
        slug: "contemporary-street-alphabet",
        title: "Contemporary Street Alphabet",
        description:
          "A modern exploration of urban typography and street art culture",
        works: [
          {
            slug: "contemporary-street-alphabet-1",
            title: "Contemporary Street Alphabet",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/contemporaryStreetAlphabet/1.avif",
              "@assets/works/artistBooks/contemporaryStreetAlphabet/2.avif",
              "@assets/works/artistBooks/contemporaryStreetAlphabet/3.avif",
              "@assets/works/artistBooks/contemporaryStreetAlphabet/4.avif",
              "@assets/works/artistBooks/contemporaryStreetAlphabet/5.avif",
              "@assets/works/artistBooks/contemporaryStreetAlphabet/6.avif",
            ],
          },
        ],
      },
      {
        slug: "crack-progress-charlies-progress",
        title: "Crack Progress & Charlie's Progress",
        description:
          "A narrative exploration of urban decay and personal transformation",
        works: [
          {
            slug: "crack-progress-charlies-progress-1",
            title: "Crack Progress & Charlie's Progress",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/crackProgressCharliesProgress/1.avif",
              "@assets/works/artistBooks/crackProgressCharliesProgress/2.avif",
              "@assets/works/artistBooks/crackProgressCharliesProgress/3.avif",
              "@assets/works/artistBooks/crackProgressCharliesProgress/4.avif",
            ],
          },
        ],
      },
      {
        slug: "future",
        title: "Future",
        description:
          "A vision of tomorrow through contemporary artistic expression",
        works: [
          {
            slug: "future-1",
            title: "Future",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/future/1.avif",
              "@assets/works/artistBooks/future/2.avif",
              "@assets/works/artistBooks/future/3.avif",
              "@assets/works/artistBooks/future/4.avif",
              "@assets/works/artistBooks/future/5.avif",
              "@assets/works/artistBooks/future/6.avif",
            ],
          },
        ],
      },
      {
        slug: "gods-monsters-book",
        title: "Gods & Monsters Book",
        description:
          "An artist book exploring mythology and contemporary interpretations",
        works: [
          {
            slug: "gods-monsters-book-1",
            title: "Gods & Monsters Book",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/godsMonsters/1.avif",
              "@assets/works/artistBooks/godsMonsters/2.avif",
              "@assets/works/artistBooks/godsMonsters/3.avif",
              "@assets/works/artistBooks/godsMonsters/4.avif",
              "@assets/works/artistBooks/godsMonsters/5.avif",
              "@assets/works/artistBooks/godsMonsters/6.avif",
            ],
          },
        ],
      },
      {
        slug: "modern-marriage-book",
        title: "Modern Marriage Book",
        description: "A contemporary look at relationships and modern life",
        works: [
          {
            slug: "modern-marriage-book-1",
            title: "Modern Marriage Book",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/modernMarriage/1.avif",
              "@assets/works/artistBooks/modernMarriage/2.avif",
              "@assets/works/artistBooks/modernMarriage/3.avif",
              "@assets/works/artistBooks/modernMarriage/4.avif",
            ],
          },
        ],
      },
      {
        slug: "run-book",
        title: "Run Book",
        description: "An exploration of movement, escape, and urban dynamics",
        works: [
          {
            slug: "run-book-1",
            title: "Run Book",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/run/1.avif",
              "@assets/works/artistBooks/run/2.avif",
              "@assets/works/artistBooks/run/3.avif",
              "@assets/works/artistBooks/run/4.avif",
              "@assets/works/artistBooks/run/5.avif",
              "@assets/works/artistBooks/run/6.avif",
            ],
          },
        ],
      },
      {
        slug: "the-journey-man-book",
        title: "The Journey Man Book",
        description:
          "A visual narrative of travel, discovery, and personal transformation",
        works: [
          {
            slug: "the-journey-man-book-1",
            title: "The Journey Man Book",
            description: "",
            medium: "Artist Book",
            imageUrls: [
              "@assets/works/artistBooks/theJourneyMan/1.avif",
              "@assets/works/artistBooks/theJourneyMan/2.avif",
              "@assets/works/artistBooks/theJourneyMan/3.avif",
              "@assets/works/artistBooks/theJourneyMan/4.avif",
              "@assets/works/artistBooks/theJourneyMan/5.avif",
              "@assets/works/artistBooks/theJourneyMan/6.avif",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "mixed-media",
    title: "Mixed Media",
    works: [
      {
        slug: "luchador",
        title: "Luchador",
        description: "",
        medium: "Mixed Media",
        imageUrls: ["@assets/works/mixed/luchador.avif"],
      },
      {
        slug: "pagannini",
        title: "Pagannini",
        description: "",
        medium: "Mixed Media",
        imageUrls: ["@assets/works/mixed/pagannini.avif"],
      },
      {
        slug: "puta-gallina",
        title: "Puta Gallina",
        description: "",
        medium: "Mixed Media",
        imageUrls: ["@assets/works/mixed/putaGallina.avif"],
      },
    ],
  },
];
