$(() => {

console.log ("app.js is linked")

//to check how many questions have been answered 

let questionsAnswered = 0

$('.reset').on('click', ()=> {
       location.reload();
})

const triviaGame = () => {
       console.log ("game is on")
        
       const promise = $.ajax({
              url: "https://opentdb.com/api.php?amount=100&category=23"
              });

              promise.then(
              (data)=>{
                     
                     //accessing the required data
                     dataResource=data["results"]

                     //accessing only MCQ-type questions
                     let dataResourceMCQ = []
                     for (let i=0; i<dataResource.length; i++) {
                            let item =dataResource[i];
                            if (item["type"] == "multiple") {
                                   dataResourceMCQ.push(item)
                            }
                     }

                     //select 10 questions 
                     let dataResourceMCQ_10qns = [ ]
                     for (let i=0; i<10; i++) {
                            //select a random Item from dataResourceMCQ
                            randoItem = dataResourceMCQ[Math.floor(Math.random()*dataResourceMCQ.length)];
                            dataResourceMCQ_10qns.push(randoItem);
                            // remove the random Item from dataResourceMCQ to prevent duplicate questions
                            let indexNo = dataResourceMCQ.indexOf(randoItem);
                            dataResourceMCQ.splice(indexNo, 1)
                     }

                     

                     for (let i=0; i<dataResourceMCQ_10qns.length; i++) {
                            let item = dataResourceMCQ_10qns[i]
                            let question = item["question"]
                            let correctAnswer = item["correct_answer"]
                            let wrongAnswers = item["incorrect_answers"]

                            //create a container to hold each question and possible answers

                            let questionDiv = $('<div>').addClass('question-container')
                            questionDiv.addClass('carousel-item')

                            let questionNoDiv =$('<h4>').addClass('question-number')
                            questionNoDiv.html(`Question ${i+1}`)

                            questionDiv.append(questionNoDiv)

                            let answerDiv = $('<div>').addClass('answer-container')
                            answerDiv.attr('id', `container${i}`)

                            //create element for the question and append it to the question-container
                            let questionP = $('<p>').addClass("question-text").attr('id', `qntext${i+1}`).text(question)
                            questionDiv.append(questionP)

                            //make sure that the possible answers are randomly displayed. To do this, create an array to host all the possible answers. Then, shuffle the array and display the answers in turn. 

                            let possibleAnswers=[ ]

                            let correctAnswerP = $('<p>').addClass("answers-text correct").attr('id', `correct`).text(correctAnswer);

                            possibleAnswers.push(correctAnswerP)

                            for (let i=0; i<wrongAnswers.length; i++) {
                                   let wrongAnswerP = $('<p>').addClass('answers-text wrong').attr('id', `wrong${i}`)
                                   wrongAnswerP.html(wrongAnswers[i])
                                   possibleAnswers.push(wrongAnswerP)

                            }

                            //shuffling possibleAnswers

                            let currentIndex = possibleAnswers.length, temporaryValue, randomIndex;
                            
                            // While there remain elements to shuffle...
                            while (0 !== currentIndex) {
                            
                                   // Pick a remaining element...
                                   randomIndex = Math.floor(Math.random() * currentIndex);
                                   currentIndex -= 1;
                            
                                   // And swap it with the current element.
                                   temporaryValue = possibleAnswers[currentIndex];
                                   possibleAnswers[currentIndex] = possibleAnswers[randomIndex];
                                   possibleAnswers[randomIndex] = temporaryValue;
                            }
                     
                     for (item of possibleAnswers){
                            answerDiv.append(item)
                     }
                            questionDiv.append(answerDiv)

                            $('main').append(questionDiv)


                     }

                     //give "active" class to first questionDiv 

                     document.querySelector('.question-container').classList.add("active")

                     

                     //visiually indicate if right or wrong answer has been clicked

                     let qnContainerNodes = document.querySelectorAll('.question-container')

                     let answerContainerArray=[]

                     for (let i=0; i<qnContainerNodes.length; i++){
                     let answerSection=qnContainerNodes[i].querySelector('.answer-container');
                     answerContainerArray.push(answerSection)

                     }

                     //a function to display the final message after 10 questions have been answered. The setTimeOut function allows the player to see whether he/she got the last answered correct or wrong. 

                     const gameDone = () => {
                            setTimeout ( ()=> {
                                   if (questionsAnswered==10) {
                                          console.log ("Game is done")
                                          const endMessage = $('<p>').addClass('end-message')
                                          endMessage.html(`Thank you for playing! You scored ${correctAnswerNumber} points!`)
                                          $('#trivia-carousel').hide(); 
                                          $('.carousel-control-prev').hide(); 
                                          $('.carousel-control-next').hide();
                                          $('.final-message').append(endMessage);
                                          $('.final-message').css('visibility', 'visible'); 
                                          $('#bar-top').hide(); 
                                           
                                   }

                            }, 2000);
                            
                     }

                     

                     //to keep track of correct answers 
                     let correctAnswerNumber=0

                     

                     //highlight green if correct answer picked

                     

                     for (let i=0; i<answerContainerArray.length; i++) { 
                     
                            answerContainerArray[i].querySelector('.correct').addEventListener('click', function() {
                                   //increasing score
                                   correctAnswerNumber++
                                   console.log (questionsAnswered)
                                   document.querySelector('.score').innerHTML=correctAnswerNumber; 
                                   
                                   const newP = document.createElement('p'); 
                                   newP.textContent=document.querySelector('.correct').textContent
                                   newP.style.background='rgb(138, 250, 138)'
                                   
                                   let allPs = answerContainerArray[i].querySelectorAll('.answers-text')
                                   for (let k=0; k<allPs.length; k++) {
                                          allPs[k].remove()
                                   }
                                   answerContainerArray[i].appendChild(newP)
                                   questionsAnswered ++
                                   console.log (questionsAnswered, "questions answered")
                                   gameDone(); 

                            })
                     
                            
                     };

                     //higlight red if wrong answer picked 

                     for (let i=0; i<answerContainerArray.length; i++) {
                            let allWrongAnswers = answerContainerArray[i].querySelectorAll('.wrong')
                            for (let k=0; k<allWrongAnswers.length; k++) {
                                   allWrongAnswers[k].addEventListener('click', function() {
                                          console.log (questionsAnswered)
                                          const newP = document.createElement('p'); 
                                          newP.textContent=allWrongAnswers[k].textContent; 
                                          newP.style.background='pink'
                                          let allPs = answerContainerArray[i].querySelectorAll('.answers-text')
                                          for (let k=0; k<allPs.length; k++) {
                                                 allPs[k].remove()
                                          }
                                          answerContainerArray[i].appendChild(newP)
                                          questionsAnswered ++
                                          console.log (questionsAnswered, "questions answered")
                                          gameDone(); 

                                   }); 

                            }

                            

              
                     }

                     
              
                     
                     
              }),

              ()=>{
                     console.log('bad request');
              };
       }

triviaGame(); 

const endgame = () => {
       if (questionsAnswered!=10) {
              $('main').hide();
              $('.carousel-control-prev').hide(); 
              $('.carousel-control-next').hide(); 
              const score = $('.score').text(); 
              const endMessage = $('<p>').addClass('end-message');
              endMessage.html(`You've run out of time :(  <br> Thank you for playing! You scored ${score} points!`)
              $('.final-message').append(endMessage);
              $('.final-message').css('visibility', 'visible'); 
       } else {
              console.log ("Do nothing")
       }
       

}

setTimeout(endgame, 60000)

}); 

 