const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "Text changed dynamically!";
    console.log("Text content changed");
});

const changeStyleBtn = document.getElementById('change-style-btn');
const styleDemo = document.getElementById('style-demo');

changeStyleBtn.addEventListener('click', () => {
    styleDemo.style.backgroundColor = '#4CAF50';
    styleDemo.style.color = 'white';
    styleDemo.style.padding = '20px';
    styleDemo.style.borderRadius = '10px';
    console.log("Styles modified");
});

const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let newElementExists = false;
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!newElementExists) {
        // Create new element
        newElement = document.createElement('p');
        newElement.textContent = 'New dynamically added paragraph!';
        newElement.style.color = 'blue';
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
        newElementExists = true;
        console.log("Element added");
    } else {
        // Remove the element
        elementContainer.removeChild(newElement);
        toggleElementBtn.textContent = 'Add Element';
        newElementExists = false;
        console.log("Element removed");
    }
});

const mainTitle = document.getElementById('main-title');

mainTitle.addEventListener('mouseover', () => {
    mainTitle.style.color = 'purple';
});

mainTitle.addEventListener('mouseout', () => {
    mainTitle.style.color = 'black';
});
