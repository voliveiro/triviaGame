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
                     // console.log (question)
                     // console.log (correctAnswer)
                     // for (item of wrongAnswers) {
                     //        console.log (item)
                     // }

                     //create a container to hold each question and possible answers

                     let questionDiv = $('<div>').addClass('question-container')

                     //display questions
                     let questionP = $('<p>').addClass("question-text").attr('id', `qntext${i+1}`)
                     questionP.text(question)

                     //display correct answer

                     let correctAnswerP = $('<p>').addClass("answers-text correct").attr('id', `correct`).text(correctAnswer)

                     questionDiv.append(questionP)
                     questionDiv.append(correctAnswerP)

                     //display wrong answers 


                     for (let item of wrongAnswers) {
                            $('<p>').addClass("answers-text wrong"). text(item);
                            questionDiv.append(item)

                     }


                      
                     

                     $('main').append(questionDiv)

                     


              }

              //

              //assigning span IDs for display

              // display questions 

              console.log (dataResourceMCQ.length)


              for (let i=0; i<dataResource.length; i++) {
                     let item =dataResource[i]
                     $(`${item.questionSpanID}`).text(item.question)
              }

              // //read values from input fields 

              // let answer1 = $('#answer1').value

              // console.log (answer1)
              

              // $('.display-results').text(JSON.stringify(data["results"]))
       },
       ()=>{
              console.log('bad request');
       }
       );

})

 