var mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "greatbay_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query(

        );
        connection.end();
});

// update price 
// insert new item

// create with a starting bid and item name
function createnew(itemtype, catagory, startingbid){
        let stringtopass = "INSERT INTO `auctions` (`item_name`, `catagory`, `starting_bid`) VALUES (" +itemtype +","+ catagory+","+ startingbid+");";
    connection.query(stringtopass);
    
}