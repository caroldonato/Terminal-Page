
function closeInput()
{
    // Querying for terminal-window element
    const terminal = document.querySelector('#terminal-window')

    // Create last input label
    const lastinput = document.createElement('label')
    lastinput.className = 'command-label'
    lastinput.innerHTML = document.querySelector('.command').value

    // Removing input
    terminal.lastElementChild.remove()
    terminal.appendChild(lastinput)

}

function putInput()
{
    // Querying for terminal-window element
    const terminal = document.querySelector('#terminal-window')

    // Creating new elements
    const input_label = document.createElement('label')
    const input = document.createElement('input')

    // Setting new element properties
    input_label.innerHTML = '[<b>user</b> <i>Desktop</i>]# '
    input_label.className = 'command-label'
    input.setAttribute('type', 'text')
    input.className = 'command'

    // Appending children elements to terminal-window
    terminal.appendChild(input_label)
    terminal.appendChild(input)

    // Add event listener to input element

    input.addEventListener('keypress', function (e) {
        let key = e.which || e.keyCode;
        if (key === 13) { // Pressed enter
          execCommand(input.value)
        }
    });

    // Changing cursor focus to new input element
    input.focus()
}

function putMan()
{
    const terminal = document.querySelector('#terminal-window')
    const manual = document.createElement('p')
    manual.className = 'intro'
    manual.innerHTML = 'man <br> about <br> skills <br> tools <br> study <br> contact'

    closeInput()
    terminal.appendChild(manual)
    putInput()
}

function putAbout()
{
    const terminal = document.querySelector('#terminal-window')
    const about = document.createElement('p')
    about.className = 'intro'
    about.innerHTML = `
                    <b>Name: </b> Caroline Donato <br>
                    <b>Status: </b> Looking for internship <br>
                    <b>Education: </b> 4th year undergrad in CompSci <br>
                    <b>Affiliation: </b> UEL - Londrina State University (Londrina, PR - Brazil) <br>
    `
    
    closeInput()
    terminal.appendChild(about)
    putInput()
}

function putSkills()
{

}

function putTools()
{

}

function putStudy()
{

}

function putContact()
{

}

function putInvalid()
{

}

function execCommand(command)
{
    switch(command)
    {
        case 'man': 
            console.log("Printing manual page")
            putMan()
            break
        case 'about':
            console.log("Printing about page");
            putAbout()
            break
        case 'skills':
            console.log("Printing skills page");
            putSkills()
            break
        case 'tools':
            console.log("Printing tools page");
            putTools()
            break
        case 'study':
            console.log("Printing study page");
            putStudy()
            break
        case 'contact':
            console.log("Printing contact page");
            putContact()
            break
        default: 
            console.log("Invalid command");
            break
    }
}

function initializeTerminal()
{
    
    putInput()
}