const getTheGit = require('inquirer');
const chalk = require('chalk');
const db = require('./databaseconnect');


// ===================================================
// app start
// ===================================================
main();



function main() {

  getTheGit.prompt([
    {
      type: 'list',
      name: 'mainChoice',
      message: chalk.magentaBright.bold('What would you like to do today?'),
      choices: ['POST', 'BID', 'EXIT']
    }

  ]).then(answers => {
    // ===================================================
    // BID
    // ===================================================
    if (answers.mainChoice === 'BID') {
      bidQuestions();
    }

    // ===================================================
    // POST
    // ===================================================
    else if (answers.mainChoice === 'POST') {
      postQuestions();
    }

    // ===================================================
    // EXIT
    // ===================================================
    else if (answers.mainChoice === 'EXIT') {
      // just exit the program
      console.log('You are the weakest link, goodbye!');
      process.exit(0);
    }
  })
}


function hasHighestBid(currBid) {
  // TODO: check for current bid to the DB to see if its high enough.
    // go get highest bid data
    // is current bid higher than highest bid?
  
  return true;
}


function postQuestions() {
  // TODO: ask the user post related questions
  getTheGit.prompt([
    {
      name: 'itemName',
      message: 'Give me the name of the Item...or else',
    },
    {
      type: 'list',
      name: 'itemCat',
      message: '\ngive me a category?',
      choices: ['Food', 'Animal', 'Tech', 'Other']
    },
    {
      type: 'number',
      name: 'currBid',
      message: 'How much? '
    }
  ]).then(answers => {
    console.log(`itemName: ${chalk.yellow(answers.itemName)}, itemCat: ${chalk.yellow(answers.itemCat)}, startBid: ${chalk.yellow(answers.currBid)}\n\n`);
    
    if (hasHighestBid(answers.currBid)) {
      //TODO: SAVE TO THEE DATABASE!!!
      console.log(`itemName: ${chalk.yellow(answers.itemName)}, itemCat: ${chalk.yellow(answers.itemCat)}, startBid: ${chalk.yellow(answers.currBid)}\n\n`);

      db.connectDB(answers.itemName, answers.itemCat, answers.currBid)
        .then(function() {
          console.log('hey!');
          
        });

    }

      // prompt the user again
      main();
    });
}

function bidQuestions() {
  // TODO: ask the user bid related questions
  getTheGit.prompt([
    {
      //questions for bid here
    }

  ]).then(answers => {
    if (hasHighestBid()) {
      //TODO: SAVE TO THEE DATABASE!!!
    }

    // prompt the user again
    main();
  });
}