var sides=document.querySelectorAll(".side-input");
var checkHypotenuseBtn=document.querySelector('#hypotenuse-btn');
var outputL3=document.querySelector('#output');



function calculateSumOfSides(a,b){
    const sumOfSides=a*a+b*b;
    return sumOfSides;
}

function calculateHypotenuseOfTriangle(){
    const sumOfSides=calculateSumOfSides(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse=Math.sqrt(sumOfSides);
outputL3.innerText ="The length of the hypotenuse is "+hypotenuse+"cm";
}

checkHypotenuseBtn.addEventListener("click",calculateHypotenuseOfTriangle);
