import React from 'react'
import { logo, rectangle2 } from './assets'

const Input = ({ type, placeholder, circleColor }: { type: string; placeholder: string; circleColor: string }) => {
  return (
    <div className="my-5 w-[100%] flex flex-row items-center justify-center">
      <input
        type={type}
        className="flex-1 h-[59px] px-4 py-2 input-box mr-4 font-robot font-light w-[18px] leading-[21.09px]"
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className={`w-[15px] h-[15px] rounded-full`} style={{ background: circleColor }} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="absolute w-[456px] h-[456px] blue__gradient rounded-full top-0 left-[300px] z-[1]" />
      <div className="absolute w-[393px] h-[393px] orange__gradient rounded-full -top-[144px] -right-[144px] z-[1]" />
      <div className="absolute w-[172px] h-[172px] skin__gradient rounded-full top-[113px] right-[355px] z-[1]" />
      <div className="absolute w-[468px] h-[468px] orange__gradient rounded-full bottom-[98px] right-[900px] z-[1]" />
      <div className="absolute w-[314px] h-[314px] blue__gradient rounded-full -bottom-[33px] -right-[87px] z-[1]" />

      <div className="flex sm:flex-row justify-between w-[100%] h-[100%]">
        {/* Left Side */}
        <div
          className="flex flex-col items-center sm:w-[33%] w-[100%] z-[2] p-20"
          style={{
            background: 'rgba(255, 255, 255, 0.87)',
            backdropFilter: 'blur(24px)',
          }}>
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[125px] h-[125px] mt-20" />
          <div>
            <span className="font-roboto font-bold	text-[28px] leading-[32.81px] text-center text-[#FF8D8D]">Eli </span>
            <span className="font-roboto font-light	text-[21px] leading-[24.61px] text-center text-[#5DC399]">
              Codes
            </span>
          </div>

          {/* Sign Up Form */}
          <span className="mt-10 mb-5 font-roboto font-bold	text-[24px] leading-[28.13px] text-center text-[#666666]">
            Sign up
          </span>

          {/* Inputs */}
          <Input circleColor="#70EDB9" type="text" placeholder="Name" />
          <Input circleColor="#FFA689" type="email" placeholder="Email" />
          <Input circleColor="#FE2F75" type="password" placeholder="Password" />
          <Input circleColor="#FFA689" type="password" placeholder="Confirm Password" />

          {/* Button */}
          <button className="w-[100%] h-[59px] sign-up text-[#FFFFFF] items-center justify-center">Sign Up</button>

          {/* Privacy */}
          <p className="my-4 max-w-[299px] font-roboto font-light	text-[15px] leading-[17.58px] text-center text-[#808080]">
            By signing up, I agree to the Privacy Policy and Terms of Service
          </p>

          <p className="font-roboto font-bold	text-[15px] leading-[17.58px] text-center text-[#808080]">
            Already have an account? <span className="font-medium text-[#FF8D8D] cursor-pointer">Sign In</span>
          </p>
        </div>

        {/* Left Side */}
        <div className="flex-1 flex justify-center items-center relative bg-[#EEFCFF]">
          <img
            src={rectangle2}
            alt="rectangle2"
            className="absolute w-[368px] h-[350px] bottom-[20vh] right-10 z-[0]"
          />
          <p className="relative font-roboto font-black	text-[87px] leading-[101.95px] z-50">
            Join The <br className="md:block hidden" />
            Team
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
