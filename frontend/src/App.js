import React from 'react';
import logo from './logo.svg';
import {Home} from './components/Home/Home';
import {
  RecoilRoot,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Home/>
    </RecoilRoot>
  );
}

export default App;
