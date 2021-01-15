# World History Trivia Quiz 
https://voliveiro.github.io/triviaGame/

## Description 
The quiz presents 10 multiple choice questions on world history, to be answered within a certain period of time. 

The quiz is a client-side application built using: 
- HTML, CSS and JavaScript (both Vanilla and JQuery); 
- Twitter Bootstrap (for the carousel presentation of the quiz); 
- Open Trivia Database API (https://opentdb.com/)

## Project Post-Mortem

### Approach and Process

#### What in my process and approach to this project would I do differently next time?

- Anyone who can read code can figure out the correct answers to the question by a process of elimination (because of the class names of each possible answer). I would find some way to make the correct answer more obscure. (Although I identify the correct answer by comparing its equivalence to the correct answer stored in the data object) 

#### What in my process and approach to this project went well that I would repeat next time?

- I used the key skills that we learned in unit 1 of the class: HTML, CSS, JavaScript (vanilla and JQuery), Flex and Bootstrap. 

--

### Code and Code Design

#### What in my code and program design in the project would I do differently next time?

- I would have a more systematic approach to determining when to use vanilla JavaScript and JQuery. For this project, I used either depending on whether I was more familiar with what I needed to do. 

```
//give "active" class to first questionDiv 
document.querySelector('.question-container').classList.add("active")
```

```
const endMessage = $('<p>').addClass('end-message')
```

#### What in my code and program design in the project went well? Is there anything I would do the same next time?

- One thing I struggled with was changing the visibility of / removing alternative answers once a player clicks on one of the answers. I took a different approach - and simply replicated the content in a new element. This reduced the complexity of what I was trying to achieve for the user.  (Notice that I use .remove() on the existing elements containing answers). Lesson: don't make things unnecessarily complex. 

```
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
```
- I appreciated the functionality that Twitter Bootstrap allowed when I was designing the carousel. Using what was already available helped to speed up development of the game. 


 
## Unit 1 Post Mortem

#### What habits did I use during this unit that helped me?
- Frequently testing my project. Playing the game I built repeatedly helped me to identify bugs/ problems I needed to fix. Bringing others in to help me test my work also helped me to identify bugs that I wouldn't otherwise have noticed. 

#### What habits did I have during this unit that I can improve on?
- More a skill than a habit: I could improve my familiarity with CSS and JQuery. 

#### How is the overall level of the course during this unit? (instruction, course materials, etc.)
- Probably just the right amount. I was helped by the fact that I already had familiarity with programming (Python, JavaScript, HTML and CSS). I learned a bit more CSS, and I learned JQuery in this unit. 
- I did have to take extra time to play around with and learn Bootstrap. It was a worthwhile investment of time, given how useful Bootstrap can be 