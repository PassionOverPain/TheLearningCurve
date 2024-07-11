let title = document.getElementById('title');
let desc = document.getElementById('desc');
let subNum = 0;
function increaseNum()
{
    subNum+=1;
    display();
}
function decreaseNum()
{
    subNum-=1;
    display();
}
function display()
{
    window.alert(`The number is ${subNum}`);
    switch(subNum)
    {
        case 0 : 
        {
            title.textContent = "Math";
            desc.textContent = "Unlock your potential in mathematics with The Learning Curve's expert tutoring services." +
                     "Our dedicated tutors provide tailored guidance to help students grasp concepts with confidence, ensuring each individual achieves academic success." +
                     "Whether you're tackling algebra, calculus, or geometry, our proven methods and personalized approach empower students to excel in their math studies." +
                     "Join us at The Learning Curve and experience the difference in your mathematical journey."; break;
        }
        case 1 :
        {
            title.textContent = "English";
            desc.textContent ="Elevate your English skills with The Learning Curve's premier tutoring services. Our experienced tutors specialize in enhancing comprehension, grammar, writing, and critical analysis skills."+
                     "Through personalized sessions, we foster a deep understanding of literature and language, empowering students to articulate their thoughts effectively."+
                     "Whether preparing for exams, honing writing abilities, or exploring literary classics, The Learning Curve provides the tools and support needed for academic excellence in English."
                     "Step into success with us and watch your proficiency soar."; break
        }
    }
}