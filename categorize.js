var primaryCats = {
	NEED:["ORALITY","ANALITY","SEX"],
	SENSATION:["TOUCH","TASTE","ODOR","GEN_SENSATION","SOUND","VISION","COLD","HARD","SOFT"],
	DEFENSIVE_SYMBOL:["PASSIVITY","VOYAGE","RANDOM MOVEMENT","DIFFUSION","CHAOS"],
	REGR_KNOL:["UNKNOW","TIMELESSNES","COUNSCIOUS","BRINK-PASSAGE","NARCISSISM","CONCRETENESS"],
	ICARIAN_IM:["ASCEND","HEIGHT","DESCENT","DEPTH","FIRE","WATER"]
};
var secondaryCats = {
	NONEMOTION:["ABSTRACT_TOUGHT","SOCIAL_BEHAVIOR","INSTRU_BEHAVIOR","RESTRAINT","ORDER","TEMPORAL_REPERE","MORAL_IMPERATIVE"],
	EMOTIONS:["POSITIVE_AFFECT","ANXIETY","SADNESS","AFFECTION","AGGRESSION","EXPRESSIVE_BEH","GLORY"]
};
var categories = {
	PRIMARY:primaryCats,
	SECONDARY:secondaryCats
};

function wordCounts(str){
	str = str.replace(/[^\w\s]|_/g, "").toUpperCase();
	words = str.split(/\s+/g);
	var catCount = {};
	for (word in words){
		var cats = getCat(words[word]);
		if (cats){
			for (cat in cats){
				if (catCount[cats[cat]] == undefined){
					catCount[cats[cat]] = 0;
				}
				catCount[cats[cat]]++;
			}
		}
	}
	return catCount;
}

function getEmotionData(counts){
	var outCounts = {};
	var emotions = categories["SECONDARY"]["EMOTIONS"];
	for (i in emotions){
		var emotion = emotions[i];
		if (counts[emotion]){
			outCounts[emotion]=counts[emotion];
		}
		else{
			outCounts[emotion]=0;
		}
	}
	return outCounts;
}
		
		
//getCategories:
	//IN: String word
	//ARRAY OF CATEGORIES