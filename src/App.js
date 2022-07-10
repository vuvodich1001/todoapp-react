import { routes } from './routes';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <main className="container mx-auto">
      <ul className="flex justify-start font-semibold text-2xl">
        <li className="hover:text-[#50d71e] transition ease-in-out delay-100 mx-5">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#50d71e] transition ease-in-out delay-100 mx-5">
          <Link to="/product">Product</Link>
        </li>
        <li className="hover:text-[#50d71e] transition ease-in-out delay-100 mx-5">
          <Link to="/account">Account</Link>
        </li>
      </ul>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </main>
  );
}
export default App;
