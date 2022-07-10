import { useState } from 'react';
function Product() {
  const [isActive, setIsActive] = useState('topic');
  const setTab = (tab) => {
    setIsActive(tab);
  };
  return (
    <div className="flex justify-start flex-col items-center w-full">
      <ul className="flex">
        <li
          tab="topic"
          className={`rounded-full transition-all ease-in mx-2 inline-block px-3 cursor-pointer py-2 ${
            isActive === 'topic'
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setTab('topic')}
        >
          <i className="fa-solid fa-drum-steelpan"></i>{' '}
          <span className="inline-block ml-2">All Topics</span>
        </li>
        <li
          tab="algorithm"
          className={`rounded-full transition-all ease-in mx-2 inline-block px-3 cursor-pointer py-2 ${
            isActive === 'algorithm'
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setTab('algorithm')}
        >
          <i className="fa-brands fa-algolia text-orange-400"></i>{' '}
          <span className="inline-block ml-2">Algorithms</span>
        </li>
        <li
          tab-name="database"
          className={`rounded-full transition-all ease-in mx-2 inline-block px-3 cursor-pointer py-2 ${
            isActive === 'database'
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setTab('database')}
        >
          <i className="fa-solid fa-database text-blue-600"></i>{' '}
          <span className="inline-block ml-2">Database</span>
        </li>
      </ul>
      <table className="table divide-y mt-10 rounded-lg w-full">
        <thead className="bg-gray-50">
          <tr className="whitespace-nowrap text-left">
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              OrderId
            </th>
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              Name
            </th>
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              Product
            </th>
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              Total
            </th>
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              Status
            </th>
            <th scope="col" className="px-6 py-4 text-sm text-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm font-semibold">#1</td>
            <td className="px-6 py-4 text-sm">Vũ Nguyễn</td>
            <td className="px-6 py-4 text-sm">Giày Fake</td>
            <td className="px-6 py-4 text-sm">100.000 đ</td>
            <td className="px-6 py-4 text-sm text-green-600">Đang giao hàng</td>
            <td className="px-6 py-4 text-sm">
              <button className="outline-none px-3 py-1 text-sm rounded-full font-semibold text-red-500 bg-red-200">
                delete
              </button>
              <button className="ml-2 outline-none px-3 py-1 text-sm rounded-full text-blue-600 bg-blue-200">
                edit
              </button>
            </td>
          </tr>
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm font-semibold">#2</td>
            <td className="px-6 py-4 text-sm">Vũ Nguyễn</td>
            <td className="px-6 py-4 text-sm">Giày Fake</td>
            <td className="px-6 py-4 text-sm">100.000 đ</td>
            <td className="px-6 py-4 text-sm text-green-600">Đang giao hàng</td>
            <td className="px-6 py-4 text-sm">
              <button className="outline-none px-3 py-1 text-sm rounded-full font-semibold text-red-500 bg-red-200">
                delete
              </button>
              <button className="ml-2 outline-none px-3 py-1 text-sm rounded-full text-blue-600 bg-blue-200">
                edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
