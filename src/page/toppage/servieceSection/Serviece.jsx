import React from "react";
import Card from "./Card";
import { app, bulb, cart, uisvg, web } from "../../../../public/svgfile/svgimg";
import woodenTable from "../../../../public/image/woodenTable.jpg";
import Mobailcrd from "./Mobailcrd";

function Serviece() {
  return (
    <div className="relative -top-20 md:-top-28">
      <div className="absolute -z-10 top-[30vh] blurDiv -left-[240px] w-[50%] h-[180vh]   bg-[#00FFFF]"></div>
      <div className="absolute top-[400vh] -left-[240px] w-[50%] h-[80vh]  blurDiv bg-[#00FFFF]"></div>
      <div className="font-bold ">
        <h1 className="text-headText text-center">
          <span className="grad2 relative">
            {" "}
            Services{" "}
            <div className="w-20 h-0.5 bg-slate-400 absolute rounded-r-lg grad3 left-2">
              <div className="relative flex items-center -mt-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </span>
          We Offer
        </h1>
        <div>
          <p className="text-smallText  capitalize text-center p-4 text-sm mt-4">
            xplore our carefully curated courses that blend academic excellence
            with practical skills, preparing you for success in your chosen
            field. We train you to upgrade your skills and practical knowledge,
            with the broadly designed syllabus and state-of-the-art facility.
            Choose among various software courses and get trained by industry
          </p>

          <div className="flex items-center justify-center">
            {" "}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-1 gap-8 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 mt-5 p-4">
              <Card
                headimg={"/image/firstCard.png"}
                img={bulb}
                index={1}
                title={"Branding"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis
          ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty
          erhyeey55eh`}
                hoverimg={woodenTable}
              />
              <Card
                hoverimg={"/image/uiHover.jpg"}
                img={uisvg}
                headimg={"/image/uipng.png"}
                index={2}
                title={"UI/UX Design"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
              />
              <Card
                hoverimg={"/image/ecomHover.jpg"}
                img={cart}
                headimg={"/image/ecom.png"}
                index={3}
                title={"E-commerce"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
              />
              <Card
                hoverimg={"/image/apphover.jpg"}
                img={app}
                headimg={"/image/app.png"}
                index={4}
                title={"App Devolopment"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
              />
              <Card
                hoverimg={"/image/webhover.jpg"}
                img={web}
                headimg={"/image/web.png"}
                index={5}
                title={"Web Development"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
              />
              <Card
                hoverimg={"/image/digitalHover.jpg"}
                img={cart}
                headimg={"/image/digital.png"}
                index={6}
                title={"Digital Marketing"}
                text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
              />
            </div>
            <div
              class="flex gap-7 md:hidden overflow-x-scroll w-full p-6  hide-scroll-bar mt-4"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
              }}
            >
              <div class="flex gap-14">
                <Mobailcrd
                  headimg={"/image/firstCard.png"}
                  img={bulb}
                  index={1}
                  title={"Branding"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis
            ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty
            erhyeey55eh`}
                  hoverimg={woodenTable}
                />
                <Mobailcrd
                  hoverimg={"/image/uiHover.jpg"}
                  img={uisvg}
                  headimg={"/image/uipng.png"}
                  index={2}
                  title={"UI/UX Design"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
                />
                <Mobailcrd
                  hoverimg={"/image/ecomHover.jpg"}
                  img={cart}
                  headimg={"/image/ecom.png"}
                  index={3}
                  title={"E-commerce"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
                />
                <Mobailcrd
                  hoverimg={"/image/apphover.jpg"}
                  img={app}
                  headimg={"/image/app.png"}
                  index={4}
                  title={"App Devolopment"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
                />
                <Mobailcrd
                  hoverimg={"/image/webhover.jpg"}
                  img={web}
                  headimg={"/image/web.png"}
                  index={5}
                  title={"Web Development"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
                />
                <Mobailcrd
                  hoverimg={"/image/digitalHover.jpg"}
                  img={cart}
                  headimg={"/image/digital.png"}
                  index={6}
                  title={"Digital Marketing"}
                  text={`Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras fgbfg g ghmhhhghg g mtjsrtawqb wbrhtjrty erhyeey55eh`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serviece;
