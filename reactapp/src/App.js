import './App.css';

// Importing Functional Component
import Functional from './functional'
// If we want to use as a component, We always enclose the name of the Component in the Tag as HTML

// Note: here we have to use {} compoulsory as we don't use default in export statement
import { Default } from './WithoutExportDefault'

function App() {
  return (
    <div className="App">
     <h1>Utkarsh Patel</h1>

    {/* Functional Component */}
    <Functional></Functional>

    {/* Default Component */}
    <Default></Default>

    </div>
  );
}

export default App;
