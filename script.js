let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
let inpS=document.getElementById('inpS')
let status123="stopped";
let para=document.getElementById('para')
// let abc=document.getElementsByClassName('slot')
let btn=document.getElementById('startanimation')
// let btn1=document.getElementById('stopanimation')
let values=[
    '😆','😅','😂','🤣','😊','😇','🙂','🙃' 
]
function getRandomvalue()
{
    return values[Math.floor(Math.random()*8)]
    //Math.random()give the random value which is less then 1
}

function startstop()
{
    if(status123=="stopped")
    {
        interval=window.setInterval(()=>
        {
            value1.innerText=getRandomvalue();
            value2.innerText=getRandomvalue();
            value3.innerText=getRandomvalue();
            
        },200)
        status123="started"
        btn.innerHTML="Stop"
        document.getElementById('slot1').classList.add('newslot')
        document.getElementById('slot2').classList.add('newslot')
        document.getElementById('slot3').classList.add('newslot')
    }
    else
    {
        window.clearInterval(interval)
        btn.innerHTML="Start"
        status123="stopped"
        if(value1.innerHTML == value2.innerHTML && value2.innerHTML == value3.innerHTML)
        {
            para.innerHTML="You Won 🤩 🥳"
        }
        else
        {
            para.innerHTML="You Loss 😔"
        }
        document.getElementById('slot1').classList.remove('newslot')
        document.getElementById('slot2').classList.remove('newslot')
        document.getElementById('slot3').classList.remove('newslot')
    }
}
btn.addEventListener('click',startfun)
function startfun(){
    startstop();
}

let animationId;
function updateAnimation(newSpeed)
{
    //Ye kya karega ki jo phale se jo amination chal rha hai usse clear karega
    // or ek nya animation strt kar dega at 1000/newSpeed
    if(animationId) clearInterval(animationId)
    animationId=setInterval(()=>
    {
        value1.innerText=getRandomvalue()
        value2.innerText=getRandomvalue()
        value3.innerText=getRandomvalue()
    },1000/newSpeed)
}

inpS.onchange=function(ev)
{
    // console.log('value change',ev.target.value)
    // ev is a variable to agr hume ye pata krna hai ki vo input box 
    // mai jo changes hue hai vo dekhne hai to hum 
    // ev.target that ev ka target or uski change value
    document.documentElement.style.setProperty('--speed',ev.target.value)
    //this is way of convert css variable to js
}
//finally completed today !!!!!!! 22-08-2022