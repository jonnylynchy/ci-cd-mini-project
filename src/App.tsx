import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <h3>Testing...</h3>
        <Outlet />
      </main>
    </>
  );
}

export default App;
