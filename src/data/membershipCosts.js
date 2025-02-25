export const exchangeRate = 73;
/**
 * Membership costs. Cost is by default 0, notes by default is taken as empty.
 * @type {{name:string,cost?:number,discountedCost?:number,notes?:string}[]}
 */

export const costs = [
  {
    name: "Student Membership",
    cost: 27,
    discountedCost: 27 / 2,
    notes: "FUTURE50 (50% off)",
  },

  {
    name: "Antennas and Propagation Society (APS)",
    cost: 4,
  },

  { name: "Circuits and Systems (CAS)", cost: 9 },

  { name: "Communications Society", cost: 0.5 },

  {
    name: "Computer Society",
    cost: 4,
    // discountedCost: 4,
    notes: "CS202250 (50% off)",
  },

  {
    name: "Power & Energy Society (PES)",
    cost: 9,
    // discountedCost: 0,
    notes: "Free for first year!",
  },

  { name: "Robotics and Automation (RAS)", cost: 2.5 },

  { name: "Signal Processing Society (SPS)", cost: 10 },

  { name: "SIGHT", cost: 0 },

  { name: "Women in Engineering (WIE)", cost: 0 },
];
