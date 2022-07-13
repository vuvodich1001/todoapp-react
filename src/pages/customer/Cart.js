function Cart() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        {/* <div className="col-span-12">
          <h1>Giỏ hàng</h1>
        </div> */}
        <div className="col-span-9">
          <ul>
            <li className="my-3">
              <div className="flex items-center bg-white rounded-lg justify-between px-2">
                <img
                  src={require('@/assets/images/thinkpad.png')}
                  alt=""
                  className="w-[120px] object-cover"
                />
                <div>
                  <p className="text-md font-semibold">
                    Lenovo ThinkBook 16 G4+ (ThinkBook16G401NS)
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Ryzen 5 6600H RAM 16 SSD 512GB
                  </p>
                </div>
                <div>
                  <button className="px-2 py-1 text-sm text-gray-500 bg-gray-300 rounded-lg">
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="inline-block mx-2">1</span>
                  <button className="px-2 py-1 text-sm text-gray-700 bg-gray-300 rounded-lg">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <p className="font-semibold text-md text-red-500">
                  23.990.000 đ
                </p>
                <button className="text-red-500 rounded-lg text-sm bg-red-200 font-semibold px-2 py-1">
                  delete
                </button>
              </div>
            </li>
            <li className="my-3">
              <div className="flex items-center bg-white rounded-lg justify-between px-2">
                <img
                  src={require('@/assets/images/thinkpad.png')}
                  alt=""
                  className="w-[120px] object-cover"
                />
                <div>
                  <p className="text-md font-semibold">
                    Lenovo ThinkBook 16 G4+ (ThinkBook16G401NS)
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Ryzen 5 6600H RAM 16 SSD 512GB
                  </p>
                </div>
                <div>
                  <button className="px-2 py-1 text-sm text-gray-500 bg-gray-300 rounded-lg">
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="inline-block mx-2">1</span>
                  <button className="px-2 py-1 text-sm text-gray-700 bg-gray-300 rounded-lg">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <p className="font-semibold text-md text-red-500">
                  23.990.000 đ
                </p>
                <button className="text-red-500 rounded-lg text-sm bg-red-200 font-semibold px-2 py-1">
                  delete
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="coupon my-3 bg-white p-3 rounded-lg">
            <h1 className="text-xl font-bold">Mã khuyến mại</h1>
            <input
              type="text"
              placeholder="Nhập mã khuyến mại"
              className="text-md px-2 py-1 outline-none border rounded-md mt-2"
            />
            <button className="block mt-2 text-green-500 rounded-lg text-sm bg-green-200 font-semibold px-2 py-1">
              Áp dụng
            </button>
          </div>
          <div className="total my-2 bg-white p-3 rounded-lg">
            <div className="border-b-[1px] border-gray-100">
              <h1 className="text-xl font-bold">Tóm tắt đơn hàng</h1>
              <div className="flex justify-between my-3">
                <span className="text-md text-gray-700">Tạm tính</span>
                <span className="text-md text-gray-700">200.000 đ</span>
              </div>
              <div className="flex justify-between my-3">
                <span className="text-md text-gray-700">Tạm tính</span>
                <span className="text-md text-gray-700">200.000 đ</span>
              </div>
              <div className="border-dotted border-t-2 flex justify-between py-3">
                <span>Tạm tính</span>
                <span className="text-red-500 font-semibold">200.000 đ</span>
              </div>
            </div>
            <button className="mt-3 w-full py-2 text-md font-bold text-white bg-indigo-400 rounded-full">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
