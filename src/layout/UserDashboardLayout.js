import UserDashboardMenu from "../components/userDashboard/UserDashboardMenu";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="pt-6 xl:pt-16 pb-8 xl:pb-[155px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <UserDashboardMenu />
          </div>
          <div className="col-span-12 lg:col-span-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
