var timeShown = document.getElementById("currentDay");
var clearBtn = document.getElementById("clear");
var nineAM = document.getElementById("9amTodo");
var tenAM = document.getElementById("10amTodo");
var elevenAM = document.getElementById("11amTodo");
var twelvePM = document.getElementById("12pmTodo");
var onePM = document.getElementById("1pmTodo");
var twoPM = document.getElementById("2pmTodo");
var threePM = document.getElementById("3pmTodo");
var fourPM = document.getElementById("4pmTodo");
var fivePM = document.getElementById("5pmTodo");
var saveField9 = document.querySelector(".save-field9");
var saveField10 = document.querySelector(".save-field10");
var saveField11 = document.querySelector(".save-field11");
var saveField12 = document.querySelector(".save-field12");
var saveField1 = document.querySelector(".save-field1");
var saveField2 = document.querySelector(".save-field2");
var saveField3 = document.querySelector(".save-field3");
var saveField4 = document.querySelector(".save-field4");
var saveField5 = document.querySelector(".save-field5");
var allInputEls = document.querySelectorAll("[data-input='theInputs']");
var timeBlocks = $(".time");

// grabs the current date to display in the necessary field
theTime = moment().format("[Today is ]MM[/]DD[/]YYYY");
timeShown.innerText = theTime;
 
var dateReference = new Date;
let currentHour = dateReference.getHours();

// this creates a time-check for each timeblock represented by their given index
function timeCheck(){
    for(i = 0; i < timeBlocks.length; i++){
        if(timeBlocks[i].dataset.number == currentHour){
            $(timeBlocks[i]).addClass("present")
        }else if(timeBlocks[i].dataset.number < currentHour){
            $(timeBlocks[i]).addClass("past")
        }else if(timeBlocks[i].dataset.number > currentHour){
            $(timeBlocks[i]).addClass("future")
        }
    }
    
}
timeCheck();

// this will display what was stored in the local storage in its respective field
function getData() {
    var nineStored = localStorage.getItem("9am");
    if(nineStored !== null){
        nineAM.value = nineStored;
    }
    var tenStored = localStorage.getItem("10am");
    if(tenStored !== null){
        tenAM.value = tenStored;
    }
    var elevenStored = localStorage.getItem("11am");
    if(elevenStored !== null){
        elevenAM.value = elevenStored;
    }
    var twelveStored = localStorage.getItem("12pm");
    if(twelveStored !== null){
        twelvePM.value = twelveStored;
    }
    var oneStored = localStorage.getItem("1pm");
    if(oneStored !== null){
        onePM.value = oneStored;
    }
    var twoStored = localStorage.getItem("2pm");
    if(twoStored !== null){
        twoPM.value = twoStored;
    }
    var threeStored = localStorage.getItem("3pm");
    if(threeStored !== null){
        threePM.value = threeStored;
    }
    var fourStored = localStorage.getItem("4pm");
    if(fourStored !== null){
        fourPM.value = fourStored;
    }
    var fiveStored = localStorage.getItem("5pm");
    if(fiveStored !== null){
        fivePM.value = fiveStored;
    }

}

// this is the function to clear the content and storage
function clearSchedule(){
    localStorage.clear()
    allInputEls.innerText = '';
    location.reload();
}
getData();

// each function will update the local storage with the value of that input
function saveToStorage9(){
    localStorage.setItem("9am", nineAM.value);
    location.reload();
}
function saveToStorage10(){
    localStorage.setItem("10am", tenAM.value);
    location.reload();
}
function saveToStorage11(){
    localStorage.setItem("11am", elevenAM.value);
    location.reload();
}
function saveToStorage12(){
    localStorage.setItem("12pm", twelvePM.value);
    location.reload();
}
function saveToStorage1(){
    localStorage.setItem("1pm", onePM.value);
    location.reload();
}
function saveToStorage2(){
    localStorage.setItem("2pm", twoPM.value);
    location.reload();
}
function saveToStorage3(){
    localStorage.setItem("3pm", threePM.value);
    location.reload();
}
function saveToStorage4(){
    localStorage.setItem("4pm", fourPM.value);
    location.reload();
}
function saveToStorage5(){
    localStorage.setItem("5pm", fivePM.value);
    location.reload();
}

clearBtn.addEventListener("click", clearSchedule);
saveField9.addEventListener("click", saveToStorage9);
saveField10.addEventListener("click", saveToStorage10);
saveField11.addEventListener("click", saveToStorage11);
saveField12.addEventListener("click", saveToStorage12);
saveField1.addEventListener("click", saveToStorage1);
saveField2.addEventListener("click", saveToStorage2);
saveField3.addEventListener("click", saveToStorage3);
saveField4.addEventListener("click", saveToStorage4);
saveField5.addEventListener("click", saveToStorage5);


