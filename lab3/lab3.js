// Challege 1: reverse a word

let word = prompt ("What is the word you want to reverse?");
let reversedWord = "";
for (i = 1; i < word.length + 1; i ++) {
	reversedWord = reversedWord + word[word.length - i];
}
console.log (reversedWord);





// Challenge 2: count the consonants in a string

let sentence = prompt ("What is the string in which you wanna count all the consonants?");
let counter = 0;
let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
for (i = 0; i < sentence.length; i ++) {
	for (j = 0; j < consonants.length; j ++) {
		if (sentence[i] == consonants[j]) {
			counter ++;
		}
	}
}
console.log ("The number of consonants in \"" + sentence + "\" is ", counter);





// Challenge 5: count names

const countLine = function (names) {
	let numOfNames = 1;
	for (i = 0; i < names.length; i ++) {
		if (names[i] == " ") {
			numOfNames ++;
		}
	}
	return numOfNames;
}

console.log (countLine ("Tony, Jenny, Mary, Peter, Jack, Rose"));





// Challenge 6: replace "umbrella" with "coat"

let sentenceWithUmbrella = prompt ("Type in a sentence with the word \"umbrella\"");
let sentenceWithCoat = "";
for (i = 0; i < sentenceWithUmbrella.length; i ++) {
	if (sentenceWithUmbrella[i] == "u") {
		if (sentenceWithUmbrella[i + 1] == "m") {
			if (sentenceWithUmbrella[i + 2] == "b") {
				if (sentenceWithUmbrella[i + 3] == "r") {
					if (sentenceWithUmbrella[i + 4] == "e") {
						if (sentenceWithUmbrella[i + 5] == "l") {
							if (sentenceWithUmbrella[i + 6] == "l") {
								if (sentenceWithUmbrella[i + 7] == "a") {
									sentenceWithCoat += "coat";
									i += 7;
								} else {
									sentenceWithCoat += "u";
								}
							} else {
								sentenceWithCoat += "u";
							}
						} else {
							sentenceWithCoat += "u";
						}
					} else {
						sentenceWithCoat += "u";
					}
				} else {
					sentenceWithCoat += "u";
				}
			} else {
				sentenceWithCoat += "u";
			}
		} else {
			sentenceWithCoat += "u";
		}
	} else {
		sentenceWithCoat += sentenceWithUmbrella[i];
	}
}
console.log (sentenceWithCoat);





//Challenge 7: hashtags

//This is the number of lines of hashtags:
let noloh = Number (prompt ("How many lines of hashtags do you want?")) + 1;
let hashtags = "";
for (i = 1; i < noloh; i ++) {
	for (j = 0; j < noloh - i - 1; j ++) {
		hashtags += " ";
	}

	for (j = 0; j < 2 * i - 1; j ++) {
		hashtags += "#";
	}

	hashtags += "\n";
}
console.log (hashtags);