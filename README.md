HERNANDEZ MINI PRODUCT CATALOG

1. What is the difference between props and state?

Props are read-only values passed from a parent component to a child component. They configure or provide data to the child, such as title, price, category, inStock, and onAddToCart. While state is data managed within a component. A component can update its own state using a state setter. In this project, App manages cartCount and lastAdded with useState, and the displayed cart message changes when the state updates.


2. Why can a child component not modify the props it receives?

Props are intended to be one-way inputs owned and supplied by the parent. React treats props as read-only so that data flow and component behavior remain predictable. A child should request a change by calling a callback passed by the parent, rather than changing the prop value directly.


3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

Props flow downward, but a prop can itself be a function passed from the parent to the child. When the ProductCard button is clicked, the child calls onAddToCart(title) and sends the product title upward as an argument. App receives that argument in handleAddToCart and updates its state. This is callback-based communication: data moves upward by invoking parent-provided behavior, while props still travel from parent to child.


4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

React needs key values to identify each list item across renders. In App, product.id is used as the key for each ProductCard. Unique keys help React preserve and update the correct component instance when the list changes. If key is missing or duplicated, React cannot reliably match list items to their previous component instances. This can cause incorrect UI updates, unexpected state retention, poor rendering performance, warnings in the console, or changes appearing on the wrong card.


5. What does the children prop allow you to do that a normal prop does not?

The children prop lets a parent place nested JSX content between a component's opening and closing tags. It is useful for variable, JSX-based content.

For example:

<ProductCard ...>
  <span>New</span>
</ProductCard>

The <span>New</span> JSX is passed to ProductCard as its children prop and rendered inside the card. Normal props can also contain values or JSX, but children provides a special, convenient nested-content syntax and is suited to content that belongs inside the component's layout.
