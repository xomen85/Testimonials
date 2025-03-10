const testimonials = [{
    name: "Leo Rodriguez",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am beyond impressed with the results I've seen after using hair products' hair shampoo. My hair has never looked this healthy and shiny before. I highly recommend this product to anyone looking for a trustworthy hair care solution."
},
{
    name: "Susan Sanchez",
    photoUrl: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcnxlbnwwfDF8MHx8fDA%3D",
    text: "My hair has never looked this healthy and shiny before. I highly recommend this product to anyone looking for a trustworthy hair care solution."
},
{
    name: "Linda Berg",
    photoUrl: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXJ8ZW58MHwxfDB8fHww",
    text: "I highly recommend this product to anyone looking for a trustworthy hair care solution."
},
];
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".user-name")
let idx = 0;
if(idx === testimonials.length){
    idx = 0;
}
updateTestimonial()
function updateTestimonial() {
    const{name, photoUrl, text} = 
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    setTimeout(() =>{
        updateTestimonial()
     
    }, 10000)
}