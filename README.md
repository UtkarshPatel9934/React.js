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