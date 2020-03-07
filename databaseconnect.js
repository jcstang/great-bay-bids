var mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "greatbay_db"
});

function connectDB(itemName, category, startingBid) {
    connection.connect(function(err) {
        console.log('HEEEEYYYYYY');
        
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        return createNew(itemName, category, startingBid);
    });

}

// update price 
// insert new item

// create with a starting bid and item name
function createNew(itemtype, category, startingbid){
    let stringtopass = "INSERT INTO `auctions` (`item_name`, `category`, `starting_bid`) VALUES (" + itemtype +","+ category+","+ startingbid+");";
    connection.query(stringtopass);
    connection.end();
}




//promise example
function getLastRecord(itemName, itemCat, startBid)
{
    let stringtopass = "INSERT INTO `auctions` (`item_name`, `category`, `starting_bid`) VALUES (" + itemName +","+ itemCat + ","+ startBid +");";
    return new Promise(function(resolve, reject) {
        // The Promise constructor should catch any errors thrown on
        // this tick. Alternately, try/catch and reject(err) on catch.
        
        connection.connect(function(err) {
            console.log('HEEEEYYYYYY');
            
            if (err) throw err;
            console.log('connected as id ' + connection.threadId);
            connection.query(stringtopass, function (err, rows) {
                // Call reject on error states,
                // call resolve with results
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
        
    });
}



// ===================================================
// exports
// ===================================================
module.exports = {
    connectDB: connectDB,
    getLastRecord: getLastRecord
}