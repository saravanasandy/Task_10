let button = document.createElement("button");
button.setAttribute("id","btn");
button.innerHTML = "Click_me";
document.body.append(button);

button.addEventListener("click",()=>{
    setTimeout(() => {
       button.innerHTML = 10 ;
       setTimeout(() => {
        button.innerHTML = 9 ;
        setTimeout(() => {
            button.innerHTML = 8 ;
            setTimeout(() => {
                button.innerHTML = 7 ;
                setTimeout(() => {
                    button.innerHTML = 6 ;
                    setTimeout(() => {
                        button.innerHTML = 5 ;
                        setTimeout(() => {
                            button.innerHTML = 4 ;
                            setTimeout(() => {
                                button.innerHTML = 3 ;
                                setTimeout(() => {
                                    button.innerHTML = 2 ;
                                    setTimeout(() => {
                                        button.innerHTML = 1 ;
                                        setTimeout(() => {
                                            button.innerHTML = "✨✨✨✨🎇🎇🎇Happy Independence Day ✨✨✨✨🎇🎇🎇🎇🎇🎇" ;
                                            setInterval(() => {
                                                const col = () => {
                                                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                                                    document.body.style.backgroundColor = "#" + randomColor;
                                                  body.innerHTML = "#" + randomColor;
                                                  }
                                                  col();
                                              }, 1500);
                                         }, 1500);
                                     }, 1500);
                                 }, 1500);  
                             }, 1500);
                         }, 1500);
                     }, 1500);
                 }, 1500);
             }, 1500);
         }, 1500);
     }, 1500);
    }, 1500);
    
})

// function foo(){
//     return Math.floor(Math.random()*255);
// }
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
// document.body.style.backgroundColor = "#" + randomColor;
// color.innerHTML = "#" + randomColor;

