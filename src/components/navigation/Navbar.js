import {
  CaretLeft,
  CaretRight,
  List,
  MagnifyingGlass,
  ShoppingCart,
  User,
  X,
} from "phosphor-react";
import { useContext, useState } from "react";
import { categoriesData } from "../../data/navigation/navBarData";
import { AuthContext } from "../../SharedStates";
import logo from "../../assets/images/logo/logo.png";
import global from "../../assets/images/svg/global.svg";
import bell from "../../assets/images/svg/Bell_pin.svg";
import mobileLogo from "../../assets/images/logo/mobile-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [search, setSearch] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);

  return (
    <header className="sticky w-full top-0 left-0 z-50">
      {/* desktop  */}

      <nav className="hidden lg:block">
        {/*  main navigation  */}
        <div className="flex flex-wrap items-center justify-between w-full py-5 px-2 xl:px-8 bg-white relative border-b-[0.5px] border-[#EBEBEB]">
          <Link to='/' className="w-[70px] xl:w-[86px] h-[47px]">
            <img src={logo} alt="" />
          </Link>

          <div className="flex items-center justify-center flex-grow gap-8">
            <div className="relative explore-menu">
              <button className="explore-btn  text-sm xl:text-base leading-11 xl:leading-11 text-primary capitalize hover:text-success">
                Explore
              </button>

              {/* nav dropdown  */}
              <div className="pt-9 absolute top-full left-0 z-50 mega-menu transition-all duration-300 opacity-0 invisible scale-95">
                <div className="navigation bg-white w-fit">
                  <ul className="h-full relative z-50 w-[260px] border-[1px] border-[#F2F2F2] rounded-[4px] py-4 bg-white">
                    {categoriesData.map(({ id, categoryTitle, categories }) => {
                      return (
                        <li key={id}>
                          <button className="flex items-center justify-between w-full text-base leading-6 text-primary px-7 py-2">
                            {categoryTitle}

                            <CaretRight size={16} />
                          </button>

                          <ul className="h-full relative z-50 w-[260px] border-[1px] border-[#F2F2F2] rounded-[4px] px-7 py-4 bg-white">
                            {categories.map(({ id, title, path }) => (
                              <li
                                key={id}
                                className="py-2  text-base leading-6 text-primary"
                              >
                                <a href={path}>{title}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <label
              for="search"
              className="relative h-11 w-[400px] xl:w-[496px] 2xl:w-[696px]"
            >
              <span className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2 text-2xl py-2.5 pl-4 cursor-pointer">
                <MagnifyingGlass size={24} />
              </span>

              <input
                className="text-sm w-full h-11 block pl-14 pr-7 placeholder:text-[#DCDCDC] text-primary outline-none bg-transparent rounded-full border-[1px] border-[#D7D9DF]"
                type="text"
                id="search"
                placeholder="Search anything"
              />
            </label>
          </div>

          {isLoggedIn ? (
            <div className="flex items-center space-x-2 xl:space-x-5">
              <Link
                to="/instructor"
                className=" text-sm xl:text-base leading-6 text-primary capitalize"
              >
                Become an Instructor
              </Link>

              <div className="relative group">
                <a
                  href="/"
                  className=" text-sm xl:text-base leading-6 text-primary capitalize"
                >
                  My Courses
                </a>
                <div className="hidden absolute group-hover:block right-0 pt-[33px]">
                  <div className="w-[375px] max-h-[434px] bg-white p-6 shadow-md rounded-[4px]">
                    <h3 className=" text-lg leading-[27px] text-primary border-b border-[#DADADA] pb-4">
                      My courses
                    </h3>
                    <div className="space-y-4">
                      <ul className="max-h-[300px] overflow-y-auto scrollbar-main">
                        {[...Array(10)].map((item, i) => (
                          <li>
                            <a
                              href="./pages/mycourse.html"
                              className="flex space-x-2 border-b border-[#EDEDED] py-4"
                            >
                              <img
                                src="./assets/images/checkout/checkout.webp"
                                alt=""
                              />
                              <p className=" font-medium text-base leading-6 text-primary">
                                Angular - The Complete Guide (2020 Edition)
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-1">
                  <img src={global} alt="" />
                  <p className=" text-sm leading-6 text-primary capitalize">
                    En
                  </p>
                </div>

                <div className="hidden absolute group-hover:block right-0 pt-[33px] z-20">
                  <div className="p-6 w-[358px] max-h-[428px] bg-white z-99 shadow-md rounded-2xl">
                    <div className="space-y-4">
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="English"
                          name="language"
                          value="English"
                        />
                        <label for="English" className="pl-1">
                          English
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="deutsch"
                          name="language"
                          value="Deutsch"
                        />
                        <label for="deutsch" className="pl-1">
                          Deutsch
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="Italiano"
                          name="language"
                          value="Italiano"
                        />
                        <label for="Italiano" className="pl-1">
                          Italiano
                        </label>
                      </div>
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="Bahasa"
                          name="language"
                          value="Bahasa"
                        />
                        <label for="Bahasa" className="pl-1">
                          Bahasa Indonesia
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="polski"
                          name="language"
                          value="polski"
                        />
                        <label for="polski" className="pl-1">
                          Polski
                        </label>
                      </div>
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55] pr-3"
                          id="francais"
                          name="language"
                          value="francais"
                        />
                        <label for="francais" className="pl-1">
                          Francais
                        </label>
                      </div>
                      <div className="flex justify-end pt-4">
                        <button
                          className="bg-success py-2 px-6 rounded-md  font-semibold text-sm leading-[21px] text-white"
                          type=""
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <ShoppingCart size={24} className="text-primary" />
                <div className="hidden absolute group-hover:block right-0 pt-8">
                  <div className="p-6 w-[367px] rounded-[4px] bg-white shadow-md">
                    <ul className="max-h-[300px] overflow-y-auto scrollbar-main">
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-4 border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-sm leading-[21px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-3">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67]">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="flex justify-between py-4">
                      <p className=" font-medium text-base leading-6 text-[#3E4F67]">
                        Total :
                      </p>
                      <p className=" font-medium text-base leading-6 text-[#E44747]">
                        $ 470.00
                      </p>
                    </div>
                    <div className="pt-2 w-full text-center  font-medium text-base leading-5 text-white bg-success py-[9px] rounded-[3px]">
                      <a href="./pages/checkout.html" className="" type="">
                        Check Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <img src={bell} alt="" />
                <div className="absolute hidden group-hover:block right-0 pt-[34px]">
                  <div className="max-h-[540px] w-[384px] bg-white rounded-md shadow-md px-4 py-6">
                    <div className="border-b border-[#E5E8EB] pb-4">
                      <div className="flex justify-between mb-2">
                        <p className=" font-semibold text-base leading-6 text-primary">
                          Notifications
                        </p>
                        <a
                          href="/"
                          className=" font-medium text-sm leading-6 text-success"
                        >
                          Setting
                        </a>
                      </div>
                      <p className=" text-sm leading-[22px] text-disable">
                        You have 4 unread messages
                      </p>
                    </div>
                    <div className="border-b border-[#E5E8EB] pb-4">
                      <p className=" font-semibold text-xs leading-[18px] text-disable py-3">
                        New
                      </p>

                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <div>
                            <img
                              src="./assets/images/notification/image1.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" font-semibold text-sm text-primary leading-[22px]">
                              You have new message
                              <span className=" text-sm text-disable ml-4">
                                5 unread messages
                              </span>
                            </p>
                            <div className="flex items-center space-x-1 pt-1">
                              <i className="ph-clock text-[#9DA6BA] text-[14px]"></i>
                              <p className=" text-xs leading-[18px] text-[#9DA6BA]">
                                07 Sep 2020
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <div>
                            <img
                              src="./assets/images/notification/image2.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" font-semibold text-sm text-primary leading-[22px]">
                              Delivery processing
                              <span className=" text-sm text-disable ml-4">
                                your order is being shipped
                              </span>
                            </p>
                            <div className="flex items-center space-x-1 pt-1">
                              <i className="ph-clock text-[#9DA6BA] text-[14px]"></i>
                              <p className=" text-xs leading-[18px] text-[#9DA6BA]">
                                07 Sep 2020
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <div>
                            <img
                              src="./assets/images/notification/image1.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" font-semibold text-sm text-primary leading-[22px]">
                              You have new mail
                              <span className=" text-sm text-disable ml-4">
                                sent from guido padberg
                              </span>
                            </p>
                            <div className="flex items-center space-x-1 pt-1">
                              <i className="ph-clock text-[#9DA6BA] text-[14px]"></i>
                              <p className=" text-xs leading-[18px] text-[#9DA6BA]">
                                07 Sep 2020
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className=" font-semibold text-xs leading-[18px] text-disable py-4">
                        Yesterday
                      </p>
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <div>
                            <img
                              src="./assets/images/notification/image1.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" font-semibold text-sm text-primary leading-[22px]">
                              You have new message
                              <span className=" text-sm text-disable ml-4">
                                5 unread messages
                              </span>
                            </p>
                            <div className="flex items-center space-x-1 pt-1">
                              <i className="ph-clock text-[#9DA6BA] text-[14px]"></i>
                              <p className=" text-xs leading-[18px] text-[#9DA6BA]">
                                07 Sep 2020
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <User
                  size={28}
                  className="text-primary bg-[#F1F1F2] rounded-[38px] p-1"
                />
                <div className="hidden absolute group-hover:block right-0 pt-7">
                  <div className="w-[240px] py-6 px-3 border border-[#F1F1F2] bg-white rounded-md">
                    <div className="flex items-center space-x-3 pb-4 border-b border-[#F1F1F2]">
                      <div>
                        <img src="./assets/images/logo/user.png" alt="" />
                      </div>
                      <div>
                        <h3 className=" font-semibold text-sm text-disable leading-5">
                          Olivia Rhye
                        </h3>
                        <p className=" text-xs text-[#9DA6BA] leading-5">
                          youremail@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex flex-col space-y-2 border-b border-[#F1F1F2] pb-2">
                        <a
                          href="./pages/mycourse.html"
                          className=" text-sm leading-5 text-disable py-2.5 px-4"
                        >
                          My Courses
                        </a>
                        <a
                          href="./pages/my-profile.html"
                          className=" text-sm leading-5 text-disable py-2.5 px-4"
                        >
                          My profile
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 border-b-[1px] border-[#F1F1F2] pb-2">
                      <a
                        href="./pages/payment.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4 pt-5"
                      >
                        Payment method
                      </a>
                      <a
                        href="./pages/terms.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Privacy
                      </a>
                      <a
                        href="./pages/my-notification.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Notification
                      </a>
                      <a
                        href="./pages/password-setting.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Passward Setting
                      </a>
                      <a
                        href="./pages/language.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Language
                      </a>
                      <a
                        href="../pages/order-history.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Order History
                      </a>
                    </div>

                    <div className="flex flex-col space-y-0 border-b-[1px] border-[#F1F1F2] my-2 pb-1">
                      <a
                        href="./pages/remove-account.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Remove Account
                      </a>
                      <a
                        href="/"
                        className=" text-sm leading-5 text-disable py-2.5 px-4"
                      >
                        Help
                      </a>
                    </div>

                    <div className="pt-1">
                      <a
                        href="../index.html"
                        className=" text-sm leading-5 text-disable py-2.5 px-4 my-2"
                      >
                        Log out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2 xl:space-x-5">
              <Link
                to="/instructor"
                className=" text-sm xl:text-base leading-6 text-primary capitalize"
              >
                Become an Instructor
              </Link>

              <div className="relative group">
                <div className="flex items-center gap-1">
                  <img src={global} alt="" />
                  <p className=" text-sm leading-6 text-primary capitalize">
                    En
                  </p>
                </div>

                <div className="hidden absolute group-hover:block right-0 pt-8 z-20">
                  <div className="p-6 w-[358px] max-h-[428px] bg-white z-99 shadow-md rounded-2xl">
                    <div className="space-y-4">
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="English"
                          name="language"
                          value="English"
                        />
                        <label for="English" className="pl-1">
                          English
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="deutsch"
                          name="language"
                          value="Deutsch"
                        />
                        <label for="deutsch" className="pl-1">
                          Deutsch
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="Italiano"
                          name="language"
                          value="Italiano"
                        />
                        <label for="Italiano" className="pl-1">
                          Italiano
                        </label>
                      </div>
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="Bahasa"
                          name="language"
                          value="Bahasa"
                        />
                        <label for="Bahasa" className="pl-1">
                          Bahasa Indonesia
                        </label>
                      </div>

                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55]"
                          id="polski"
                          name="language"
                          value="polski"
                        />
                        <label for="polski" className="pl-1">
                          Polski
                        </label>
                      </div>
                      <div className=" text-sm leading-[22px] text-primary">
                        <input
                          type="radio"
                          className="accent-[#00AB55] pr-3"
                          id="francais"
                          name="language"
                          value="francais"
                        />
                        <label for="francais" className="pl-1">
                          Francais
                        </label>
                      </div>
                      <div className="flex justify-end pt-4">
                        <button
                          className="bg-success py-2 px-6 rounded-md  font-semibold text-sm leading-[21px] text-white"
                          type=""
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="./pages/signin.html"
                className=" text-sm xl:text-base leading-6 text-primary capitalize"
              >
                Login
              </a>

              <a
                href="./pages/signup.html"
                className=" text-sm xl:text-base leading-6 text-[#3789FF] border border-[#3789FF] rounded-lg py-2 px-4 capitalize"
              >
                Join Us
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* mobile  */}
      <section>
        {/*  mobile-top-bar  */}
        <div className="lg:hidden w-full mobile-top-bar sticky top-0 left-0 bg-white drop-shadow-[0_4px_20px_rgba(38,32,32,0.06)] z-20">
          <div className="flex justify-between px-4 py-4">
            <div>
              <img src={mobileLogo} alt="" />
            </div>

            <div className="space-x-4 flex items-center">
              <button
                type="button"
                className="mobile-menu-button"
                data-action="search-menu"
                onClick={() => setSearch(true)}
                
              >
                <MagnifyingGlass size={24} className="text-disable" />
              </button>

              <div className="relative group">
                <ShoppingCart size={24} className="text-disable" />

                <div className="hidden absolute group-hover:block right-[-50px] pt-5">
                  <div className="px-6 py-8 w-[320px] rounded-[4px] bg-white shadow-md">
                    <ul className="max-h-[300px] overflow-y-auto scrollbar-main">
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-2 border-b border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              className="w-[60px] h-[39px]"
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-xs leading-[18px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-2">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end pl-5">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67] pl-">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-2 border-b border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              className="w-[60px] h-[39px]"
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-xs leading-[18px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-2">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end pl-5">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67] pl-">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/course-details.html"
                          className="flex space-x-2 border-b border-[#EDEDED] py-4"
                        >
                          <div>
                            <img
                              className="w-[60px] h-[39px]"
                              src="./assets/images/checkout/checkout.webp"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className=" text-xs leading-[18px] text-primary">
                              Basic Programming
                            </p>
                            <p className=" font-light text-xs leading-[17px] text-[#9DA6BA] pt-2">
                              This tutorial will help
                            </p>
                          </div>
                          <div className="flex items-end pl-5">
                            <p className=" font-medium text-xs leading-[18px] text-[#3E4F67] pl-">
                              $ 100.00
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="flex justify-between py-4">
                      <p className=" font-medium text-base leading-6 text-[#3E4F67]">
                        Total :
                      </p>
                      <p className=" font-medium text-base leading-6 text-[#E44747]">
                        $ 470.00
                      </p>
                    </div>
                    <div className="pt-2 w-full text-center  font-medium text-sm leading-5 text-white bg-success py-[9px] rounded-[3px]">
                      <a href="./pages/checkout.html" className="" type="">
                        Check Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
              onClick={() => setMainMenu(true)}
                type="button"
                className="mobile-menu-button"
                data-action="profile-menu"
              >
                <List size={24} className="text-disable" />
              </button>
            </div>
          </div>
        </div>

        {/*  search  */}
        <div className={`${search ? 'right-0' : 'right-full'} fixed top-0 w-full h-14 bg-white z-30 transition-all duration-300 mobile_menu_content search-menu`}>
          <div className="flex justify-between px-4 py-4 space-x-4">
            <div>
              <img src={mobileLogo} alt="" />
            </div>
            <label for="search" className="relative h-8 w-full">
              <button className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2">
                <MagnifyingGlass size={24} className="py-2 pl-1" />
              </button>

              <input
                className="text-xs w-full h-full pl-10 pr-7 leading-4 placeholder:text-[#DCDCDC] text-black outline-none bg-transparent rounded-[32px] border-[1px] border-[#D7D9DF]"
                type="text"
                id="search"
                placeholder="Search anything"
              />
            </label>

            <button onClick={() => setSearch(false)} type="button" className="close-menu">
              <X size={24} className=" text-disable" />
            </button>
          </div>
        </div>

        {isLoggedIn ? (
          <div className={`${mainMenu ? 'right-0' : 'right-full'} fixed top-0 w-full h-screen bg-white z-30 transition-all duration-300 mobile_menu_content profile-menu`}>
            <div className="flex justify-between px-4 py-4 drop-shadow-[0_4px_20px_rgba(38,32,32,0.06)]">
              <div>
                <img
                  className="w-[32px] h-[32px]"
                  src="./assets/images/logo/mobile-logo.png"
                  alt=""
                />
              </div>
              <div className="flex items-center space-x-4">
                <label for="search" className="relative h-8 w-[193px]">
                  <button className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2">
                    <i className="ph-magnifying-glass text-base p-1"></i>
                  </button>

                  <input
                    className="text-xs w-full h-full pl-10 pr-7 leading-4 placeholder:text-[#DCDCDC] text-black outline-none bg-transparent rounded-[32px] border-[1px] border-[#D7D9DF]"
                    type="text"
                    id="search"
                    placeholder="Search anything"
                  />
                </label>
                <button type="button" className="close-menu">
                  <i className="ph-x text-[32px] text-disable"></i>
                </button>
              </div>
            </div>

            <div className="py-6 px-3 shadow-[0_11px_12px_rgba(62,65,74,0.1)]">
              <div className="flex items-center space-x-3 p-3 bg-[#F8F8F8] rounded-[4px]">
                <div>
                  <img src="./assets/images/logo/user.png" alt="" />
                </div>
                <div>
                  <h3 className=" font-semibold text-sm text-primary leading-[22px]">
                    Kevin Perry
                  </h3>
                  <p className=" text-[10px] text-[#9DA6BA] leading-4">
                    Welcome back
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-col space-y-2">
                  <a
                    href="./pages/mycourse.html"
                    className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                  >
                    My Courses
                  </a>
                  <a
                    href="./pages/my-profile.html"
                    className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                  >
                    My profile
                  </a>
                </div>

                <div className="border-y-[1px] border-[#F1F1F2] my-2">
                  <button
                    type="button"
                    data-action="main-menu"
                    className="inline-block  font-semibold text-xs leading-5 text-disable py-2.5 px-4"
                  >
                    Explore
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 border-b-[1px] border-[#F1F1F2] pb-2">
                <a
                  href="./pages/payment.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Payment method
                </a>
                <a
                  href="./pages/password-setting.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Password Setting
                </a>
                <a
                  href="./pages/my-notification.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Notification
                </a>
                <a
                  href="./pages/language.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Language
                </a>
                <a
                  href="./pages/order-history.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Order History
                </a>
              </div>

              <div className="flex flex-col space-y-2 border-b-[1px] border-[#F1F1F2] my-2 pb-1">
                <a
                  href="./pages/remove-account.html"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Remove Account
                </a>
                <a
                  href="/"
                  className=" text-xs leading-5 text-[#637381] py-2.5 px-4"
                >
                  Help
                </a>
              </div>

              <a
                href="./index.html"
                className=" text-xs leading-5 text-[#637381] py-2.5 px-4 my-2"
              >
                Log out
              </a>
            </div>
          </div>
        ) : (
          <div className={`${mainMenu ? 'right-0' : 'right-full'} fixed top-0 w-full h-screen bg-white z-30 transition-all duration-300 mobile_menu_content profile-menu`}>
            <div className="flex justify-between gap-6 px-4 py-4 border-b border-[#F6F6F6]">
              <div>
                <img
                  className="w-[32px] h-[32px]"
                  src="./assets/images/logo/mobile-logo.png"
                  alt=""
                />
              </div>
              <label for="search" className="relative h-8 w-full">
                <button className="text-[#DCDCDC] absolute top-1/2 -translate-y-1/2 left-2">
                  <i className="ph-magnifying-glass text-base p-1"></i>
                </button>

                <input
                  className="text-xs w-full h-full pl-10 pr-7 leading-4 placeholder:text-[#DCDCDC] text-black outline-none bg-transparent rounded-[32px] border-[1px] border-[#D7D9DF]"
                  type="text"
                  id="search"
                  placeholder="Search anything"
                />
              </label>
              <button type="button" className="close-menu">
               
                <X size={30} onClick={() => setMainMenu(false)} className='text-disable' />
              
              </button>
            </div>

            <div className="py-6 px-3 shadow-[0_11px_12px_rgba(62,65,74,0.1)]">
              <div className="pt-3">
                <div className="flex flex-col space-y-">
                  <Link to='/sign-up'
                    
                    className=" font-medium text-xs leading-5 text-success  px-4"
                  >
                    Jon US
                  </Link>
                  <Link
                    to='/sign-in'
                    className=" font-medium text-xs leading-5 text-success py-6  px-4"
                  >
                    Login
                  </Link>
                </div>

                <div className="border-b border-t border-[#F1F1F2]">
                  <button
                    type="button"
                    data-action="main-menu"
                    className="inline-block   text-xs leading-5 text-disable px-4 py-4"
                  >
                    Explore
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <a
                  href="/"
                  className=" text-xs leading-5 text-disable  px-4 border-b border-[#F1F1F2] py-4"
                >
                  Language
                </a>
                <Link
                  to="/instructor"
                  className=" text-xs leading-5 text-disable  px-4 border-b border-[#F1F1F2] py-4"
                >
                  Become an Instructor
                </Link>
                <a
                  href="/"
                  className=" text-xs leading-5 text-disable  px-4 border-b border-[#F1F1F2] py-4"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
        )}

        {/*  menu  */}
        <div className="fixed top-0 right-full w-full h-screen bg-white z-30 transition-all duration-300 mobile_menu_content main-menu">
          <div className="pt-2.5 pl-3 flex items-center space-x-2">
            <CaretLeft size={20} className="text-primary" />

            <button
              type="button"
              data-action="profile-menu"
              className=" text-base leading-6 text-primary"
            >
              Back
            </button>
          </div>

          <div className="flex flex-col justify-center items-center py-4 px-3">
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Art & Design
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Business
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Development
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Data Science
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Health
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Health & Fitness
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Lifestyle
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Marketing
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Photography
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Teaching
            </button>
            <button
              type="button"
              data-action="sub-menu"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Music
            </button>
          </div>
        </div>

        {/*  sub menu  */}
        <div className="fixed top-0 right-full w-full h-screen bg-white z-30 transition-all duration-300 mobile_menu_content sub-menu">
          <div className="pt-2.5 pl-3 flex items-center space-x-2">
            <CaretLeft size={20} className="text-primary" />
            <button
              type="button"
              data-action="main-menu"
              className=" text-base leading-6 text-primary"
            >
              Back
            </button>
          </div>

          <div className="flex flex-col justify-center items-center py-4 px-3">
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Game Development
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Development
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Data Science
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Mobile Development
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Software Testing
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Software Engineering
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Web Development
            </a>
            <a
              href="./pages/all-courses.html"
              className="py-2.5 px-4  text-xs leading-[18px] text-primary"
            >
              Programming
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
