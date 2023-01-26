import { DotsThreeVertical } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { certificateData } from "../../data/userDashboard/certificateData";
import UserDashboardLayout from "../../layout/UserDashboardLayout";
import sql from "../../assets/images/profile/my-sql.webp";
import python from "../../assets/images/profile/python.webp";

const Certificate = () => {

  const TableRow = ({ data }) => {
    const { id, img, product, enrollDate, remarks, completeDate} = data;
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
          <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
            {remarks}
          </p>
        </td>
       
      </tr>
    );
  };




  return (

    <UserDashboardLayout>
      <div className="max-w-[1076px]  shadow-[0px_0px_31px_rgba(175,175,175,0.16)] rounded-2xl px-6 py-4">
        <div className="mb-6">
          <label for="search" className="relative h-[44px]">
            <span className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2">
              <i className="ph-magnifying-glass text-2xl py-2.5 pl-4 cursor-pointer"></i>
            </span>

            <input
              className="text-sm w-full h-[44px] block pl-14 pr-7 placeholder:text-[#DCDCDC] text-primary outline-none bg-transparent rounded-md border-[1px] border-[#D7D9DF]"
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
                <th className=" min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Enroll Date
                </th>
                <th className=" min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Complete Date
                </th>
                <th className=" min-w-[120px] font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381] px-4 py-4">
                  Remarks
                </th>

                <th className="font-poppins font-semibold text-left text-sm leading-[21px] text-[#637381]"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="rounded-md"
                        src={python}
                        alt=""
                      />
                    </div>

                    <div className="ml-4">
                      <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                        Forex Trading: Your Complete Guide to Get Started Like a
                        Pro
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    10 Apr 2022
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    10 Apr 2022
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span className="text-[#1B806A] px-3 py-1 bg-[#DFF3EA] rounded-md font-bold text-xs leading-5">
                    Outstanding
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="relative">
                    <button
                      type="button"
                      className="action-btn inline-block text-[#637381]"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                    <div className="action hidden bg-white rounded-lg drop-shadow-md px-3 py-[10px] absolute right-full top-1/2 -translate-y-1/2 after:content after:h-3 after:w-3 after:rounded after:bg-white after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:rotate-45">
                      <a
                        href="#"
                        className="certificate-open font-poppins font-semibold text-sm leading-[22px] text-primary mb-2 whitespace-nowrap"
                      >
                        Preview Certificate
                      </a>
                      <a
                        className="font-poppins font-semibold text-sm leading-[22px] text-success whitespace-nowrap"
                        href="../assets/images/certificete/certificate.png"
                        download
                      >
                        download
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              {/* <tbody> */}
              {/* {certificateData.map((item, i) => (
                <TableRow key={i} data={item} />
              ))} */}
            {/* </tbody> */}
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="rounded-md"
                        src={sql}
                        alt=""
                      />
                    </div>

                    <div className="ml-4">
                      <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                        Learn SQL in 6 days
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    25 Jun 2022
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    $159
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span className="text-[#FF6B00] px-3 py-1 bg-[#FFE7D6] rounded-md font-bold text-xs leading-5">
                    Better
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="relative">
                    <button
                      type="button"
                      className="action-btn inline-block text-[#637381]"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                    <div className="action hidden bg-white rounded-lg drop-shadow-md px-3 py-[10px] absolute right-full top-1/2 -translate-y-1/2 after:content after:h-3 after:w-3 after:rounded after:bg-white after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:rotate-45">
                      <a
                        href="#"
                        className="certificate-open font-poppins font-semibold text-sm leading-[22px] text-primary mb-2 whitespace-nowrap"
                      >
                        Preview Certificate
                      </a>
                      <a
                        className="font-poppins font-semibold text-sm leading-[22px] text-success whitespace-nowrap"
                        href="../assets/images/certificete/certificate.png"
                        download
                      >
                        download
                      </a>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="rounded-md"
                        src={python}
                        alt=""
                      />
                    </div>

                    <div className="ml-4">
                      <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                        SQL - MySQL for Data Analytics and Business Intelligence
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    08 Oct 2022
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-poppins text-sm leading-[22px] text-[#212B36]">
                    $53
                  </p>
                </td>

                <td className="px-4 py-4">
                  <span className="text-success px-3 py-1 bg-[#DFECFF] rounded-md font-bold text-xs leading-5">
                    Average
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="relative">
                    <button
                      type="button"
                      className="action-btn inline-block text-[#637381]"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                    <div className="action hidden bg-white rounded-lg drop-shadow-md px-3 py-[10px] absolute right-full top-1/2 -translate-y-1/2 after:content after:h-3 after:w-3 after:rounded after:bg-white after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:rotate-45">
                      <a
                        href="#"
                        className="certificate-open font-poppins font-semibold text-sm leading-[22px] text-primary mb-2 whitespace-nowrap"
                      >
                        Preview Certificate
                      </a>
                      <a
                        className="font-poppins font-semibold text-sm leading-[22px] text-success whitespace-nowrap"
                        href="../assets/images/certificete/certificate.png"
                        download
                      >
                        download
                      </a>
                    </div>
                  </div>
                </td>
              </tr> 

            </tbody>
          </table>
        </div>
      </div>
    </UserDashboardLayout>
  );



};

export default Certificate;
