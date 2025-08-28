### 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# 1. getElementById("id")

Returns: A single element (or null if not found).

Selector: Only by ID.

Notes:

IDs are meant to be unique in a page, so it returns just one element.

Example:

const header = document.getElementById("main-header");

# 2. getElementsByClassName("class")

Returns: An HTMLCollection (array-like, but not an actual array).

Selector: By class name.

Live collection: Updates automatically if elements with that class are added/removed in the DOM.

Example:

const items = document.getElementsByClassName("list-item");
console.log(items[0]); // first element with class "list-item"

# 3. querySelector("selector")

Returns: The first matching element.

Selector: Any valid CSS selector (#id, .class, div > p, [attr=value], etc.).

Example:

const firstItem = document.querySelector(".list-item");

# 4. querySelectorAll("selector")

Returns: A NodeList (array-like, can use forEach, but not live).

Selector: Any valid CSS selector.

Static collection: Doesn’t update if the DOM changes.

Example:

const allItems = document.querySelectorAll(".list-item");
allItems.forEach(item => console.log(item.textContent));


### 2 How do you create and insert a new element into the DOM?

# 1 Use document.createElement(tagName).

const newDiv = document.createElement("div");

# 2. Add content or attributes

You can set its text, HTML content, classes, IDs, or any attributes.

newDiv.textContent = "Hello, World!";
newDiv.className = "greeting";
newDiv.id = "welcome-message";

### 3 What is Event Bubbling and how does it work?
Event bubbling is the default mechanism that allows events to propagate upward through the DOM tree after being fired on the target element.

### 4 What is Event Delegation in JavaScript? Why is it useful?

Event Delegation (Definition)

Event Delegation is a technique where you attach a single event listener to a parent element, and let it handle events that bubble up from its child elements.

Instead of adding listeners to every child, you “delegate” the responsibility to the parent.

# How it works

Events bubble up from child → parent.

The parent’s listener checks which child was clicked (or interacted with) using event.target.

The parent executes logic based on the child.


### 5 What is the difference between preventDefault() and stopPropagation() methods?

# 1. event.preventDefault()

What it does: Stops the default browser action from happening.

Does NOT stop the event from bubbling up the DOM.

Examples of default actions:

Clicking a link (<a href="...">) → navigates to another page

Submitting a form (<form>) → reloads the page

Right-click → shows context menu

Example:

<a href="https://example.com" id="myLink">Click me</a>

<script>
  document.getElementById("myLink").addEventListener("click", function(e) {
    e.preventDefault(); // Stops navigation
    console.log("Default action prevented!");
  });
</script>

# 2. event.stopPropagation()

What it does: Stops the event from bubbling (or capturing) further up the DOM tree.

The event still happens on the target, but parents won’t hear it.

Example:

<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation(); // Stops bubbling
    console.log("Child clicked");
  });

  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
  });
</script>


