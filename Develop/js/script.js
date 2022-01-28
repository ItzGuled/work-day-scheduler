// declaring variables
var now = moment();
var jumbo = now.format("dddd, MMMM D")
$("#currentDay").text(jumbo)
var saveBtn = document.querySelector(".saveBtn");



// function for saving the text area
var saveTasks = function () {
    var textBox = document.querySelector(".description").value;
    localStorage.setItem("description", textBox);
    
};

  
  saveBtn.addEventListener("click", saveTasks)



  