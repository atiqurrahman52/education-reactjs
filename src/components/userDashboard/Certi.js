import { DotsThreeVertical, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { certificateData } from "../../data/userDashboard/certificateData";
import certificate from "../../assets/images/certificete/certificate.png";
import UserDashboardLayout from "../../layout/UserDashboardLayout";

const Certi = () => {
  const TableRow = ({ data }) => {
    const { id, img, product, enrollDate, completeDate, remarks, color } = data;
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
      setToggle(!toggle);
    };

    return (
      <tr>
        <td className="px-4 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="rounded-md" src={img} alt="" />
            </div>

            <div className="ml-4">
              <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                {product}
              </p>
            </div>
          </div>
        </td>
        <td className="px-4 py-4">
          <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
            {enrollDate}
          </p>
        </td>
        <td className="px-4 py-4">
          <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
            {completeDate}
          </p>
        </td>
        <td className="px-4 py-4">
          {/* <p
            className={`text-[${color}] font-poppins text-xs font-bold ${remarks === "Outstanding" && "bg-green-900/10"}`}
          > */}
          <p
            className={`text-[${color}] font-poppins text-xs font-bold text-center ${
              remarks === "Outstanding" &&
              "bg-[#1B806A]/[16%] px-2 py-1 rounded-md"
            } ${
              remarks === "Better" && "bg-[#FF6B00]/[16%] px-2 py-1 rounded-md"
            } ${
              remarks === "Average" && "bg-[#3789FF]/[16%] px-2 py-1 rounded-md"
            }`}
          >
            {remarks}
          </p>
        </td>

        <td className="px-4 py-4">
          <button onClick={handleClick} className="relative">
            <DotsThreeVertical
              size={40}
              className="text-[#637381] cursor-pointer"
            />
            {toggle && (
              <div className="bg-white rounded-lg drop-shadow-md px-3 py-[10px] absolute right-full top-1/2 -translate-y-1/2 after:content after:h-3 after:w-3 after:rounded after:bg-white after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:rotate-45">
                <p className="font-poppins font-medium text-sm leading-[22px] text-primary mb-2 whitespace-nowrap">
                  Preview Certificate
                </p>
                {/* <p className="font-poppins font-medium text-sm leading-[22px] text-success whitespace-nowrap">
                  Download
                </p> */}
                <a
                  className="font-poppins font-semibold text-sm leading-[22px] text-success whitespace-nowrap"
                  href={certificate}
                  download
                >
                  download
                </a>
              </div>
            )}
          </button>
        </td>
      </tr>
    );
  };
  return (
    <UserDashboardLayout>
      <div className="max-w-[1076px] shadow-[0px_0px_31px_rgba(175,175,175,0.16)] rounded-2xl px-6 py-4">
        <h2 className="font-poppins font-semibold text-lg leading-[27px] text-disable pb-4">
          Order History
        </h2>

        <div className="mb-6">
          <label for="search" className="relative h-[44px]">
            <span className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2">
              <MagnifyingGlass size={24} className="pl-1" />
            </span>

            <input
              className="text-sm w-full h-[44px] block pl-10 pr-7 placeholder:text-[#DCDCDC] text-primary outline-none bg-transparent rounded-md border-[1px] border-[#D7D9DF]"
              type="text"
              id="search"
              placeholder="Search..."
            />
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F4F6F8] ">
              <tr className="">
                <th className="min-w-[250px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381]  px-4 py-4">
                  Product
                </th>
                <th className="min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Enroll Date
                </th>
                <th className="min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Complete Date
                </th>
                <th className="min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Remarks
                </th>

                <th className="font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381]"></th>
              </tr>
            </thead>

            <tbody>
              {certificateData.map((item, i) => (
                <TableRow key={i} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Certi;
