const getTheGit = require('inquirer');


function main() {

  getTheGit.prompt([
    {
      type: 'list',
      name: 'searchtype',
      message: 'Choose your search Type',
      choices: ['POST', 'BID', 'EXIT']
    }

  ]).then(answers => {
    // ===================================================
    // BID
    // ===================================================
    if (answers.searchtype === 'BID') {
      bidQuestions();
    }

    // ===================================================
    // POST
    // ===================================================
    else if (answers.searchtype === 'POST') {
      postQuestions();
    }

    // ===================================================
    // EXIT
    // ===================================================
    else if (answers.searchtype === 'EXIT') {
      // just exit the program
      console.log('You are the weakest link, goodbye!');
      process.exit(0);
    }
  })
}


// ===================================================
// app start
// ===================================================
main();


function hasHighestBid() {
  // TODO: check for current bid to the DB to see if its high enough.
  
  //returns bool
}


function postQuestions() {
  // TODO: ask the user post related questions
  getTheGit.prompt([
    {
      name: 'itemName',
      message: 'Give me the name of the Item...or else',
    },
    {
        name: 'itemCategory',
        message: 'Do you believe in love at first sight?....Yes? I need your category'
    },
    {
      type: 'number',
      name: 'startingBid',
      message: 'How much? '
    }
  ]).then(answers => {

    if (hasHighestBid()) {
      //TODO: SAVE TO THEE DATABASE!!!
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