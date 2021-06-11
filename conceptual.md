### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
### to do client side routing, which will allow the user to navigate through an app without refreshing the page

- What is a single page application?
### an app where the user can navigate through it without seeing the page completely wiped away to either update or move to a new page. Everything happens in the same screen like going through your email.

- What are some differences between client side and server side routing?
### client side:prevents a request to the server so the whole page doesn't need to refresh. the route is handled by the JS that is loaded to the page itself. server side: causes the whole page to refresh by having to make a request to the server.

- What are two ways of handling redirects with React Router? When would you use each?
### one is using the redirect component by passing the route that we want to redirect to and rendering that component.This is useful to catch an incorrect link and redirect back to the correct one. another one is the link component, this can be used to direct to specific routes for navigation through an app.

- What are two different ways to handle page-not-found user experiences using React Router? 
###  We could use a redirect to send the user to a correct page so they never see the not found or we could use a switch component that will handle any route that's not an exact match to the live routes and render whatever you want the user to see.

- How do you grab URL parameters from within a component using React Router?
### by using the  hook useParams

- What is context in React? When would you use it?
###  a way to pass data through the component tree without passing props manually through each child. We use it for data that can be deemed "global" like user authentication, themes, or preferred language.

- Describe some differences between class-based components and function
  components in React.
### classes require you to extend from react, must have the render() method, and are known as stateful components. Functions are written like normal JS functions, they accept props as arguements, known as stateless, and have no render() method.

- What are some of the problems that hooks were designed to solve?
### they allow you to manage state, and lifecycle methods without having to write separate classes. 