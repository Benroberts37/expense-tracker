import React from 'react'
import {AddTransaction} from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      
        <AddTransaction/>

    </GlobalProvider>
  );
}

export default App;
