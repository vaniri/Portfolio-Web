//Greating

window.onload = () => {
  showArray(dayPart(new Date().getHours()));
  $("#start-screen").append('<hr id="animated"></hr>');
  setTimeout(afterStart, 2000);
  $("#SWG").append('<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/QMWxJFC5xCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  $("#wise-crack").append(' <iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/fG0JwZmYhlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  $("#JS-quiz").append('<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/bR77LCnj_70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  
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

let showArray = dayPart => {
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

//animated underline
$(".nav-item").mouseover(event => {
let { offsetWidth, offsetLeft } = event.target;
$(".nav-item:not(:first-child):before").css('content', 'none');
$("#underbar").css('width', offsetWidth + "px");
$("#underbar").css('left', offsetLeft + "px");
});