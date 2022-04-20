import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


const App = () => {

return (
  <>
    <div className="lg:w-11/12 lg:mx-auto">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          <Link to='/nytimes'/>
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/nytimes" element={<Home />} />
            <Route exact path="/nytimes/search" element={<Search />} />
            <Route exact path="/nytimes/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>      
    </div>
  </>
  );
}

export default App;
