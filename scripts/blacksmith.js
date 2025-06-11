
// Here your variables
let gold = 10;
let fireStatus = false;
let wood = 5;
// Add your missing variables here (e.g., ore, wood, swords, axes, fireBurning)

// Here your Functions
// Define your missing functions here: buy(item), make(weapon), sell(weapon), fire(), inventory()

//First requirement: user must be able to start a fire
//This requires a function called fire()

/* FIRE FUNCTION 
  1. Add a global variable that will store whether a fire is burning or not (boolean)
  2. Add a global variable that will store how much wood the user has (number)

  When the fire function runs:
  1. check to see if the fire is already burning (fire variable is set to true)
      if the fire is burning, the fire should be put out (set fire variable to false)
        output a message that the fire was put out
      if the fire is not burning, check to see if the user has enough wood
        (is the value of the wood variable greater than 0)
          if the user has enough wood, start the fire (fire variable is set to true)
            output a message that the fire was started
          if the user does not have enough wood, output a message telling them this
*/
function fire(){
  //check if the fire is out and there is enough wood
  if(fireStatus === false && wood >= 1){
    //if they have enough wood, start the fire burning and use one wood
    fireStatus = true;
    wood--; //this is short hand for wood = wood - 1
    console.log("The fire is now burning.")
  }else if(fireStatus === true){
    //if the fire is burning, put it out
    fireStatus = false;
    console.log("The fire is out");
  }else{
    //the fire isn't burning and there isn't enough wood to start one
    console.log("You don't have enough wood. You can buy wood with the buy() command.")
  }
}

/* MAKE FUNCTION
  Variables needed:
    Global variable for fire (the boolean used with the fire function)
    Global variable for wood (the number used with the fire function)
    Global variable for ore (also a number)
    Global variable to store the number of swords
    Global varialbe to store the number of axes

    When the make function runs:
      1. the player must type what weapon they are making
        for example: make("sword")
      2. put that weapon type into a variable
        for example: function make(weapon) - the variable is called weapon
      3. if the user is making a sword
        and if the wood variable is greater than 0 AND the ore variable is greater than 1
          make a sword - increase the sword variable by 1
        if they don't have enough wood or ore
          output a message telling them this
      4. if the user is making an axe (the weapon variable is equal to "axe")
        and if the wood variable is greater than 1 AND the ore variable is greater than 0
          make an axe - increase the axe variable by 1
        if they don't have enough wood or ore
          output a message telling them this
      5. if the user tries to make something that isn't an axe or a sword
        (for example: make("pineapple"))
          output a message telling them they can't make this
*/

function buy (ore) {
  if (item === 'ore' && gold >= 3 && fireStatus === false) {
    ore = ore + 1
    gold = gold - 3
    return 'You bought 1 ore.'
  } else if (item === 'ore' && gold <= 3 && fireStatus === false) {
    return 'You do not have enough gold.'
  } if (fireStatus === true) {
    return 'You can not leave the fire unattended. Put it out first.'
  }
}

function buy (wood) {
  if (item === 'wood' && gold >= 1 && fireStatus === false) {
    wood = wood + 1
    gold = gold - 1
    return 'You bought 1 wood.'
  } else if (item === 'wood' && gold <= 1 && fireStatus === false) {
    return 'You do not have enough gold.'
  } if (fireStatus === true) {
    return 'You can not leave the fire unattended. Put it out first.'
  }
}

function make (sword) {
  if (weapon === 'sword' && ore >= 2 && wood >= 1 && fireStatus === true) {
    ore = ore - 2
    wood = wood - 1
    sword = sword + 1
    return 'You made 1 sword.'
  } else if (weapon === 'sword' && ore <= 2 && wood <= 1 && fireStatus === true) {
    return 'You do not have enough materials.'
  } if (weapon === 'sword' && ore >= 2 && wood >= 1 && fireStatus === false) {
    return 'You need to start the fire first.'
  }
}

function make (axe) {
  if (weapon === 'axe' && ore >= 1 && wood >= 2 && fireStatus === true) {
    ore = ore - 1
    wood = wood - 2
    axe = axe + 1
    return 'You made 1 axe.'
  } else if (weapon === 'axe' && ore <= 1 && wood <= 2 && fireStatus === true) {
    return 'You do not have enough materials.'
  } if (weapon === 'axe' && ore >= 1 && wood >= 2 && fireStatus === false) {
    return 'You need to start the fire first.'
  }
}


function sell (sword) {
  if (weapon === 'sword' && sword >= 0) {
    sword = sword - 1
    gold = gold + 5
    return 'You sold 1 sword.'
  } else if (weapon === 'sword' && sword <= 1) {
    return 'You do not have any swords.'
  }
}

function sell (axe) {
  if (weapon === 'axe' && axe >= 0) {
    axe = axe - 1
    gold = gold + 4
    return 'You sold 1 axe.'
  } else if (weapon === 'axe' && axe <= 1) {
    return 'You do not have any axes.'
  }
}

function inventory () {
  console.log(gold)
  console.log(ore)
  console.log(wood)
  console.log(sword)
  console.log(axe)
}












/**
 * Do not modify the code below
 */
function help() {
  console.log(`
  Commands:
  - buy(item): Buy supplies (ore or wood)
  - make(weapon): Make weapons (sword or axe)
  - sell(weapon): Sell weapons (sword or axe)
  - fire(): Start or stop the fire
  - inventory(): View your inventory
  - help(): View game instructions
  `);
}

// A 'state' object that forwards reads/writes to the variables
const state = {
  get gold() {
    return gold;
  },
  set gold(value) {
    gold = value;
  },

  get ore() {
    return ore; // Variable to be defined by students
  },
  set ore(value) {
    ore = value;
  },

  get wood() {
    return wood; // Variable to be defined by students
  },
  set wood(value) {
    wood = value;
  },

  get swords() {
    return swords; // Variable to be defined by students
  },
  set swords(value) {
    swords = value;
  },

  get axes() {
    return axes; // Variable to be defined by students
  },
  set axes(value) {
    axes = value;
  },

  get fireBurning() {
    return fireBurning; // Variable to be defined by students
  },
  set fireBurning(value) {
    fireBurning = value;
  }
};

// Export your commands plus the special "state" object
module.exports =  {
  buy, // Function to be defined by students
  make, // Function to be defined by students
  sell, // Function to be defined by students
  fire, // Function to be defined by students
  inventory, // Function to be defined by students
  help,
  state
};
