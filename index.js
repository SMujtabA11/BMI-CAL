var winput = document.getElementById("winput");
var hinput = document.getElementById("hinput");
var cal = document.getElementById("cal");
var innerDiv = document.getElementById("innerDiv");
var parentDiv = document.getElementById("parentDiv");
var bmi;
var afterFixed;
cal.addEventListener("click",function(){
    var height = hinput.value;
    var weight = winput.value;
    if(height.trim() === "" || weight.trim() === ""){
        alert("sorry plz enter the appropriate values in the given fields");
    }
    else{
    
        if(height <= 0 || weight <= 0){
        alert("sorry invalid input");
    }
    else {
        bmi = (weight / height ** 2); 
        afterFixed = bmi.toFixed();
        var p = document.createElement("p");
        p.classList ="output";
        parentDiv.style.height="420px";
        innerDiv.appendChild(p);
        // Using if-else for BMI category check
        if (bmi >= 30) {
            p.innerText=(`Your BMI:${afterFixed} (Obesity)`);
        } else if (bmi >= 25 && bmi <=29.9) {
            p.innerText=(`Your BMI:${afterFixed} (Over Weight)`);
            ("Overweight");
        } else if (bmi >= 18.5 && bmi <=24.9) {
            p.innerText=(`Your BMI:${afterFixed} (Normal Weight)`);
            ("Normal weight");
        } else {
            p.innerText=(`Your BMI:${afterFixed} (Under Weight)`);       
        }       
        hinput.value = '';
        winput.value = '';
        }
        winput.addEventListener("click",function(){
            p.innerText='';
            parentDiv.style.height="400px"
            p.style.padding="0px"
        })
}
})

gsap.set("body", { overflow: "hidden" });
var t1 = gsap.timeline();
t1.from("#parentDiv",{
    x:-700,
    duration:3,
    delay:1,
} , "<")
t1.from("#innerDiv",{
y:700,
    duration:3,
} , "<")





