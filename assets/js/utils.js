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

//slideShow portfolio images

let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";
}

