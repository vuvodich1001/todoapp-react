import Laptop from '@/components/Laptop';
import Sidebar from '@/components/layouts/customer/Sidebar';
function Account() {
  return (
    <div className="grid grid-cols-12 gap-2 bg-[#f8fafc] py-5 px-2">
      <div className="lg:col-span-3">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 md:col-span-12 xs:col-span-12">
        <div className="grid grid-cols-12 gap-3 mx-1">
          {[...Array(7)].map((value, index) => {
            return (
              <div
                key={index}
                className="lg:col-span-4 md:col-span-6 sm:col-span-12"
              >
                <Laptop />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Account;
