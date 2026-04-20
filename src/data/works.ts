import type { Category, Collection, Work } from "@/types";

export type { Category, Collection, Work };

export const WORKS: Category[] = [
  {
    slug: "prints",
    title: "Prints",
    collections: [
      {
        slug: "citizens-and-wastrels",
        title: "Citizens & Wastrels",
        description:
          "Inhabitants of towns and cities, living in the light or lurking in the shadows. Themes of urban decay, corruption, and vice.",
        works: [
          {
            slug: "after-hours",
            title: "After Hours",
            description:
              "Too much to drink, too much to say\nNot enough time but to wish the night away.\nWhen people are out the rats will come out to play,\nLeaving us all dazed and confused until the next day:\nRound goes the wheel and we do it all again",
            printType: "Etching",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/afterHours.avif",
            ],
            printEdition: 30,
            size: "30 x 20 cm",
          },
          {
            slug: "angel-of-victory",
            title: "Angel of Victory",
            description:
              "A title with ever changing meanings. The last one standing – in war, in battle, in a hospital ward. Buried inside a mask, anonymous: a fighter, a carer. Being asked to do the unthinkable – killing or holding the hands of the dying. Seeing horrors that cannot be erased from the mind. Being asked to be a superhero. But after the conflict, what happens? Being asked to just go back to normal?\nImpossible.\nLet the mask remind all of us that inside the layers of protection there is not a machine, but a person. A person who will need our care. Let us care for them as they cared for us. Then there will be true victory.",
            printType: "Reduction Linocut",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
            ],
            printEdition: 10,
            size: "20 x 30 cm",
          },
          {
            slug: "early-hour-of-the-morning",
            title: "Early Hours of the Morning",
            description:
              "In night's dark hours an underworld spreads its tentacles, transforming mischief into mayhem, and minor disputes into major confrontations, as bad deeds become evil.\nPrisoners break out, drunks break in, judges play away, rats from the sewers cavort. Rules are broken under the noses of the guards who don't see what is happening through the windows and behind the doors.\nFrom skyline to gutter, the filth and the scum stealthily starts to throb with life as dawn breaks.",
            printType: "Linocut",
            price: "£175",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
            printEdition: 30,
            size: "65 x 45 cm",
          },
          {
            slug: "getting-weighed",
            title: "Getting Weighed In",
            description:
              "Politicians and gangsters – all are on the make: all are the same.\nWeighing up the odds, weighing up on the scales of justice – but everything is corrupted and fiddled. The crane is fixed, the outcome is certain.",
            printType: "Reduction Linocut",
            price: "£195",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
            printEdition: 15,
            size: "60 x 40 cm",
          },
          {
            slug: "nightcap",
            title: "Nightcap",
            description:
              '"One for the road" as the old saying goes.\nIn the dark corners corruption lurks.\nOne more and see where the night takes you.',
            printType: "Reduction Linocut",
            price: "£175",
            imageUrls: ["@assets/works/prints/citizensWastrels/nightcap.avif"],
            printEdition: 10,
            size: "30 x 30 cm",
          },
          {
            slug: "selfmade-man",
            title: "Self-made Man",
            description:
              "I am a man of my word\nMy word stands for all.\nCross my path\nAnd there will be no more words for you.",
            printType: "Reduction Linocut",
            price: "£175",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/selfMadeMan.avif",
            ],
            printEdition: 10,
            size: "30 x 30 cm",
          },
          {
            slug: "time-is-just-an-illusion",
            title: "Time is just an illusion",
            description:
              "'Work for bones' is the pitiful message. The tramp watches the world go by.\nThe superior man is better than others, and the tramp turns to drink. 'There is all the time in the world' is the phrase, but is there time to save anything?",
            printType: "Linocut",
            price: "£100",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/timeIsJustAnIllution.avif",
            ],
            printEdition: 30,
            size: "30 x 40 cm",
          },
          {
            slug: "metamorphosis",
            title: "Metamorphosis",
            description:
              "A man goes for cosmetic surgery to enhance himself in the eyes of the world: adds bits to his anatomy, tattoos, false parts, extra limbs. Gradually over time he morphs into a creature that is a fantasy: no longer human, he writhes in pain and torment.\nInspired by Kafka's story of a man who wakes up one day transformed into an insect.",
            printType: "Reduction Linocut",
            price: "£150",
            printEdition: 12,
            size: "40 x 30 cm",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/metamorphosis_fernando_feijoo.avif",
            ],
          },
          {
            slug: "laying-down-the-law",
            title:
              "Laying down the Law in Lager Lane and Lifting the Spirits in Tonic Row",
            description:
              "Taking inspiration from William Hogarth's commentary on the Gin Act in 'Gin Lane' and 'Beer Street', drinkers revel in chaos, drink is still responsible for all sorts of horrors in the 21st century. Crimes committed, lives destroyed, corruption and cruelty visualised amidst a wealth of word play and commentary on contemporary consumerist society.\nThe streetscape has sub texts and the legal terms are caustically captured with 'caught house and court house', 'Helpum and Stingum' and some very shady lawyers in wigs bend the law and their victims to obscene acts. Each window is a snapshot, each fallen body a sign of troubled times.",
            printType: "Lithograph",
            price: "£150",
            printEdition: 50,
            size: "60 x 30 cm",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/lifting-the-spirits-in-tonic-row-laying-down-the-law-in-lager-lane_fernando_feijoo.avif",
              "@assets/works/prints/citizensWastrels/liftingTheSpirits.avif",
            ],
          },
          {
            slug: "contracted",
            title: "Contracted",
            description: "Step into the arena. One step too far.",
            printType: "Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/contracter.avif",
            ],
            printEdition: 30,
            size: "50 x 40 cm",
          },
          {
            slug: "driven",
            title: "Driven",
            description: "The engine fires. Point of no return.",
            printType: "Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/driven.avif",
            ],
            printEdition: 30,
            size: "50 x 40 cm",
          },
          {
            slug: "wacked",
            title: "Wacked",
            description: "Footsteps in darkness. Finger on the trigger. BANG.",
            printType: "Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/wacked.avif",
            ],
            printEdition: 30,
            size: "50 x 40 cm",
          },
          {
            slug: "busted",
            title: "Busted",
            description: "Locked in shackles and sent to the clink.",
            printType: "Linocut",
            price: "£150 (Set £450)",
            size: "50 x 40 cm",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/busted.avif",
            ],
          },
        ],
      },
      {
        slug: "death-dances",
        title: "Death Dances",
        description:
          "This project is currently being developed, visit again soon to see the outcomes of this collection inspired by Hans Holbein's Dance of Death.",
        works: [
          {
            slug: "joker-playing-card",
            title: "Joker Playing Card",
            description: "Work in Progress",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: [
              "@assets/works/prints/deathDance/jokerPlayingCard.avif",
            ],
          },
        ],
      },
      {
        slug: "games-and-players",
        title: "Games & Players",
        description: "",
        works: [
          {
            slug: "hierarchi-of-anarchy",
            title: "Hierarchi of Anarchy",
            description:
              "Structure of family relationships within the suit of diamonds.",
            printType: "Zinc Lithograph",
            price: "£100",
            printEdition: 5,
            size: "50 x 50 cm",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/hierarchiOfAnarchy.avif",
            ],
          },
          {
            slug: "machiavellian",
            title: "Machiavellian",
            description:
              "Inspired by Punch and Judy. The skeleton controls the King and Queen. Political commentary on how citizens are misled by corrupt powers.",
            printType: "Stone Lithograph",
            price: "£250",
            imageUrls: ["@assets/works/prints/gamesPlayer/machiavellian.avif"],
            printEdition: 10,
            size: "60 x 80 cm",
          },
          {
            slug: "ace-of-diamonds",
            title: "Ace of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/aceOfDiamonds.avif",
            ],
          },
          {
            slug: "eight-of-diamonds",
            title: "Eight of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/eightOfDiamonds.avif",
            ],
          },
          {
            slug: "five-of-diamonds",
            title: "Five of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fiveOfDiamonds.avif",
            ],
          },
          {
            slug: "four-of-diamonds",
            title: "Four of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fourOfDiamonds.avif",
            ],
          },
          {
            slug: "nine-of-diamonds",
            title: "Nine of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/nineOfDiamonds.avif",
            ],
          },
          {
            slug: "jack-of-diamonds",
            title: "Jack of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/jackOfDiamonds.avif",
            ],
          },
          {
            slug: "king-of-diamonds",
            title: "King of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/kingOfDiamonds.avif",
            ],
          },
          {
            slug: "queen-of-diamonds",
            title: "Queen of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/queenOfDiamonds.avif",
            ],
          },
          {
            slug: "seven-of-diamonds",
            title: "Seven of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sevenOfDiamonds.avif",
            ],
          },
          {
            slug: "six-of-diamonds",
            title: "Six of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sixOfDiamonds.avif",
            ],
          },
          {
            slug: "three-of-diamonds",
            title: "Three of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/threeOfDiamonds.avif",
            ],
          },
          {
            slug: "two-of-diamonds",
            title: "Two of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/twoOfDiamonds.avif",
            ],
          },
          {
            slug: "joker1",
            title: "Joker 1",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker1.avif",
            ],
          },
          {
            slug: "joker2",
            title: "Joker 2",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Zinc Lithography",
            price: "£40 (Complete set of 14 prints £350)",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker2.avif",
            ],
          },
        ],
      },
      {
        slug: "gods-and-monsters",
        title: "Gods & Monsters",
        description:
          "A portfolio of alphabet inspired prints illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld. Inspired by Ovid’s Metamorphosis, Greek Mythology and childhood memories. Themes include the fusion of villain and hero (Picasso’s Minotaur), the passage of life, and good versus evil.",
        works: [
          {
            slug: "agni",
            title: "Agni",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/agni.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "bala",
            title: "Bala",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/bala.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "cerbus",
            title: "Cerbus",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/cerbus.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "draco",
            title: "Draco",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/draco.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "europa",
            title: "Europa",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/europa.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "fenir",
            title: "Fenir",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/fenir.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "gala",
            title: "Gala",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/gala.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "hercules",
            title: "Hercules",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/hercules.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "icarus",
            title: "Icarus",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/icarus.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "janus",
            title: "Janus",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/janus.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "kraken",
            title: "Kraken",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/kraken.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "lucifer",
            title: "Lucifer",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/lucifer.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "medusa",
            title: "Medusa",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/medusa.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "neptune",
            title: "Neptune",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/neptune.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "odin",
            title: "Odin",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/odin.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "prometheus",
            title: "Prometheus",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/prometheus.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "quetzlcoatl",
            title: "Quetzlcoatl",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/quetzlcoatl.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "ra",
            title: "Ra",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/ra.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "shu",
            title: "Shu",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/shu.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "theseus",
            title: "Theseus",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/theseus.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "urania",
            title: "Urania",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/urania.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "volcan",
            title: "Volcan",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/volcan.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "walpurgis",
            title: "Walpurgis",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/walpurgis.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "xanthos",
            title: "Xanthos",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/xanthos.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "yggdrasil",
            title: "Yggdrasil",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/yggdrasil.avif"],
            size: "57 x 37 cm",
          },
          {
            slug: "zephyr",
            title: "Zephyr",
            description: "",
            printType: "Linocut and Woodblock",
            price: "£195 (Complete set of 30 prints £2500)",
            printEdition: 30,
            imageUrls: ["@assets/works/prints/godsMonsters/zephyr.avif"],
            size: "57 x 37 cm",
          },
        ],
      },
      {
        slug: "inferno",
        title: "Inferno",
        description:
          "Explores the darker sides of human nature, the impact on the planet, political events, and manmade catastrophes. References Dante's Inferno.",
        works: [
          {
            slug: "night-attack",
            title: "Night Attack",
            description:
              "The lords on high soar in the skies, ready to pounce. 'Run: don't look up.' Death is coming for all; even while the carnival proceeds, all will succumb.",
            printType: "Wood engraving",
            price: "£150",
            printEdition: 50,
            size: "8 x 10 cm",
            imageUrls: [
              "@assets/works/prints/inferno/Night_Attack_fernando_feijoo.avif",
            ],
          },
          {
            slug: "night-terrors",
            title: "Night Terrors",
            description:
              "The guardian angel swoops down. No Mercy, no Forgiveness. Bodies pile up. The death stare of Azrael is relentless; you may fight, but ultimately fail.",
            printType: "Wood engraving",
            price: "£150",
            printEdition: 50,
            size: "8 x 10 cm",
            imageUrls: [
              "@assets/works/prints/inferno/Night_Terrors_fernando_feijoo.avif",
            ],
          },
          {
            slug: "descent-into-darkness",
            title: "Descent into Darkness",
            description:
              "The tree as a gateway. What lies beneath the shaded graveyard?",
            printType: "Wood engraving",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/inferno/descentIntoDarkness.avif",
            ],
            printEdition: 50,
            size: "8 x 10 cm",
          },
          {
            slug: "hell-is-empty",
            title: "Hell is Empty: the Devils Are All Here",
            description:
              "Maybe the devils are us? Religion and politics blind us. Rise above the darkness.",
            printType: "Wood engraving",
            price: "£250",
            imageUrls: ["@assets/works/prints/inferno/hellIsEmpty.avif"],
            printEdition: 50,
            size: "30 x 20 cm",
          },
          {
            slug: "hell-on-earth",
            title: "Hell on Earth",
            description:
              "Part man, part beast. Masked officials infiltrate. 'Hell on Earth is now and for ever'.",
            printType: "Linocut",
            price: "£325",
            imageUrls: ["@assets/works/prints/inferno/hellOnEarth.avif"],
            printEdition: 30,
            size: "56 x 76 cm",
          },
          {
            slug: "stewpot",
            title: "Stewpot of Mouldering Morsels",
            description:
              "Food mouldering past sell by dates. The stench of corrupted food cycles.",
            printType: "Linocut",
            price: "£325",
            imageUrls: ["@assets/works/prints/inferno/stewpot.avif"],
            printEdition: 30,
            size: "76 x 56 cm",
          },
          {
            slug: "swamp",
            title: "Swamp of Indulgent Consequences",
            description:
              "Earth groans under weight of 'things'. Putrid swamps, storms named after people's lusts.",
            printType: "Linocut",
            price: "£325",
            imageUrls: ["@assets/works/prints/inferno/swamp.avif"],
            printEdition: 30,
            size: "76 x 56 cm",
          },
          {
            slug: "the-future",
            title: "The Future",
            description:
              "Post-apocalyptic narrative. Rising sea levels, human consumption, and skeletons. 'The FUTURE is now!'",
            printType: "Linocut (Tryptic)",
            price: "£750",
            imageUrls: ["@assets/works/prints/inferno/theFuture.avif"],
            printEdition: 30,
            size: "56 x 76 cm each",
          },
          {
            slug: "the-war",
            title: "The War: A Reflection on Power, and Survival",
            description:
              "Stark reminder of turbulent times. Echoes German Expressionism. Imagery of underground tunnels. 'Who will have the nerve to push the red button?'",
            printType: "Quadriptych of Lino cuts",
            price: "£1000",
            imageUrls: ["@assets/works/prints/inferno/theWar.avif"],
            printEdition: 50,
            size: "Various paper sizes: 76 x 56 & 40 x 50 cm",
          },

          {
            slug: "the-fall",
            title: "The Fall",
            description:
              "Prediction of collapse. 'Fall, Fall, we will all fall'. Economies fail, pandemics rise. 'Look on this and learn'.",
            printType: "Linocut and Screenprint (Diptych)",
            price: "£600",
            imageUrls: ["@assets/works/prints/inferno/theFall.avif"],
            printEdition: 30,
            size: "56 x 76 cm each sheet of paper",
          },
          {
            slug: "today",
            title: "The Devils in the Deal",
            description:
              'We stand, arms crossed and say "We merely observe."\n\nBut we, in our deals with the devil, unleashed the floods, the famine, the flames and the destruction.\n\nOur endless online orders, with packaging that lays waste to the earth. Our continuous consumption corrodes the planet. Our greed degrades all life that we see. Our violence - verbal, physical and moral, violates all that we touch.\n\nWe laugh at others\' misfortunes, mock the weak and deride the cries of distress, but the tables are turned. The remote control is wrested from our grip. We cannot outwit the devils and death.\n\nWe deal with the devils, daily. The devils deal with us, for eternity.\n\nWe must judge ourselves. We are the problem, but could be the solution.',
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "76 x 56 cm",
            imageUrls: ["@assets/works/prints/inferno/today.avif"],
          },
          {
            slug: "midnight",
            title: "Midnight",
            description:
              "Displaced and distraught people move during the cover of night. The sound of war rumbles, explosions shatter windows. Judgement dawns with a new day, but night demons still hunt. Air raid sirens wail.",
            printType: "Stone lithograph",
            price: "£395",
            printEdition: 30,
            size: "76 x 56 cm (W x H)",
            imageUrls: [
              "@assets/works/prints/inferno/Midnight_fernando_feijoo.avif",
              "@assets/works/prints/inferno/Midnight_colour_fernando_feijoo.avif",
            ],
          },
        ],
      },

      {
        slug: "persons-and-personas",
        title: "Persons & Personas",
        description: "",
        works: [
          {
            slug: "joaquin",
            title: "Inscribed (Character 1)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: ["@assets/works/prints/persons&Personas/Joaquin.avif"],
          },
          {
            slug: "emilio",
            title: "Inscribed (Character 2)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Emilio.avif",
              "@assets/works/prints/persons&Personas/EmilioColor.avif",
            ],
          },
          {
            slug: "enzo",
            title: "Inscribed (Character 3)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: ["@assets/works/prints/persons&Personas/Enzo.avif"],
          },
          {
            slug: "hector",
            title: "Inscribed (Character 4)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Hector.avif",
              "@assets/works/prints/persons&Personas/HectorColor.avif",
            ],
          },
          {
            slug: "lorenzo",
            title: "Inscribed (Character 5)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Lorenzo.avif",
              "@assets/works/prints/persons&Personas/LorenzoColor.avif",
            ],
          },
          {
            slug: "marcus",
            title: "Inscribed (Character 6)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: ["@assets/works/prints/persons&Personas/Marcus.avif"],
          },
          {
            slug: "santiago",
            title: "Inscribed (Character 7)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: ["@assets/works/prints/persons&Personas/Santiago.avif"],
          },
          {
            slug: "jose",
            title: "Inscribed (Character 8)",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Etching",
            printEdition: 50,
            size: "20 x 30 cm (W x H)",
            price: "£150 — each character",
            imageUrls: ["@assets/works/prints/persons&Personas/Jose.avif"],
          },
          {
            slug: "siesta",
            title: "Siesta",
            description:
              "Sun shines too hot. Drink goes down too fast. Legs feel rubbery. Arms are dead weights.\nThis chair is too comfy. The air is too thick. Life is too hard. Every day the same.\nSit, snooze, wake, top up; slump, sleep, half awake, top up; out for the count.",
            printType: "Reduction Lino Cut",
            printEdition: 15,
            size: "40 x 50 cm",
            price: "£250",
            imageUrls: ["@assets/works/prints/persons&Personas/Siesta.avif"],
          },
          {
            slug: "step-into-the-arena",
            title: "Step into the Limelight",
            description:
              "But man or Minotaur?\nFierce or fragile?\nInvincible or vulnerable?\n\nThe mask hides expressions but also reveals other interpretations. So, does the fighter observe the audience's reactions, or does the audience see themselves as if in a mirror?\nInfluenced by Picasso and his relationship with the Minotaur: a life-long theme for the man and the artist.",
            printType: "Collagraph",
            printEdition: 5,
            size: "20 x 20 cm",
            price: "£75",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Step into the arena.avif",
            ],
          },
        ],
      },
      {
        slug: "robots-and-cranks",
        title: "Robots & Cranks",
        description:
          "Exploration of the conflict between Man and Machine, AI, and authoritarian control.",
        works: [
          {
            slug: "revolution",
            title: "Revolution",
            description:
              "The iron machine strides forward to destroy. Man v Machine. AI assists the iron machine. Big Brother is watching. An uprising is emerging.",
            printType: "Reduction Linocut",
            price: "£175",
            printEdition: 10,
            size: "30 x 40 cm",
            imageUrls: [
              "@assets/works/prints/robotsCranks/revolution.avif",
              "@assets/works/prints/robotsCranks/1_Revolution_fernando_feijoov2.avif",
            ],
          },
          {
            slug: "search-and-destroy",
            title: "Search & Destroy",
            description: "No mercy\nNo heart\nNo love\nNo Soul\nNo life",
            printType: "Reduction Linocut — colour variations",
            printEdition: 30,
            size: "30 x 40 cm",
            price: "£125",
            imageUrls: ["@assets/works/prints/robotsCranks/searchDestroy.avif"],
          },
          {
            slug: "10seconds",
            title: "10 Seconds",
            description: "",
            printType: "Reduction Linocut",
            price: "£125",
            size: "30 x 40 cm (W x H)",
            imageUrls: ["@assets/works/prints/robotsCranks/10seconds.avif"],
          },
          {
            slug: "big-boss",
            title: "Big Boss",
            description: "",
            printType: "Reduction Linocut",
            price: "£125",
            size: "30 x 40 cm (W x H)",
            imageUrls: ["@assets/works/prints/robotsCranks/bigBoss.avif"],
          },
          {
            slug: "hilda",
            title: "Hilda",
            description: "",
            printType: "Reduction Linocut",
            price: "£125",
            size: "30 x 40 cm (W x H)",
            imageUrls: ["@assets/works/prints/robotsCranks/hilda.avif"],
          },
          {
            slug: "phoenix",
            title: "Phoenix",
            description: "",
            printType: "Reduction Linocut",
            price: "£125",
            size: "30 x 40 cm (W x H)",
            imageUrls: ["@assets/works/prints/robotsCranks/phoenix.avif"],
          },
          {
            slug: "rocketman",
            title: "Rocketman",
            description: "",
            printType: "Reduction Linocut",
            price: "£125",
            size: "30 x 40 cm (W x H)",
            imageUrls: ["@assets/works/prints/robotsCranks/rocketman.avif"],
          },
          {
            slug: "space-x",
            title: "Space X",
            description: "",
            printType: "Reduction Linocut",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/spaceX.avif"],
          },
          {
            slug: "metamorph-machine-crusher",
            title: "Metamorph — Machine Crusher",
            description:
              "The sound of crushing: broken glass cracking and metal crashing.\n\nThe huge crushing machine yawns wide its jaws ready to feast on the next metallic snack and then spit it back out as a perfectly packaged parcel.\n\nThe machine controls who its next victim will be. Its iron claw reaches forward and clamps down with pincer action, grabbing the dead shell which once took people to far away adventures of mystery and fun.\n\nRe-cycled, re-mapped, re-planned for the future. Precious metals are melted and re-built into the next gadget, with which, humans will destroy the world.",
            printType: "Reduction Linocut",
            price: "£195",
            printEdition: 10,
            size: "40 x 50 cm",
            imageUrls: ["@assets/works/prints/robotsCranks/metamorph.avif"],
          },
          {
            slug: "metamorph-escape-from-alcatraz",
            title: "Metamorph — Escape from Alcatraz",
            description:
              "The electric door backs off and he goes - making his escape from the factory that would put him to work alongside all the other bots.\n\nThe future is bright: there is a new dawn, a new horizon is coming. But watch out! The next generation of AI is now out there, amongst us all, planning and dictating our futures, without us even knowing it.",
            printType: "Reduction Linocut",
            price: "£195",
            printEdition: 10,
            size: "40 x 50 cm",
            imageUrls: ["@assets/works/prints/robotsCranks/metamorph.avif"],
          },
          {
            slug: "metamorph-the-day-after-tomorrow",
            title: "Metamorph — The Day After Tomorrow",
            description:
              "After the bombing stopped and the clouds of dust settled, the mountains of rubble were clearly visible piled up high; wastelands as far as the eye could see.\n\nAfter the great wave from the sea had washed everything away in its path, the destruction was clearly visible. Tossed and thrown out of place, all is discarded and lost. The riverbeds now run dry, cracks in the clay open up the wounds from the disaster and reveal scars on the natural landscape. Wilderness lost, habitats destroyed.\n\nAfter the storm comes the calm and now it is time to rebuild and plan our way. The machine survives and marches forward looking for any survivors. With violent creaking and cranking, the hydraulic pistons pump the oil around the machine, just as the heart pumps blood to the monster inside the machine.\n\nBut who is controlling the machine? As we perilously perch at the dawn of a new era, the machine comes ever closer to man's everyday existence.\n\nOnly the future will tell, but has time turned full circle and the dinosaurs are now back to rule the earth?",
            printType: "Reduction Linocut",
            price: "£375",
            printEdition: 30,
            size: "40 x 50 cm",
            imageUrls: ["@assets/works/prints/robotsCranks/metamorph.avif"],
          },
        ],
      },
      {
        slug: "run",
        title: "Run",
        description:
          "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
        works: [
          {
            slug: "run-the-show",
            title: "Run the Show",
            description:
              "Run the Show\nThe master puppeteer\nPulls the strings\nHe has the power\nWe have no wings",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_the_show_fernando_feijoo.avif",
            ],
            price: "£175",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-out-of-money",
            title: "Run Out of Money",
            description:
              "Run out of Money\nBills to be paid\nWages mislaid\nWill be gobbled up\nIn debtors' gaal",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_money_fernando_feijoo.avif",
            ],
            price: "£175",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "print-run",
            title: "Print Run",
            description:
              "Print Run\nDraw, block, etch\nPrint done, rollers away!\nRun the press\nPrints fly away",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/print_run_fernando_feijoo.avif",
            ],
            price: "£175",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-a-stitch",
            title: "Run a Stitch",
            description:
              "Run a Stitch\nClothes shredded\nRagged hole\nMachine is threaded\nStart the bobbin",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_a_stitch_fernando_feijoo.avif",
            ],
            price: "£125",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-out-of-time",
            title: "Run Out of Time",
            description:
              "Run out of Time\nThe clocks will stop\nToo many tasks to do\nWe failed the job\nTime's run through",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_time_fernando_feijoo.avif",
            ],
            price: "£175",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-out-of-steam",
            title: "Run Out of Steam",
            description:
              "Run out of Steam\nThe mighty roller\nIs stilled\nRolling is over\nPower is killed",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_steam_fernando_feijoo.avif",
            ],
            price: "£125",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-up-a-bill",
            title: "Run Up a Bill",
            description:
              "Run up a Bill\nThe more we drink\nThe more we pay\nBill and another bill\nBut no money to fulfil",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_up_a_bill_fernando_feijoo.avif",
            ],
            price: "£175",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
          {
            slug: "run-riot",
            title: "Run Riot",
            description:
              "Run Riot\nFight for justice\nRight to fight\nRaise the alarm\nBe over by night\nAs one the machine of mankind will explode",
            printType: "Linocut",
            imageUrls: [
              "@assets/works/prints/run/run_riot_fernando_feijoo.avif",
            ],
            price: "£125",
            printEdition: 30,
            size: "30 x 40 cm (W x H)",
          },
        ],
      },
      {
        slug: "struct-and-destruct",
        title: "Struct and Destruct",
        description: "",
        works: [
          {
            slug: "cromer-lighthouse",
            title: "Cromer Lighthouse",
            description:
              "Beaming out into the North Sea.\nBeware invaders, beware sailing too close.\nThe cottage alongside is a holiday let.\nVisitors drawn by the light, the beacon of the town.\nCromer welcomes; its lighthouse protects.",
            printType: "Collagraph",
            printEdition: 10,
            size: "40 x 30 cm",
            price: "£175",
            imageUrls: [
              "@assets/works/prints/structDestruct/Cromer_lighthouse_fernando_feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-bw",
            title: "House on the Hill B&W",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            size: "40 x 50 cm",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/structDestruct/House_on_the_hill_B&W_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-colour",
            title: "House on the Hill Colour",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            size: "40 x 50 cm",
            price: "£195",
            imageUrls: [
              "@assets/works/prints/structDestruct/house on the hill colour_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nightwatch",
            title: "Nightwatch",
            description: "",
            printType: "Wood engraving",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_fernando_feijoo.avif",
            ],
            price: "£150",
            printEdition: 50,
            size: "40 x 50 cm",
          },
          {
            slug: "nightwatch-colour",
            title: "Nightwatch Colour",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_colour1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "cromer",
            title: "Cromer",
            description:
              "Nostalgia for past times is conjured when one thinks of a place by the sea.\n\nA special memory is created, locked away for ever and treasured, until your return visit sparks it alive again.\n\nThe crashing sound of the waves pounding the sea wall.\nWhispers and fragrances of sea salt mist fill the air; and the smell of fish and chips lingers around each corner. Queues of excited children line up for ice cream.\n\nArchitectural grandeur and elegance prevail with old, battered buildings still standing strong against the North Sea winds which have blown ceaselessly over the centuries.\n\nThe pier juts into the sea as a bold statement of British historical character, while the sounds of laughter and dancing from the musical performance reverberate and echo out to sea.",
            printType: "Reduction Linocut",
            printEdition: 30,
            size: "112 x 60 cm",
            price: "£650",
            imageUrls: [
              "@assets/works/prints/structDestruct/Cromer_lighthouse_fernando_feijoo.avif",
            ],
          },
          {
            slug: "mill-road-library",
            title: "Mill Road Library",
            description:
              "Not just books - but where have the dreams gone, the adventures through the leaves, the words of writers, long gone, but who still speak to us now? The pictures that we daydreamed about, the flights of fancy enjoyed?\nNot just books - but the seeds that were sown, the people met in the corners of this imposing building. An edifice that enthralled and helped us realise that we are small, but not insignificant. That we are one of many and can join with others - to save our libraries.",
            printType: "Collagraph",
            printEdition: 10,
            size: "40 x 30 cm",
            price: "£175",
            imageUrls: [
              "@assets/works/prints/structDestruct/Mill-Road-Library.avif",
            ],
          },
        ],
      },
      {
        slug: "the-journey-man-prints",
        title: "The Journey Man",
        description:
          "Inspired by a surreal dream and the universal idea of the journeyman. The labyrinth represents the twists and turns of modern life. Symbols include the jellyfish (rescue/care) and the dream catcher. Themes: life’s excitements, fears and dangers. A story that does not end: it evolves with the times.",
        works: [
          {
            slug: "arrival",
            title: "1. Arrival",
            description:
              "The journey begins.\nA new world unfolds.\nThe journeyman sets out:\nInto the unknown.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/1_Arrival_fernando_feijoo.avif",
            ],
          },
          {
            slug: "darkness",
            title: "6. Darkness",
            description:
              "This is hell under earth.\nEndless steps lead up and out.\nA lamplight flickers:\nDarkness must end.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/6_Darkness__fernando_feijoo.avif",
            ],
          },
          {
            slug: "metropolis",
            title: "10. Metropolis",
            description:
              "A safety net protects new life:\nA city emerges from the smog.\nThe dream catcher journeys on:\nDown, then up, then down again.\nAnd on and on …",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/10_Metropolis__fernando_feijoo.avif",
            ],
          },
          {
            slug: "submerged",
            title: "2. Submerged",
            description:
              "Plummeting into darkness\nSeeds are sown, eggs laid.\nHatching happens.\nJourneyman awakes.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/2_Submerged_fernando_feijoo.avif",
            ],
          },
          {
            slug: "secret-doorway",
            title: "3. Secret Doorway",
            description:
              "A barren landscape emerges from the ocean,\nBut there are secrets too.\nIn the island's aridity\nA doorway looms.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/3_Secret_doorway_fernando_feijoo.avif",
            ],
          },
          {
            slug: "labyrinth",
            title: "4. Labyrinth",
            description:
              "The webs of the labyrinth are impenetrable.\nBut in all the gloom,\nSunlight will always beam,\nIf we let it.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/4_Labyrinth_fernando_feijoo.avif",
            ],
          },
          {
            slug: "confusion",
            title: "5. Confusion",
            description:
              "A time of confusion and mixed messages;\nBlinding, deafening, all meaning lost.\nLate in the day a moment of clarity:\nAn exit from the maelstrom.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/5_Confusion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "ascent",
            title: "7. Ascent",
            description:
              "Ravening monsters awake on earth\nReady to consume.\nBut from under the sea\nHope is hatched and launched.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/7_Ascent_fernando_feijoo.avif",
            ],
          },
          {
            slug: "departure",
            title: "9. Departure",
            description:
              "The fires burning on earth\nLaunch flames and debris into the air.\nRise, rise above,\nRide the airwaves to safety.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/9_Departure_fernando_feijoo.avif",
            ],
          },
          {
            slug: "eruption",
            title: "8. Eruption",
            description:
              "Trees support life,\nEven though dead themselves.\nTrees are the salvation for the future,\nBut time is running out.",
            printType: "Etching",
            price: "£125 (Complete set available for £750 of 10 prints)",
            printEdition: 30,
            size: "15 x 20 cm (Image size) / 28 x 38 cm (Paper size)",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/8_Eruption_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "the-curtain-rises",
        title: "The Curtain Rises",
        description:
          "The stage is set. The curtain rises on a convoluted tale. Each of the three narratives is played out for us to spectate and observe, reflect on and consider our own judgements.",
        works: [
          {
            slug: "the-curtain-rises",
            title: "The Curtain Rises",
            description:
              "The stage is set. The curtain rises on a convoluted tale. Each of the three narratives is played out for us to spectate and observe, reflect on and consider our own judgements.",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/curtainRises/The_curtain_rises_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "cracks-progress",
        title: "Crack's Progress",
        description:
          "A modern fable of dark morality, crime and corruption inspired by Hogarth's A Rake's Progress. Follows Crack and his faithful dog Spike through drugs, crime, prison, and Bedlam. 8 prints.",
        works: [
          {
            slug: "crack-could-get-by",
            title: "Crack Could Get By",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/1_crack_could_get_by_fernado_feijoo.avif",
            ],
          },
          {
            slug: "to-be-bad-he-became-bad",
            title: "Bad Bradley Dreams",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/2_to_be_bad_he_became_bad_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nice-girls-wouldnt-touch-him",
            title: "Nice Girls Wouldn't Touch Him",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/3_Nice_girls_wouldnt_touch_him_fernando_feijoo.avif",
            ],
          },
          {
            slug: "caught-crack",
            title: "Caught",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/4_Caught_fernando_feijoo.avif",
            ],
          },
          {
            slug: "crack-came-out",
            title: "Crack Came Out",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/5_Crack_came_out_fernando_feijoo.avif",
            ],
          },
          {
            slug: "crack-took-crack",
            title: "Crack Took Crack",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/6_Crack_took_crack_fernando_feijoo.avif",
            ],
          },
          {
            slug: "taken-a-life",
            title: "Taken a Life",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/7_taken_a_life_fernando_feijoo.avif",
            ],
          },
          {
            slug: "now-it-is-the-nightmare",
            title: "Now It Is the Nightmare",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/8_Now_it_is_the_nightmare_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "charlies-progress",
        title: "Charlie's Progress",
        description:
          "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life, exploitation, and eventual recovery. 8 prints.",
        works: [
          {
            slug: "conceived-in-summer-of-love",
            title: "Conceived in a Summer of Love",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/1_Conceived_in_a_summer_of_love_fernando_feijoo.avif",
            ],
          },
          {
            slug: "to-be-safe-in-the-city",
            title: "To Be Safe in the City",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/2_To_be_safe_in_the_city_fernando_feijoo.avif",
            ],
          },
          {
            slug: "wayward-women-working-the-web",
            title: "Wayward Women Working the Web",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/3_Wayward_Women_Working_the_web_fernando_feijoo.avif",
            ],
          },
          {
            slug: "raided-at-dawn",
            title: "Raided at Dawn",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/4_Caught_fernando_feijoo.avif",
            ],
          },
          {
            slug: "to-pay-her-debt",
            title: "To Pay Her Debt",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/5_To_pay_her_debt_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tara-came-in-graduation-gown",
            title: "Tara Came in Graduation Gown",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/6_Tara_came_in_graduation_gown_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nearly-died",
            title: "Nearly Died",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/7_Nearly_Died_fernando_feijoo.avif",
            ],
          },
          {
            slug: "bad-bawdy-drams",
            title: "Badly Bradley Dreams",
            description:
              "Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/8_Bad_bawdy_drams_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "modern-marriage",
        title: "Modern Marriage",
        description:
          "Inspired by Hogarth's Marriage a la Mode. Follows the youngest sister of Crack and Charlie through a modern tale of marriage, status, and moral corruption. 8 prints.",
        works: [
          {
            slug: "youngest-sister",
            title: "Younger Sister to Crack and Charlie",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/1_youngest_sister_of_crack_and_charlie_fernando_feijoo.avif",
            ],
          },
          {
            slug: "at-the-back-end-of-town",
            title: "At the Back End of Town",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/2_at_the_back_end_of_town_fernando_feijoo.avif",
            ],
          },
          {
            slug: "conceived-a-child",
            title: "Conceived a Child",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/3_conceived_a_child_fernando_feijoo.avif",
            ],
          },
          {
            slug: "young-wayne-became-wayward",
            title: "Young Wayne Became Wayward",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/4_young_wayne_became_wayward_fernando_feijoo.avif",
            ],
          },
          {
            slug: "behind-the-scenes",
            title: "Behind the Scenes",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/5_behind_the_scenes_fernando_feijoo.avif",
            ],
          },
          {
            slug: "the-river-rats",
            title: "The River Rats",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/6_the_river_rats_fernando_feijoo.avif",
            ],
          },
          {
            slug: "walking-the-line-into-oblivion",
            title: "Walking the Line into Oblivion",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/7_walking_the_line_into_oblivion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "protecting-a-new-generation",
            title: "Protecting a New Generation",
            description: "",
            printType: "Linocut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/8_protecting_a_new_generation_fernando_feijoo.avif",
            ],
          },
        ],
      },
            {
        slug: "watch-and-bewitched",
        title: "Watch & Bewitched",
        description:
          "In theatres, halls and streets a stage is set. Performers transform into characters who tell their tales. The audience become entranced: a spell is cast. Roles can be reversed.",
        works: [
          {
            slug: "rumble-in-the-jungle",
            title: "Rumble in the Jungle",
            description:
              "The procession passes.\nThe procession pauses.\nLeaves tremble, people quiver.\nThe procession passes.",
            printType: "Linocut",
            printEdition: 30,
            size: "56 x 76 cm",
            price: "£325",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rumble_in_the_Jungle_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "carrera-de-san-fermin",
            title: "Carrera de San Fermín",
            description:
              "The bull runs, streets full of tourists turn to streets full of terror as the bulls charge the men who dare to defy these furious beasts. Commentators, safe behind the barriers, use inflammatory language; crowds, cowering behind each other, yell encouragement or disparagement.\nThe bulls are the heroes in this barbaric spectacle.",
            printType: "Reduction Linocut",
            printEdition: 10,
            size: "30 x 20 cm",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Carrera_de_san_fermin__fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-1",
            title: "Knock Out 1",
            description:
              "Fight as a game.\nFight for life.\nOn guard, guard down.\nLunge forward, fall back.\nKnocked out, a symbol of life.",
            printType: "Colour Wood Cut — variable colours",
            printEdition: 30,
            size: "80 x 60 cm",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock-out_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-2",
            title: "Knock Out 2",
            description:
              "Fight as a game.\nFight for life.\nOn guard, guard down.\nLunge forward, fall back.\nKnocked out, a symbol of life.",
            printType: "Wood Cut",
            printEdition: 30,
            size: "60 x 40 cm",
            price: "£100",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock_out_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-3",
            title: "Knock Out 3",
            description:
              "Fight as a game.\nFight for life.\nOn guard, guard down.\nLunge forward, fall back.\nKnocked out, a symbol of life.",
            printType: "Linocut — variable colours",
            printEdition: 10,
            size: "30 x 620 cm",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Knock_Out_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "pamplona",
            title: "Pamplona",
            description:
              "The bull runs, streets full of tourists turn to streets full of terror as the bulls charge the men who dare to defy these furious beasts. Commentators, safe behind the barriers, use inflammatory language; crowds, cowering behind each other, yell encouragement or disparagement.\nThe bulls are the heroes in this barbaric spectacle.",
            printType: "Etching",
            printEdition: 50,
            size: "30 x 40 cm",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Pamplona_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-1",
            title: "Role Reversal 1",
            description:
              "The roles have been switched.\nThe hunter becomes poacher.\nThe crowd roars, blood spills.\nThe triumphant stand defiantly.\nWho is laughing now?",
            printType: "Screenprint",
            printEdition: 10,
            size: "60 x 80 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-2",
            title: "Role Reversal 2",
            description:
              "The roles have been switched.\nThe hunter becomes poacher.\nThe crowd roars, blood spills.\nThe triumphant stand defiantly.\nWho is laughing now?",
            printType: "Screenprint",
            printEdition: 10,
            size: "60 x 80 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-3",
            title: "Role Reversal 3",
            description:
              "The roles have been switched.\nThe hunter becomes poacher.\nThe crowd roars, blood spills.\nThe triumphant stand defiantly.\nWho is laughing now?",
            printType: "Screenprint",
            printEdition: 10,
            size: "60 x 80 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "rudos-vs-tecnicos",
            title: "Rudos Vs Técnicos",
            description:
              "Step into the arena, the fight is on, the crowd is roaring, but only one winner will stand triumphant and victorious. The identity of each fighter is masked. Superheroes battle amongst themselves. The crowd below beckons. Strength and power are on display as the magical minotaur steps into the arena to command supremacy over all that stand in his path.",
            printType: "Stone Lithograph",
            printEdition: 10,
            size: "40 x 50 cm",
            price: "£195",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rudos_Vs_Tecnicos_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-run-run",
            title: "Run Run Run",
            description:
              "The bull runs, streets full of tourists turn to streets full of terror as the bulls charge the men who dare to defy these furious beasts. Commentators, safe behind the barriers, use inflammatory language; crowds, cowering behind each other, yell encouragement or disparagement.\nThe bulls are the heroes in this barbaric spectacle.",
            printType: "Etching",
            printEdition: 30,
            size: "60 x 20 cm",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/watchBewitched/run-run-run_fernando_feijoo.avif",
            ],
          },
          {
            slug: "take-down",
            title: "Take-Down",
            description:
              "Fight as a game.\nFight for life.\nOn guard, guard down.\nLunge forward, fall back.\nKnocked out, a symbol of life.",
            printType: "Etching",
            printEdition: 30,
            size: "20 x 15 cm",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Take-Down_fernando_feijoo.avif",
            ],
          },
          {
            slug: "temptation",
            title: "Temptation",
            description:
              "The lustful Catrina bewitches the viewers, drawing them in with her powerful gaze.\nShe symbolises life and death, but which path will she choose for you?",
            printType: "Linocut",
            printEdition: 30,
            size: "30 x 40 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Temptation_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tolerance",
            title: "Tolerance",
            description:
              "The triumphant Skeleton entertains his spectators as he pours out his magic potion which represents strength and power. Will you dare to sample this deadly drink and play the game of life and death?",
            printType: "Linocut",
            printEdition: 30,
            size: "30 x 40 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Tollerance_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tomatina",
            title: "Tomatina",
            description:
              "The big trucks roll along the bumpy cobbled roads down into the village of Bunol near Valencia. There are no spectators in this festival, everyone is a participant.\nTake aim and fire.\nSwish, swash, slop – the target is hit. Now it is time to duck and hide.\nTrucks roll out, water hoses come out to spray everything down, and then the party begins.",
            printType: "Lithograph",
            printEdition: 30,
            size: "50 x 20 cm",
            price: "£95",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Tomatina_fernando_feijoo.avif",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ceramics",
    title: "Ceramics",
    works: [
      {
        slug: "afterlife",
        title: "Afterlife - stoneware vase",
        description:
          "Inspired by the Mexican Day of the Dead festival, this vase celebrates both life and death. Using a relief printing block the design was stamped into the surface and oxides added. Further hand painted skeletons, who act as gate keepers for the passageway to the afterlife, dance playfully around the sides of the vase.",
        printType: "Underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1500",
        imageUrls: [
          "@assets/works/ceramics/afterLife/afterlife.avif",
          "@assets/works/ceramics/afterLife/afterlife2.avif",
          "@assets/works/ceramics/afterLife/afterlife3.avif",
          "@assets/works/ceramics/afterLife/afterlife4.avif",
          "@assets/works/ceramics/afterLife/afterlife5.avif",
        ],
      },
      {
        slug: "bala-ceramic",
        title: "Bala - stoneware pot",
        description:
          "Formed and twisted,\nSpinning and raging,\nThe next terrible storm is named:\nAll that lays in its path will be destroyed,\nSucked up and spat out. This god is raging.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1500",
        imageUrls: [
          "@assets/works/ceramics/bala/bala1.avif",
          "@assets/works/ceramics/bala/bala2.avif",
          "@assets/works/ceramics/bala/bala3.avif",
        ],
      },
      {
        slug: "chaos",
        title: "Chaos - stoneware pot",
        description:
          "From chaos was the world created, but chaos still reigns. There was a void and there is still a void – forms are made and destroyed. As the pot turns, the world turns, and chaos is never ending.\n\nSwirling wind rages, sea levels rising: Chaos creates the earth.\nThe sun heats waves and winds, causing raging fires;\nThe moon's forces create ferocious tidal waves.\nMankind must learn that Gods can create the earth again and cleanse it of humans.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1000",
        imageUrls: [
          "@assets/works/ceramics/chaos/chaos.avif",
          "@assets/works/ceramics/chaos/chaos2.avif",
          "@assets/works/ceramics/chaos/chaos3.avif",
        ],
      },
      {
        slug: "lockdown",
        title: "Lockdown - stoneware pot",
        description:
          "The narratives behind these locked-down and locked-in characters relate to a series of print works in the Persons and Personas section.\n\nThree characters incarcerated in the prisons of El Salvador. Each with a bitter story of violence and betrayal. Each with no hope of salvation due to the corruption of the state and poverty without end. Young men who will never go anywhere but hell. Their stories inscribed on their skin and in the clay.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1500",
        imageUrls: [
          "@assets/works/ceramics/lockdown/lockdown.avif",
          "@assets/works/ceramics/lockdown/lockdown2.avif",
          "@assets/works/ceramics/lockdown/lockdown3.avif",
        ],
      },
      {
        slug: "azrael",
        title: "Azrael - stoneware plate",
        description:
          "Linking into the Inferno series the character is explored through a different medium and is set in stone, with feet in clay, forever plaguing the consumer – infiltrating their lives and their meals!\nHe is the angel of death\nKeeper of fire and punisher of all.\nFlames will rise, ashes will fall\nNone will forget that great name over all.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "25 x 25 x 5 cm (W x D x H)",
        price: "£800",
        imageUrls: ["@assets/works/ceramics/azrael/azrael.avif"],
      },
      {
        slug: "burn-in-hell",
        title: "Burn in Hell - stoneware bowl",
        description:
          "Linking closely with the Inferno prints, the circular theme finds its natural home in the bowl, as figures chase and transform endlessly.\n\nWitches bathe in boiling water,\nSins cannot be forgotten.\nBathing with beautiful women who turn into witches,\nThe guardians won't allow the trapped souls to escape.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1200",
        imageUrls: [
          "@assets/works/ceramics/burnInHell/burnInHell.avif",
          "@assets/works/ceramics/burnInHell/burnInHell2.avif",
        ],
      },
      {
        slug: "medusa-ceramic",
        title: "Medusa - stoneware plate",
        description:
          "Referencing the act of eating off the plate, and the dangers of what is eaten, and using the concept of the glaze, which casts and captures the consumer forever in Medusa's gaze.\n\nThe open mouths of the goddess and the snakes invite the consumer\nTo overeat and indulge in their cravings and greed.\nBut this is hell on a plate.\nStark warnings that could lead you to obesity,\nOr you will be eternally eaten and consumed by your gluttony.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1500",
        imageUrls: [
          "@assets/works/ceramics/medusa/medusaPlate.avif",
          "@assets/works/ceramics/medusa/medusaPlate2.avif",
        ],
      },
      {
        slug: "freedom",
        title: "Freedom - stoneware plate",
        description:
          "The war has ended.\nIt's now the time to rejoice!\nHostages released, prisoners exchanged;\nWounds still open, blood still flowing…\nPolitical leaders still deciding on impossible solutions.\nMemories will never fade.\nFreedom must prevail and the fight will go on.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/freedom.avif"],
      },
      {
        slug: "fish-car",
        title: "Fish Car - stoneware tile",
        description:
          "A playful take on the superpowers and their ideas of genetic manipulation to create super beings.\n\nNature and machine produce a mix of distortions.\nA hybrid that has unknown powers or weaknesses.\nA fish car can't run or swim and is pegged down in a tile.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/fishCar.avif"],
      },
      {
        slug: "los-tres-amigos-ceramic",
        title: "Superpowers - stoneware pot",
        description:
          "The superpowers' fights are just big versions of spats everywhere – each wanting to be top:\nNever mind the cost to anyone else.\n\nSocial media, fake news, political rallies…\nListen to me, He said that, He will not do that,\nBut he will.\nWho will push the red button first?",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£800",
        imageUrls: [
          "@assets/works/ceramics/losTresAmigos/www1.avif",
          "@assets/works/ceramics/losTresAmigos/www2.avif",
          "@assets/works/ceramics/losTresAmigos/www3.avif",
        ],
      },
      {
        slug: "rocket-man",
        title: "Rocket Man - stoneware pot",
        description:
          "The Rocketman circles the pot as he might circle the earth – but he never arrives, so the bombs eternally rain down on the world below.\n\nThe bombs on Hiroshima must never be forgotten:\nBuildings and bodies and souls erased.\nDust, dangerous dust.\nAn act of war then,\nBut now the threats are the egos of superpowers.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1000",
        imageUrls: [
          "@assets/works/ceramics/rocketMan/rocketMan.avif",
          "@assets/works/ceramics/rocketMan/rocketMan2.avif",
          "@assets/works/ceramics/rocketMan/rocketMan3.avif",
        ],
      },
      {
        slug: "safe-passage",
        title: "Safe Passage - stoneware pot",
        description:
          "The rivers run slow, bubbling and smouldering:\nHot lava scalds the stricken souls as they drown in the flow.\nThe ferry man will guide you, giving safe passage to the other side.\nOnwards you must venture, through the darkness:\nDescend to the next layer – closer and closer to hell.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm (W x D x H)",
        price: "£1500",
        imageUrls: [
          "@assets/works/ceramics/safePassage/safePassage.avif",
          "@assets/works/ceramics/safePassage/safePassage2.avif",
          "@assets/works/ceramics/safePassage/safePassage3.avif",
        ],
      },
    ],
  },
  {
    slug: "sketchbooks",
    title: "Sketchbooks",
    collections: [
      {
        slug: "characters",
        title: "Characters",
        description:
          "Studies of human figures and personalities encountered in everyday life.",
        works: [
          {
            slug: "alfredo",
            title: "Alfredo",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Alfredo.avif"],
          },
          {
            slug: "amor",
            title: "Amor",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Amor.avif"],
          },
          {
            slug: "characters-2",
            title: "Characters 2",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Characters-2.avif",
            ],
          },
          {
            slug: "characters",
            title: "Characters",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Characters.avif"],
          },
          {
            slug: "circus",
            title: "circus",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/circus.avif"],
          },
          {
            slug: "claude",
            title: "Claude",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Claude.avif"],
          },
          {
            slug: "dressing-room",
            title: "Dressing room",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Dressing room.avif",
            ],
          },
          {
            slug: "fiesta",
            title: "Fiesta",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Fiesta.avif"],
          },
          {
            slug: "homeless-fernando-feijoo",
            title: "homeless fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/homeless_fernando_feijoo.avif",
            ],
          },
          {
            slug: "homeless-man-2-fernando-feijoo",
            title: "homeless man 2 fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/homeless_man_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "los-tres-amigos",
            title: "los tres amigos",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/los_tres_amigos.avif",
            ],
          },
          {
            slug: "morning-coffee",
            title: "Morning Coffee",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Morning Coffee.avif",
            ],
          },
          {
            slug: "mutton-dressed-as-lamb",
            title: "mutton dressed as lamb",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/characters/mutton dressed as lamb.avif",
            ],
          },
          {
            slug: "pedro",
            title: "Pedro",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Pedro.avif"],
          },
          {
            slug: "puppets",
            title: "Puppets",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/Puppets.avif"],
          },
          {
            slug: "redemption-fernando-feijoo",
            title: "redemption fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/redemption_fernando_feijoo.avif",
            ],
          },
          {
            slug: "semana-santa",
            title: "Semana Santa",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Semana Santa.avif",
            ],
          },
          {
            slug: "street-performers",
            title: "Street performers",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Street performers.avif",
            ],
          },
          {
            slug: "the-debate",
            title: "The debate",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/The debate.avif"],
          },
          {
            slug: "two-beggers",
            title: "Two beggers",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Two beggers.avif",
            ],
          },
          {
            slug: "virgin-of-anguish",
            title: "Virgin of Anguish",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Virgin of Anguish.avif",
            ],
          },
          {
            slug: "witches",
            title: "witches",
            description: "Character study from sketchbook.",
            printType: "Ink and graphite",
            imageUrls: ["@assets/works/sketchbooks/characters/witches.avif"],
          },
          {
            slug: "circus-loc",
            title: "circus",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/circus.avif"],
          },
          {
            slug: "repent-loc",
            title: "repent",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/repent.avif"],
          },
          {
            slug: "characterdesign-loc",
            title: "character Design",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/characterDesign.avif"],
          },
        ],
      },
      {
        slug: "architecture",
        title: "Architecture",
        description: "Architectural and landscape studies from various places.",
        works: [
          {
            slug: "alc-zar-de-los-reyes-cristianos-cordoba",
            title: "Alcázar de los Reyes Cristianos Cordoba",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Alcázar de los Reyes Cristianos Cordoba.avif",
            ],
          },
          {
            slug: "architectural-study-of-facade-in-malaga",
            title: "Architectural study of facade in Malaga",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Architectural study of facade in Malaga.avif",
            ],
          },
          {
            slug: "back-street-porto",
            title: "back street Porto",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/back street Porto.avif",
            ],
          },
          {
            slug: "castell-de-ferro-granada",
            title: "castell de ferro Granada",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/castell de ferro Granada.avif",
            ],
          },
          {
            slug: "cromer-pier-and-hotel-de-paris",
            title: "cromer Pier and Hotel de Paris",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/cromer Pier and Hotel de Paris.avif",
            ],
          },
          {
            slug: "cromer-pier",
            title: "cromer Pier",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/locations/cromer Pier.avif"],
          },
          {
            slug: "malaga-botanical-gardens",
            title: "malaga botanical gardens",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/malaga botanical gardens.avif",
            ],
          },
          {
            slug: "norte-y-sur-bar-cordoba",
            title: "Norte y Sur bar Cordoba",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Norte y Sur bar Cordoba.avif",
            ],
          },
          {
            slug: "outside-the-red-lion-cromer",
            title: "outside the Red Lion Cromer",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/outside the Red Lion Cromer.avif",
            ],
          },
          {
            slug: "playa-fernando-feijoo",
            title: "Playa fernando feijoo",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Playa_fernando_feijoo.avif",
            ],
          },
          {
            slug: "reims-cathedral-france",
            title: "Reims cathedral France",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Reims cathedral France.avif",
            ],
          },
          {
            slug: "rouen-cathedral",
            title: "Rouen cathedral",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Rouen cathedral.avif",
            ],
          },
          {
            slug: "the-red-house-cromer",
            title: "The Red house Cromer",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/The Red house Cromer.avif",
            ],
          },
          {
            slug: "toledo",
            title: "Toledo",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/locations/Toledo.avif"],
          },
          {
            slug: "watching-the-waves",
            title: "watching the waves",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            imageUrls: [
              "@assets/works/sketchbooks/locations/watching the waves.avif",
            ],
          },
        ],
      },
      {
        slug: "locations",
        title: "Locations",
        description: "Various sketchbook studies and explorations.",
        works: [
          {
            slug: "botanicalgardenmalaga",
            title: "botanical Garden Malaga",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/botanicalGardenMalaga.avif"],
          },
          {
            slug: "cadaques",
            title: "cadaques",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/cadaques.avif"],
          },
          {
            slug: "casteldeferro",
            title: "castel De Ferro",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/castelDeFerro.avif"],
          },
          {
            slug: "malaga",
            title: "malaga",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/malaga.avif"],
          },
          {
            slug: "playa",
            title: "playa",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/playa.avif"],
          },
          {
            slug: "viewintothedistance",
            title: "view Into The Distance",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            imageUrls: ["@assets/works/sketchbooks/viewIntoTheDistance.avif"],
          },
        ],
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
          "An alphabet book of modern-day street characters with text by Pat Francis. A savage portrayal of the city, depicting victims and perpetrators, horror and humour.",
        works: [
          {
            slug: "contemporary-street-alphabet-1",
            title: "Contemporary Street Alphabet",
            description:
              "An alphabet book of modern-day street characters within the city with text by Pat Francis. Inspired by some of the biting satires from history but conceived during the early years of the new millennium, this quite savage portrayal of the streets of our cities, depicts both sad and exploited victims, as well as their perpetrators. The cartoonish stereotypes and characters are presented through the form of an alphabet with crude texts reflecting the horror and humour of the metropolis.",
            printType: "Offset lithograph & Letterpress",
            printEdition: 50,
            size: "32 pages, 250 x 200 x 30 mm, hardback cover",
            price: "£150",
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
          "Two tales in one book. Crack's Progress: A modern fable based on Hogarth's A Rake's Progress; a tale of drugs, crime, prison, and Bedlam. Charlie's Progress: Based on Hogarth's A Harlot's Progress; follows Crack's sister Charlie through London's low life, exploitation, and eventual recovery.",
        works: [
          {
            slug: "crack-progress-charlies-progress-1",
            title: "Crack Progress & Charlie's Progress",
            description:
              "Crack's Progress: Loosely based on Hogarth's A Rake's Progress this is a modern fable of dark morality and crime and corruption. Crack, with his faithful dog Spike, fight and bite and deal in drugs. Using contemporary slang and rap rhythms the tale is told of the descent into the grim underbelly of society with the use and abuse of women as well as substances, but finally Crack is caught. He is convicted in a trial scene, depicted in the strong fourth frame. He comes out of prison further corrupted and continues but is finally driven crazy by his drug habit and he kills. He is sent to Bedlam (with more than a nod to Hogarth) and, in the final frame, a mad Crack appears to die. But the final Full stop is not the end.\n\nCharlie's Progress: This second tale is inspired by Hogarth's A Harlot's progress. Charlie, Crack's sister, is more rooted in the family background as the opening scene shows the 'faux' nouveau riche mansion of her father. Her trip to London reveals the dark low life of London with drugs and violence as the norm. The corruption at the top of society is lampooned, but the victim is Charlie and also her younger sister Tara. Both girls are viciously exploited by their aunt – seen as like a black widow spider. Charlie recovers, painfully, from her addiction and seeks help from her brother Crack, in the final open-ended scenes.",
            printType: "Offset lithograph from scaled down original linocuts",
            printEdition: 50,
            size: "20 pages, 250 x 250 x 30 mm, hardback cover dos a dos artist book",
            price: "£125",
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
          "Created in a time of great uncertainty. Parallels seen between superpowers (Kim Jong-un, Trump, Putin). Themes: Nuclear threat, greed, power corruption, and global communication manipulation. 'The Future is now.'",
        works: [
          {
            slug: "future-1",
            title: "Future",
            description:
              "Created in a time of great uncertainty there is an unease which pervades all areas of society. With the world's superpowers challenging each other and strutting like boxers in a heavy weight contest, parallels are seen between Kim Jong-un and Trump and Putin. Who will nuke the world first? Who uses nerve agents to poison one man, while potentially many are caught in the collateral? Greed dominates: power corrupts. Myths are referenced – who is burnt by flying too close to the sun? Global communication systems spread knowledge or fakery, rumour or subversion. The artist makes cultural nods to David Bowie and others and shows that popular music, which pervades every nation, is manipulated to mesmerize the populations of the world. With chilling resonances, this work reflects the times we live in, whenever that is, and whatever little details may appear to change. The Future is now.",
            printType: "Linocut, Letterpress, and collage",
            price: "£750",
            imageUrls: [
              "@assets/works/artistBooks/future/1.avif",
              "@assets/works/artistBooks/future/2.avif",
              "@assets/works/artistBooks/future/3.avif",
              "@assets/works/artistBooks/future/4.avif",
              "@assets/works/artistBooks/future/5.avif",
              "@assets/works/artistBooks/future/6.avif",
            ],
            printEdition: 15,
            size: "24 pp, 275 x 380 x 16 mm, hardback cover",
          },
        ],
      },
      {
        slug: "gods-monsters-book",
        title: "Gods & Monsters Book",
        description:
          "A large format alphabet book illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld. Inspired by Ovid’s Metamorphosis, Greek Mythology and childhood memories. Themes include the fusion of villain and hero (Picasso’s Minotaur), the passage of life, and good versus evil.",
        works: [
          {
            slug: "gods-monsters-book-1",
            title: "Gods & Monsters Book",
            description:
              "A large format alphabet book illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld.\n\nThe works were inspired from a number of sources including Tales from Ovid's Metamorphosis, Greek Mythology and childhood memories or these surreal narratives and the fantasies they created in my own mind.\n\nEach character blends the ancient and the modern as well as stimuli from other artists' interpretations. Picasso's Minotaur motivated the fusion of villain and hero which is a connecting theme running throughout several of the prints.\n\nFurther themes are explored including the passage of life with lovers rising to the heavens and demons dragging sinners deep into the depths of hell. The creation of the universe by the powerful Gods is represented through a narrative series of black and white prints which illustrate good versus evil. A combination of lino and wood cut printing techniques complement one another giving rich textural patterns and expressive mark making creating powerful visual imagery.",
            printType: "Linocut, wood block & Letterpress",
            price: "£1500",
            imageUrls: [
              "@assets/works/artistBooks/godsMonsters/1.avif",
              "@assets/works/artistBooks/godsMonsters/2.avif",
              "@assets/works/artistBooks/godsMonsters/3.avif",
              "@assets/works/artistBooks/godsMonsters/4.avif",
              "@assets/works/artistBooks/godsMonsters/5.avif",
              "@assets/works/artistBooks/godsMonsters/6.avif",
            ],
            printEdition: 10,
            size: "32 pp, 570 x 370 x 38 mm, hardback cover concertina book",
          },
        ],
      },
      {
        slug: "modern-marriage",
        title: "Modern Marriage",
        description:
          "Interweaves the 'Progress' stories. Tara (rich) and Darren (nouveau riche) marry. Themes: Debt, crime, neglect (their child Wayne), and ultimate tragedy followed by redemption through siblings Crack and Charlie.",
        works: [
          {
            slug: "modern-marriage-1",
            title: "Modern Marriage",
            description:
              "Modern Marriage had a longer evolution and proved more complex to interpret for a contemporary audience – even the title creating difficulties in how it would relate to 'progress' and to modern marriage patterns.\n\nIn scene one the viewer is introduced to Tara, a spoilt brat, who poses with her horse, as her father's business empire is threatened and a luxury car is towed away. In contrast, scene two is set in the back end of the city where Den and his son Darren exist. But while Den thrives through a range of nefarious activities, he needs money laundering contacts and friends in the higher rungs of society. Darren is a waste of space. The two fathers come up with a deal and marry off the two youngsters. Thus 'real rich' meets 'nouveau riche': the eternal devil's knot.\n\nIn scene four young Wayne is neglected and sees sights of crime and horror, exemplified by the illegal dog fight. Darren gets into horrendous debt and from the bottom of the pit to which he has sunk sells his wife and son into pornography. But even this deal goes bad and he is murdered. Shocked into consciousness and blaming herself Tara decides to end her own life and that of her wayward son. But their fall is caught by Tara's older brother and sister, Crack and Charlie. There are some signs that there may be redemption for all at last.",
            printType: "Offset lithograph & Letterpress",
            price: "£75",
            imageUrls: [
              "@assets/works/artistBooks/modernMarriage/1.avif",
              "@assets/works/artistBooks/modernMarriage/2.avif",
              "@assets/works/artistBooks/modernMarriage/3.avif",
              "@assets/works/artistBooks/modernMarriage/4.avif",
            ],
            printEdition: 50,
            size: "62 pp, 230 x 163 x 13 mm, hardback cover with screen printed band",
          },
        ],
      },
      {
        slug: "run-book",
        title: "Run Book",
        description:
          "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
        works: [
          {
            slug: "run-book-1",
            title: "Run Book",
            description:
              "RUN is an exploration of the sayings and expressions inspired by contemporary life. Machines are taking over and we are being run by them. With minds of their own and with features strangely like ours, with their big eyes, sharp teeth and weird distorted humour, we can see glimpses of how the media runs the news, how politicians run and ruin lives, and how fake news runs away with the facts. Steroid fuelled rockets power their way, running through lives, and sending the humans running for cover. Corruption runs through every vein and artery. Big bosses manipulate the workforce. Deception rules: rulers run riot. So, who controls who? Who is running the show?",
            printType: "Linocut, Letterpress, and collage",
            price: "£999",
            imageUrls: [
              "@assets/works/artistBooks/run/1.avif",
              "@assets/works/artistBooks/run/2.avif",
              "@assets/works/artistBooks/run/3.avif",
              "@assets/works/artistBooks/run/4.avif",
              "@assets/works/artistBooks/run/5.avif",
              "@assets/works/artistBooks/run/6.avif",
            ],
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm, ½ bound hardback cover",
          },
        ],
      },
      {
        slug: "the-journey-man-book",
        title: "The Journey Man Book",
        description:
          "Inspired by a surreal dream and the universal idea of the journeyman. The labyrinth represents the twists and turns of modern life. Symbols include the jellyfish (rescue/care) and the dream catcher. Themes: life's excitements, fears and dangers. A story that does not end: it evolves with the times.",
        works: [
          {
            slug: "the-journey-man-book-1",
            title: "The Journey Man Book",
            description:
              "Journeyman was inspired by a surreal dream many years ago. With references to the artist's own experiences, but also in the spirit of the universal idea of the journeyman, it nods to everyman, every person. The labyrinth represents the twists and turns and blind alleys of modern life and reflects our confusion and despairs at decisions to be made, paths to take.\n\nChoices made are in our power, but we can fall foul of authorities, beliefs, expectations and desires. With poignant use of symbolism, the jelly fish has babies and these both rescue, and are cared for by the journeyman. There is love and there are safety nets and the journeyman is like a dream catcher: but there is also the dominant theme of life's excitements, fears and dangers. A story that does not end: it evolves with whatever the times we live in.",
            printType: "Etching & Letterpress",
            printEdition: 15,
            size: "12 pages, 188 x 253 x 24 mm, hardback cover concertina book",
            price: "£800",
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
    collections: [
      {
        slug: "drawings",
        title: "Drawings",
        description: "",
        works: [
          {
            slug: "pagannini",
            title: "Pagannini",
            description:
              "This piece was inspired from the Labyrinth of Dreams project and shows the spectacular finale performance in the grand theatre. All the monsters and players have come to see her sing one last song. Inspired by a visit to see the great Ara Malikian, the violin player, and painted collaboratively with Rafa Armero.",
            printType: "Painting onto the inside of a wooden wardrobe",
            size: "300 x 200 cm",
            price: "NFS",
            imageUrls: ["@assets/works/mixed/drawings/pagannini.avif"],
          },
        ],
      },
      {
        slug: "labyrinth-of-dreams",
        title: "Labyrinth of Dreams",
        description:
          "This collaborative project was made with Rafa Armero in response to a series of short stories which explore a lost man trying to find himself in a surreal world surrounded by chickens, monsters, hunters, and demons. Alternating between split personalities, decisions are made which have future consequences. As the moon emerges his darker inner desires and fantasies are played out in reality as he wanders through the labyrinthine streets of the deeply dark city.",
        works: [
          {
            slug: "arrogance",
            title: "Arrogance",
            description:
              "Lurking the streets at night,\nTwitching urges take over his mind.\nWho will be his next victim?\nOr will the hunter become the hunted?",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/arrogance.avif"],
          },
          {
            slug: "condemnation",
            title: "Condemnation",
            description:
              "Judgment day:\nCrimes committed, blood spilt, bodies discarded:\nDown comes the hammer:\nSentenced: bang goes the trap door.\nSnap go the bones in his neck.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/condemnation.avif",
            ],
          },
          {
            slug: "creation",
            title: "Creation",
            description:
              "Navigating high above in the midnight sky\nStars are within a hand's reach,\nCatching the dreams as they float on high.\nReady to deliver nightmares to the next victims.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/creation.avif"],
          },
          {
            slug: "evasion",
            title: "Evasion",
            description:
              "Time to leave…\nBut no time to go. Nowhere to go…\nRumbling, rushing, roaring towards him…\nHis time has past…",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/evasion.avif"],
          },
          {
            slug: "greed",
            title: "Greed",
            description:
              "They came to dine: smart and strutted,\nLike a bunch of festering swine.\nStuffed their faces, gulped the wine.\nSoon to stop: necks on the block\nChip, chap, CHOP.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/greed.avif"],
          },
          {
            slug: "hunter",
            title: "Hunter",
            description:
              "Trophies in a row,\nMemories of those swine:\nHow they laughed at him!\nWho's laughing now?",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/hunter.avif"],
          },
          {
            slug: "illumination",
            title: "Illumination",
            description:
              "Flickering lightbulb,\nA spotlight floods the mirror.\nA searchlight reveals\nWhat is looking at him.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/ilumination.avif",
            ],
          },
          {
            slug: "lost",
            title: "Lost",
            description:
              "Standing triumphant,\nVictorious and proud.\nNow ruler of the world\nYou all will listen.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/lost.avif"],
          },
          {
            slug: "obsession",
            title: "Obsession",
            description:
              "Down the back alleys stumbling.\nSquawking and screaming,\nScarpering and screeching.\nBlade scything, wings flapping.\nBlood...",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/obssesion.avif"],
          },
          {
            slug: "persuasion",
            title: "Persuasion",
            description:
              "Coin drops: eyes light up.\nThe future is you; now you must make it.\nDecisions to be made.\nBut what to believe?",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/persuasion.avif",
            ],
          },
          {
            slug: "reality",
            title: "Reality",
            description:
              "Clothes or hats to consider\nWhat to wear?\nBut in the mirror\nThe soul's laid bare.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/reality.avif"],
          },
          {
            slug: "the-final-bow",
            title: "The Final Bow",
            description:
              "The grand finale.\nThe spotlight focuses.\nThe audience can see\nThe bare bones of truth\nAt last.",
            printType: "Painting, Indian inks & collage",
            size: "40 x 30 cm",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/theFinalBow.avif",
            ],
          },
        ],
      },
      {
        slug: "collage",
        title: "Collage",
        description: "",
        works: [
          {
            slug: "cadaques-church-spain",
            title: "Cadaques Church Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: [
              "@assets/works/mixed/others/Cadaques Church Spain.avif",
            ],
          },
          {
            slug: "castel-de-ferro-spain",
            title: "Castel de Ferro Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: [
              "@assets/works/mixed/others/Castel_de_Ferro_Spain.avif",
            ],
          },
          {
            slug: "castel-de-ferro-beach",
            title: "Castel de Ferro beach",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: [
              "@assets/works/mixed/others/Castel_de_Ferro_beach.avif",
            ],
          },
          {
            slug: "cruzcampo",
            title: "Cruzcampo",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: ["@assets/works/mixed/others/Cruzcampo.avif"],
          },
          {
            slug: "malaga-port",
            title: "Malaga Port",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: ["@assets/works/mixed/others/Malaga_Port.avif"],
          },
          {
            slug: "old-cinema-malaga",
            title: "Old Cinema Malaga",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: ["@assets/works/mixed/others/Old_Cinema_Malaga.avif"],
          },
          {
            slug: "plaza-de-la-corredera-cordoba-spain",
            title: "Plaza de la Corredera, Cordoba Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: [
              "@assets/works/mixed/others/Plaza_de_la_Corredera,_Cordoba_Spain.avif",
            ],
          },
          {
            slug: "view-into-the-distance-mixed",
            title: "viewIntoTheDistance",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: ["@assets/works/mixed/others/viewIntoTheDistance.avif"],
          },
          {
            slug: "waves",
            title: "waves",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            imageUrls: ["@assets/works/mixed/others/waves.avif"],
          },
        ],
      },
      {
        slug: "paintings",
        title: "Paintings",
        description: "",
        works: [
          {
            slug: "luchador",
            title: "Luchador",
            description:
              "This collaborative street art piece was produced with Pilar Munoz at La Curtiduría in Oaxaca, Mexico, whilst attending an artist residency at the studio. Reflections on the culture and life in Mexico and Lucha Libre tournaments influenced the production of this piece of work.",
            printType: "Painting and collage",
            size: "5 x 4 meters",
            imageUrls: ["@assets/works/mixed/paintings/luchador.avif"],
          },
          {
            slug: "putagallina",
            title: "Puta Gallina",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "NFS",
            imageUrls: ["@assets/works/mixed/paintings/putaGallina.avif"],
          },
        ],
      },
      {
        slug: "the-war-theatre",
        title: "The War Theatre",
        description:
          "This piece is a unique exploration of the idea of who is the audience, and who is the performance for?",
        works: [
          {
            slug: "the-war-theatre-1",
            title: "Theatre of War",
            description:
              "This piece is a unique exploration of the idea of who is the audience, and who is the performance for? The concept of cutting elements from a two dimensional set of four prints which pan downwards into the depths of hell, to a three dimensional theatre set, produces different questions, differing perspectives and raises, as all live performances do, dialogues between performer and viewer. Nothing is static, just as the topics raised here, are not. But overarching all is the frightening theme of Big Brother looming over us, pulling strings and wielding power and control which seem to be taken out of our hands. However, an audience/viewer are not passive: they can, and must, react.",
            printType: "Linocut prints & card",
            size: "60 x 55 x 45 cm (W x H x D)",
            price: "£2000",
            imageUrls: [
              "@assets/works/mixed/theWarTheatre/1.avif",
              "@assets/works/mixed/theWarTheatre/2.avif",
              "@assets/works/mixed/theWarTheatre/3.avif",
              "@assets/works/mixed/theWarTheatre/4.avif",
              "@assets/works/mixed/theWarTheatre/5.avif",
              "@assets/works/mixed/theWarTheatre/6.avif",
            ],
          },
        ],
      },
    ],
  },
];
