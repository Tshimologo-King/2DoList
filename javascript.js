// let menu = document.getElementById('menu');
// menu.removeChild(menu.firstElementChild);

//End of above example

//Start of functions

// let menu = document.getElementById('menu');
// menu.removeChild(menu.firstElementChild);

//Start of functions

//1st function: taking user inout and Displaying to screen

//Variable to take values
// const goalSetter = [{
// }];

// const newGoal = document.querySelector('#addedGoal');


// const deleteButton = document.getElementById("deleteButton").addEventListener('click', deleteAddedTask());



// //Loop to display the newly added list
// function showgoals(goalSetter){
//     newGoal.innerHTML = "";
//     goalSetter.forEach((goalSet) => {
//         newGoal.innerHTML += `
//         <li><input type="checkbox">addGoal.deletebutton</li>
//                 `
//     });
// };


// //Button function to add element.
// const add = document
//   .getElementById("addButton")
//   .addEventListener("click", createTask());

// //Add function
// function createTask(){

//     //Retrieve Value Of Input
//     const addGoal = document.querySelector("#enterAGoal").value;
//     if(!addGoal){
//         alert('Please add a task');
//         return;
//     }
//     //Update the list created
//     goalSetter.push(addGoal);

//     //Display created list
//     console.log(goalSetter);
// };



function createNewGoal(){

    //create a new list element for content
    const newGoal = document.createElement('li');

    //Take value of input
    const addGoal = document.querySelector('#enterAGoal').value;
    const addedGoal = addGoal;

    //Add Element to list created
    newGoal.appendChild = addGoal;

    //Check if wwthere is a valid input in (addGoal)
    if (addGoal == ''){
        alert('Please a Goal and Conquer!!!');
        return;
    }

}

//Include a Delete button to Added Goal div in HTML

const savedGoal = document.querySelector('#addedGoal');

//Loop the edit button, chechkbox, input value, delete button to be added to all items on the list
for (i = 0; i < savedGoal.length; i++){
    const deleteButton = document.getElementById('deleteButton');
    const editButton = document.getElementById("editButton");
    const checkbox = document.createElement("input");

    // Make sure that all variables for chechkbox, edit, delete appear in text
    checkbox.type = "checkbox";
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    //Append savedGoal
    savedGoal[i].appendChild(checkbox);
    savedGoal[i].appendChild(editButton);
    savedGoal[i].appendChild(deleteButton);
}

//Delete list element from savedGoal
const permanentlyDel = deleteButton;
for(i = 0; i < permanentlyDel.length; i++) {
    //Delete button function
    permanentlyDel[i].onclick = function() {

        //Assign variable that will be able to hide the savedGoal[i]
        let close = savedGoal.parentElement;
        close.style.display = 'none';
    }
}

//Edit function
function editSavedGoal(){
    
}





