// const add = document.getElementById("btn1");
// const text = document.getElementById("input1");
// const list = document.getElementById("list-container");

// add.addEventListener("click", () => {
    
//     if (text.value === '') {
//         alert("Write something to add in the list.")
//     }
//     else {
//         console.log(text.value);
//         let li = document.createElement("li");
//         li.innerHTML = text.value;
//         list.appendChild(li);

//         let span = document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     text.value="";
//     savedata();
// })

// list.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         savedata();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         savedata();
//     }
// },false);

// function savedata(){
//     localStorage.setItem("data",list.innerHTML);
// }

// function showtask(){
//     list.innerHTML=localStorage.getItem("data");
// }

// showtask();

    const currentUser = localStorage.getItem('currentUser');
  

    const ipbox = document.getElementById("input1");
    const containerlist = document.getElementById("list-container");
    const addButton = document.getElementById("btn1");


    function addTask() {
        if (ipbox.value === '') {
            alert("You have to add a task!");
        } else {
            console.log('Adding task:', ipbox.value);
            let li = document.createElement("li");
            li.innerHTML = ipbox.value;
            containerlist.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        ipbox.value = "";
        saveData();
    }

    function saveData() {
        const dataKey = `${currentUser}_data`;
        localStorage.setItem(dataKey, containerlist.innerHTML);
    }

    function showTask() {
        const dataKey = `${currentUser}_data`;
        containerlist.innerHTML = localStorage.getItem(dataKey) || '';
    }

    containerlist.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    // Update the date
    function getCurrentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }

    function updateDate() {
        const dateElement = document.getElementById('date');
        if (dateElement) {
            dateElement.textContent = getCurrentDate();
        }
    }

    updateDate();
    setInterval(updateDate, 24 * 60 * 60 * 1000);

    showTask();
    // Add event listener to the add button
    addButton.addEventListener("click", addTask);
