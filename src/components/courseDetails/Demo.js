import { useState } from "react";
import Section from "./Section";
import "./demo.css";
import LayoutContext from "./LayoutContext";
import Navigation from "./Navigation";

export default function Demo() {
  const [isColumn, setIsColumn] = useState(true);
  const styleLayoutColumn = {
    flexDirection: isColumn ? "column" : "row",
  };

  return (
    <LayoutContext.Provider value={[isColumn, setIsColumn]}>
      <div className="demo" style={styleLayoutColumn}>
        <Navigation />
        <Section id="box-1" color="red">
          Box 1
        </Section>
        <Section id="box-2" color="blue">
          Box 2
        </Section>
        <Section id="box-3" color="green">
          Box 3
        </Section>
        <Section id="box-4" color="red">
          Box 4
        </Section>
        <Section id="box-5" color="blue">
          Box 5
        </Section>
        <Section id="box-6" color="green">
          Box 6
        </Section>
      </div>
    </LayoutContext.Provider>
  );
}
