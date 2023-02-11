import React, { FC, useState } from "react"
import ThankYou from "./ThankYou"
import Image from "next/image";

export type Option = {
  value: number;
}

const Card: FC = () => {

    const options: Option[] = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
    ]

    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const [showThankYou, setShowThankYou] = useState(false);

    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
    };

    const handleSubmit = () => {
      if(selectedOption) {
        setShowThankYou(true)
      } else {
        setShowThankYou(false)
      }
    };

    return (
      <div className="mt-[195px] mb-[195px] max-w-[326px] max-h-[361px] md:max-w-[411px] md:max-h-[413px] bg-gradient-to-br from-[#212832] to-[#19202A] rounded-3xl">
        <div className="bg-[#272E38] max-w-[46px] max-h-[46px] mt-[22px] ml-[22px] md:mt-[33px] md:ml-[33px] p-[15px] rounded-full">
            <Image
              width={16}
              height={16}
              src="icon-star.svg"
              alt="star"   
            />
        </div>
        <h1 className="mt-[17px] md:mt-[34px] ml-[24px] md:ml-[32px] text-white text-[24px] md:text-[28px] font-overpass font-bold">How did we do?</h1>
        <p className="mt-[11px] ml-[23px] mr-[22px] md:ml-[31px] md:mr-[44px] text-[#959EAC] text-[15px] font-overpass leading-[22px] md:leading-[23px] tracking-[-0.037em] md:tracking-[-0.005em]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <span className="flex flex-row mt-[24px] ml-[22px] md:ml-[32px]">
            {options.map((option) => (
                <button onClick={() => handleOptionClick(option)} className="bg-[#272E38] hover:bg-[#FC7613] focus:bg-[#7C8898] w-[41px] md:w-[51px] h-[41px] md:h-[51px] mr-[20px] p-auto text-[#959EAC] hover:text-[#C1C5CB] focus:text-[#C1C5CB] font-overpass text-[17px] rounded-full">
                    {option.value}
                </button>
            ))}
        </span>
        <button onClick={handleSubmit} className="flex justify-center items-center mx-auto mt-[26px] md:mt-[32px] mb-[31px] md:mb-[29px] p-auto w-[281px] md:w-[340px] h-[45px] bg-[#FC7613] hover:bg-white text-white hover:text-[#FC7613] font-overpass text-[15px] tracking-[0.09em] md:tracking-[0.15em] uppercase rounded-full">Submit</button>
        {showThankYou && (
          <div className="flex w-full absolute left-0 top-0 justify-center items-center bg-[#141519]">
            <ThankYou selectedOption={selectedOption as Option} />
          </div>
        )}
      </div>
    )
}

export default Card