# React.js

# Introduction
1. what is React?
- is JavaScript Library.
- is building UI as fast as possible.
- Used to build SPA (Single Page Application)

2. Why it is fast
- React using Virtual DOM (Document Object Model)
- Virtual DOM only updates only required part in DOM (Not all elements of DOM)

3. Why React
- Maintained by Facebook
- High demand due to fast speed
- Mobile App Development - React Native

4. History & Version
- First release - 29 May 2013
- Current Version - 18.2.0
- React used in:
  1. NetFlix
  2. Whatsapp Web.
  3. Instagram
  4. Airbnb

---

# React

1. index.js is the first file that runs

# question:
1. what is the alternative of npm?
   - Yarn - Package manager
2. What is the current version of react version
    "react": "^18.2.0",

---

1. Package.json
   - contains file name, version, commands, and installed package 
2. Package-lock.json
   - contains history of all the installed packages, and version controlls

# question:
1. what is package.json?
   - is most important file in the Project, contains every details of the project, eg: proj name, version, commands that used, libraries, dependencies etc
2. how to install library in React using NPM
   - npm i <library name>
3. how to delete library in React using NPM
   - npm uninstall <package name> or simply remove the package Name line from the dependencies and run npm i
4. how to make custom command?
   - if we want to start our app using : npm run myapp
   - then we have to change the scripts > start line to myapp
   - "myapp" : 'react-script start'
   - npm run myapp to start the project


---


# Component

# Functional Component
1. what is Component?
   - A piece of code that can be reuse
   - such as Function
   - But more powerful than component becuase it have it's own Lifecycle, State, Props, Passing the prameters, own HTML
   - eg: Header and Footer
2. How many types of components are there?
   - Functional Component
   - Class Component
   - HOC - (High Order Component)
   - Pure Component
   - Controlled Component
   - Uncontrolled Component
3. Root Component?
   - App.js is a Root Component
4. Functional componet Syntax?
  ```
  function <Function Name>()
   {
      return (
         <div>
            <TAGS>
         </div>
      )
   }
   export default <Function Name>
   ```
5. How can we access it in the App.js Root component
   ```
   import <Function Name> from './Path'
   ```
6. if we dont want to use default as a export we must have to use export before the function keyword:
   ```
   export function <Function Name>()
   {
      return (
         <div>
            <TAGS>
         </div>
      )
   }
   ```
7. in case of the component without default, we must have to use {}:
  ```
  import { <Function Name> } from './Path'
  ```

---

# Class-Based Component


1. Syntax for the Class Based Component
   ```
   import React, { Component } from 'react';

   class ClassBased extends Component
   {
      render()
      {
         return (
            <h1>Class Based Component</h1>
         )
      }
   }

   export default ClassBased;
   ```
2. Note: ClassBased component is not used more, as compared to Functional Component.
3. 90% of the time we have to use functional component

# Question:
1. Can we define our component in the Root App.js component?
   - yes, we can define it in our Root Component and use it
2. Can we make another component inside one component syntax?
   - We can create a new component inside the syntax of one component but we are restricted to use it inside of the function definition.

---

# JSX in React

1. JSX (JavaScript XML) - is provide a power to combine both JavaScript and HTML in a single file
2. We can also add JS in-built functions and methods in the JSX, it will render accordingly.

# Question: 
1. Can we use React in Angular?
   - Yes, as react is a library not Framework so we can use it in Angular or any other Framework.

---


# Click Event and Function

---


# State in React functional Based Component

1. What is State?
   - basically State is an Object
   - We can store some data inside State
2. Why we are using State instead of Variable?
   - Because when we use Variable our component didn't get Update
   - But in case of State, if anything updated in component it will print the updated data


---

# State in React Class Based Component

# Question:
1. can we use state outside of the component?
   - No, 
2. is state is a Public or Privat
   - State is a Public

# Question:
1. Can we use useState() in the Class Based Component?
   - NO
---

# Props in Functional Component

1. What are props?
   - when we create a Component, and if we also want to pass some data in it from other component then we use Props
   - we can also relate props with a parameter
   - Props means Properties
---


# Props in Functional Component

1. Why Props?
   - To transfer data from 1 component to other component

# Question:
1. Can we change props value in the Receiving Component?
   - No, you can't change the value of the received props
   - However, you can change the value of the props in the Sending Component
   - This rule is applied to both ClassBased Component as well as Functional Component
2. Can we pass function as a Props to another component?
   - Yes
   - that concept is called Lifting Up State
3. Is it possible to send HTML from Parent to Child As a Props?
   - this.props.children in ClassBased
   - this.childrend in Functional Component

---


# Get Input Box Value

1. Make an Input Field
2. Make a function and get Value
3. Make a Button and define a State
4. Get Value on Button Click

---

# Hide Show and Toogle element
---


# Handle Form and Form Basics

# Question:
1. Can we submit form data without creating a form in React?
   - Yes.

---

# Conditional Rendereing

---

# Basics of Form Validation

---

# Pass Function from Parent to Child Component

# Question:
1. what is the use of Pass Function?
   - is it used because we don't need to redeclare the same function in our child component again as we are getting it from our parent component
   - it also helps to increase an effeciency of the overall application
2. Can We pass props to a nested (Child of Child) Component?
   - Yes
---


# Life Cycle Methods

1. There are three Phases in Life Cycle Methods:
   - Mounting
   - Updating
   - Unmounting
2. eg:
   - Product is our Component
   - Products in the Component is Hide By Default
   - Load Product Button -> Mount (1st Phase)
   - Update Product Button -> Update (2nd Phase)
   - Remove Product Button -> UnMount (3rd Phase)
3. Real Life use: if we go to ecommerce page it will loads Spinner, after that it will display products list and remove spinner from the page


# Question:
1. When did Life Cycle Methods run?
   - When our Component gets Load
   - Whenever our Props and State get Updated
   - When our component is removed
2. When our old or removed component came in our DOM, then it will start from the current life cycle or as a new Life Cycle?
   - so in that case, the whole Life Cycle Methods runs again
   - because the old one we destroyed, and after that it creats a new component, and thus have it's new Life Cycle

---


# Constructor - Life Cycle Method in React
1. Note: whenever class get called Constructor get called Automatically
2. Same in React, Whenever our Class Component get Created, Constructor within it get sutomatically called
3. is Constructor a Life Cycle Method - Yes it is.


# Question
1. Why is Constructor is important?
   - Whenever you created Class Constructor Component, before we render our html file, which is placed within render, Constructor is ready to call or the first thing that created while creating constructor class component is Constructor.
2. This is helpful because if we want to define state in component, or if we want to bind some events then we can do before our HTML get rendered
3. Can we receive props in our Constructor?
   - Yes.

---


# Render - Life Cycle Method (prastut karna - Render)
1. Render means - first execute and represent the things
2. As we always write our HTML Code in Render, only in ClassBased Component
3. Whenever anything changes in Render, the whole render reloads, means Re-render. for eg: when a state get updated, Component get loads, or props get updated


---

# componentDidMount Life Cycle Method

1. Here mount means, all our HTML,and CSS are ready OR when our DOM is fully rendered, so after that componentDidMount get called
2. What is the use of componentDidMount?
   - componentDidMount - is usefull when we call an API in our Project
   - or any operation in our project such as Hide/Show, then we do in componentDidMount
   - OR specifically, any thing that depends on out HTMl, such as event, etc then we do all that stuff in componentDidMount
3. What is difference between render and componentDidMount
   - first Render get called and after our whole component is printed means our DOM is fully ready and printed, after that our componentDidMount get called
4. Note: there is no Effect of State and Props in componentDidMount