const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector('#submit-btn');
const ouputL2=document.querySelector('#output');



const correctAnswers=[" 90°", "right angled"];
function calculateCorrectAnswers(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    ouputL2.innerText="your score is: "+score;
}
submitBtn.addEventListener("click",calculateCorrectAnswers);

