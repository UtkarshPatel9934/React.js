import './App.css';

// Importing Functional Component
// import Functional from './functional'
// If we want to use as a component, We always enclose the name of the Component in the Tag as HTML

// Note: here we have to use {} compoulsory as we don't use default in export statement
// import { Default } from './WithoutExportDefault';

// importing class based component
// import ClassBased from './ClassBased';

// importing Outer/Inside functional component
// import Inside from './InsideComponent';




// importing ClickEvent component
// import ClickEvent from './ClickEvent';


// import Click from './Click'

// import State from './State'

// import StateSyntax from './StateSyntax'

// import StateInClass from './StateInClass'



/* Importing ClasBased Props */
// import ClassBasedProps from './ClassBasedProps'


/* Importing Functional Component Based Props */
// import FunctionalProps from './FunctionalProps'



// import GetInputValue from './GetInputValue'

// import HideShowToogle from './HideShowToogle'



// import HandleForm from './HandleForm'


// import IncorrectConditionalRendering from './IncorrectConditionalRendering'
// import CorrectConditionalRendering from './CorrectConditionalRendering'


// import BasicsFormValidation from './BasicsFormValidation'


// import ParentFuncProps from './ParentFuncProps'


// import ConstructorLifeCycle from './ConstructorLifeCycle'

// import ClassParent from './ClassParent'


// import ComponentDidMount from './ComponentDidMount'
// import ComponentDidUpdate from './ComponentDidUpdate'
import ShouldComponentUpdate from './ShouldComponentUpdate'

function App() {
  return (
    <div className="App">
     <h1>Utkarsh Patel</h1>

    {/* Functional Component */}
    {/* <Functional></Functional> */}

    {/* Default Component */}
    {/* <Default></Default> */}



    {/* ClassBased Component */}
    {/* <ClassBased></ClassBased> */}

    {/* Inside component */}
    {/* <Inside></Inside> */}



    {/* ClickEvent */}
    {/* <ClickEvent></ClickEvent> */}
    {/* <Click></Click> */}


    {/* State Compoment */}
    {/* <State></State> */}
    {/* <StateSyntax></StateSyntax> */}


    {/* State in Class Bases Component */}
    {/* <StateInClass></StateInClass> */}


    {/* Functional Component Based Props */}

    {/* Here we pass props as a name and value as a utkarsh in it. */}
    {/* <FunctionalProps name={'utkarsh'} email="utkarsh@yahoo.com" other={{
      address: 'delhi', pincode: '472973'
    }} ></FunctionalProps> */}
    
    {/* <FunctionalProps name={'Zeel'} email="zeel@yahoo.com" other={{
      address: 'noida', pincode: '755397'
    }} ></FunctionalProps>
    <FunctionalProps name={'Nikita'} email="nikita@yahoo.com" other={{
      address: 'mehsana', pincode: '384315'
    }} ></FunctionalProps> */}
    



    {/* <ClassBasedProps name='Utkarsh' email='uki@yahoo.com' ></ClassBasedProps> */}


    {/* <GetInputValue></GetInputValue> */}
    {/* <HideShowToogle></HideShowToogle> */}



    {/* <HandleForm></HandleForm> */}



    {/* <IncorrectConditionalRendering></IncorrectConditionalRendering> */}

    {/* <hr /> */}
    {/* <CorrectConditionalRendering></CorrectConditionalRendering> */}


    {/* <BasicsFormValidation></BasicsFormValidation> */}



    {/* <ParentFuncProps></ParentFuncProps> */}


    {/* <ConstructorLifeCycle></ConstructorLifeCycle> */}


    {/* <ClassParent></ClassParent> */}


    {/* <ComponentDidMount></ComponentDidMount> */}

    {/* <ComponentDidUpdate></ComponentDidUpdate> */}

    <ShouldComponentUpdate></ShouldComponentUpdate>
  
    </div>
  );
}

export default App;
