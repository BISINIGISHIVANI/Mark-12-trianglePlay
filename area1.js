let inputs=document.querySelectorAll(".area-side");
let areaBtn=document.querySelector("#area-btn");
let textOutput=document.querySelector("#ouput");

areaBtn.addEventListener("click",function(){
    var areaResult=0.5*(Number(inputs[0].value)+Number(inputs[1].value));
    
    textOutput.innerText=`The area of the triangle is ${areaResult}  cm²`;
});
