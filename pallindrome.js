function pallindrome(word){
    let i=0;
    let j=word.length-1;
    if ((word == null) || (word.length == 0)){
        return "the word is pallindrome"
    }else {
        while ((i<=word.length/2)&&(j>=i)){
            if (word[i] != word[j]){
               return "the word is not pallindrome"
            }else {
                i++;
                j--;
            }
        }
        return "the word is pallindrome"
    }
}