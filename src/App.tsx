import React from 'react';
import { Header } from './components/Header';
import GlobalStyle from './globalStyles';
import { Main } from './components/Main';
import { Overlay } from './components/Overlay';
import { useSelector } from 'react-redux'
import { RootState } from './store';

function App() {
  const filterState = useSelector((state: RootState) => state.filter.value)
  return (
    <>
      <GlobalStyle
        filterState={filterState}
      />
      <Header />
      <Main />
      <Overlay />
    </>
  );
}

export default App;
