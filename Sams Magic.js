//Not really a js file, we can discuss later

//Put at top of the page
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
</head>

//the real magic
<script>
//when document is loaded, create the database if it doesn't already exist
$(document).ready(function(){
	var db = openDatabase('foo','1.0','foo',10*1024);
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
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

//no idea what the submit button's id is, but we can figure it out later
$('#submit').click(function() {
	//analyze the screen scrape here
});
$
</script>