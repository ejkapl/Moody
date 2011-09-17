function wordCounts(str){
	str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	str = str.toLowerCase();
	words = str.split(" ");
	var catCount = {};
	for (word in words){
		var cats = getCat(words[word]);
		for (cat in cats){
			if (catCount[cats[cat]] == undefined){
				catCount[cats[cat]] = 0;
			}
			catCount[cats[cat]]++;
		}
	}
	return catCount;
}

function getCat(word){
	//Look up the word (a string) in the DB and return an array of the categories under which the word falls
	var category1 = "category";
	var category2 = "subcategory";
	var category3 = "subsubcategory";
	return [category1, category2, category3];
}