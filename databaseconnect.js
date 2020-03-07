var mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "greatbay_db"
});

function connectDB() {
    return connection.connect(function(err) {
        console.log('HEEEEYYYYYY');
        
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        createNew();
    });

}

// update price 
// insert new item

// create with a starting bid and item name
function createNew(itemtype, catagory, startingbid){
    let stringtopass = "INSERT INTO `auctions` (`item_name`, `category`, `starting_bid`) VALUES (" +itemtype +","+ catagory+","+ startingbid+");";
    // connection.query(stringtopass);
    connection.end();
}


// ===================================================
// exports
// ===================================================
module.exports = {
    connectDB: connectDB
}