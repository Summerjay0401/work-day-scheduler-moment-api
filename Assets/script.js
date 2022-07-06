var saveBtn = $(".saveBtn");

// FUNCTIONS //

// current day will be displayed at the top of the calendar //
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// each time block will be color coded to indicate if it is in the past, present, or future //
function timeBlockColor() {
    var currentHour = moment().hours();
    $(".timeBlock").each(function(){
    var timeBlockHour = parseInt($(this).attr('id'));

    //console.log(this); 'each time-block//

    if (timeBlockHour > currentHour) {
        $(this).addClass("future");
    } else if (timeBlockHour === currentHour){
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// CALL FUNCTIONS //

timeBlockColor();