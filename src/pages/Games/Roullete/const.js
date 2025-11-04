export const keyNames = {
  zero: "zero",
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five",
  six: "six",
  seven: "seven",
  eight: "eight",
  nine: "nine",
  ten: "ten",
  eleven: "eleven",
  twelve: "twelve",
  thirteen: "thirteen",
  fourteen: "fourteen",
  fifteen: "fifteen",
  sixteen: "sixteen",
  seventeen: "seventeen",
  eighteen: "eighteen",
  nineteen: "nineteen",
  twenty: "twenty",
  twentyOne: "twentyOne",
  twentyTwo: "twentyTwo",
  twentyThree: "twentyThree",
  twentyFour: "twentyFour",
  twentyFive: "twentyFive",
  twentySix: "twentySix",
  twentySeven: "twentySeven",
  twentyEight: "twentyEight",
  twentyNine: "twentyNine",
  thirty: "thirty",
  thirtyOne: "thirtyOne",
  thirtyTwo: "thirtyTwo",
  thirtyThree: "thirtyThree",
  thirtyFour: "thirtyFour",
  thirtyFive: "thirtyFive",
  thirtySix: "thirtySix",
  oneToThirtyFour: "oneToThirtyFour",
  twoToThirtyFive: "twoToThirtyFive",
  threeToThirtySix: "threeToThirtySix",
  nineteenToThirtySix: "nineteenToThirtySix",
  odd: "odd",
  black: "black",
  red: "red",
  even: "even",
  oneToEighteen: "oneToEighteen",
  thirdTwelve: "thirdTwelve",
  secondTwelve: "secondTwelve",
  firstTwelve: "firstTwelve",
};
export const keysArray = Object.keys(keyNames);

// TODO: Remove key array

export const zeroRouletteData = [
  {
    bet: "0",
    value: "0",
    className: "zero-item",
    betCatchers: [
      {
        className: "spleet-bet-catcher",
        action: "STREET",
        highlight: "0-00-2",
        style: { left: "auto", right: "-15px", zIndex: 13 },
      },
      {
        className: "corner-bet-catcher bottom",
        action: "BASKET_US",
        highlight: "0-00-1-2-3",
        style: { zIndex: 14 },
      },
      {
        className: "split-up-bet-catcher-top",
        action: "ROW",
        highlight: "0-00",
      },
      {
        className: "split-up-bet-catcher-right",
        action: "SPLIT",
        highlight: "0-2",
      },
      {
        className: "split-up-bet-catcher-right",
        action: "SPLIT",
        highlight: "0-1",
        style: { height: "85px", top: "auto", bottom: "0px" },
      },
      {
        className: "basket-catcher-bottom",
        action: "BASKET_US",
        highlight: "0-00-1-2-3",
        style: { left: "-3px" },
      },
    ],
  },
  {
    bet: "00",
    value: "00",
    className: "zero-item",
    betCatchers: [
      {
        className: "corner-bet-catcher",
        action: "BASKET_US",
        highlight: "00-0-1-2-3",
        style: { zIndex: 14 },
      },
      {
        className: "split-up-bet-catcher-right 00",
        action: "SPLIT",
        highlight: "00-3",
        style: { zIndex: 12, height: "85px" },
      },
      {
        className: "split-up-bet-catcher-right",
        action: "SPLIT",
        highlight: "0-02",
        style: { height: "85px", top: "auto", bottom: "0px" },
      },
      {
        className: "basket-catcher-top",
        action: "BASKET_US",
        highlight: "00-0-1-2-3",
        style: { left: "-3px" },
      },
    ],
  },
];

export const rouletteData = {
  numbers: [
    {
      bet: 1,
      value: "1",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "1-2-4-5",
        },
        {
          className: "spleet-bet-catcher",
          action: "STREET",
          highlight: "0-1-2",
          style: { zIndex: 12 },
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "1-2",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "1-4",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "1-2-3",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "1-2-3-4-5-6",
        },
      ],
    },
    {
      bet: 2,
      value: "2",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "2-3-5-6",
        },
        {
          className: "spleet-bet-catcher",
          action: "STREET",
          highlight: "00-2-3",
          style: { zIndex: 12 },
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "2-3",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "2-5",
        },
      ],
    },
    {
      bet: 3,
      value: "3",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "3-2-1-6-5-4",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "3-2-1",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "3-6",
        },
      ],
    },
    {
      bet: 4,
      value: "4",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "4-5-7-8",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "4-5",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "4-7",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "4-5-6",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "4-5-6-7-8-9",
        },
      ],
    },
    {
      bet: 5,
      value: "5",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "5-6-8-9",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "5-6",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "5-8",
        },
      ],
    },
    {
      bet: 6,
      value: "6",
      className: "black-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "6-5-4-9-8-7",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "6-5-4",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "6-9",
        },
      ],
    },
    {
      bet: 7,
      value: "7",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "7-8-10-11",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "7-8",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "7-10",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "7-8-9",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "7-8-9-10-11-12",
        },
      ],
    },
    {
      bet: 8,
      value: "8",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "8-9-11-12",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "8-9",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "8-11",
        },
      ],
    },
    {
      bet: 9,
      value: "9",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "9-8-7-12-11-10",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "9-8-7",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "9-12",
        },
      ],
    },
    {
      bet: 10,
      value: "10",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "10-11-13-14",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "10-11",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "10-13",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "10-11-12",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "10-11-12-13-14-15",
        },
      ],
    },
    {
      bet: 11,
      value: "11",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "11-12-14-15",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "11-12",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "11-14",
        },
      ],
    },
    {
      bet: 12,
      value: "12",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "12-11-10-15-14-13",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "12-11-10",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "12-15",
        },
      ],
    },
    {
      bet: 13,
      value: "13",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "13-14-16-17",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "13-14",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "13-16",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "13-14-15",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "13-14-15-16-17-18",
        },
      ],
    },
    {
      bet: 14,
      value: "14",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "14-15-17-18",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "14-15",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "14-17",
        },
      ],
    },
    {
      bet: 15,
      value: "15",
      className: "black-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "15-14-13-18-17-16",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "15-14-13",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "15-18",
        },
      ],
    },
    {
      bet: 16,
      value: "16",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "16-17-19-20",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "16-17",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "16-19",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "16-17-18",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "16-17-18-19-20-21",
        },
      ],
    },
    {
      bet: 17,
      value: "17",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "17-18-20-21",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "17-18",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "17-20",
        },
      ],
    },
    {
      bet: 18,
      value: "18",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "18-17-16-21-20-19",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "18-17-16",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "18-21",
        },
      ],
    },
    {
      bet: 19,
      value: "19",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "19-20-22-23",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "19-20",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "19-22",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "19-20-21",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "19-20-21-22-23-24",
        },
      ],
    },
    {
      bet: 20,
      value: "20",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "20-21-23-24",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "20-21",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "20-23",
        },
      ],
    },
    {
      bet: 21,
      value: "21",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "21-20-19-24-23-22",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "21-20-19",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "21-24",
        },
      ],
    },
    {
      bet: 22,
      value: "22",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "22-23-25-26",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "22-23",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "22-25",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "22-23-24",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "22-23-24-25-26-27",
        },
      ],
    },
    {
      bet: 23,
      value: "23",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "23-24-26-27",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "23-24",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "23-26",
        },
      ],
    },
    {
      bet: 24,
      value: "24",
      className: "black-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "24-23-22-27-26-25",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "24-23-22",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "24-27",
        },
      ],
    },
    {
      bet: 25,
      value: "25",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "25-26-28-29",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "25-26",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "25-28",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "25-26-27",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "25-26-27-28-29-30",
        },
      ],
    },
    {
      bet: 26,
      value: "26",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "26-27-29-30",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "26-27",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "26-29",
        },
      ],
    },
    {
      bet: 27,
      value: "27",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "27-26-25-30-29-28",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "27-26-25",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "27-30",
        },
      ],
    },
    {
      bet: 28,
      value: "28",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "28-29-31-32",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "28-29",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "28-31",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "28-29-30",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "28-29-30-31-32-33",
        },
      ],
    },
    {
      bet: 29,
      value: "29",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "29-30-32-33",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "29-30",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "29-32",
        },
      ],
    },
    {
      bet: 30,
      value: "30",
      className: "red-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "30-29-28-33-32-31",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "30-29-28",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "30-33",
        },
      ],
    },
    {
      bet: 31,
      value: "31",
      className: "black-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "31-32-34-35",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "31-32",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "31-34",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "31-32-33",
        },
        {
          className: "six-lines-catcher",
          action: "DOUBLE_STREET",
          highlight: "31-32-33-34-35-36",
        },
      ],
    },
    {
      bet: 32,
      value: "32",
      className: "red-item",
      betCatchers: [
        {
          className: "corner-bet-catcher",
          action: "CORNER",
          highlight: "32-33-35-36",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "32-33",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "32-35",
        },
      ],
    },
    {
      bet: 33,
      value: "33",
      className: "black-item",
      betCatchers: [
        {
          className: "double-street-catcher-top-right",
          action: "DOUBLE_STREET",
          highlight: "33-32-31-36-35-34",
        },
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "33-32-31",
        },
        {
          className: "split-up-bet-catcher-right",
          action: "SPLIT",
          highlight: "33-36",
        },
      ],
    },
    {
      bet: 34,
      value: "34",
      className: "red-item",
      betCatchers: [
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "34-35",
        },
        {
          className: "split-up-bet-catcher-bottom",
          action: "STREET",
          highlight: "34-35-36",
        },
      ],
    },
    {
      bet: 35,
      value: "35",
      className: "black-item",
      betCatchers: [
        {
          className: "split-up-bet-catcher-top",
          action: "SPLIT",
          highlight: "35-36",
        },
      ],
    },
    {
      bet: 36,
      value: "36",
      className: "red-item",
      betCatchers: [
        {
          className: "split-up-bet-catcher-top",
          action: "STREET",
          highlight: "36-35-34",
        },
      ],
    },
  ],
};
