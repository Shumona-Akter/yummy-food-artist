import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <Container className='my-5'>
           

            <div className="App">
     
      <div ref={ref}>
      <h4 className='mb-5'>See your questions and answers</h4>
            <h5>Tell us the differences between uncontrolled and controlled components.</h5>
            <p>Controlled components are React components that render a form input element and manage the state of that input element. The component also handles changes to the input value through an onChange event handler, which updates the state with the new value. On the other hand, uncontrolled components are React components that render a form input element but don't manage the state of that input element. Instead, the input element manages its own state internally using the DOM.</p>
            <h5>How to validate React props using PropTypes?</h5>
            <p>React provides a package called prop-types that allows you to define the expected types and values of the props that are passed to a component. This helps to catch errors and improve the stability and maintainability of your codebase.</p>
            <h5>Tell us the difference between nodejs and express js.</h5>
            <p>Node.js is a JavaScript runtime that allows developers to write server-side code using JavaScript. It's built on top of the V8 JavaScript engine, which is also used by Google Chrome. Node.js provides an event-driven, non-blocking I/O model that makes it suitable for building scalable and high-performance applications. Node.js comes with built-in modules that allow developers to handle various tasks such as file system access, networking, and HTTP/HTTPS requests. on the other hand,Express.js, is a web application framework for Node.js. It provides a set of features and tools that make it easier to build web applications and APIs using Node.js. Express.js builds on top of Node.js and adds more functionality, such as middleware for handling requests and responses, routing for mapping URLs to controllers, and template engines for rendering dynamic views.</p>
            <h5>What is a custom hook, and why will you create a custom hook?</h5>
            <p>A custom hook in React is a function that encapsulates reusable logic that can be shared between different components. Custom hooks allow you to extract common functionality from your components and share it across your application. custom hooks are a powerful feature in React that can help you write cleaner, more reusable code. Custom hooks can make your component code more readable and concise by abstracting away complex logic and implementation details.</p>

      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-warning p-3 text-white my-5 '>Download Quetion</button>}
      </Pdf>
        </div>
        </Container>
    );
};

export default Blog;