function changeStyle()
{
    var divContainer=document.getElementById('container');
    var h1Title=document.getElementById('title');
    if(h1Title.textContent=='Style Assigned Flex-Grow 1')
    {
        divContainer.classList.remove('container1');
        divContainer.classList.add('container');        
        h1Title.textContent='Style Assigned Flex-Grow 0';
    }
    else
    {
        divContainer.classList.remove('container');   
        divContainer.classList.add('container1');
        h1Title.textContent='Style Assigned Flex-Grow 1';        
    }
}