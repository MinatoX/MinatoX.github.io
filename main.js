
//UPDATE ROUND INFO MONTHLY; THIS VERSION IS FOR THE AUGUST COLISEUM IN THE GLOBAL VERSION OF KHUX

var roundNum = 0; //Range from 1 to 10; id for the round the user is searching for
var enemyLevel = 0; //What level the enemies are

var enNameCont; //Container for the enemy names
var enName; //Holds enemy names
var theDiv; //Container for our text

var tier; //What tier the user is searching in
var theRound; //What round they're searching for

var italic; //See if enemy name needs to be italicized

var enColor;

//Rounds variable contains the name for every enemy in each round
var rounds = [["FIGHT 1:", "Ring-A-Ding", "Darkball", "FIGHT 2:", "Darkball", "Darkball", "Bag O' Coal"],
["FIGHT 1:", "Bag O' Coins", "Bag O' Coins", "Bag O' Coins", "Bag O' Coins", "Bag O' Coins", "FIGHT 2:", "Powerwild", "Bag O' Coins", "Bag O' Coins", "FIGHT 3:", "Mega-Shadow"],
["FIGHT 1:", "Pester Jester [CAUTION]", "Gummi Hammer", "Fat Bandit"],
["FIGHT 1:", "Wizard", "FIGHT 2:", "Emerald Sonata", "FIGHT 3:", "High Wizard"],
["FIGHT 1:", "Gargoyle Knight", "Wizard", "Blue Gummi Copter", "FIGHT 2:", "Emerald Sonata", "Bad Dog", "Wicked Wick"],
["FIGHT 1:", "Lion Dancer", "Lion Dancer", "Lion Dancer", "FIGHT 2:", "Large Rice Cake", "Lion Dancer", "Lion Dancer", "Lion Dancer", "FIGHT 3:", "Lion Dancer", "Lion Dancer", "Lion Dancer", "Lion Dancer"],
["FIGHT 1:", "Aeroplane", "Ice Plant", "FIGHT 2:", "Fire Plant", "Black Gummi Copter"],
["FIGHT 1:", "Invisible", "Gargoyle Knight", "Wizard"],
["FIGHT 1:", "Morning Star", "Gargoyle", "FIGHT 2:", "Cannon Gun", "Gummi Hammer"],
["FIGHT 1:", "Huge Snowman"]];

var existingText = []; //Mainly here to remove existing text if the user searches for multiple rounds

function getRoundInfo() {
	//Reset everything
	roundNum = 0;
	enemyLevel = 0;
	tier = 1;
	theRound = 0;

	//Get rid of existing text
	if (existingText.length!=0) {
		for (var i=existingText.length; i>0;i--) {
			existingText[i-1].parentNode.removeChild(existingText[i-1]);
			existingText.splice(i-1, 1);
		}
	}

	//Get the tier and round number
	tier = document.getElementById("tier").value;
	theRound = document.getElementById("round").value;

	calculateEnemies();
}

function calculateEnemies() {
	if (isNaN(tier) || isNaN(theRound) || tier <= 0 || tier >= 15 || theRound > 10 && tier > 3 && tier < 12 || theRound > 999 || theRound > 15 && tier <= 3 && tier >= 2 || theRound > 20 && tier == 1 || tier == 13 && theRound > 300 || theRound <= 0) { //Make sure the user actually put in something usable
		alert("You put in some invalid information!")
	} else {

		if (tier > 1) {
			//enemyLevel += tier*10;
			if (tier == 2) {
				enemyLevel += 20;
			} else if (tier == 3) {
				enemyLevel += 35;
			} else if (tier >= 4 && tier <= 11) {
				tier -= 3;
				enemyLevel += 40+(tier*10);
			} else if (tier == 12) {
				tier-= 3;
				enemyLevel += 80+(tier * 10);
			} else if (tier == 13) {
				tier -= 3;
				enemyLevel += 170+(tier*10);
			} else if (tier = 14) {
				enemyLevel+=570;
			}
		}

		while (theRound > 0) {

			if (roundNum < 10) {
				roundNum++;
			} else {
				roundNum = 1;
			}

			enemyLevel++;
			theRound--;
		}
		typeRound();
	}
}

function typeRound() {
	theDiv = document.getElementById("results");

	enNameCont = document.createElement("p");
	enName = document.createTextNode("Round Level: "+enemyLevel);
	enNameCont.appendChild(enName);
	existingText.push(enNameCont);
	theDiv.appendChild(enNameCont);

	for (var enCount = 0; enCount < rounds[roundNum-1].length; enCount++) {
		if (rounds[roundNum-1][enCount].search("FIGHT") != -1) { //Bold text
			enNameCont = document.createElement("b");
			italic = true;
		} else {
			if (italic) {
				enNameCont = document.createElement("i");
				italic = false;
			} else {
				enNameCont = document.createElement("p");
			}

			//Set attribute color
			if (findText("Bag O' Coins", enCount) != -1 || findText("Powerwild", enCount) != -1 || findText("Mega-Shadow", enCount) != -1 || findText("Pester Jester", enCount) != -1 || findText("Gummi Hammer", enCount) != -1 || findText("Fat Bandit", enCount) != -1 ||
				findText("Gargoyle Knight", enCount) != -1 || findText("Bad Dog", enCount) != -1 || findText("Wicked Wick", enCount) != -1 || findText("Lion Dancer", enCount) != -1 || findText("Large Rice Cake", enCount) != -1 || findText("Morning Star", enCount) != -1)
			{	
				enNameCont.style.color = "#FF0000";
			} else if (findText("Ring-A-Ding", enCount) != -1 || findText("Darkball", enCount) != -1 || findText("Bag O' Coal", enCount) != -1 || findText("Wizard", enCount) != -1 || findText("Emerald Sonata", enCount) != -1 || findText("High Wizard", enCount) != -1 ||
				findText("Blue Gummi Copter", enCount) != -1 || findText("Ice Plant", enCount) != -1 || findText("Fire Plant", enCount) != -1 || findText("Huge Snowman", enCount) != -1)
			{
				enNameCont.style.color = "#0000FF";
			} else if (findText("Aeroplane", enCount) != -1 || findText("Black Gummi Copter", enCount) != -1 || findText("Invisible", enCount) != -1 || findText("Gargoyle", enCount) != -1 || findText("Cannon Gun", enCount) != -1) {
				enNameCont.style.color = "#228B22";
			}

		}
		enName = document.createTextNode(rounds[roundNum-1][enCount]);
		enNameCont.appendChild(enName);
		theDiv.appendChild(enNameCont);
		existingText.push(enNameCont);
	}
}

function findText(str, enCount) {
	enColor = rounds[roundNum-1][enCount].search(str);
	return enColor;
}