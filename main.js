// function appAlert() {
//   alert("hello");
// }
// function printLogMyName() {
//   console.log("shimon berry");
// }
// function changeSpanCOlor() {
//   var span1 = document.getElementById("span_1");
//   span1.style.color = "red";
// }

// function changeFontSizeH_1() {
//   var hh1 = document.getElementById("h_1");
//   hh1.style.fontSize = "200px";
// }
// function ChangeTextpp() {
//   var pp1 = document.getElementById("pp");
//   pp1.innerText = " shimon berry";
// }
// function username1() {
//   var username = prompt("enter name");
//   var newh1 = document.createElement("h1");
//   var newContent = document.createTextNode(username);
//   newh1.appendChild(newContent);
//   var currenth1 = document.getElementById("button1");
//   document.body.insertBefore(newh1, currenth1);
// }
// function textinput() {
//   var input1 = document.getElementById("input1");
//   var textuser = document.getElementById("input1_print");

//   textuser.innerHTML = input1.value;
// }
// function time() {
//   var h1 = document.getElementById("hh1");
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();

//   h1.textContent =
//     ("0" + h).substr(-2) +
//     ":" +
//     ("0" + m).substr(-2) +
//     ":" +
//     ("0" + s).substr(-2);

//   h1.style.color = "white";
//   if (h > 12) {
//     document.body.style.backgroundColor = "blue";
//     h1.innerHTML += "<br>" + "good evening";
//   } else if (h < 12 && h > 6) {
//     document.body.style.backgroundColor = "yellow";
//     h1.innerHTML += "<br>" + "Good Morning";
//   }
// }
// var newLocal = setInterval(time, 1000);

// function printTitleWelcome() {
//   var h1_title = document.getElementById("h1_title");
//   h1_title.addEventListener("mouseover", changeColor);
//   var user_age = document.getElementById("input_age").value;
//   if (user_age > 18) {
//     h1_title.style.color = "red";
//     h1_title.innerHTML = "Welcome";
//   } else {
//     h1_title.style.color = "blue";
//     h1_title.innerHTML = "Welcome";
//   }
// }
// function changeColor() {
//   var changeColor_h1 = document.getElementById("h1_title");
//   changeColor_h1.style.color = "green";
// }

// var numbersArray = [];

// function mainFunc() {
//   if (numbersArray.length < 5) {
//     nums_user.innerText += user_number.value + " " + "," + " ";
//     numbersArray.push(user_number.value);
//   } else {
//     user_number.disabled = true;
//   }
// }
// function getAndPrintRandom() {
//   var rndNum = Math.floor(Math.random() * 57);
//   rnd_h3.innerText += rndNum;
//   for (var i = 0; i < numbersArray.length; i++) {
//     if (rndNum == numbersArray[i]) {
//       result_text.innerText = "You win!";
//       return;
//     }
//   }
//   result_text.innerText = "You Loose!";
// }

// function getYearOfBirthRetornAge(FullYear) {
//   var DateNow = new Date().getFullYear();
//   var age = DateNow - FullYear;
//   return age;
// }

// function somef() {
//   var userAge_input_value = document.getElementById("input_user_age").value;
//   var user_age = getYearOfBirthRetornAge(
//     new Date(userAge_input_value).getFullYear()
//   );
//   if (user_age > 18) {
//     document.getElementById("h1_print_W_N").style.color = "blue";
//     document.getElementById("h1_print_W_N").innerText = "welcome";
//     h2_username.innerText = document.getElementById("input_user_name").value;

//     addEventListener("mouseover", () => {
//       document.getElementById("h1_print_W_N").style.color = "green";
//       document.getElementById("h2_username").style.color = "green";
//     });
//     setTimeout(function () {
//       window.location.reload(1);
//     }, 5000);
//     if (user_age>18){
//         var input_last_name = document.createElement("input");
//         var lebal_last_name = document.createElement("label");
//         lebal_last_name.innerText = "enter last name:";

//         document.body.appendChild(lebal_last_name);
//         document.body.appendChild(input_last_name);

//     }
// }

//   else if (user_age < 18) {
//     document.getElementById("h2_username").style.color = "red";
//     document.getElementById("h2_username").innerText = "No Entry";
//     setTimeout(function () {
//       window.location.reload(1);
//     }, 5000);
//   }
// }

function getYearOfBirthRetornAge(FullYear) {
  var DateNow = new Date().getFullYear();
  var age = DateNow - FullYear;
  return age;
}

function somef() {
  var userAge_input_value = input_user_age.value;
  var user_age = getYearOfBirthRetornAge(
    new Date(userAge_input_value).getFullYear()
  );
  if (user_age > 18) {
    printText_changeColor();
    document.body.append(div1);
    button_2.addEventListener("click", ttt);
  } else if (user_age < 18) {
    h2_username.style.color = "red";
    h2_username.innerText = "No Entry";
  }
}

function printText_changeColor() {
  h1_print_W_N.innerText = "welcome";
  h1_print_W_N.style.color = "blue";
  h2_username.innerText = input_user_name.value;
  h1_print_W_N.addEventListener("mouseover", () => {
    h1_print_W_N.style.color = "green";
  });
  h2_username.addEventListener("mouseover", () => {
    h2_username.style.color = "green";
  });
}
var div1 = document.createElement("div");
var input_name = document.createElement("input");
input_name.placeholder = "enter name";
div1.appendChild(input_name);

var input_last_name = document.createElement("input");
input_last_name.placeholder = "enter last name";
div1.appendChild(input_last_name);

var button_2 = document.createElement("button");
button_2.innerText = "send";
div1.appendChild(button_2);

var myarray = [];
mainList.appendChild(li);
function ttt() {
  var name = "";
  var nameString = input_name.value;
  for (var i = 0; i < nameString.length; i++) {
    if (
      nameString[i] != " " ||
      nameString[i] == nameString[nameString.length - 1]
    
    ) {
      nameString[0]
      name += nameString[i];
      
    } else {
      myarray.push(name);
      name = "";
    }
  }
  myarray.push(name);
  for (var i = 0; i < myarray.length; i++) {
    var li = document.createElement("li");
    li.innerText = myarray[i] + " " + input_last_name.value;
    document.body.appendChild(li);
  }
}
