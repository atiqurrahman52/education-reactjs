import { createRef } from "react";
import FancyButton from "./FancyButton";
import ScrollSpy from "react-scrollspy-navigation";

export default function Navigation() {
  return (
    <nav className="flex space-x-2 xl:space-x-6 border-b-[1px] border-[#DDE0E3] sticky z-30 top-[72px] pt-5 bg-white">
      <ScrollSpy>
        <FancyButton
          href="#Overview"
          text="Overview"
          ref={createRef()}
          classbtn="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
        />
        <FancyButton
          href="#Content"
          text="Content"
          ref={createRef()}
          classbtn="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
        />
        <FancyButton
          href="#Instructor"
          text="Instructor"
          ref={createRef()}
          classbtn="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
        />
        <FancyButton
          href="#Reviews"
          text="Reviews"
          ref={createRef()}
          classbtn="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
        />
        <FancyButton
          href="#FAQ"
          text="FAQ"
          ref={createRef()}
          classbtn="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
        />
      </ScrollSpy>
    </nav>
  );
}
