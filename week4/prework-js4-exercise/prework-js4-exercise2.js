function createTask(){

    let newTask = document.getElementById("demo").value;

    // we select the input from the id and .value will take the value from the input


    document.getElementById("list").innerHTML += `<li>${newTask} </li>`;

    addRemoveToList();

}


document.getElementById("create").addEventListener("click",createTask);


function removeItem(){

    this.style.opacity= "0";

    // (this) here will back to the element that we will target or select

    this.style.transition = "1s";
    setTimeout(()=>{this.remove();},1000);

}



function addRemoveToList(){

    var items = document.getElementsByTagName("li");

    for ( let i in items ){

        items[i].addEventListener("click",removeItem);

    }

}