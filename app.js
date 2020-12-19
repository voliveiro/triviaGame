$(() => {

console.log ("app.js is linked")

$('#question-text').css('color', 'red') // works 

const promise = $.ajax({
       url: "https://opentdb.com/api.php?amount=100&category=23"
       });

       promise.then(
       (data)=>{
              
              //the data we want is in data.clues 
              dataResource=data["results"]

              let dataResourceMCQ = []

              for (let i=0; i<dataResource.length; i++) {
                     let item =dataResource[i];
                     if (item["type"] == "multiple") {
                            dataResourceMCQ.push(item)
                     }
              }
              //select 10 questions 

              dataResourceMCQ = dataResource.slice(0,10)

              for (let i=0; i<dataResourceMCQ.length; i++) {
                     let item = dataResourceMCQ[i]
                     let question = item["question"]
                     let correctAnswer = item["correct_answer"]
                     let wrongAnswers = item["incorrect_answers"]

                     //create a container to hold each question and possible answers

                     let questionDiv = $('<div>').addClass('question-container')

                     let answerDiv = $('<div>').addClass('answer-container')

                     //create element for the question and append it to the question-container
                     let questionP = $('<p>').addClass("question-text").attr('id', `qntext${i+1}`).text(question)
                     questionDiv.append(questionP)

                     //create an Array to host the possble answers

                     let possibleAnswers=[ ]

                     //create element for the correct answer
                     //push correctAnswerP to possibleAnswers

                     let correctAnswerP = $('<p>').addClass("answers-text correct").attr('id', `correct`).text(correctAnswer);

                     possibleAnswers.push(correctAnswerP)

                     for (let item of wrongAnswers) {
                            possibleAnswers.push($('<p>').addClass("answers-text wrong"). text(item))

                     }

                     //possibleAnswers is now an array of elements with all the possible answers
                     console.log (possibleAnswers)

                     //randomly display each element in possibleAnswers 

                     //first shuffle possibleAnswers

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

              
       

  
              

               
       },
       ()=>{
              console.log('bad request');
       }
       );

})

 