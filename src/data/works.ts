import type { Category, Collection, Work } from "@/types";

export type { Category, Collection, Work };

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
            slug: "busted",
            title: "Busted",
            description: "Locked in shackles and sent to the clink.",
            printType: "Reduction Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/busted.avif",
            ],
          },
          {
            slug: "after-hours",
            title: "Afterhours",
            description: "Too much to drink, rats come out to play.",
            printType: "Etching",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/afterHours.avif",
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
            printEdition: 30,
            size: "30 x 20 cm",
          },
          {
            slug: "angel-of-victory",
            title: "Angel of Victory",
            description:
              "A fighter, a carer inside a mask. True victory is caring for the carers.",
            printType: "Reduction Linocut",
            price: "£125",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
            printEdition: 10,
            size: "20 x 30 cm",
          },
          {
            slug: "early-hour-of-the-morning",
            title: "Early Hour of the Morning",
            description:
              "Underworld spreads its tentacles. Prisoners break out, judges play away.",
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
            title: "Getting Weighed",
            description:
              "Politicians and gangsters weighing up the odds on corrupted scales.",
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
            description: "One for the road. Corruption lurks in dark corners.",
            printType: "Reduction Linocut",
            price: "£175",
            imageUrls: ["@assets/works/prints/citizensWastrels/nightcap.avif"],
            printEdition: 10,
            size: "30 x 30 cm",
          },
          {
            slug: "selfmade-man",
            title: "Selfmade Man",
            description:
              "My word stands for all. Cross my path and there will be no more words.",
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
            description: "‘Work for bones’. The tramp watches the world go by.",
            printType: "Linocut",
            price: "£100",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/timeIsJustAnIllution.avif",
            ],
            printEdition: 30,
            size: "30 x 40 cm",
          },
          {
            slug: "contracter",
            title: "Contracter",
            description: "Step into the arena. One step too far.",
            printType: "Reduction Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/contracter.avif",
            ],
            printEdition: 30,
            size: "40 x 40 cm",
          },
          {
            slug: "driven",
            title: "Driven",
            description: "The engine fires. Point of no return.",
            printType: "Reduction Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/driven.avif",
            ],
            printEdition: 30,
            size: "40 x 40 cm",
          },
          {
            slug: "wacked",
            title: "Wacked",
            description: "Footsteps in darkness. Finger on the trigger. BANG.",
            printType: "Reduction Linocut",
            price: "£150 (Set £450)",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/wacked.avif",
            ],
            printEdition: 30,
            size: "40 x 40 cm",
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
        slug: "games&players",
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
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/aceOfDiamonds.avif",
            ],
          },
          {
            slug: "eight-of-diamonds",
            title: "Eight of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/eightOfDiamonds.avif",
            ],
          },
          {
            slug: "five-of-diamonds",
            title: "Five of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fiveOfDiamonds.avif",
            ],
          },
          {
            slug: "four-of-diamonds",
            title: "Four of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fourOfDiamonds.avif",
            ],
          },
          {
            slug: "nine-of-diamonds",
            title: "Nine of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/nineOfDiamonds.avif",
            ],
          },
          {
            slug: "jack-of-diamonds",
            title: "Jack of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£400",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/jackOfDiamonds.avif",
            ],
          },
          {
            slug: "king-of-diamonds",
            title: "King of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£450",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/kingOfDiamonds.avif",
            ],
          },
          {
            slug: "queen-of-diamonds",
            title: "Queen of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£425",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/queenOfDiamonds.avif",
            ],
          },
          {
            slug: "seven-of-diamonds",
            title: "Seven of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sevenOfDiamonds.avif",
            ],
          },
          {
            slug: "six-of-diamonds",
            title: "Six of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sixOfDiamonds.avif",
            ],
          },
          {
            slug: "three-of-diamonds",
            title: "Three of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/threeOfDiamonds.avif",
            ],
          },
          {
            slug: "two-of-diamonds",
            title: "Two of Diamonds",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/twoOfDiamonds.avif",
            ],
          },
          {
            slug: "joker1",
            title: "Joker 1",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£500",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker1.avif",
            ],
          },
          {
            slug: "joker2",
            title: "Joker 2",
            description:
              "Satirical portrayal of a corrupt 'royal' family (business magnate king, socialite, drop out heir) controlled by a joker.",
            printType: "Linocut, wood block & Letterpress",
            price: "£500",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker2.avif",
            ],
          },
        ],
      },
      {
        slug: "gods&monsters",
        title: "Gods & Monsters",
        description:
          "A large format alphabet book illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld. Inspired by Ovid’s Metamorphosis, Greek Mythology and childhood memories. Themes include the fusion of villain and hero (Picasso’s Minotaur), the passage of life, and good versus evil.",
        works: [
          {
            slug: "agni",
            title: "Agni",
            description: "",
            printType:
              "Linocut, wood block & Letterpress, hardback cover concertina book",
            price: "£995",
            imageUrls: ["@assets/works/prints/godsMonsters/agni.avif"],
            printEdition: 10,
            size: "32 pp, 570 x 370 x 38 mm",
          },
          {
            slug: "bala",
            title: "Bala",
            description: "",
            printType: "underglaze painting, oxides and clear glaze finish",
            price: "£1500",
            imageUrls: ["@assets/works/prints/godsMonsters/bala.avif"],
            size: "20 x 20 x 30 cm",
          },
          {
            slug: "cerbus",
            title: "Cerbus",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/cerbus.avif"],
          },
          {
            slug: "draco",
            title: "Draco",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/draco.avif"],
          },
          {
            slug: "europa",
            title: "Europa",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/europa.avif"],
          },
          {
            slug: "fenir",
            title: "Fenir",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/fenir.avif"],
          },
          {
            slug: "gala",
            title: "Gala",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/gala.avif"],
          },
          {
            slug: "hercules",
            title: "Hercules",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/hercules.avif"],
          },
          {
            slug: "icarus",
            title: "Icarus",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/icarus.avif"],
          },
          {
            slug: "janus",
            title: "Janus",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/janus.avif"],
          },
          {
            slug: "kraken",
            title: "Kraken",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/kraken.avif"],
          },
          {
            slug: "lucifer",
            title: "Lucifer",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/lucifer.avif"],
          },
          {
            slug: "medusa",
            title: "Medusa",
            description: "",
            printType: "underglaze painting, oxides and clear glaze finish",
            price: "£1500",
            imageUrls: ["@assets/works/prints/godsMonsters/medusa.avif"],
            size: "20 x 20 x 30 cm",
          },
          {
            slug: "neptune",
            title: "Neptune",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/neptune.avif"],
          },
          {
            slug: "odin",
            title: "Odin",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/odin.avif"],
          },
          {
            slug: "prometheus",
            title: "Prometheus",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/prometheus.avif"],
          },
          {
            slug: "quetzlcoatl",
            title: "Quetzlcoatl",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/quetzlcoatl.avif"],
          },
          {
            slug: "ra",
            title: "Ra",
            description: "",
            printType:
              "Offset lithograph from scaled down original linocuts, hardback cover dos a dos artist book",
            price: "£75",
            imageUrls: ["@assets/works/prints/godsMonsters/ra.avif"],
            printEdition: 50,
            size: "20 pages, 250 x 250 x 30 mm",
          },
          {
            slug: "shu",
            title: "Shu",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/shu.avif"],
          },
          {
            slug: "theseus",
            title: "Theseus",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/theseus.avif"],
          },
          {
            slug: "urania",
            title: "Urania",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/urania.avif"],
          },
          {
            slug: "volcan",
            title: "Volcan",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/volcan.avif"],
          },
          {
            slug: "walpurgis",
            title: "Walpurgis",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/walpurgis.avif"],
          },
          {
            slug: "xanthos",
            title: "Xanthos",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/xanthos.avif"],
          },
          {
            slug: "yggdrasil",
            title: "Yggdrasil",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
            imageUrls: ["@assets/works/prints/godsMonsters/yggdrasil.avif"],
          },
          {
            slug: "zephyr",
            title: "Zephyr",
            description: "",
            printType: "Linocut, wood block & Letterpress",
            price: "£600",
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
            slug: "night-terrors",
            title: "Night Terrors",
            description:
              "Guardian angel swoops down. No Mercy. Death stare of Azrael.",
            printType: "Wood engraving",
            price: "£150",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_fernando_feijoo.avif",
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
            title: "Hell is Empty",
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
            title: "Stewpot",
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
            title: "Swamp",
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
            title: "The War",
            description:
              "Stark reminder of turbulent times. Echoes German Expressionism. Imagery of underground tunnels. 'Who will have the nerve to push the red button?'",
            printType: "Quadriptych of Lino cuts",
            price: "£1000",
            imageUrls: ["@assets/works/prints/inferno/theWar.avif"],
            printEdition: 50,
            size: "Various (76x56 and 40x50 sheets)",
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
            size: "56 x 76 cm each",
          },
          {
            slug: "today",
            title: "Today",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£650",
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
            slug: "joaquin",
            title: "Joaquin",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Joaquin.avif"],
          },
          {
            slug: "emilio",
            title: "Emilio",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Emilio.avif",
              "@assets/works/prints/persons&Personas/EmilioColor.avif",
            ],
          },
          {
            slug: "enzo",
            title: "Enzo",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Enzo.avif"],
          },
          {
            slug: "hector",
            title: "Hector",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Hector.avif",
              "@assets/works/prints/persons&Personas/HectorColor.avif",
            ],
          },
          {
            slug: "lorenzo",
            title: "Lorenzo",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Lorenzo.avif",
              "@assets/works/prints/persons&Personas/LorenzoColor.avif",
            ],
          },
          {
            slug: "marcus",
            title: "Marcus",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Marcus.avif"],
          },
          {
            slug: "santiago",
            title: "Santiago",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Santiago.avif"],
          },
          {
            slug: "jose",
            title: "Jose",
            description:
              "Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add – as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Jose.avif"],
          },
          {
            slug: "siesta",
            title: "Siesta",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons&Personas/Siesta.avif"],
          },
          {
            slug: "step-into-the-arena",
            title: "Step into the arena",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: [
              "@assets/works/prints/persons&Personas/Step into the arena.avif",
            ],
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/revolution.avif"],
          },
          {
            slug: "search-and-destroy",
            title: "Search & Destroy",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/searchDestroy.avif"],
          },
          {
            slug: "10seconds",
            title: "10 Seconds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/10seconds.avif"],
          },
          {
            slug: "big-boss",
            title: "Big Boss",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/bigBoss.avif"],
          },
          {
            slug: "hilda",
            title: "Hilda",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/hilda.avif"],
          },
          {
            slug: "phoenix",
            title: "Phoenix",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/phoenix.avif"],
          },
          {
            slug: "rocketman",
            title: "Rocketman",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/rocketman.avif"],
          },
          {
            slug: "space-x",
            title: "Space X",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/spaceX.avif"],
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
            slug: "print-run",
            title: "Print Run",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/print_run_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-a-stitch",
            title: "Run a Stitch",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_a_stitch_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-out-of-money",
            title: "Run Out of Money",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_money_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-out-of-steam",
            title: "Run Out of Steam",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_steam_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-out-of-time",
            title: "Run Out of Time",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_time_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-riot",
            title: "Run Riot",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_riot_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-the-show",
            title: "Run the Show",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_the_show_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "run-up-a-bill",
            title: "Run Up a Bill",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/run/run_up_a_bill_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Cromer_lighthouse_fernando_feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-bw",
            title: "House on the Hill B&W",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/House_on_the_hill_B&W_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-colour",
            title: "House on the Hill Colour",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/house on the hill colour_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nightwatch",
            title: "Nightwatch",
            description: "Lords on high soar in skies. Run: don't look up.",
            printType: "Wood engraving",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_fernando_feijoo.avif",
            ],
            price: "£150",
            printEdition: 50,
            size: "8 x 10 cm",
          },
          {
            slug: "nightwatch-colour",
            title: "Nightwatch Colour",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_colour1_fernando_feijoo.avif",
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
            slug: "darkness",
            title: "Darkness",
            description: "Hell under earth. A lamplight flickers.",
            printType: "Etching & Letterpress, hardback cover concertina book",
            price: "£395",
            printEdition: 15,
            size: "12 pages, 188 x 253 x 24 mm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/6_Darkness__fernando_feijoo.avif",
            ],
          },
          {
            slug: "arrival",
            title: "1. Arrival",
            description: "No name, nor emotion. Arriving, never to return.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/1_Arrival_fernando_feijoo.avif",
            ],
          },
          {
            slug: "submerged",
            title: "2. Submerged",
            description:
              "Plummeting into darkness. Seeds are sown. Journeyman awakes.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/2_Submerged_fernando_feijoo.avif",
            ],
          },
          {
            slug: "secret-doorway",
            title: "3. Secret Doorway",
            description: "Barren landscape. A doorway looms.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/3_Secret_doorway_fernando_feijoo.avif",
            ],
          },
          {
            slug: "labyrinth",
            title: "4. Labyrinth",
            description:
              "Webs are impenetrable. Sunlight will always beam if we let it.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/4_Labyrinth_fernando_feijoo.avif",
            ],
          },
          {
            slug: "confusion",
            title: "5. Confusion",
            description:
              "Mixed messages. A moment of clarity: Exit from the maelstrom.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/5_Confusion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "ascent",
            title: "7. Ascent",
            description: "Ravening monsters awake. Hope is hatched.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/7_Ascent_fernando_feijoo.avif",
            ],
          },
          {
            slug: "eruption",
            title: "8. Eruption",
            description: "Trees are salvation, but time is running out.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/8_Eruption_fernando_feijoo.avif",
            ],
          },
          {
            slug: "departure",
            title: "9. Departure",
            description: "Fires burning on earth. Ride the airwaves to safety.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/9_Departure_fernando_feijoo.avif",
            ],
          },
          {
            slug: "metropolis",
            title: "10. Metropolis",
            description:
              "A safety net protects new life. The dream catcher journeys on.",
            printType: "Etching",
            price: "£125",
            printEdition: 30,
            size: "15 x 20 cm",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/10_Metropolis__fernando_feijoo.avif",
            ],
          },

        ],
      },
      {
        slug: "the-three-progresses",
        title: "The Three Progresses",
        description:
          "Charlie's Progress: Inspired by Hogarth's A Harlot's Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life. Crack's Progress: A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
        works: [
          // Charlie's Progress
          {
            slug: "conceived-in-summer-of-love",
            title: "Conceived in a Summer of Love",
            description: "",
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
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
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
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/3_Wayward_Women_Working_the_web_fernando_feijoo.avif",
            ],
          },
          {
            slug: "caught-charlie",
            title: "Caught",
            description:
              "A modern fable of dark morality, crime and corruption. Follows Crack and his dog Spike.",
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
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
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
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
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
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
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
            title: "Bad Bawdy Drams",
            description:
              "Inspired by Hogarth’s A Harlot’s Progress. Follows Charlie (Crack's sister) and her sister Tara through London's dark low life.",
            printType: "Linocut",
            price: "£325",
            printEdition: 30,
            size: "60 x 40 cm",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/8_Bad_bawdy_drams_fernando_feijoo.avif",
            ],
          },
          // Crack's Progress
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
            title: "To Be Bad He Became Bad",
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
          // The Curtain Rises
          {
            slug: "the-curtain-rises",
            title: "The Curtain Rises",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/curtainRises/The_curtain_rises_fernando_feijoo.avif",
            ],
          },
          // Modern Marriage
          {
            slug: "youngest-sister",
            title: "Youngest Sister of Crack and Charlie",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/1_youngest_sister_of_crack_and_charlie_fernando_feijoo.avif",
            ],
          },
          {
            slug: "at-the-back-end-of-town",
            title: "At the Back End of Town",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/2_at_the_back_end_of_town_fernando_feijoo.avif",
            ],
          },
          {
            slug: "conceived-a-child",
            title: "Conceived a Child",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/3_conceived_a_child_fernando_feijoo.avif",
            ],
          },
          {
            slug: "young-wayne-became-wayward",
            title: "Young Wayne Became Wayward",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/4_young_wayne_became_wayward_fernando_feijoo.avif",
            ],
          },
          {
            slug: "behind-the-scenes",
            title: "Behind the Scenes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/5_behind_the_scenes_fernando_feijoo.avif",
            ],
          },
          {
            slug: "the-river-rats",
            title: "The River Rats",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/6_the_river_rats_fernando_feijoo.avif",
            ],
          },
          {
            slug: "walking-the-line-into-oblivion",
            title: "Walking the Line into Oblivion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/7_walking_the_line_into_oblivion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "protecting-a-new-generation",
            title: "Protecting a New Generation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/8_protecting_a_new_generation_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "watch-and-bewitched",
        title: "Watch & Bewitched",
        description: "",
        works: [
          {
            slug: "rumble-in-the-jungle",
            title: "Rumble in the Jungle",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rumble_in_the_Jungle_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "carrera-de-san-fermin",
            title: "Carrera de San Fermín",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Carrera_de_san_fermin__fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-1",
            title: "Knock Out 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock-out_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-2",
            title: "Knock Out 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock_out_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-3",
            title: "Knock Out 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Knock_Out_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "pamplona",
            title: "Pamplona",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Pamplona_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-1",
            title: "Role Reversal 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-2",
            title: "Role Reversal 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-3",
            title: "Role Reversal 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "rudos-vs-tecnicos",
            title: "Rudos Vs Técnicos",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rudos_Vs_Tecnicos_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-run-run",
            title: "Run Run Run",
            description:
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            imageUrls: [
              "@assets/works/prints/watchBewitched/run-run-run_fernando_feijoo.avif",
            ],
            price: "£850",
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
          },
          {
            slug: "take-down",
            title: "Take-Down",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Take-Down_fernando_feijoo.avif",
            ],
          },
          {
            slug: "temptation",
            title: "Temptation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Temptation_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tollerance",
            title: "Tollerance",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£610",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Tollerance_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tomatina",
            title: "Tomatina",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            printType: "Linocut, wood block & Letterpress",
            price: "£610",
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
        title: "Afterlife",
        description:
          "Inspired by the Mexican Day of the Dead. Skeletons act as gatekeepers for the passageway to the afterlife.",
        printType: "Underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/afterLife/afterlife.avif"],
      },
      {
        slug: "azrael",
        title: "Azrael",
        description:
          "Angel of death, keeper of fire. Linking into the Inferno series. Infiltrating lives and meals.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "25 x 25 x 5 cm",
        price: "£800",
        imageUrls: ["@assets/works/ceramics/azrael/azrael.avif"],
      },
      {
        slug: "bala",
        title: "Bala",
        description:
          "The next terrible storm is named. Spinning and raging, destroying all in its path.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/bala/bala1.avif"],
      },
      {
        slug: "burn-in-hell",
        title: "Burn in Hell",
        description:
          "Links to Inferno prints. Circular theme of the bowl suits the endless chase. Witches, boiling water, trapped souls.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1200",
        imageUrls: ["@assets/works/ceramics/burnInHell/burnInHell.avif"],
      },
      {
        slug: "chaos",
        title: "Chaos",
        description:
          "From chaos was the world created. Void, swirling wind, rising sea levels. Mankind must learn that Gods can cleanse the earth.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/chaos/chaos.avif"],
      },
      {
        slug: "lockdown",
        title: "Lockdown",
        description:
          "Relates to Persons and Personas prints. Depicts characters incarcerated in El Salvador prisons. Violence, betrayal, no hope of salvation.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/lockdown/lockdown.avif"],
      },
      {
        slug: "los-tres-amigos",
        title: "Los Tres Amigos",
        description:
          "Superpowers' fights are big versions of spats. Social media, fake news, nuclear buttons.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£800",
        imageUrls: ["@assets/works/ceramics/losTresAmigos/www1.avif"],
      },
      {
        slug: "medusa",
        title: "Medusa",
        description:
          "Concepts of eating and glazing (Medusa's gaze). Open mouths invite consumption, but it is 'hell on a plate'. Warning of gluttony.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/medusa/medusaPlate.avif"],
      },
      {
        slug: "rocket-man",
        title: "Rocket Man",
        description:
          "Rocketman circles the earth. Reference to Hiroshima bombs and modern ego threats of superpowers.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/rocketMan/rocketMan.avif"],
      },
      {
        slug: "safe-passage",
        title: "Safe Passage",
        description:
          "Rivers run slow with hot lava. The ferry man guides souls through darkness closer to hell.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/safePassage/safePassage.avif"],
      },
      {
        slug: "freedom",
        title: "Freedom",
        description:
          "The war has ended, but wounds are open. Political leaders deciding impossible solutions. Freedom must prevail.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/freedom.avif"],
      },
      {
        slug: "fish-car",
        title: "Fish Car",
        description:
          "Playful take on genetic manipulation. A hybrid that can't run or swim, pegged down in a tile.",
        printType: "underglaze painting, oxides and clear glaze finish",
        size: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/fishCar.avif"],
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
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Alfredo.avif"],
          },
          {
            slug: "amor",
            title: "Amor",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Amor.avif"],
          },
          {
            slug: "characters-2",
            title: "Characters 2",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Characters-2.avif",
            ],
          },
          {
            slug: "characters",
            title: "Characters",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Characters.avif"],
          },
          {
            slug: "circus",
            title: "circus",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/circus.avif"],
          },
          {
            slug: "claude",
            title: "Claude",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Claude.avif"],
          },
          {
            slug: "dressing-room",
            title: "Dressing room",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Dressing room.avif",
            ],
          },
          {
            slug: "fiesta",
            title: "Fiesta",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Fiesta.avif"],
          },
          {
            slug: "homeless-fernando-feijoo",
            title: "homeless fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/homeless_fernando_feijoo.avif",
            ],
          },
          {
            slug: "homeless-man-2-fernando-feijoo",
            title: "homeless man 2 fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/homeless_man_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "los-tres-amigos",
            title: "los tres amigos",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/los_tres_amigos.avif",
            ],
          },
          {
            slug: "morning-coffee",
            title: "Morning Coffee",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Morning Coffee.avif",
            ],
          },
          {
            slug: "mutton-dressed-as-lamb",
            title: "mutton dressed as lamb",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/mutton dressed as lamb.avif",
            ],
          },
          {
            slug: "pedro",
            title: "Pedro",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Pedro.avif"],
          },
          {
            slug: "puppets",
            title: "Puppets",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/Puppets.avif"],
          },
          {
            slug: "redemption-fernando-feijoo",
            title: "redemption fernando feijoo",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/redemption_fernando_feijoo.avif",
            ],
          },
          {
            slug: "semana-santa",
            title: "Semana Santa",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Semana Santa.avif",
            ],
          },
          {
            slug: "street-performers",
            title: "Street performers",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Street performers.avif",
            ],
          },
          {
            slug: "the-debate",
            title: "The debate",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/The debate.avif"],
          },
          {
            slug: "two-beggers",
            title: "Two beggers",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Two beggers.avif",
            ],
          },
          {
            slug: "virgin-of-anguish",
            title: "Virgin of Anguish",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/characters/Virgin of Anguish.avif",
            ],
          },
          {
            slug: "witches",
            title: "witches",
            description: "Character study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/witches.avif"],
          },
        ],
      },
      {
        slug: "locations",
        title: "Locations",
        description: "Architectural and landscape studies from various places.",
        works: [
          {
            slug: "alc-zar-de-los-reyes-cristianos-cordoba",
            title: "Alcázar de los Reyes Cristianos Cordoba",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Alcázar de los Reyes Cristianos Cordoba.avif",
            ],
          },
          {
            slug: "architectural-study-of-facade-in-malaga",
            title: "Architectural study of facade in Malaga",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Architectural study of facade in Malaga.avif",
            ],
          },
          {
            slug: "back-street-porto",
            title: "back street Porto",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/back street Porto.avif",
            ],
          },
          {
            slug: "castell-de-ferro-granada",
            title: "castell de ferro Granada",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/castell de ferro Granada.avif",
            ],
          },
          {
            slug: "cromer-pier-and-hotel-de-paris",
            title: "cromer Pier and Hotel de Paris",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/cromer Pier and Hotel de Paris.avif",
            ],
          },
          {
            slug: "cromer-pier",
            title: "cromer Pier",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/locations/cromer Pier.avif"],
          },
          {
            slug: "malaga-botanical-gardens",
            title: "malaga botanical gardens",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/malaga botanical gardens.avif",
            ],
          },
          {
            slug: "norte-y-sur-bar-cordoba",
            title: "Norte y Sur bar Cordoba",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Norte y Sur bar Cordoba.avif",
            ],
          },
          {
            slug: "outside-the-red-lion-cromer",
            title: "outside the Red Lion Cromer",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/outside the Red Lion Cromer.avif",
            ],
          },
          {
            slug: "playa-fernando-feijoo",
            title: "Playa fernando feijoo",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Playa_fernando_feijoo.avif",
            ],
          },
          {
            slug: "reims-cathedral-france",
            title: "Reims cathedral France",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Reims cathedral France.avif",
            ],
          },
          {
            slug: "rouen-cathedral",
            title: "Rouen cathedral",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/Rouen cathedral.avif",
            ],
          },
          {
            slug: "the-red-house-cromer",
            title: "The Red house Cromer",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/The Red house Cromer.avif",
            ],
          },
          {
            slug: "toledo",
            title: "Toledo",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/locations/Toledo.avif"],
          },
          {
            slug: "watching-the-waves",
            title: "watching the waves",
            description: "Location study from sketchbook.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: [
              "@assets/works/sketchbooks/locations/watching the waves.avif",
            ],
          },
        ],
      },
      {
        slug: "sketches",
        title: "Sketches",
        description: "Various sketchbook studies and explorations.",
        works: [
          {
            slug: "botanicalgardenmalaga",
            title: "botanical Garden Malaga",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/botanicalGardenMalaga.avif"],
          },
          {
            slug: "cadaques",
            title: "cadaques",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/cadaques.avif"],
          },
          {
            slug: "casteldeferro",
            title: "castel De Ferro",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/castelDeFerro.avif"],
          },
          {
            slug: "characterdesign",
            title: "character Design",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characterDesign.avif"],
          },
          {
            slug: "circus",
            title: "circus",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/circus.avif"],
          },
          {
            slug: "malaga",
            title: "malaga",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/malaga.avif"],
          },
          {
            slug: "playa",
            title: "playa",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/playa.avif"],
          },
          {
            slug: "repent",
            title: "repent",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/repent.avif"],
          },
          {
            slug: "semanasanta",
            title: "semana Santa",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/semanaSanta.avif"],
          },
          {
            slug: "viewintothedistance",
            title: "view Into The Distance",
            description: "Sketchbook study.",
            printType: "Mixed Media on Paper",
            price: "£180",
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
              "An alphabet book of modern-day street characters with text by Pat Francis. A savage portrayal of the city, depicting victims and perpetrators, horror and humour.",
            printType: "Artist Book",
            price: "£95",
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
              "Two tales in one book. Crack's Progress: A modern fable based on Hogarth's A Rake's Progress; a tale of drugs, crime, prison, and Bedlam. Charlie's Progress: Based on Hogarth's A Harlot's Progress; follows Crack's sister Charlie through London's low life, exploitation, and eventual recovery.",
            printType: "Artist Book",
            price: "£75",
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
              "Created in a time of great uncertainty. Parallels seen between superpowers (Kim Jong-un, Trump, Putin). Themes: Nuclear threat, greed, power corruption, and global communication manipulation. 'The Future is now.'",
            printType: "Linocut, Letterpress, and collage, hardback cover",
            price: "£395",
            imageUrls: [
              "@assets/works/artistBooks/future/1.avif",
              "@assets/works/artistBooks/future/2.avif",
              "@assets/works/artistBooks/future/3.avif",
              "@assets/works/artistBooks/future/4.avif",
              "@assets/works/artistBooks/future/5.avif",
              "@assets/works/artistBooks/future/6.avif",
            ],
            printEdition: 15,
            size: "24 pp, 275 x 380 x 16 mm",
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
              "A large format alphabet book illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld. Inspired by Ovid's Metamorphosis, Greek Mythology and childhood memories. Themes include the fusion of villain and hero (Picasso's Minotaur), the passage of life, and good versus evil.",
            printType:
              "Linocut, wood block & Letterpress, hardback cover concertina book",
            price: "£995",
            imageUrls: [
              "@assets/works/artistBooks/godsMonsters/1.avif",
              "@assets/works/artistBooks/godsMonsters/2.avif",
              "@assets/works/artistBooks/godsMonsters/3.avif",
              "@assets/works/artistBooks/godsMonsters/4.avif",
              "@assets/works/artistBooks/godsMonsters/5.avif",
              "@assets/works/artistBooks/godsMonsters/6.avif",
            ],
            printEdition: 10,
            size: "32 pp, 570 x 370 x 38 mm",
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
              "Interweaves the 'Progress' stories. Tara (rich) and Darren (nouveau riche) marry. Themes: Debt, crime, neglect (their child Wayne), and ultimate tragedy followed by redemption through siblings Crack and Charlie.",
            printType:
              "Offset lithograph & Letterpress, hardback cover with screen printed band",
            price: "£50",
            imageUrls: [
              "@assets/works/artistBooks/modernMarriage/1.avif",
              "@assets/works/artistBooks/modernMarriage/2.avif",
              "@assets/works/artistBooks/modernMarriage/3.avif",
              "@assets/works/artistBooks/modernMarriage/4.avif",
            ],
            printEdition: 50,
            size: "62 pp, 230 x 163 x 13 mm",
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
              "An exploration of sayings and expressions inspired by contemporary life. Machines are taking over. Glances at how media runs news, politicians run lives, and fake news runs away with facts. Themes: Technology, corruption, and control.",
            printType: "Linocut, Letterpress, and collage, ½ bound hardback cover",
            price: "£850",
            imageUrls: [
              "@assets/works/artistBooks/run/1.avif",
              "@assets/works/artistBooks/run/2.avif",
              "@assets/works/artistBooks/run/3.avif",
              "@assets/works/artistBooks/run/4.avif",
              "@assets/works/artistBooks/run/5.avif",
              "@assets/works/artistBooks/run/6.avif",
            ],
            printEdition: 10,
            size: "16 pages, 34 x 57 x 20 mm",
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
              "Inspired by a surreal dream and the universal idea of the journeyman. The labyrinth represents the twists and turns of modern life. Symbols include the jellyfish (rescue/care) and the dream catcher. Themes: life's excitements, fears and dangers. A story that does not end: it evolves with the times.",
            printType: "Artist Book",
            price: "£395",
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
            title: "pagannini",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/drawings/pagannini.avif"],
          },
        ],
      },
      {
        slug: "labyrinth-of-dreams",
        title: "Labyrinth of Dreams",
        description: "",
        works: [
          {
            slug: "arrogance",
            title: "arrogance",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/arrogance.avif"],
          },
          {
            slug: "condemnation",
            title: "condemnation",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/condemnation.avif",
            ],
          },
          {
            slug: "creation",
            title: "creation",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/creation.avif"],
          },
          {
            slug: "evasion",
            title: "evasion",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/evasion.avif"],
          },
          {
            slug: "greed",
            title: "greed",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/greed.avif"],
          },
          {
            slug: "hunter",
            title: "hunter",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/hunter.avif"],
          },
          {
            slug: "ilumination",
            title: "ilumination",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/ilumination.avif",
            ],
          },
          {
            slug: "lost",
            title: "lost",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/lost.avif"],
          },
          {
            slug: "obssesion",
            title: "obssesion",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/obssesion.avif"],
          },
          {
            slug: "persuasion",
            title: "persuasion",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/persuasion.avif",
            ],
          },
          {
            slug: "reality",
            title: "reality",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/labyrinthOfDreams/reality.avif"],
          },
          {
            slug: "thefinalbow",
            title: "theFinalBow",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/labyrinthOfDreams/theFinalBow.avif",
            ],
          },
        ],
      },
      {
        slug: "others",
        title: "Others",
        description: "",
        works: [
          {
            slug: "cadaques-church-spain",
            title: "Cadaques Church Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/others/Cadaques Church Spain.avif",
            ],
          },
          {
            slug: "castel-de-ferro-spain",
            title: "Castel de Ferro Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/others/Castel_de_Ferro_Spain.avif",
            ],
          },
          {
            slug: "castel-de-ferro-beach",
            title: "Castel de Ferro beach",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/others/Castel_de_Ferro_beach.avif",
            ],
          },
          {
            slug: "cruzcampo",
            title: "Cruzcampo",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/others/Cruzcampo.avif"],
          },
          {
            slug: "malaga-port",
            title: "Malaga Port",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/others/Malaga_Port.avif"],
          },
          {
            slug: "old-cinema-malaga",
            title: "Old Cinema Malaga",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/others/Old_Cinema_Malaga.avif"],
          },
          {
            slug: "plaza-de-la-corredera-cordoba-spain",
            title: "Plaza de la Corredera, Cordoba Spain",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: [
              "@assets/works/mixed/others/Plaza_de_la_Corredera,_Cordoba_Spain.avif",
            ],
          },
          {
            slug: "viewintothedistance",
            title: "viewIntoTheDistance",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/others/viewIntoTheDistance.avif"],
          },
          {
            slug: "waves",
            title: "waves",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
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
            title: "luchador",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/paintings/luchador.avif"],
          },
          {
            slug: "putagallina",
            title: "putaGallina",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/paintings/putaGallina.avif"],
          },
        ],
      },
      {
        slug: "the-war-theatre",
        title: "The War Theatre",
        description: "",
        works: [
          {
            slug: "1",
            title: "1",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/1.avif"],
          },
          {
            slug: "2",
            title: "2",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/2.avif"],
          },
          {
            slug: "3",
            title: "3",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/3.avif"],
          },
          {
            slug: "4",
            title: "4",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/4.avif"],
          },
          {
            slug: "5",
            title: "5",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/5.avif"],
          },
          {
            slug: "6",
            title: "6",
            description: "Mixed media artwork.",
            printType: "Mixed Media",
            price: "£450",
            imageUrls: ["@assets/works/mixed/theWarTheatre/6.avif"],
          },
        ],
      },
    ],
  },
];
