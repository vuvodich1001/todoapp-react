import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}
export default App;
