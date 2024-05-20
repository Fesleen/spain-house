import './App.css';
import Layout from '../src/laytout';
import MainPage from '../src/pages/main_page';
import RouterComponent from '../src/routes';

function App() {
  return (
    <Layout>
      <RouterComponent>
        <MainPage/>
      </RouterComponent>
    </Layout>
  );
}

export default App;
