let listContainer = document.getElementById('list-container')
let head = document.querySelector('head')
let inputBox = document.getElementById('input-box')
document.getElementById('input-box').focus();
function addTask()
{
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        const task = document.createElement('li')
        task.className="list"
        task.textContent = inputBox.value;
        listContainer.appendChild(task)
        const div = document.createElement('div')
        let span = document.createElement('span')
        span.textContent = "Delete"
        task.appendChild(span)
    }
    inputBox.value = '';
    saveData()
    document.getElementById('input-box').focus();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()
function change1()
{
    document.body.style="background: linear-gradient(90deg, #D8B5FF 0% , #1EAE98 70%);";
    document.getElementById("heading").style="color:#0000009c;"
}
function change2()
{
    document.body.style='background:linear-gradient(90deg, #2E3192 0% , #1BFFFF 70%);'
    document.getElementById("heading").style="color:#0000009c;"
}
function change3()
{
    document.body.style='background: linear-gradient(90deg, #380036 0%, #0CBABA 70%);'
    document.getElementById("heading").style="color:#ffdfdb;"
}
