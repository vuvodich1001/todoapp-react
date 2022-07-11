import Laptop from '@/components/Laptop';
function Account() {
  return (
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
  );
}
export default Account;
