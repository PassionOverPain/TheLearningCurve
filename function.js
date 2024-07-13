/** @format */

let title = document.getElementById("title");
let desc = document.getElementById("desc");
let subNum = 0;
function increaseNum() {
  if (subNum == 3) {
    subNum = 0;
  } else {
    subNum += 1;
  }

  display();
}
function decreaseNum() {
  if (subNum == 0) {
    subNum = 3;
  } else {
    subNum -= 1;
  }
  display();
}
function display() {
  title.textContent = "";
  switch (subNum) {
    case 0: {
      title.textContent = "Accounting";
      desc.textContent =
        "We specialize in demystifying balance sheets, income statements, and cash flows." +
        "Whether you're starting out or aiming for mastery, our tutors will guide you through financial analysis and reporting, ensuring you gain both understanding and practical skills." +
        "Find the balance between learning and having fun.";
      break;
    }
    case 1: {
      title.textContent = "Business";
      desc.textContent =
        "Delve into the realm of business with us! At The Learning Curve, our experienced tutors focus on empowering you with vital knowledge in finance, marketing, and management." +
        "Having a business orientated mind is crucial in the economic age we find ourseleves, do not fall behind!" +
        "The equilibrium awaits you.";
      break;
    }
    case 2: {
      title.textContent = "English";
      desc.textContent =
        "Our experienced tutors specialize in enhancing comprehension, grammar, writing, and critical analysis skills." +
        "Through personalized sessions, we foster a deep understanding of literature and language, allowing students to articulate their thoughts effectively." +
        "Step into success with us and watch your proficiency soar.";
      break;
    }
    case 3: {
      title.textContent = "Math";
      desc.textContent =
        "Unlock your potential in mathematics." +
        "Are you tackling algebra, calculus, or geometry? Fear Not: our proven methods and personalized approach empower students to excel in their mathematical studies." +
        "Join us at The Learning Curve and experience the difference in your mathematical journey.";
      break;
    }
  }
}
const booking = document.getElementById("booking");
function closeTab() {
  booking.style.display = "none";
}
let datePicker = document.getElementById("datePicker");
function openTab() {
  booking.style.display = "grid";
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  datePicker.min = `${year}-${month}-${day}`;
  datePicker.max = `${year}-12-30`;
}
function submitthis(send) {
  const Namebox = document.getElementById("Name");
  const Surnamebox = document.getElementById("Surname");
  const Emailbox = document.getElementById("Email");
  const Gradebox = document.getElementById("Grade");
  const letters = /^[a-zA-Z]*$/;

  let Name = Namebox.value;
  let Surname = Surnamebox.value;
  let Email = Emailbox.value;
  let Grade = Gradebox.value;
  if (Name == "") {
    window.alert("Please complete the Name field.");
    Namebox.focus();
  } else if (!Name.match(letters)) {
    window.alert("Your name must contain Only Alphabets.");
    Namebox.focus();
  } else if (Surname == "") {
    window.alert("Please complete the Surname field.");
    Surnamebox.focus();
  } else if (!Surname.match(letters)) {
    window.alert("Your surname must contain Only Alphabets.");
    Surnamebox.focus();
  } else if (Grade == "") {
    window.alert("Please enter your grade.");
    Gradebox.focus;
  } else if (Grade > 12 || Grade < 8) {
    window.alert(
      "Please enter a valid grade. Note that currently we are only operating from Grade 8 to 12."
    );
    Gradebox.focus;
  }
  //Email Validation starts here//
  else if (Email == "") {
    window.alert("Please complete the Email field.");
  } else if (!Email.includes("@") || !Email.includes(".")) {
    window.alert("The Email you have entered is Invalid.");
    Emailbox.focus();
  } else {
    const words = document.getElementsByName("Subject");
    const plans = document.getElementsByName("Pricing");
    let tutPlan = "";
    let subjects = "";
    let countsub = 0;
    words.forEach((subject) => {
      if (subject.checked) {
        countsub === 0
          ? (subjects += subject.title)
          : (subjects += ", " + subject.title);
        ++countsub;
      }
    });
    plans.forEach((plan) => {
      if (plan.checked) {
        tutPlan = plan.title;
      }
    });
    if (countsub === 0) {
      window.alert(
        `Please select a subject to be tutored in before proceeding.`
      );
    } else {
      date = datePicker.value;
      if (date == "") {
        window.alert(`Please select a date before proceeding.`);
        datePicker.focus;
      }
    }
    if (send) {
      book(Name, Surname, Grade, subjects, date, tutPlan, Email);
    }
  }
}
function book(Name, Surname, Grade, subjects, date, tutPlan, Email) {
  let params = {
    LName: Name,
    LSurname: Surname,
    LGrade: Grade,
    LSubjects: subjects,
    LDate: date,
    LTutPlan: tutPlan,
    LEmail: Email,
  };
  emailjs.send("service_xkt6yfv", "template_rwuuzvm", params).then(function () {
    alert(
      "Your Message has been successfully sent. We will be in touch with you shortly ~ The Learning Curve Team."
    );
  });
}
function showLoc() {
  document.getElementById("place").style.display = "inline-block";
  document.getElementById("booking").style.left = "0";
}
function hideLoc() {
  document.getElementById("place").style.display = "none";
  document.getElementById("booking").style.left = "20%";
}

let seen = false;
const mobileNav = document.getElementById("mobileNav");
const meNu = document.getElementById("meNu");
function navbar() {
  if (!seen) {
    mobileNav.style.backgroundColor = "rgb(3, 2, 92)";
    meNu.style.display = "flex";
    seen = true;
  } else {
    mobileNav.style.backgroundColor = "transparent";
    meNu.style.display = "none";
    seen = false;
  }
}
function locateMap(locNum) {
  const locMap = document.getElementById("locMap");
  switch (locNum) {
    case 0: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28685.67426872483!2d28.002415000000003!3d-26.010338999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576c722b531c1%3A0xb1d029298fe1d9f5!2sFourways%2C%20Sandton%2C%202055!5e0!3m2!1sen!2sza!4v1720879969407!5m2!1sen!2sza";
      break;
    }
    case 1: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114764.00079324677!2d28.011702857850484!3d-25.98852969743157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9571fd4965198b%3A0x87b2105c1c8bfe22!2sMidrand!5e0!3m2!1sen!2sza!4v1720884116197!5m2!1sen!2sza";
      break;
    }
    case 2: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229283.3610694351!2d27.797454077744217!3d-26.113522195533275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574b0839fe795%3A0x4443ba51b0acaf0d!2sRandburg!5e0!3m2!1sen!2sza!4v1720884990314!5m2!1sen!2sza";
      break;
    }
    case 3: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.251686882351!2d27.960673138255967!3d-26.11318271656279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575278c2eeae7%3A0x242e9fadddc029b3!2sRandpark%2C%20Randburg%2C%202194!5e0!3m2!1sen!2sza!4v1720885072494!5m2!1sen!2sza";
      break;
    }
    case 4: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229390.56565694802!2d27.762261441337674!3d-26.058817532756738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton!5e0!3m2!1sen!2sza!4v1720885147509!5m2!1sen!2sza";
      break;
    }
    case 5: {
      locMap.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28680.905344798386!2d28.054980767908635!3d-26.029852976918672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9572373ec0a289%3A0x60a0818ef23151e6!2sSunninghill%2C%20Sandton!5e0!3m2!1sen!2sza!4v1720885294672!5m2!1sen!2sza";
      break;
    }
  }
}
