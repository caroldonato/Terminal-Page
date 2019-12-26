
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
    const contents = {
        man : 'Lists available commands and respective descriptions.',
        about : 'Basic information about me!',
        skills : 'Lists my relevant skills and level.',
        tools : 'Lists tool I use the most for coding and my affinity level.',
        study: 'Topics and themes I am currently studying or interested in.',
        contact : 'How to contact me!'
    }

    const terminal = document.querySelector('#terminal-window')
    const manual = document.createElement('p')
    manual.className = 'intro'

    manual.innerHTML = `
    <table class="content-table" id="manual">
        <tr class="content-row">
            <td class="content-title"><b>man</b></td>
            <td class="content-info">${contents.man}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>about</b></td>
            <td class="content-info">${contents.about}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>skills</b></td>
            <td class="content-info">${contents.skills}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>tools</b></td>
            <td class="content-info">${contents.tools}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>study</b></td>
            <td class="content-info">${contents.study}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>contact</b></td>
            <td class="content-info">${contents.contact}</td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(manual)
    putInput()
}

function putAbout()
{
    const contents = {
        name : 'Caroline Donato',
        status : 'Looking for internship',
        education : '4th year Computer Science Undergrad (expected December, 2020)',
        affiliation : 'UEL - Londrina State University (Londrina, PR-Brazil)'
    }

    const terminal = document.querySelector('#terminal-window')
    const about = document.createElement('p')
    about.className = 'intro'

    about.innerHTML = `
    <table class="content-table" id="about">
        <tr class="content-row">
            <td class="content-title"><b>NAME:</b></td>
            <td class="content-info">${contents.name}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>STATUS:</b></td>
            <td class="content-info">${contents.status}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>EDUCATION:</b></td>
            <td class="content-info">${contents.education}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>AFFILIATION:</b></td>
            <td class="content-info">${contents.affiliation}</td>
        </tr>
    </table>
    `
    
    closeInput()
    terminal.appendChild(about)
    putInput()
}

function putSkills()
{
    const contents = {
        disclaimer : '(Based on affinity and personal projects)',
        languages : {
            c : ['C', '4/5'],
            cpp : ['C++', '5/5'],
            java : ['Java', '5/5'],
            javascript : ['JavaScript', '3/5'],
            python : ['Python', '3/5']
        },
        databases : {
            sql : ['SQL', '4/5'],
            mysql : ['MySQL', '5/5'],
            postgresql : ['PostgreSQL', '5/5']
        },
        frameworks : {
            hibernate : ['Hibernate', '4/5'],
            qt : ['Qt (C++)', '5/5'],
            ionic : ['Ionic (Angular)', '3/5'],
        },
        knowledge : {
            gitflow : ['GitFlow', '5/5'],
            scrum : ['Scrum', '4/5'],
            algorithms : ['Algorithms', '4/5'],
            datastruct : ['Data Structures', '5/5'],
            objecto : ['Object Oriented Programming', '4/5'],
            functo : ['Functional Programming', '3/5']
        }
        
    }

    const terminal = document.querySelector('#terminal-window')
    const skills = document.createElement('p')
    skills.className = 'intro'

    skills.innerHTML = `
    <p style="text-align:center"> ${contents.disclaimer} </p>
    <table class="content-table" id="skills">
        <tr>
            <td class="content-header" colspan="2">Languages</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.languages.c[0]}</b></td>
            <td class="content-info">${contents.languages.c[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.languages.cpp[0]}</b></td>
            <td class="content-info">${contents.languages.cpp[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.languages.java[0]}</b></td>
            <td class="content-info">${contents.languages.java[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.languages.javascript[0]}</b></td>
            <td class="content-info">${contents.languages.javascript[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.languages.python[0]}</b></td>
            <td class="content-info">${contents.languages.python[1]}</td>
        </tr>
        <tr>
            <td class="content-header" colspan="2">Databases</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.databases.sql[0]}</b></td>
            <td class="content-info">${contents.databases.sql[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.databases.mysql[0]}</b></td>
            <td class="content-info">${contents.databases.mysql[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.databases.postgresql[0]}</b></td>
            <td class="content-info">${contents.databases.postgresql[1]}</td>
        </tr>
        <tr>
        <td class="content-header" colspan="2">Frameworks</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.frameworks.hibernate[0]}</b></td>
            <td class="content-info">${contents.frameworks.hibernate[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.frameworks.qt[0]}</b></td>
            <td class="content-info">${contents.frameworks.qt[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.frameworks.ionic[0]}</b></td>
            <td class="content-info">${contents.frameworks.ionic[1]}</td>
        </tr>
        <tr>
        <td class="content-header" colspan="2">General Knowledge</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.gitflow[0]}</b></td>
            <td class="content-info">${contents.knowledge.gitflow[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.scrum[0]}</b></td>
            <td class="content-info">${contents.knowledge.scrum[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.algorithms[0]}</b></td>
            <td class="content-info">${contents.knowledge.algorithms[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.datastruct[0]}</b></td>
            <td class="content-info">${contents.knowledge.datastruct[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.objecto[0]}</b></td>
            <td class="content-info">${contents.knowledge.objecto[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.knowledge.functo[0]}</b></td>
            <td class="content-info">${contents.knowledge.functo[1]}</td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(skills)
    putInput()
}

function putTools()
{
    const contents = {
        disclaimer : '(Based on affinity and personal projects)',
        git : ['Git', '4/5'],
        maven : ['Maven', '5/5'],
        npm : ['npm', '3/5'],
        linux : ['Linux', '5/5'],
        windows : ['Windows', '4/5']
    }

    const terminal = document.querySelector('#terminal-window')
    const tools = document.createElement('p')
    tools.className = 'intro'

    tools.innerHTML = `
    <p style="text-align:center"> ${contents.disclaimer} </p>
    <table class="content-table" id="tools">
        <tr class="content-row">
            <td class="content-title"><b>${contents.git[0]}</b></td>
            <td class="content-info">${contents.git[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.maven[0]}</b></td>
            <td class="content-info">${contents.maven[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.npm[0]}</b></td>
            <td class="content-info">${contents.npm[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.linux[0]}</b></td>
            <td class="content-info">${contents.linux[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>${contents.windows[0]}</b></td>
            <td class="content-info">${contents.windows[1]}</td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(tools)
    putInput()
}

function putStudy()
{
    const contents = {
        research : ['Software Testing', 'Data Science', 'Artificial Intelligence'],
        develop : ['Kotlin', 'Spring Boot', 'JavaScript frameworks'],
        current : ['JavaScript', 'Model-Based Testing']
    }

    const terminal = document.querySelector('#terminal-window')
    const study = document.createElement('p')
    study.className = 'intro'

    study.innerHTML = `
    <table class="content-table" id="study">
        <tr>
            <td class="content-header" colspan="2">Research</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.research[0]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.research[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.research[2]}</td>
        </tr>
        <tr>
            <td class="content-header" colspan="2">Currently Studying</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.current[0]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.current[1]}</td>
        </tr>
        <tr>
            <td class="content-header" colspan="2">Future Learning</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.develop[0]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.develop[1]}</td>
        </tr>
        <tr class="content-row">
            <td class="content-info">${contents.develop[2]}</td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(study)
    putInput()
}

function putContact()
{
    const contents = {
        email : 'cinque.santi@gmail.com',
        github : 'github.com/caroldonato',
        linkedin : 'www.linkedin.com/in/caroline-donato'
    }

    const terminal = document.querySelector('#terminal-window')
    const contact = document.createElement('p')
    contact.className = 'intro'

    contact.innerHTML = `
    <p style="text-align:center">I'd love to know your thoughts! Contact me through any of these: </p>
    <table class="content-table" id="about">
        <tr class="content-row">
            <td class="content-title"><b>EMAIL:</b></td>
            <td class="content-info">${contents.email}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>GITHUB:</b></td>
            <td class="content-info">${contents.github}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>LINKEDIN:</b></td>
            <td class="content-info">${contents.linkedin}</td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(contact)
    putInput()
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
            putMan()
            break
        case 'about':
            putAbout()
            break
        case 'skills':
            putSkills()
            break
        case 'tools':
            putTools()
            break
        case 'study':
            putStudy()
            break
        case 'contact':
            putContact()
            break
        default: 
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