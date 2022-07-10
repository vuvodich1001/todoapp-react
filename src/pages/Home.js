import { useState } from 'react';

function Home() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let user = {
      username,
      password
    };
    console.log(user);
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <form
        action=""
        className="border rounded-lg px-10 py-5 mt-5 w-[350px]"
        onSubmit={handleSubmitForm}
      >
        <h1 className="text-center text-2xl text-stone-900 font-semibold mt-2 mb-4">
          Login Form
        </h1>
        <div className="my-2">
          <label htmlFor="" className="font-semibold text-stone-900">
            Username
          </label>
          <input
            type="text"
            className="mt-1 block py-1 px-2 border outline-none w-full"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="" className="font-semibold text-stone-900">
            Password
          </label>
          <input
            type="text"
            className="mt-1 block py-1 px-2 border outline-none w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="block py-1 w-full text-white bg-blue-600 border rounded-full hover:shadow-md hover:bg-blue-500 transition-colors mx-auto">
          Login
        </button>
        <p className="text-center my-2 text-gray-600">
          Login with Social Account
        </p>
        <div className="text-center my-2 text-2xl">
          <i className="mx-2 text-blue-600 fa-brands fa-facebook"></i>
          <i className="mx-2 text-rose-600 fa-brands fa-google-plus"></i>
        </div>
        <span className="text-gray-500">
          Do you have an account?
          <span className="hover:text-purple-400 hover:underline">Sign Up</span>
        </span>
      </form>
    </div>
  );
}

export default Home;
