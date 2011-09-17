//Not really a js file, we can discuss later

//Put at top of the page
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
</head>

//the real magic
<script>
//when document is loaded, create the database if it doesn't already exist
var db;

function initDatabase(){
   db = openDatabase('foo','1.0','foo',10*1024);
}

$(document).ready(function(){
	initDatabase();
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS words (id unique, text, cat, subcat, subsubcat)');
		//for each element in the JSON, insert into db
		//change url to a real one
		$.getJSON("www.seas.upenn.edu/~kaplane/someJSON.js", function(result){
				//insert each row into DB
				
				//too tired to remember how to do this
				$.each(result,
				tx.executeSql('INSERT INTO foo (id, text) VALUES (1, "foobar")');
			}
		}
	});
};

function getCategories(word){
	var result;
	db.transaction(function (tx) {
		tx.executeSql('SELECT cat,subcat,subsubcat FROM words WHERE ? like text', 
		[word], 
		function (tx, results) {
		result=results;
	});}
	return result;
}

//no idea what the submit button's id is, but we can figure it out later
$('#submit').click(function() {
	//analyze the screen scrape here
});
$
</script>