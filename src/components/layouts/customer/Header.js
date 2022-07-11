import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container mx-auto divide-y">
      <nav className="flex items-center py-3">
        <div className="flex-1 flex items-center">
          <Link to="/">
            <img
              src={require('@/assets/images/golden-laptop.png')}
              className="logo w-[200px] object-cover"
              alt=""
            />
          </Link>
          <div className="catalog mx-3">
            <button className="btn">
              <i className="fa-solid fa-bars"></i>
            </button>
            <label className="inline-block ml-2 font-semibold text-md">
              Danh mục
            </label>
          </div>
          <p className="font-semibold mx-3 text-md text-rose-600 cursor-pointer hover:text-blue-500 transition-all">
            Khuyến mãi
          </p>
          <div className="search flex-1 flex items-center rounded-full mx-2 bg-[#ecf0f4] overflow-hidden hover:border border-blue-500 transition-all">
            <button className="px-3 py-2 rounded-full text-light">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              className="outline-none bg-inherit text-md flex-1"
              placeholder="Tên sản phẩm, nhu cầu, hãng"
            />
            <button className="px-3 py-2 rounded-full m-1 text-sm bg-rose-500 font-semibold text-white">
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className="ml-12">
          <button className="btn mx-1">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="inline-block ml-2">0</span>
          </button>
          <button className="btn mx-1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link to="/account" className="btn mx-1">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
