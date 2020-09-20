const myQustion = [
    {
        qustion:"where the css file should be linked ?",
        answers:{
         a:"on the head",
         b:"on the body",
         c:"after close body's element",
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


const output = [];

var bulidQuiz = ()=>{

    myQustion.forEach((currQustion,num)=>{
       
        var answers = []
        
        for(letter in currQustion.answers){
            answers.push(
                `<lable class="choice"> 
                    <input type="radio" name="qustion${num}" value="${letter}">
                    ${letter} :
                    ${currQustion.answers[letter]}
            
                </lable>`)
             
        }
        

    output.push(`

        <div class="qustion"> ${num+1}: ${currQustion.qustion}</div>

        <div class="answers"> ${answers.join("")}</div>

        `)

    

    })
    
}

bulidQuiz()

$("#quiz").append(output)


const result = $("#result") ;

var checkAnswers = ()=>{
    const answeredQuests = $(".answers")
    let count = 0;
    myQustion.forEach((currQustion,num) => {
        const answeredQuest = answeredQuests[num];
        let userAnswer = $(`input[name="qustion${num}"]:checked`).val() || ""
        
        if(userAnswer === currQustion.correcrAnswer){
            
        count++;
    }

    $("#results").text(`your result is : ${count} / ${myQustion.length}`)
   
    
});

}


var time = checkAnswers.setTimeout(5000)
$("h2").append(time )