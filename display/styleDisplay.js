function changeStyle()
{
    var divContainer=document.getElementById('container');
    var h1Title=document.getElementById('title');
    if(h1Title.textContent=='Style Assigned Block')
    {
        document.body.classList.remove('content-block');   
        document.body.classList.add('content-flex');
        h1Title.textContent='Style Assigned Flex';
    }
    else
    {
        document.body.classList.remove('content-flex');
        document.body.classList.add('content-block');        
        h1Title.textContent='Style Assigned Block';
    }
}