// Throttling Function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector(".main")
.addEventListener("mousemove",throttleFunction((details)=>{
    let div = document.createElement("div");
    if(details.clientX < 600){
    div.classList.add('imgDiv');}
    else {
        div.classList.add('imgDiv2');
    }
    document.body.appendChild(div);
    div.style.left = details.clientX + 'px';
    div.style.top = details.clientY + 'px';

    let img = document.createElement("img");
    img.setAttribute("src","https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg");

    div.appendChild(img);

    gsap.to(img,{
        y : 0,
        ease : Power1,
        duration : .2
    });
    gsap.to(img,{
        y : "100%",
        delay : .6,
        ease : Power2,
        // duration : .6
    });

    setTimeout(() => {
        div.remove();
    }, 2000);
},500)
)

