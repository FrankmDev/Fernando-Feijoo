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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£450",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/afterHours.avif",
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
          },
          {
            slug: "angel-of-victory",
            title: "Angel of Victory",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£500",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/angelOfVictory.avif",
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
          },
          {
            slug: "early-hour-of-the-morning",
            title: "Early Hour of the Morning",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£475",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/earlyHourOfTheMorning.avif",
            ],
          },
          {
            slug: "getting-weighed",
            title: "Getting Weighed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£425",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gettingWeighed.avif",
            ],
          },
          {
            slug: "nightcap",
            title: "Nightcap",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£400",
            imageUrls: ["@assets/works/prints/citizensWastrels/nightcap.avif"],
          },
          {
            slug: "selfmade-man",
            title: "Selfmade Man",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/selfMadeMan.avif",
            ],
          },
          {
            slug: "time-is-just-an-illusion",
            title: "Time is just an illusion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£480",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/timeIsJustAnIllution.avif",
            ],
          },
          {
            slug: "busted",
            title: "Busted",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£520",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/busted.avif",
            ],
          },
          {
            slug: "contracter",
            title: "Contracter",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£510",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/contracter.avif",
            ],
          },
          {
            slug: "driven",
            title: "Driven",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£490",
            imageUrls: [
              "@assets/works/prints/citizensWastrels/gangstersCollection/driven.avif",
            ],
          },
          {
            slug: "wacked",
            title: "Wacked",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£530",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/hierarchiOfAnarchy.avif",
            ],
          },
          {
            slug: "machiavellian",
            title: "Machiavellian",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£570",
            imageUrls: ["@assets/works/prints/gamesPlayer/machiavellian.avif"],
          },
          {
            slug: "ace-of-diamonds",
            title: "Ace of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/aceOfDiamonds.avif",
            ],
          },
          {
            slug: "eight-of-diamonds",
            title: "Eight of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/eightOfDiamonds.avif",
            ],
          },
          {
            slug: "five-of-diamonds",
            title: "Five of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fiveOfDiamonds.avif",
            ],
          },
          {
            slug: "four-of-diamonds",
            title: "Four of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/fourOfDiamonds.avif",
            ],
          },
          {
            slug: "nine-of-diamonds",
            title: "Nine of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/nineOfDiamonds.avif",
            ],
          },
          {
            slug: "jack-of-diamonds",
            title: "Jack of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£400",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/jackOfDiamonds.avif",
            ],
          },
          {
            slug: "king-of-diamonds",
            title: "King of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£450",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/kingOfDiamonds.avif",
            ],
          },
          {
            slug: "queen-of-diamonds",
            title: "Queen of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£425",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/queenOfDiamonds.avif",
            ],
          },
          {
            slug: "seven-of-diamonds",
            title: "Seven of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sevenOfDiamonds.avif",
            ],
          },
          {
            slug: "six-of-diamonds",
            title: "Six of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/sixOfDiamonds.avif",
            ],
          },
          {
            slug: "three-of-diamonds",
            title: "Three of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/threeOfDiamonds.avif",
            ],
          },
          {
            slug: "two-of-diamonds",
            title: "Two of Diamonds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£350",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/twoOfDiamonds.avif",
            ],
          },
          {
            slug: "joker1",
            title: "Joker 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£500",
            imageUrls: [
              "@assets/works/prints/gamesPlayer/packOfLiars/joker1.avif",
            ],
          },
          {
            slug: "joker2",
            title: "Joker 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
        description: "",
        works: [
          {
            slug: "agni",
            title: "Agni",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
            slug: "descent-into-darkness",
            title: "Descent into Darkness",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/inferno/descentIntoDarkness.avif",
            ],
          },
          {
            slug: "hell-is-empty",
            title: "Hell is Empty",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/hellIsEmpty.avif"],
          },
          {
            slug: "hell-on-earth",
            title: "Hell on Earth",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/hellOnEarth.avif"],
          },
          {
            slug: "stewpot",
            title: "Stewpot",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/stewpot.avif"],
          },
          {
            slug: "swamp",
            title: "Swamp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/swamp.avif"],
          },
          {
            slug: "the-future",
            title: "The Future",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theFuture.avif"],
          },
          {
            slug: "the-war",
            title: "The War",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theWar.avif"],
          },
          {
            slug: "the-war-1",
            title: "The War 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theWar1.avif"],
          },
          {
            slug: "the-war-2",
            title: "The War 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theWar2.avif"],
          },
          {
            slug: "the-war-3",
            title: "The War 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theWar3.avif"],
          },
          {
            slug: "the-war-4",
            title: "The War 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/theWar4.avif"],
          },
          {
            slug: "the-fall",
            title: "The Fall",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/thFall.avif"],
          },
          {
            slug: "today",
            title: "Today",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£650",
            imageUrls: ["@assets/works/prints/inferno/today.avif"],
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
            title: "Arrogance",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/arrogance.avif",
            ],
          },
          {
            slug: "condemnation",
            title: "Condemnation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/condemnation.avif",
            ],
          },
          {
            slug: "creation",
            title: "Creation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/creation.avif"],
          },
          {
            slug: "evasion",
            title: "Evasion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/evasion.avif"],
          },
          {
            slug: "greed",
            title: "Greed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/greed.avif"],
          },
          {
            slug: "hunter",
            title: "Hunter",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/hunter.avif"],
          },
          {
            slug: "ilumination",
            title: "Ilumination",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/ilumination.avif",
            ],
          },
          {
            slug: "lost",
            title: "Lost",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/lost.avif"],
          },
          {
            slug: "obssesion",
            title: "Obssesion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/obssesion.avif",
            ],
          },
          {
            slug: "persuasion",
            title: "Persuasion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/persuasion.avif",
            ],
          },
          {
            slug: "reality",
            title: "Reality",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£620",
            imageUrls: ["@assets/works/prints/labyrinthOfDreams/reality.avif"],
          },
          {
            slug: "the-final-bow",
            title: "The Final Bow",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/labyrinthOfDreams/theFinalBow.avif",
            ],
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons/Emilio.avif",
              "@assets/works/prints/persons/EmilioColor.avif",
            ],
          },
          {
            slug: "enzo",
            title: "Enzo",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Enzo.avif"],
          },
          {
            slug: "hector",
            title: "Hector",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Hector.avif"],
          },
          {
            slug: "lorenzo",
            title: "Lorenzo",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/persons/Lorenzo.avif",
              "@assets/works/prints/persons/LorenzoColor.avif",
            ],
          },
          {
            slug: "marcus",
            title: "Marcus",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Marcus.avif"],
          },
          {
            slug: "santiago",
            title: "Santiago",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Santiago.avif"],
          },
          {
            slug: "joaquin",
            title: "Joaquin",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Joaquin.avif"],
          },
          {
            slug: "jose",
            title: "Jose",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
            imageUrls: ["@assets/works/prints/persons/Jose.avif"],
          },
          {
            slug: "siesta",
            title: "Siesta",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£550",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/revolution.avif"],
          },
          {
            slug: "search-and-destroy",
            title: "Search & Destroy",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/searchDestroy.avif"],
          },
          {
            slug: "10seconds",
            title: "10 Seconds",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/10seconds.avif"],
          },
          {
            slug: "big-boss",
            title: "Big Boss",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/bigBoss.avif"],
          },
          {
            slug: "hilda",
            title: "Hilda",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/hilda.avif"],
          },
          {
            slug: "phoenix",
            title: "Phoenix",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/phoenix.avif"],
          },
          {
            slug: "rocketman",
            title: "Rocketman",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/rocketman.avif"],
          },
          {
            slug: "space-x",
            title: "Space X",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            price: "£580",
            imageUrls: ["@assets/works/prints/robotsCranks/spaceX.avif"],
          },
        ],
      },
      {
        slug: "run",
        title: "Run",
        description: "",
        works: [
          {
            slug: "print-run",
            title: "Print Run",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/print_run_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-a-stitch",
            title: "Run a Stitch",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_a_stitch_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-out-of-money",
            title: "Run Out of Money",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_money_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-out-of-steam",
            title: "Run Out of Steam",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_steam_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-out-of-time",
            title: "Run Out of Time",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_out_of_time_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-riot",
            title: "Run Riot",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_riot_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-the-show",
            title: "Run the Show",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_the_show_fernando_feijoo.avif",
            ],
          },
          {
            slug: "run-up-a-bill",
            title: "Run Up a Bill",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/run/run_up_a_bill_fernando_feijoo.avif",
            ],
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
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Cromer_lighthouse_fernando_feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-bw",
            title: "House on the Hill B&W",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/House_on_the_hill_B&W_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "house-on-the-hill-colour",
            title: "House on the Hill Colour",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/house on the hill colour_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nightwatch",
            title: "Nightwatch",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nightwatch-colour",
            title: "Nightwatch Colour",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/structDestruct/Nightwatch_colour1_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "the-journey-man-prints",
        title: "The Journey Man",
        description: "",
        works: [
          {
            slug: "arrival",
            title: "1. Arrival",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/1_Arrival_fernando_feijoo.avif",
            ],
          },
          {
            slug: "submerged",
            title: "2. Submerged",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/2_Submerged_fernando_feijoo.avif",
            ],
          },
          {
            slug: "secret-doorway",
            title: "3. Secret Doorway",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/3_Secret_doorway_fernando_feijoo.avif",
            ],
          },
          {
            slug: "labyrinth",
            title: "4. Labyrinth",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/4_Labyrinth_fernando_feijoo.avif",
            ],
          },
          {
            slug: "confusion",
            title: "5. Confusion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/5_Confusion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "darkness",
            title: "6. Darkness",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/6_Darkness__fernando_feijoo.avif",
            ],
          },
          {
            slug: "ascent",
            title: "7. Ascent",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/7_Ascent_fernando_feijoo.avif",
            ],
          },
          {
            slug: "eruption",
            title: "8. Eruption",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/8_Eruption_fernando_feijoo.avif",
            ],
          },
          {
            slug: "departure",
            title: "9. Departure",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/9_Departure_fernando_feijoo.avif",
            ],
          },
          {
            slug: "metropolis",
            title: "10. Metropolis",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/10_Metropolis__fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene1",
            title: "Journey Man - Scene 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene2",
            title: "Journey Man - Scene 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene3",
            title: "Journey Man - Scene 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene4",
            title: "Journey Man - Scene 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene4_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene5",
            title: "Journey Man - Scene 5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene5_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene6",
            title: "Journey Man - Scene 6",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene6_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene7",
            title: "Journey Man - Scene 7",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene7_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene8",
            title: "Journey Man - Scene 8",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene8_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene9",
            title: "Journey Man - Scene 9",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene9_fernando_feijoo.avif",
            ],
          },
          {
            slug: "journey-man-scene10",
            title: "Journey Man - Scene 10",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theJourneyMan/journey_man-_scene10_fernando_feijoo.avif",
            ],
          },
        ],
      },
      {
        slug: "the-three-progresses",
        title: "The Three Progresses",
        description: "",
        works: [
          // Charlie's Progress
          {
            slug: "conceived-in-summer-of-love",
            title: "Conceived in a Summer of Love",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/1_Conceived_in_a_summer_of_love_fernando_feijoo.avif",
            ],
          },
          {
            slug: "to-be-safe-in-the-city",
            title: "To Be Safe in the City",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/2_To_be_safe_in_the_city_fernando_feijoo.avif",
            ],
          },
          {
            slug: "wayward-women-working-the-web",
            title: "Wayward Women Working the Web",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/3_Wayward_Women_Working_the_web_fernando_feijoo.avif",
            ],
          },
          {
            slug: "caught-charlie",
            title: "Caught",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/4_Caught_fernando_feijoo.avif",
            ],
          },
          {
            slug: "to-pay-her-debt",
            title: "To Pay Her Debt",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/5_To_pay_her_debt_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tara-came-in-graduation-gown",
            title: "Tara Came in Graduation Gown",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/6_Tara_came_in_graduation_gown_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nearly-died",
            title: "Nearly Died",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/7_Nearly_Died_fernando_feijoo.avif",
            ],
          },
          {
            slug: "bad-bawdy-drams",
            title: "Bad Bawdy Drams",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/charliesProgress/8_Bad_bawdy_drams_fernando_feijoo.avif",
            ],
          },
          // Crack's Progress
          {
            slug: "crack-could-get-by",
            title: "Crack Could Get By",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/1_crack_could_get_by_fernado_feijoo.avif",
            ],
          },
          {
            slug: "to-be-bad-he-became-bad",
            title: "To Be Bad He Became Bad",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/2_to_be_bad_he_became_bad_fernando_feijoo.avif",
            ],
          },
          {
            slug: "nice-girls-wouldnt-touch-him",
            title: "Nice Girls Wouldn't Touch Him",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/3_Nice_girls_wouldnt_touch_him_fernando_feijoo.avif",
            ],
          },
          {
            slug: "caught-crack",
            title: "Caught",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/4_Caught_fernando_feijoo.avif",
            ],
          },
          {
            slug: "crack-came-out",
            title: "Crack Came Out",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/5_Crack_came_out_fernando_feijoo.avif",
            ],
          },
          {
            slug: "crack-took-crack",
            title: "Crack Took Crack",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/6_Crack_took_crack_fernando_feijoo.avif",
            ],
          },
          {
            slug: "taken-a-life",
            title: "Taken a Life",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/cracksProgress/7_taken_a_life_fernando_feijoo.avif",
            ],
          },
          {
            slug: "now-it-is-the-nightmare",
            title: "Now It Is the Nightmare",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
            medium: "Linocut, wood block & Letterpress",
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
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/1_youngest_sister_of_crack_and_charlie_fernando_feijoo.avif",
            ],
          },
          {
            slug: "at-the-back-end-of-town",
            title: "At the Back End of Town",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/2_at_the_back_end_of_town_fernando_feijoo.avif",
            ],
          },
          {
            slug: "conceived-a-child",
            title: "Conceived a Child",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/3_conceived_a_child_fernando_feijoo.avif",
            ],
          },
          {
            slug: "young-wayne-became-wayward",
            title: "Young Wayne Became Wayward",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/4_young_wayne_became_wayward_fernando_feijoo.avif",
            ],
          },
          {
            slug: "behind-the-scenes",
            title: "Behind the Scenes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/5_behind_the_scenes_fernando_feijoo.avif",
            ],
          },
          {
            slug: "the-river-rats",
            title: "The River Rats",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/6_the_river_rats_fernando_feijoo.avif",
            ],
          },
          {
            slug: "walking-the-line-into-oblivion",
            title: "Walking the Line into Oblivion",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/theThreeProgresses/modernMarriage/7_walking_the_line_into_oblivion_fernando_feijoo.avif",
            ],
          },
          {
            slug: "protecting-a-new-generation",
            title: "Protecting a New Generation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
            slug: "carrera-de-san-fermin",
            title: "Carrera de San Fermín",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Carrera_de_san_fermin__fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-1",
            title: "Knock Out 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock-out_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-2",
            title: "Knock Out 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/knock_out_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "knock-out-3",
            title: "Knock Out 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Knock_Out_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "pamplona",
            title: "Pamplona",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Pamplona_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-1",
            title: "Role Reversal 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_1_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-2",
            title: "Role Reversal 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_2_fernando_feijoo.avif",
            ],
          },
          {
            slug: "role-reversal-3",
            title: "Role Reversal 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Role_reversal_3_fernando_feijoo.avif",
            ],
          },
          {
            slug: "rudos-vs-tecnicos",
            title: "Rudos Vs Técnicos",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rudos_Vs_Tecnicos_fernando_feijoo.avif",
            ],
          },
          {
            slug: "rumble-in-the-jungle",
            title: "Rumble in the Jungle",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Rumble_in_the_Jungle_Fernando_Feijoo.avif",
            ],
          },
          {
            slug: "run-run-run",
            title: "Run Run Run",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/run-run-run_fernando_feijoo.avif",
            ],
          },
          {
            slug: "take-down",
            title: "Take-Down",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Take-Down_fernando_feijoo.avif",
            ],
          },
          {
            slug: "temptation",
            title: "Temptation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
            imageUrls: [
              "@assets/works/prints/watchBewitched/Temptation_fernando_feijoo.avif",
            ],
          },
          {
            slug: "tollerance",
            title: "Tollerance",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Linocut, wood block & Letterpress",
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
            medium: "Linocut, wood block & Letterpress",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/afterLife/afterlife.avif"],
      },
      {
        slug: "azrael",
        title: "Azrael",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "25 x 25 x 5 cm",
        price: "£800",
        imageUrls: ["@assets/works/ceramics/azrael/azrael.avif"],
      },
      {
        slug: "bala",
        title: "Bala",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/bala/bala1.avif"],
      },
      {
        slug: "burn-in-hell",
        title: "Burn in Hell",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1200",
        imageUrls: ["@assets/works/ceramics/burnInHell/burnInHell.avif"],
      },
      {
        slug: "chaos",
        title: "Chaos",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/chaos/chaos.avif"],
      },
      {
        slug: "lockdown",
        title: "Lockdown",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/lockdown/lockdown.avif"],
      },
      {
        slug: "los-tres-amigos",
        title: "Los Tres Amigos",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/losTresAmigos/www1.avif"],
      },
      {
        slug: "medusa",
        title: "Medusa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/medusa/medusaPlate.avif"],
      },
      {
        slug: "rocket-man",
        title: "Rocket Man",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/rocketMan/rocketMan.avif"],
      },
      {
        slug: "safe-passage",
        title: "Safe Passage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1500",
        imageUrls: ["@assets/works/ceramics/safePassage/safePassage.avif"],
      },
      {
        slug: "freedom",
        title: "Freedom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Underglaze painting, oxides and clear glaze finish",
        dimensions: "20 x 20 x 30 cm",
        price: "£1000",
        imageUrls: ["@assets/works/ceramics/freedom.avif"],
      },
      {
        slug: "fish-car",
        title: "Fish Car",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/botanicalGardenMalaga.avif"],
      },
      {
        slug: "cadaques",
        title: "Cadaques",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/cadaques.avif"],
      },
      {
        slug: "castel-de-ferro",
        title: "Castel de Ferro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/castelDeFerro.avif"],
      },
      {
        slug: "character-design",
        title: "Character Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/characterDesign.avif"],
      },
      {
        slug: "circus",
        title: "Circus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/circus.avif"],
      },
      {
        slug: "malaga",
        title: "Malaga",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/malaga.avif"],
      },
      {
        slug: "playa",
        title: "Playa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/playa.avif"],
      },
      {
        slug: "repent",
        title: "Repent",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/repent.avif"],
      },
      {
        slug: "semana-santa",
        title: "Semana Santa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
        imageUrls: ["@assets/works/drawings/semanaSanta.avif"],
      },
      {
        slug: "view-into-the-distance",
        title: "View Into The Distance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Linocut, wood block & Letterpress",
        price: "£500",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            medium: "Artist Book",
            price: "£850",
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/luchador.avif"],
      },
      {
        slug: "pagannini",
        title: "Pagannini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/pagannini.avif"],
      },
      {
        slug: "puta-gallina",
        title: "Puta Gallina",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/putaGallina.avif"],
      },
    ],
  },
];
