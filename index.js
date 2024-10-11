var winput = document.getElementById("winput");
var hinput = document.getElementById("hinput");
var cal = document.getElementById("cal");
var bmi;
cal.addEventListener("click",function(){
    var height = hinput.value;
    var weight = winput.value;

    if(height.trim() === "" || weight.trim() === ""){
        alert("sorry plz enter the appropriate values in the given fields");
    }
    else{
    
        if(height <= -1 || weight <= -1){
        alert("sorry invalid input");
    }
    else{
        bmi =weight/(height ** 2);
        alert(`${bmi.toFixed(2)}`)
    } 

    }
})




