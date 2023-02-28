const newTodo = document.createElement('li');
const boldText= document.createElement('b');
const ul= document.querySelector('ul');
boldText.textContent="DON'T FORGET TO LOCK THE COOP!"
//boldText.textContent="Clean the area";
newTodo.classList='todo';
newTodo.append(boldText);
ul.append(newTodo)


const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";
secondTodo.className='todo';
ul.append(newTodo, secondTodo)


const thirdTodo = document.querySelector('li');
thirdTodo.textContent= "Feed Cats";
ul.prepend(thirdTodo);

const newImg=document.createElement('img');
 newImg.classList.add('thumbnail')
 newImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg' )
 document.body.prepend(newImg)


 //const removeMe = document.querySelector('#remove-me');
 //ul.removeChild(removeMe)

 const removeMe=document.querySelector('#remove-me');
 removeMe.remove();

 const h1= document.querySelector('h1');
 h1.remove();