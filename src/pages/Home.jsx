import React from "react";
import ez_work_logo from "../assets/EZWorksLogo@2x.jpg";
import CardContainer from "../components/CardContainer";
import EmailForm from "../components/EmailForm";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col justify-between mt-[40px] lg:mt-[256px] lg:gap-[71px] gap-[40px] lg:flex-row xl:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={ez_work_logo}
            className="w-[222px] h-[62px] lg:w-[517px] lg:h-[147px]"
          />
          <h2 className=" text-[32px] md:text-5xl text-[#112949] lg:mt-[40px] my-[20px] mx-[55px] lg:m-[0] text-center lg:text-left">
            A Suite Of Business Support Services
          </h2>
          <p className="text-[#112949] max-w-[760px] lg:text-left lg:text-[2rem] text-center text-2xl  lg:mt-[73px] leading-[38px] px-[20px] lg:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
        </div>

        <div className="h-full">
          <CardContainer />
        </div>
      </div>
      <div className=" flex w-full justify-center mt-5 mb-10 lg:mb-0 lg:pl-10 lg:-mt-20 lg:justify-start ">
        <EmailForm />
      </div>
    </div>
  );
};

export default Home;
