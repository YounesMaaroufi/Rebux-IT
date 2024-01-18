import Spline from "@splinetool/react-spline";

const Landing = () => {
  return (
    <>
      <div className="h-[100vh] bg-black flex items-center">
        <div className="w-full bg-white mx-auto flex justify-center flex-col items-center py-2 gap-y-1">
          <h1 className="text-center text-xl">WHY POP CARDS ?</h1>
          <div className="w-[264.5px] bg-black shadow-md h-0.5" />
          <div className="w-[170px] bg-black shadow-md h-0.5" />
          <div className="w-[80px] bg-black shadow-md h-0.5" />
        </div>
      </div>
      <Spline
        className="scale-50"
        scene="https://prod.spline.design/8idh4ut5mWkGZKWZ/scene.splinecode"
      />
    </>
  );
};

export default Landing;
