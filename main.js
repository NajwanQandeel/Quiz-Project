/*first step:
-- we create our questions in an array of objects,
-- each object have three keys (qustion,answers,correctAnswer)
-- the value of question key  is a string 
-- the value of answers key is an object with four keys ,each key has a string value (these values reflect the choices for each question)
-- the value of correcrAnswer key is a string (the correct choice or answer for  the question )
 */
const myQustion = [
    {
        qustion:"What is laughing gas? ?",
        answers:{
         a:"Nitrous Oxide",
         b:"Carbon monoxide",
         c:"Sulphur dioxide",
         d:"Hydrogen peroxide",
        },
      correcrAnswer: "a"
  }, 
  {
      qustion:"The hardest substance available on earth is?",
       answers:{
       a:"Gold ",
       b:"Iron",
       c:"Diamond",
       d:"Platinum"
   },
       correcrAnswer: "c"
},
  {
      qustion:"Which of the gas is not known as green house gas ?",
      answers:{
      a:"Methane",
      b:"Nitrous oxide ",
      c:"Carbon dioxide ",
      d:"Hydrogen"
   },
      correcrAnswer: "d"
  },
{
  qustion:"Washing soda is the common name for ?",
answers:{
   a:"Sodium carbonate",
   b:"Calcium bicarbonate",
   c:"Sodium bicarbonate",
   d:"Calcium carbonate"
},
correcrAnswer: "a"
},
{
  qustion:"Chemical formula for water is ?",
  answers:{
   a:"NaAlO2 ",
   b:"H2O",
   c:"Al2O3 ",
   d:"CaSiO3 "
 },
  correcrAnswer: "b"
},
{
  qustion:"Which of the following is used in pencils ?",
  answers:{
   a:"Graphite",
   b:"Silicon",
   c:"Charcoa",
   d:"Phosphorous"
 },
  correcrAnswer: "a"
},
{
  qustion:"Which of the following is a non metal that remains liquid at room temperature ?",
  answers:{
   a:"Phosphorous",
   b:"Bromine",
   c:"Chlorine",
   d:"Helium"
 },
  correcrAnswer: "b"
},
{
    qustion:"The group of metals Fe, Co, Ni may best called as ?",
    answers:{
     a:"transition metals",
     b:"main group metals",
     c:"alkali metals",
     d:"rare metals"
   },
    correcrAnswer: "a"
  },
  {
    qustion:"The element common to all acids is ?",
    answers:{
     a:"hydrogen",
     b:"carbon",
     c:"sulphur",
     d:"oxygen"
   },
    correcrAnswer: "a"
  },
  {
        qustion:"The element common to all acids is ?",
        answers:{
            a:"hydrogen",
            b:"carbon",
            c:"sulphur",
            d:"oxygen"
          },
           correcrAnswer: "a"
        },
     {      
        qustion:"Non stick cooking utensils are coated with ?",
        answers:{
         a:"Teflon",
         b:"PVC",
         c:"black paint",
         d:"polystyrene"
       },
        correcrAnswer: "a"
      },
      {     
        qustion:"Potassium nitrate is used in ?",
        answers:{
         a:"medicine",
         b:"fertiliser",
         c:"salt",
         d:"glass"
       },
        correcrAnswer: "b"
      }
]

/* second step :
-- we create a function called (buildQuiz) to build our quiz 
 */
const output = [];

var bulidQuiz = ()=>{
   //for each question in myQuestion array 
    myQustion.forEach((currQustion,num)=>{
       
        var answers = []
      //for each choice for the same question
        for(letter in currQustion.answers){
           //add html radio button
            answers.push(
                `<lable class="choice"> 
                    <input type="radio" name="qustion${num}" value="${letter}">
                    ${letter} :
                    ${currQustion.answers[letter]}
            
                </lable>`)
             
        }
        
 // add this question and its answers to the output 
    output.push(`

        <div class="qustion"> ${num+1}: ${currQustion.qustion}</div>

        <div class="answers"> ${answers.join("")}</div>

        `)

    

    })
    
}

bulidQuiz()
 //combine our output list into one string of html and put it on the page
$("#quiz").append(output)


const result = $("#result") ;
// gather answer containers from our quiz
var checkAnswers = ()=>{
    const answeredQuests = $(".answers")
    	// keep track of user's answers
    let count = 0;
    // for each question...
    myQustion.forEach((currQustion,num) => {
        const answeredQuest = answeredQuests[num];
        // find selected answer
        let userAnswer = $(`input[name="qustion${num}"]:checked`).val() || ""
        // if answer is correct
        if(userAnswer === currQustion.correcrAnswer){
        // add to the number of correct answers    
        count++;
    }
//// on submit, show results --  show number of correct answers out of total
    $("#results").text(`your result is : ${count} / ${myQustion.length}`)
   
    
});

}


var time = checkAnswers.setTimeout(5000)
$("#TimeShow").append(time)