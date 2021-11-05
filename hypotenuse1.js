var sides=document.querySelectorAll(".side-input");
var checkHypotenuseBtn=document.querySelector('#hypotenuse-btn');
var outputL3=document.querySelector("#textOutput");


function add(){
    let sumSides=Math.pow(Number(sides[0].value),2)+Math.pow(Number(sides[1].value),2);
   
    let hypotenuseResult=Math.sqrt(sumSides);
    console.log("clicked",hypotenuseResult);
    outputL3.innerText=`Length of Hypotenuse is:  ${sumSides}  cm.`;
    
};

checkHypotenuseBtn.addEventListener("click",add);