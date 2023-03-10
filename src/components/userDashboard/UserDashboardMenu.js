import { Link } from "react-router-dom";
import { userDashboardMenuData } from "../../data/userDashboard/userDashboardMenuData";

const UserDashboardMenu = () => {
  return (
    <div>
      <div className="flex lg:flex-col items-center lg:items-start justify-start lg:space-y-7 overflow-x-auto lg:overflow-x-hidden overflow-y-clip whitespace-nowrap">
        {userDashboardMenuData.map(({ id, title, path }) => (
          <div key={id} className="px-2 lg:py-0 xs:py-2">
            <Link
              to={path}
              className="font-poppins text-sm xl:text-base leading-5 xl:leading-6 text-disable"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardMenu;
