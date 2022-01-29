// declaring variables
var now = moment();
var jumbo = now.format("dddd, MMMM D");
$("#currentDay").text(jumbo);

// function for saving the text area
var saveTasks = function (event) {
  console.log('line 8', event);
  const divId = event.target.id.match(/\d+/g)[0];
  console.log("line 10", divId);
  var textBox = $(`#${divId}`).value;
  localStorage.setItem("description", textBox);
  console.log(event.target);
};

var addListeners = function () {
  for (var i = 0; i <= 8; i++) {
    const divEl = $(`#${i}`);
    var button = divEl.children("button");
    $(button[0]).attr("id", `btn${i}`);
    button[0].addEventListener("click", saveTasks);
  }
};
// saveBtn.addEventListener("click", saveTasks);

addListeners();
