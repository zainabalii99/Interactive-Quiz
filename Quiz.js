function result(){
    let score = 0;
    if(document.getElementById('correct1').checked)
    score+=2;
    else alert("your first question false");

    if(document.getElementById('correct2').checked)
    score+=2;
    else alert("your second question false");
    if(document.getElementById('correct3').checked)
    score+=2; 
    else alert("your third question false");
    if(document.getElementById('correct4').checked)
    score+=2;
    else alert("your forth question false");
    if(document.getElementById('correct5').checked)
    score+=2;
    else alert("your fifth question false so your grid is : ");
    alert("your score is :" +score);
}