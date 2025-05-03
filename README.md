There are three components that make this application work:
- ``App.jsx``
- ``ProductList.jsx``
- ``ProductItem.jsx``

In ``App.jsx`` we are creating an array of products and storing it via the useState hook. We are then passing that array of products to our ``ProductList`` component, which we are rendering once.

In our ``ProductList`` component we are using JavaScript's ``map()`` function to access each item in our list of products one at a time, and for each product we're rendering a ``ProductItem`` component.

As we render the ProductItem component, we pass each individual product to it. Inside of ProductItem we render each product's individual properties: ``name``, ``price``, ``description``.

CSS:

I used custom inline styling with React to generate a grid 

