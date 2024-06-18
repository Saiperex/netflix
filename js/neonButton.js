const slide_button = document.querySelector(".slide_button");
const menu = document.querySelector(".menu");
slide_button.addEventListener("click", function()
{
    slide_button.classList.toggle("active");
    validar();
})
function validar()
{
    if(slide_button.classList.contains("active"))
    {
        menu.style.left="0";
    }
    else
    {
        menu.style.left="100%";
    }
}

function handleResize() 
{
    if (window.innerWidth > 860) 
        {
      slide_button.classList.remove("active");
      menu.style.left = "100%";
    }
}

window.addEventListener("resize", handleResize);