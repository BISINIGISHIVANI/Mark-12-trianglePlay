const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector('#is-triangle');
const outputL1=document.querySelector('#ouput');

isTriangleBtn.addEventListener("click",isTriangle);

function calculateSumOfAngles(a,b,c){
    const sumOfAngles=a+b+c;
    return sumOfAngles;
}
function isTriangle(){
    sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        outputL1.innerText="yes,your given angles can form triangle";
    }
    else{
        outputL1.innerText="No,given angle do not form Triangle";
    }

}