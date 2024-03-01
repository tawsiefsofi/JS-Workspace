<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div >
        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>

<script>
    const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    console.log("NODES: ", parent.childNodes);

const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "Chai aur code"
    const addText = document.createTextNode("Chai aur code")
    div.appendChild(addText)

    document.body.appendChild(div)

    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()
</script>
</html>