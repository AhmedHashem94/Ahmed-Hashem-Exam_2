/* jshint esversion:6 */
$(document).ready(function() {
  // preloader
  $(".preload")
    .delay(500)
    .fadeOut();
  // todo list
  $(".todolist ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });
  $(".todolist ul").on("click", "span", function(event) {
    $(this)
      .parent()
      .fadeOut(500, function() {
        $(this).remove();
      });
    event.stopPropagation();
  });

  $('.todolist input[type="text"]').keypress(function(event) {
    if (event.which === 13) {
      // grabbing value of input and storing it in a variable
      var inputValue = $(this).val();
      // assigning value of input to blank after we enter
      $(this).val("");
      // append method helps us to concat value of input and creates new li with span
      $(".todolist ul").append(
        "<li><span><i class='fa fa-trash'></i></span> " + inputValue + " </li>"
      );
    }
  });
  // end todolist

  // start HUSTLIN' section
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "http://stdattendance.com/exam2/hustle.mp3");

  $(".hustling")
    .on("mouseover", function() {
      audioElement.play();
    })
    .mouseout(function() {
      audioElement.pause();
    });
  $(".hustling").on({
    mouseover: function() {
      interval = setInterval(function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = "rgb(" + r + "," + g + "," + b + ")";
        $(".hustling")
          .parent()
          .css({
            "background-color": color
          });
      }, 200);
    },

    mouseout: function() {
      clearInterval(interval);
      $(".hustling")
        .parent()
        .css({
          "background-color": "#333"
        });
    }
  });
  // end hustling
  // start clock
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Mar 7, 2021 00:00:00").getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}
    }, second);
  // end clock
  // start svg
  $("g#R")
    .mouseover(function() {
      $(this)
        .parents("section")
        .addClass("r");
      $("#R .fill-R,  #G-fill, #B-fill").css({
        fill: "black"
      });
    })
    .mouseout(function() {
      $(this)
        .parents("section")
        .removeClass("r");
      $("#R .fill-R").css({
        fill: "#f00"
      });
      $("#G-fill").css({
        fill: "0f0"
      });
      $("#B-fill").css({
        fill: "00f"
      });
    });
  $("g#G")
    .mouseover(function() {
      $(this)
        .parents("section")
        .addClass("g");
      $("#R .fill-R,  #G-fill, #B-fill").css({
        fill: "black"
      });
    })
    .mouseout(function() {
      $(this)
        .parents("section")
        .removeClass("g");
      $("#R .fill-R").css({
        fill: "#f00"
      });
      $("#G-fill").css({
        fill: "0f0"
      });
      $("#B-fill").css({
        fill: "00f"
      });
    });
  $("g#B")
    .mouseover(function() {
      $(this)
        .parents("section")
        .addClass("b");
      $("#R .fill-R,  #G-fill, #B-fill").css({
        fill: "black"
      });
    })
    .mouseout(function() {
      $(this)
        .parents("section")
        .removeClass("b");
      $("#R .fill-R").css({
        fill: "#f00"
      });
      $("#G-fill").css({
        fill: "0f0"
      });
      $("#B-fill").css({
        fill: "00f"
      });
    });
  // end svg section
  // start form validation section
  // Prevent default behaviour
  var contactName = document.getElementById("contactName");
  var contactPhone = document.getElementById("contactPhone");
  var contactMail = document.getElementById("contactMail");
  var contactForm = document.getElementById("contactForm");
  var nameAlert = document.getElementById("nameAlert");
  var phoneAlert = document.getElementById("phoneAlert");
  var mailAlert = document.getElementById("mailAlert");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (
      !validateContact(contactName.value, contactPhone.value, contactMail.value)
    ) {
      return false;
    }
  });
  contactName.addEventListener("blur", function() {
    if (contactName.value == "") {
      nameAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       name is required
    </div>`;
      return false;
    } else {
      nameAlert.innerHTML = "";
    }
  });
  contactPhone.addEventListener("blur", function() {
    if (contactPhone.value == "") {
      phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       phone is required
    </div>`;
      return false;
    } else {
      phoneAlert.innerHTML = "";
    }
    var rephone = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
    if (!rephone.test(phone)) {
      phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    please enter a valid phone number for example 01019585800
  </div>`;
    }
  });
  contactMail.addEventListener("blur", function() {
    if (contactMail.value == "") {
      mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       email is required
    </div>`;
      return false;
    } else {
      mailAlert.innerHTML = "";
    }
    var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reMail.test(email)) {
      mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    please enter a valid email
  </div>`;
    }
  });
  function validateContact(name, phone, email) {
    if (name == "") {
      nameAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       name is required
    </div>`;
      return false;
    } else {
      nameAlert.innerHTML = "";
    }
    if (phone == "") {
      phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       phone is required
    </div>`;
      return false;
    } else {
      phoneAlert.innerHTML = "";
    }
    if (email == "") {
      mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       email is required
    </div>`;
      return false;
    } else {
      mailAlert.innerHTML = "";
    }
    var rephone = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
    if (!rephone.test(phone)) {
      phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    please enter a valid phone number for example 01019585800
  </div>`;
    }
    var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reMail.test(email)) {
      mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">please enter a valid email</div>`;
    }
    return true;
  }
  //end form validation section
});
