/*  Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {

    return str.replace(before, function (beforeMatch) {

        //check if the first character is uppercase if so, capitalise it
        var firstChar = beforeMatch.substring(0, 1);
        if (firstChar == firstChar.toUpperCase()) {

            return after[0].toUpperCase() + after.substring(1, after.length);
        } else {
            return after;
        }
    });
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // should return "A quick brown fox leaped over the lazy dog"
console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".