
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
    input_label.innerHTML = 'C:\\TERMINAL>'
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
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;border:none;}
    .tg td{font-family:Arial, sans-serif;font-size:1.2em;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}
    .tg th{font-family:Arial, sans-serif;font-size:1.2em;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}
    .tg .tg-0y7w{font-weight:bold;font-family:"Courier New", Courier, monospace !important;;border-color:inherit;text-align:center;vertical-align:top}
    .tg .tg-9gth{font-family:"Courier New", Courier, monospace !important;;border-color:inherit;text-align:left;vertical-align:top}
    </style>
    <table class="tg" style="undefined;table-layout: fixed;">
    <colgroup>
    <col style="width: 200px">
    <col style="width: 300px">
    </colgroup>
    <tr>
        <th class="tg-0y7w">NAME:</th>
        <th class="tg-9gth">Caroline Donato</th>
    </tr>
    <tr>
        <td class="tg-0y7w">STATUS:</td>
        <td class="tg-9gth"><span style="font-weight:normal">Looking for internship</span></td>
    </tr>
    <tr>
        <td class="tg-0y7w">EDUCATION:</td>
        <td class="tg-9gth"><span style="font-weight:normal">4th year undergrad in CompSci</span></td>
    </tr>
    <tr>
        <td class="tg-0y7w">AFFILIATION:</td>
        <td class="tg-9gth"><span style="font-weight:normal">UEL - Londrina State University (Londrina, PR - Brazil)</span></td>
    </tr>
    </table>
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
    const terminal = document.querySelector('#terminal-window')
    const invalid = document.createElement('p')
    invalid.className = 'intro'
    invalid.innerHTML = 'Invalid command. Type \'man\' for command list.'

    closeInput()
    terminal.appendChild(invalid)
    putInput()
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
            console.log("Printing skills page")
            putSkills()
            break
        case 'tools':
            console.log("Printing tools page")
            putTools()
            break
        case 'study':
            console.log("Printing study page")
            putStudy()
            break
        case 'contact':
            console.log("Printing contact page")
            putContact()
            break
        default: 
            console.log("Invalid command")
            putInvalid()
            break
    }
}

const sleep = (seconds) => {
    return new Promise(resolve =>setTimeout(resolve, 1000*seconds))
}

function initializeClock()
{
    const clock_worker = new Worker('clock.js')
    const clock = document.querySelector('#clock')

    clock_worker.addEventListener('message', function(e) {
        clock.textContent = e.data
        sleep(60).then(() => {
            clock_worker.postMessage('wk')
        })
    }, false)

    // Initial clock update
    clock_worker.postMessage('wk')

    // Second update making up for initial seconds offset
    const start = new Date()
    const diff = 60 - start.getSeconds()

    sleep(diff).then(() => {
        clock_worker.postMessage('wk')
    })
    
}

function initializeTerminal()
{
    const terminal = document.querySelector('#terminal-window')

    terminal.addEventListener('click', function (e) {
        const input = document.querySelector('input')
        input.focus()
        input.select()
    })

    initializeClock()
    putInput()
}