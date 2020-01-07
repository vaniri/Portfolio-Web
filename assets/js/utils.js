//Greating

window.onload = () => {
  getArray(dayPart(new Date().getHours()));
  setTimeout(afterStart, 2000);
};

function dayPart(hours) {
  if (5 <= hours && hours < 12) {
    return "Good Morning!";
  } else if (12 <= hours && hours < 17) {
    return "Good Afternoon!";
  } else if (17 <= hours && hours < 21) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
}

let getArray = dayPart => {
  showDayPart(dayPart.split(""), 0);
};

let showDayPart = (array, idx) => {
  if (idx < array.length) {
    $("#greeting").append(array[idx]);
    setTimeout(() => {
      showDayPart(array, ++idx);
    }, 150);
  }
};

let afterStart = () => {
  $("#start-screen").hide();
  $("#main-container").show();
};

//scroll nav-bar links

$(".scrollable-link").on("click", function () {
  let anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top
      },
      400
    );
  event.preventDefault();
});

