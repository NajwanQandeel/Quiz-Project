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
        qustion:"where the css file should be linked ?",
      
         answers:{
         a:"on the head",
         b:"on the body",
         c:"after close body's element",
         
     },
     
         correcrAnswer: "a"
  
  },

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
    qustion:"where the css file should be linked ?",
  
 answers:{
     a:"on the head",
     b:"on the body",
     c:"after close body's element",
     
 },
 
 correcrAnswer: "a"

},

{
    qustion:"where the css file should be linked ?",
  
    answers:{
     a:"on the head",
     b:"on the body",
     c:"after close body's element",
     
   },
  
    correcrAnswer: "a"
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


const result ;

var checkAnswers = ()=>{




}