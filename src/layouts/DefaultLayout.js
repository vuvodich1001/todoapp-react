import Header from '@/components/layouts/customer/Header';
function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="bg-[#f8fafc]">
        <div className="container mx-auto min-h-screen">{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
