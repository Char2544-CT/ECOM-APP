STARTER CODE:

There are three components that make this application work:
- ``App.jsx``
- ``ProductList.jsx``
- ``ProductItem.jsx``

In ``App.jsx`` we are creating an array of products and storing it via the useState hook. We are then passing that array of products to our ``ProductList`` component, which we are rendering once.

In our ``ProductList`` component we are using JavaScript's ``map()`` function to access each item in our list of products one at a time, and for each product we're rendering a ``ProductItem`` component.

As we render the ProductItem component, we pass each individual product to it. Inside of ProductItem we render each product's individual properties: ``name``, ``price``, ``description``, and ``image``.

CSS:

I used custom inline styling with React to make each product a card of sorts. With a background color, border, and margins for a cleaner look. I also added additional css in App.css that targets each HTML element in ProductItem by calling its className. The CSS also targets with first and second <p> element using .product-item p:nth-of-type().

IMAGES:

Images- I saved images into 'assests' so I had to import images and add them to the end of my array in App.jsx. Then the image is rendered in ProductItem through props and an img element.

FILTER FUNCTION:

In order to filter the products based on categories I had to create 4 functions and pass the functions to my buttons with the onClick attribute. I used, useState hook with products as a prop from App.jsx. The functions only show certain items using .filter() by referencing the product names. The last function is set to show all products listed.

ADDITIONAL NOTES:

As I practice, I do rely on copilot a lot for the syntax and then try and work out the logic on my own which seems to help. 

