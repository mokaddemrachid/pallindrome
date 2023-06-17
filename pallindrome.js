function pallindrome(word){
/*counter (i) begin from the first caracter of the word*/ 
    let i=0;
/*counter (j) begin from the last caracter of the word*/ 
    let j=word.length-1;
/* first condition when it's an empty word or contains one caracter then the word is pallindrome */
    if ((word == null) || (word.length == 0)){
        return "the word is pallindrome"
    }else {
        while ((i<=word.length/2)&&(j>=i)){
/*second condition if the caracter from the left is diffrent
 from the caracter on the right then the function will
  return the message not pallindrome */
            if (word[i] != word[j]){
               return "the word is not pallindrome"
            }
/*if the caracters are the same then the counter (i) will move
 to the next caracter and the counter (j) will make a step back (-1) */
            else {
                i++;
                j--;
            }
        }
        return "the word is pallindrome"
    }
}