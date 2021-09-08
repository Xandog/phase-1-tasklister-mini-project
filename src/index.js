document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  // text input listener
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log(e.target.newtaskdescription.value);
    handleInput(e.target.newtaskdescription.value);
  });

  // text input Handler - adds user input to the to do list
  function handleInput(input){
    let li = document.createElement('li');
    li.textContent = input;
    document.querySelector('#tasks').appendChild(li);
  }
});
