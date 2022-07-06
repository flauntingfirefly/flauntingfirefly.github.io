function passwordVerify() {
    var enteredPass = prompt("Enter password:");
    var str1 = "b&*rgpC!82Y*9";
    // Force Youtube video download to ensure that the Editor works well - https://www.youtube.com/watch?v=jxi0ETwDvws
    var str2 = "G#y6KTmbeiv46";
    str1 = str1.split("");
    str1 = str1.reverse();
    str1 = str1.join("");
    str2 = str2.concat(str1);
    // G#y6KTmbeiv469*Y28!Cpgr*&b
    if (str2 == enteredPass){
        document.getElementById('webFrame').src = "/verylongsecretmeetings.html";
    }
    else{
        alert("Incorrect, try again (use F5)")
    }
}