function Laptop() {
  return (
    <div className="cursor-pointer shadow-lg rounded-3xl p-3 bg-white transition-all hover:shadow-gray-300">
      <img
        src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/15/Thinkbook_14_Artic_Grey_IRcamera.png?w=700&h=700"
        alt="hinhanh"
      />
      <p className="font-semibold text-md">Lenovo ThinhBook Pro G4+</p>
      <p className="font-semibold text-md text-rose-600">23.990.000 đ</p>
      <p className="text-gray-500 text-sm">
        <span>
          Màu <span className="inline-block w-3 h-3 bg-red-400"></span>
        </span>
        <span className="relative top-[-1px] mx-1">|</span> 2 phiên bản
      </p>
    </div>
  );
}
export default Laptop;
