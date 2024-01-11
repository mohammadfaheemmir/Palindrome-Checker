function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
function palindromeCheck(){
    let msg = document.getElementById("msg").value; 
    let ans = document.getElementById("answer");
    if(msg==""){
        alert("Don't make me fool you haven't entered any string");
    }else{
        msg = msg.toLowerCase();
        if(msg == reverseString(msg)){
            ans.innerHTML = "It's Palindrome!";
        }else{
            ans.innerHTML = "It's not Palindrome!";
        }
    }
}