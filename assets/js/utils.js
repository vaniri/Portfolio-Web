//Greating

window.onload = () => {
  showArray(getDay() || dayPart(new Date().getHours()));
  $("#about-text").append('<hr id="animated-hr"></hr>');
  $("#SWG").append('<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/QMWxJFC5xCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  $("#wise-crack").append(' <iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/fG0JwZmYhlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  $("#JS-quiz").append('<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/bR77LCnj_70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  //tool-box animation
  function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      const icons = $(".tools-icon");
      for (let i = 0; i < icons.length; ++i) {
        setTimeout(() => $(icons[i]).addClass("tools-animate"), i * 200);
      }
    }
  };

  let observer = new IntersectionObserver(callback, { threshold: 1.0 });
  let target = document.querySelector('#icon-container');
  observer.observe(target);
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

function getDay() {
  var d = new Date();
  if (d.getDay() === 5) { return "It's Friday!\nHave a good weekend!"; };
  return null;
}

let showArray = string => {
  showDayPart(string.split(""), 0);
};

let showDayPart = (array, idx) => {
  if (idx < array.length) {
    const ch = array[idx];
    $("#greeting").append(ch === '\n' ? "<br/>" : ch);
    setTimeout(() => {
      showDayPart(array, ++idx);
    }, 100);
  } else {
    $("#start-screen").addClass("greeting-animation");
    setTimeout(afterStart, 1000);
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
  $("#underbar").css('width', offsetWidth + "px");
  $("#underbar").css('left', offsetLeft + "px");
});
