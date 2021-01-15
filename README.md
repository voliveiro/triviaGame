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

For each, please include code examples.

Code snippet up to 20 lines.
Code design documents or architecture drawings / diagrams.
Unit 1 Post Mortem
What habits did I use during this unit that helped me?
What habits did I have during this unit that I can improve on?
How is the overall level of the course during this unit? (instruction, course materials, etc.)