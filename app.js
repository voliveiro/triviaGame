$(() => {

console.log ("app.js is linked")

$('#question-text').css('color', 'red') // works 

const promise = $.ajax({
       url: "http://jservice.io/api/category?id=530"
       });

       promise.then(
       (data)=>{
              
              //the data we want is in data.clues 
              dataResource = data.clues
              // console.log (dataResource)
              
              //let's make sure dataResource contains only the data that is needed for the game. 

              for (item of dataResource) {
                     delete item["value"]
                     delete item["airdate"]
                     delete item["category_id"]
                     delete item["game_id"]
                     delete item["invalid_count"]
              }
              
              // console.log(dataResource)

              //Create a function that selects a question-and-answer object from dataResource. Delete that object from dataResource once chosen to make sure the same question isn't selected again 

              const selectObject = () => {
                     //select a random object from the dataResource list 
                     let selectedObject = dataResource[Math.floor(Math.random()* dataResource.length)]
       
                     // now delete selectedObject from dataResource 
                     // console.log (dataResource.length)
                     selectedObjectIndexNo = dataResource.indexOf(selectedObject) 
                     dataResource.splice(selectedObjectIndexNo,1)
                     // console.log (dataResource.length) Length reduces by one. 
       
                     return selectedObject
              }

              $('.display-results').text(JSON.stringify(dataResource))
       },
       ()=>{
              console.log('bad request');
       }
       );

})



// const axios = require('axios');
// let url = "http://jservice.io/api/category?id=530"
// console.log("connected")

// axios.get(url).then(function(response){
//        results = response.data 
//        dataResource=results["clues"]
//        // console.log (dataResource[0])

//        //slim down dataResource so that it only has the properties we need 
//        for (item of dataResource) {
//               delete item["value"]
//               delete item["airdate"]
//               delete item["category_id"]
//               delete item["game_id"]
//               delete item["invalid_count"]
//        }

//        // console.log(dataResource[0])
//        // only properties now are id, answer, and question 

//        //create a function that selects an object from dataResource and then removes it from dataResource 

//        const selectObject = () => {
//               //select a random object from the dataResource list 
//               let selectedObject = dataResource[Math.floor(Math.random()* dataResource.length)]

//               // now delete selectedObject from dataResource 
//               // console.log (dataResource.length)
//               selectedObjectIndexNo = dataResource.indexOf(selectedObject) 
//               dataResource.splice(selectedObjectIndexNo,1)
//               // console.log (dataResource.length) Length reduces by one. 

//               return selectedObject
//        }

//        const rightAnswerObject = selectObject()

//        const question = rightAnswerObject["question"]
//        document.querySelector("#question-text").style.color="red"

//        const rightAnswer = rightAnswerObject["answer"]

//        const wrongAnswerObject1 = selectObject()
//        const wrongAnswer1 = wrongAnswerObjec1["answer"]

//        const wrongAnswerObject2 = selectObject()
//        const wrongAnswer2 = wrongAnswerObjec2["answer"]

        
       

       
       











// }); 

 

 


