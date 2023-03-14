### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? 
 
React Router is a tool that help provide separate url for each view for single 
page apps. Let you use navigation.

- What is a single page application?

Apps that use only client-side routing.

- What are some differences between client side and server side routing?

Client-side routing doesn't envole requests to servers.

- What are two ways of handling redirects with React Router? When would you use each?   
  
1.Using redirect/navigate components (used when there is no need to navigate between views)

2.Calling push method on a history object. We you need to use navigation(backward/forward options in the browser)

- What are two different ways to handle page-not-found user experiences using React Router? 
  
1.Adding a route with "Not Found" component in the end of the Switch/Routes wrapper. React will render that component if no matching routes found.

2.Use of redirect/navigate if no matching routes found.

- How do you grab URL parameters from within a component using React Router?

Import useParams method form 'react-router-dom'.
Then call it inside the component to get the params values

- What is context in React? When would you use it?
Context is used when you need to pass values through several levels.

- Describe some differences between class-based components and function
  components in React.
1.Class-based components have lifecycle methods, comes with repeated code in different lifecycles.
Function components use hooks instaed.

2.In class-based components it's harder to implement same logic across components.  More repetition.

3.Function components are shorter and easier to read. 

- What are some of the problems that hooks were designed to solve?

Cleaner code, better logic, no repetition. 