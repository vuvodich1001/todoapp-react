import Header from '@/components/layouts/customer/Header';
import Sidebar from '@/components/layouts/customer/Sidebar';
function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-[#f8fafc]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-2 bg-[#f8fafc] py-5 px-2">
            <div className="lg:col-span-3">
              <Sidebar />
            </div>
            <div className="lg:col-span-9 md:col-span-12 xs:col-span-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DefaultLayout;
