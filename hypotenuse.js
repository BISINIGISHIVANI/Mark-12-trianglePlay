var sides=document.querySelectorAll(".side-input");
var checkHypotenuseBtn=document.querySelector('#hypotenuse-btn');
var testOutput=document.querySelector("#output1");



// function calculateSumOfSides(a,b){
//     const sumOfSides=a*a+b*b;
//     return sumOfSides;
// }

// function calculateHypotenuseOfTriangle(){
//     const sumOfSides=calculateSumOfSides(Number(sides[0].value),Number(sides[1].value));
//     const hypotenuse=Math.sqrt(sumOfSides);
//     outputL3.innerText="The length of the hypotenuse is "+hypotenuse;
// }

checkHypotenuseBtn.addEventListener("click",function(){
    let sumOfSides1=Math.pow(Number(sides[0].value),2)+Math.pow(Number(sides[1].value),2)
    let lengthHypotenuse=Math.sqrt(sumOfSides1);
    console.log("clicked",lengthHypotenuse,sumOfSides1);
    // outputL3.innerText="hi";
});

testOutput.innerText="hi";
