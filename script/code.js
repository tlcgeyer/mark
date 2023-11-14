let btnSubmit = document.querySelector('[data-submit]')

//create a function 
function displayMarks(){
let marks = document.querySelector ('[data-submit]').value 

//Label reference
let output = document.querySelector
('[data-output]')

//switch
//case--> is similar to your 'if" statement 
switch (true) {
    case marks < 50:
        console.log('Sorry, but you failed. Try again next time')
        break; //to stop the program because you done evaluating whats needed.

    case marks <= 59:
        output.textContent = 'You passed'
        break; 
    
    case marks <= 69:
        output.textContent = 'B';
        
    case marks <= 79:
        output.textContent = 'Distinction';
        break;

    case marks <= 89:
        output.textContent = 'B+';
        break;

    case marks == 100 :
        output.textContent = 'A+';
        break;

        default: 
        output.textContent = 'You are a ghost';
        break;
    }

}
//create a button
btnSubmit.addEventListener('click', displayMarks);