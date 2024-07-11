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
    switch(subNum)
    {
        case 0 :
        {
            title.textContent = "Accounting";
            desc.textContent ="We specialize in demystifying balance sheets, income statements, and cash flows."+
                    "Whether you're starting out or aiming for mastery, our expert tutors will guide you through financial analysis and reporting, ensuring you gain both understanding and practical skills."+
                    "Find the balance between learning and having numerical fun."; break;
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
            desc.textContent ="Elevate your English skills with The Learning Curve's premier tutoring services. Our experienced tutors specialize in enhancing comprehension, grammar, writing, and critical analysis skills."+
                     "Through personalized sessions, we foster a deep understanding of literature and language, empowering students to articulate their thoughts effectively."+
                     "Step into success with us and watch your proficiency soar."; break;
        }
        case 3 : 
        {
            title.textContent = "Math";
            desc.textContent = "Unlock your potential in mathematics with The Learning Curve's expert tutoring services." +
                     "Are you struggling with tackling algebra, calculus, or geometry? Fear Not: our proven methods and personalized approach empower students to excel in their mathematical studies." +
                     "Join us at The Learning Curve and experience the difference in your mathematical journey."; break;
        }
        
    }
}
