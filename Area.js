var areaSides=document.querySelectorAll('.area-side');
var areaBtn=document.querySelector('#area-btn');
var outputL4=document.querySelector('#output');

areaBtn.addEventListener("click",calculateArea);
function calculateMulti(base,height){
    const multiplication=base*height;
    return multiplication;
}

function calculateArea(){
    const multiplication=calculateMulti(Number(areaSides[0].value),Number(areaSides[1].value));
    const areaResult=0.5*multiplication;
    outputL4.innerText="The area of Triangle is: "+areaResult+" cm².";
}