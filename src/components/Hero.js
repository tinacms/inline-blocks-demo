import React from "react";
import { InlineTextarea, BlocksControls } from "react-tinacms-inline";
import "../styles/hero.css";

export function Hero({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div
        className="hero"
        style={{
          color: `${data.text_color || "#000"}`,
          backgroundColor: `${data.background_color || "aliceblue"}`,
          textAlign: `${data.align}`,
          justifyContent: `${data.align === "left" ? "start" : data.align}`,
        }}
      >
        <div className="wrapper wrapper--narrow">
          <h1>
            <InlineTextarea name="headline" focusRing={false} />
          </h1>
          <p>
            <InlineTextarea name="subtext" focusRing={false} />
          </p>
        </div>
      </div>
    </BlocksControls>
  );
}

export const hero_template = {
  label: "Hero",
  defaultItem: {
    headline: "Suspended in a Sunbeam",
    subtext: "Dispassionate extraterrestrial observer",
    background_color: "rgb(5, 30, 38)",
    text_color: "#fffaf4",
    align: "center",
  },
  fields: [
    {
      name: "background_color",
      label: "Background Color",
      component: "color",
      widget: "block",
      colors: [
        "black",
        "aliceblue",
        "antiquewhite",
        "aqua",
        "azure",
        "darkslategray",
      ],
    },
    {
      name: "text_color",
      label: "Text Color",
      component: "select",
      options: ["black", "white"],
    },
    {
      name: "align",
      label: "Alignment",
      component: "select",
      options: ["center", "left"],
    },
  ],
};
