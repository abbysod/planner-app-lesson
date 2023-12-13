$(document).ready(function () {
     // Display current day at the top
     $("#currentDay").text(dayjs().format('ddd, MMM D, YYYY h:mm A'));
   
     var currentHour = dayjs().hour();
     $(".time-block").each(function () {
       var blockHour = parseInt($(this).attr("id").split("-")[1]);
   
       if (blockHour < currentHour) {
         $(this).addClass("past");
       } else if (blockHour === currentHour) {
         $(this).addClass("present");
       } else {
         $(this).addClass("future");
       }
     });
   
     // Event listener for save button
     $(".saveBtn").on("click", function () {
       var eventText = $(this).siblings(".description").val();
       var blockHour = parseInt($(this).parent().attr("id").split("-")[1]);
   
       // Save events into local storage
       localStorage.setItem("event_" + blockHour, eventText);
     });
   
     // Load events from storage
     $(".time-block").each(function () {
       var blockHour = parseInt($(this).attr("id").split("-")[1]);
       var storedEvent = localStorage.getItem("event_" + blockHour);
   
       if (storedEvent) {
         $(this).find(".description").val(storedEvent);
       }
     });
   });
   