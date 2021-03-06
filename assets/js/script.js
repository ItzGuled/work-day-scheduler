var now = moment();
var jumbo = now.format("dddd, MMMM D");
$("#currentDay").text(jumbo);

var saveTasks = function (event) {
  event.stopPropagation();
  const divId = event.target.id.split("-")[1];
  var divEl = $(`#${divId}`);
  var textB = divEl.children("textarea");
  var textBox = textB[0].value;
  localStorage.setItem(divId, textBox);
};

var loadTasks = function () {
  for (var i = 0; i <= 8; i++) {
    var value = localStorage.getItem(i);
    var divEl = $(`#${i}`);
    var textB = divEl.children("textarea");
    textB[0].value = value;
  }
};

var addListeners = function () {
  for (var i = 0; i <= 8; i++) {
    const divEl = $(`#${i}`);
    var buttons = divEl.children("button");
    var button = buttons[0];
    $(button).attr("id", `btn-${i}`);
    button.addEventListener("click", saveTasks);
  }
};

var timeStamp = function () {
  var currentTime = moment().format("H");
  var times = document.querySelectorAll(".row");
  var time = $(times).children("div");

  for (var i = 0; i < times.length; i++) {
    var militaryId = time[i].id;
    var changeId = document.getElementById(times[i].id);
    $(times[i].id).removeClass(".present .past .future");

    if (militaryId < currentTime) {
      $(changeId).addClass("past");
    } else if (militaryId === currentTime) {
      $(changeId).addClass("present");
    } else {
      $(changeId).addClass("future");
    }
  }
};

addListeners();
loadTasks();
timeStamp();
