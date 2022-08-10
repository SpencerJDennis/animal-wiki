window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let turtle = document.getElementById("turtles");
    turtle.setAttribute("class", "hidden");

    let tiger = document.getElementById("tigers");
    tiger.setAttribute("class", "hidden");

    let snake = document.getElementById("snakes");
    snake.setAttribute("class", "hidden");
    

    const animal = (document.querySelector("input#animal").value);

    if (animal === "turtle") {
      turtle.removeAttribute("class");
    } 
    
    else if (animal === "tiger") {
      tiger.removeAttribute("class");
    }  
    
    else if (animal === "snake") { // new else if statement
      snake.removeAttribute("class");
    } 
    
    else {
      alert("Please enter one of the available animals")
    }
  };
};