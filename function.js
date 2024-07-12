let title = document.getElementById('title');
let desc = document.getElementById('desc');
let subNum = 0;
function increaseNum()
{
    if(subNum==3)
    {
        subNum = 0;
    }
    else
    {
        subNum+=1;
    }

   display();

}
function decreaseNum()
{
    if(subNum==0)
        {
            subNum = 3;
        }
        else
        {
            subNum-=1;
        }
        display();
}
function display()
{
    title.textContent = "";
    switch(subNum)
    {
        case 0 :
        {
            title.textContent = "Accounting";
            desc.textContent ="We specialize in demystifying balance sheets, income statements, and cash flows."+
                    "Whether you're starting out or aiming for mastery, our tutors will guide you through financial analysis and reporting, ensuring you gain both understanding and practical skills."+
                    "Find the balance between learning and having fun."; break;
        }
        case 1 :
        {
            title.textContent = "Business";
             desc.textContent = "Delve into the realm of business with us! At The Learning Curve, our experienced tutors focus on empowering you with vital knowledge in finance, marketing, and management." + 
             "Having a business orientated mind is crucial in the economic age we find ourseleves, do not fall behind!"+
             "The equilibrium awaits you."; break;
        }
        case 2 :
        {
            title.textContent = "English";
            desc.textContent ="Our experienced tutors specialize in enhancing comprehension, grammar, writing, and critical analysis skills."+
                     "Through personalized sessions, we foster a deep understanding of literature and language, allowing students to articulate their thoughts effectively."+
                     "Step into success with us and watch your proficiency soar."; break;
        }
        case 3 : 
        {
            title.textContent = "Math";
            desc.textContent = "Unlock your potential in mathematics." +
                     "Are you tackling algebra, calculus, or geometry? Fear Not: our proven methods and personalized approach empower students to excel in their mathematical studies." +
                     "Join us at The Learning Curve and experience the difference in your mathematical journey."; break;
        } 
    }
}
const booking = document.getElementById('booking');
function closeTab()
{
    booking.style.display ='none';
}
let datePicker =document.getElementById("datePicker");
function openTab()
{
    booking.style.display ='grid';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    datePicker.min = `${year}-${month}-${day}`;
} 
function submit()
{

const Namebox = document.getElementById("Name");
const Surnamebox = document.getElementById("Surname");
const Emailbox = document.getElementById("Email");
const Gradebox = document.getElementById("Grade");
const letters = /^[a-zA-Z]*$/;


    let Name = Namebox.value;
    let Surname = Surnamebox.value;
    let Email = Emailbox.value;
    let Grade = Gradebox.value;
    if (Name =="")   
        {
            window.alert("Please complete the Name field.");
            Namebox.focus();
        }
        else
        if(!Name.match(letters))
        {
            window.alert("Your name must contain Only Alphabets.");
            Namebox.focus();
        }
        else
        if (Surname =="")   
            {
                window.alert("Please complete the Surname field.");
                Surnamebox.focus();
            }
            else
            if(!Surname.match(letters))
            {
                window.alert("Your surname must contain Only Alphabets.");
                Surnamebox.focus();
            }
        else
        if(Grade=="")
            {
                window.alert("Please enter your grade.");
                Gradebox.focus;
            }
            else
            if(Grade>12 || Grade<8)
            {
                window.alert("Please enter a valid grade. Note that currently we are only operating from Grade 8 to 12.");
                Gradebox.focus;
            }
        else
    //Email Validation starts here// 
    if (Email =="")
        {
                window.alert("Please complete the Email field.");
        }
    else
    if(!Email.includes("@") ||!Email.includes(".") )
    {
        window.alert("The Email you have entered is Invalid.");
        Emailbox.focus();
    }
    else
    {
    

        const encodedSubject = encodeURIComponent('Requesting Tutoring Class');
        const datePicker = document.getElementById('datePicker');
        date = datePicker.value;
        const encodedBody = encodeURIComponent(`Good Day The Learning Curve Team ${br}, my name is ${Name} ${Surname}, a learner in grade ${Grade}. I would like to book tutoring classes for programming that will start ${date}. Please feel free to respond to this message at ${Email}`);
        window.alert(`Thnak you for reaching out to us ${Name}. We will  be in touch with you at ${Email} shortly`);
        const link = `mailto:tinomhedziso@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        window.open(link,`_blank`);
    }
}