import BuyCard from "../BuyCard";
import CardCanvas from "../canvas/card-canvas";
import Description from "./Description";
import Heading from "./Heading";

const Landing = () => {
  return (
    <div className="relative bg-black">
      {/* section 1 */}
      <Heading fill label="WHY POP CARDS ?" />
      <div className="min-h-[20vh] py-20 flex justify-between flex-col lg:flex-row gap-y-10 items-center container mx-auto">
        <Description
          className="text-white"
          description="GAIN YOUR CLIENTS & SAVE YOUR SELF TIME GET BETTER REVIEWS"
        />
        <CardCanvas />
      </div>
      {/* section 2 */}
      <div className="min-h-[30vh] flex flex-col items-start">
        <Heading fill label="IMPRESSION IS THE KEY" />
        <div className="min-h-[20vh] py-20 flex justify-between flex-col lg:flex-row gap-y-10 items-center container mx-auto">
          <Description
            className="text-white"
            description="In a world of empression and attention stand out and shine"
          />
          <CardCanvas />
        </div>
      </div>
      {/* section 3 */}
      <div className="min-h-[30vh] flex flex-col bg-white my-10">
        <Heading fill label="GET YOUR CARD NOW!" />
        <div className="flex justify-between container px-20 mx-auto flex-col md:flex-row">
          <BuyCard href="/buy" title="BUY A CARD!" buttonLabel="BUY NOW" />
          <BuyCard
            href="/customize"
            title="CUSTOMIZE MY CARD!"
            buttonLabel="CUSTOMIZE"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
