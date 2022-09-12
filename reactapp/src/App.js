import './App.css';

// Importing Functional Component
import Functional from './functional'
// If we want to use as a component, We always enclose the name of the Component in the Tag as HTML

// Note: here we have to use {} compoulsory as we don't use default in export statement
import { Default } from './WithoutExportDefault';

// importing class based component
import ClassBased from './ClassBased';

// importing Outer/Inside functional component
import Inside from './InsideComponent';




// importing ClickEvent component
import ClickEvent from './ClickEvent';


import Click from './Click'

import State from './State'

import StateSyntax from './StateSyntax'

function App() {
  return (
    <div className="App">
     <h1>Utkarsh Patel</h1>

    {/* Functional Component */}
    <Functional></Functional>

    {/* Default Component */}
    <Default></Default>



    {/* ClassBased Component */}
    <ClassBased></ClassBased>

    {/* Inside component */}
    <Inside></Inside>



    {/* ClickEvent */}
    <ClickEvent></ClickEvent>
    <Click></Click>


    {/* State Compoment */}
    <State></State>
    <StateSyntax></StateSyntax>

    </div>
  );
}

export default App;
