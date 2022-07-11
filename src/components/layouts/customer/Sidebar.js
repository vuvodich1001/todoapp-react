function Sidebar() {
  return (
    <div>
      <h3 className="text-2xl font-semibold my-1">Laptop</h3>
      <p className="text-gray-400 text-md">
        Giúp lọc nhanh laptop bạn tìm kiếm
      </p>
      <h3 className="text-xl font-semibold my-1">Nhu cầu</h3>
      <div>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Văn phòng, học tập
        </span>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Quay dựng video
        </span>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Gaming
        </span>
      </div>
      <h3 className="text-xl font-semibold my-1">Thương hiệu</h3>
      <div>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Dell
        </span>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Asus
        </span>
        <span className="cursor-pointer mr-2 my-1 inline-block tag py-2 px-3 bg-white border rounded-lg hover:bg-gray-200">
          Lenovo
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
