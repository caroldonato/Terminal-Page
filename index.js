function startTerminal()
{
    const intro = document.createElement('p')
    intro.classList.add('intro')
    intro.innerText = `0.0.1 TERMINAL PAGE 2019
    13:00:00, 1 user, load average: 0,75 0,96 0,85
    type man for command list`

    const terminal = document.querySelector('#terminal-window')
    terminal.appendChild(intro)

    putInput()
}

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
        contact : 'How to contact me!',
        credits : 'Where I got some of the resources for this page.',
        clear : 'Clean terminal screen.'
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
        <tr class="content-row">
            <td class="content-title"><b>credits</b></td>
            <td class="content-info">${contents.credits}</td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>clear</b></td>
            <td class="content-info">${contents.clear}</td>
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
        linkedin : 'linkedin.com/in/caroline-donato'
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
            <td class="content-info"><a href="https://github.com/caroldonato" target="_blank">${contents.github}</a></td>
        </tr>
        <tr class="content-row">
            <td class="content-title"><b>LINKEDIN:</b></td>
            <td class="content-info"><a href="https://www.linkedin.com/in/caroline-donato" target="_blank">${contents.linkedin}</a></td>
        </tr>
    </table>
    `

    closeInput()
    terminal.appendChild(contact)
    putInput()
}

function putCredits()
{
    const contents = {
        Windows98Icons : ['Windows 98 Icons', `Alex Meub @ <a href="https://win98icons.alexmeub.com/" target="_blank">win98icons.alexmeub.com</a>`]
    }

    const terminal = document.querySelector('#terminal-window')
    const contact = document.createElement('p')
    contact.className = 'intro'

    contact.innerHTML = `
    <p style="text-align:center">These are the sources to some of the icons I've used: </p>
    <table class="content-table" id="about">
        <tr class="content-row">
            <td class="content-title"><b>${contents.Windows98Icons[0]}</b></td>
            <td class="content-info">${contents.Windows98Icons[1]}</td>
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

function putClear()
{
    const prints = document.querySelectorAll('.intro')
    const commands = document.querySelectorAll('.command-label')
    const input = document.querySelector('input')

    prints.forEach(function(print){
        print.parentNode.removeChild(print)
    })

    commands.forEach(function(command){
        command.parentNode.removeChild(command)
    })

    input.parentNode.removeChild(input)

    startTerminal()
}

function putApp(ID)
{
    const contents = document.querySelector('.dialog-contents')

    switch(ID)
    {
        case 'icon1':
            contents.innerHTML = `I use <b>VSCode</b> for programming mostly anything!
                                  The visual extensions are great, and this page
                                  would've taken a bit more without Live Server :)`
            break
        case 'icon2':
            contents.innerHTML = `To keep my Java code well structured, there's no<br>
                                  other IDE for me besides <b>IDEA</b>. I'm hopeful the
                                  experience with Kotlin will be similar!`
            break
        case 'icon3':
            contents.innerHTML = `My first GUI experience was with <b>QtCreator</b> using C++.
                                  I love the ease of use, and the examples and documentation
                                  are very detailed too.`
            break
        case 'icon4':
            contents.innerHTML = `A whole year of Databases class and some side-project dabbling
                                  have helped me have a pretty decent grasp of SQL. I've used both
                                  <b>MySQL</b> and <b>PostgreSQL</b>, as well as <b>Hibernate</b> framework.`
            break
        case 'icon5':
            contents.innerHTML = `So far I've used both <b>Git</b> with Github and <b>SVN</b> for version
                                  control. <b>GitFlow</b> has really helped me organize my group
                                  and solo projects better, and I use GitKraken for visual aid. `
            break
        case 'icon6':
            contents.innerHTML = `I'm very up to date with my inbox! So feel free to drop a message at
                                  cinque.santi@gmail.com. For other ways of contacting me, check the
                                  contact command of the terminal :)`
            break
        case 'icon7':
            contents.innerHTML = `This is the non-educational way I spend my free time. Of course,
                                  game development is also a secondary interest.`
            break
        case 'icon8':
            contents.innerHTML = `I'm currently looking for internship opportunities! Thank you for downloading my CV :)`
            break
        case 'icon9':
            contents.innerHTML = `College was hard before <b>Trello</b>! I can be very forgetful, so I always make sure to use
                                  all the tools available to keep me in check. I've also used it for <b>Scrum</b> management.`
            break
        case 'icon10':
            contents.innerHTML = `This is my daily reading! A great source of diverse knowledge and discussions regardind coding.
                                  I really suggest you visit it, if you haven't yet: <a href="https://dev.to" target="_blank">Click here!</a>`
            break
        case 'icon11':
            contents.innerHTML = `Another one of my major interests is studying languages! I'm currently invested in learning Japanese.`
            break
        case 'icon12':
            contents.innerHTML = `Programming while listening to anything is great. I pride myself in making weird playlists of 
                                  unusual genre combinations. `
            break
    }
}

function putDialog(e) {

    const input = document.querySelector('input')
    const screen = document.querySelector('body')
    const icons = document.querySelectorAll('.desktop-icon')

    // Creates dialog window elements
    const border = document.createElement('div')
    border.classList.add('dialog-border')
    const pattern = document.createElement('div')
    pattern.classList.add('border-pattern')
    const title = document.createElement('div')
    title.classList.add('dialog-title')
    title.innerText = 'Desktop Explorer'
    const closebtn = document.createElement('div')
    closebtn.classList.add('dialog-close-btn')
    const closeimg = document.createElement('img')
    closeimg.classList.add('dialog-close-img')
    closeimg.src = "img/close.png"
    const contents = document.createElement('div')
    contents.classList.add('dialog-contents')
    const okbtn = document.createElement('div')
    okbtn.classList.add('dialog-ok-btn')
    okbtn.innerText = 'OK'

    // Shows them on screen
    border.appendChild(pattern)
    border.appendChild(contents)
    border.appendChild(okbtn)
    pattern.appendChild(title)
    pattern.appendChild(closebtn)
    closebtn.appendChild(closeimg)
    screen.appendChild(border)

    // Set event listeners
    okbtn.addEventListener('click', function(e){
        screen.removeChild(border)
        input.disabled = false
        icons.forEach(function(icon){
            icon.addEventListener('click', putDialog)
        })
    })

    closebtn.addEventListener('click', function(e){
        screen.removeChild(border)
        input.disabled = false
        icons.forEach(function(icon){
            icon.addEventListener('click', putDialog)
        })
    })

    // Removes terminal input listener
    input.disabled = true

    icons.forEach(function(icon){
        icon.removeEventListener('click', putDialog)
    })

    // Call app function
    putApp(e.currentTarget.id)
    
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
        case 'credits':
            putCredits()
            break
        case 'clear':
            putClear()
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

function initializeDesktop()
{
    const desktopIcons = document.querySelectorAll('.desktop-icon')

    desktopIcons.forEach(function(icon){
        icon.addEventListener('click', putDialog)
    })

    const terminal = document.querySelector('#terminal-window')

    terminal.addEventListener('click', function (e) {
        const input = document.querySelector('input')
        input.focus()
        input.select()
    })


    initializeClock()
    startTerminal()
}