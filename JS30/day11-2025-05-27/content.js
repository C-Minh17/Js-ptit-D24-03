const divTitle=document.querySelectorAll("img");
const divText=document.querySelectorAll("h3");

divTitle.forEach(item=>{
    item.src="https://i.ytimg.com/vi/k4zgKzDQOpo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzJvy3YsnWQtTCm7hExDWJIEkDyw",
    item.srcset="https://i.ytimg.com/vi/k4zgKzDQOpo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzJvy3YsnWQtTCm7hExDWJIEkDyw"
})
divText.forEach(item=>{
    item.textContent="real gà vãi cứt ";
})

