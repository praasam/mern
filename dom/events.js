// click event
document.getElementById('button').addEventListener('click', function() {
    alert("Button was clicked")
    // document.getElementById('p').textContent = 'Button was clicked!';
});

// mouse events
document.getElementById('mouse').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'skyblue';
});

document.getElementById('mouse').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// keyboard events
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         document.getElementById('key').textContent = 'Enter key pressed!';
//     }
// });

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('key').textContent = 'Enter key pressed!';
    }
});

// form events
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.getElementById('input').addEventListener('change', function() {
    console.log('Input value changed to:', this.value);
});

// window events
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, window.innerHeight);
});

// manipulating dom events
// changing text
document.getElementById('changeButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'Button was clicked.';
});

// changing styles
document.getElementById('changeButton').addEventListener('click', function() {
    document.getElementById('text').style.backgroundColor = 'skyblue';
});

// adding/removing classes
document.getElementById('toggleClassButton').addEventListener('click', function() {
    var element = document.getElementById('myDiv');
    element.classList.toggle('myClass');
});

// creating and adding new elements
document.getElementById('addElementButton').addEventListener('click', function() {
    var newElement = document.createElement('p');
    newElement.textContent = 'New paragraph element';
    document.getElementById('container').appendChild(newElement);
});

// removing elements
document.getElementById('removeElementButton').addEventListener('click', function() {
    var element = document.getElementById('elementToRemove');
    element.parentNode.removeChild(element);
});


