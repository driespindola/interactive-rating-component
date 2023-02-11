import React, { FC } from "react";
import { Option } from "./Card";
import Image from "next/image";

interface Props {
    selectedOption: Option | null
}

const ThankYou: FC<Props> = ({ selectedOption }) => {
    return(
        <div className="mt-[195px] mb-[195px] max-w-[326px] max-h-[361px] md:max-w-[411px] md:max-h-[413px] bg-gradient-to-br from-[#212832] to-[#19202A] rounded-3xl animate-myAnim">
            <div className="mt-[34px] md:mt-[45px] mx-[91px] md:ml-[120px] md:mr-[129px]">
                <Image
                    width={162}
                    height={108}
                    src="illustration-thank-you.svg"
                    alt="star"   
                />
            </div>
            <div className="flex justify-center items-center bg-[#272E38] mt-[23px] mx-[80px] md:mt-[30px] md:mx-[109px] px-[5px] w-[165px] h-[34px] md:w-[193px] md:h-[34px] font-overpass text-[15px] tacking-[-0.035em] md:tracking-[-0.005em] text-[#FC7613] rounded-full">
                You selected {selectedOption?.value} out of 5
            </div>
            <h1 className="mt-[29px] ml-[100px] md:mt-[42px] md:ml-[133px] text-white font-overpass font-bold text-[23px] md:text-[28px]">Thank you!</h1>
            <p className="mt-[14px] mx-[16px] md:ml-[31px] md:mr-[41px] mb-[40px] md:mb-[45px] text-[#959EAC] text-[15px] font-overpass text-center leading-[24px] tracking-[-0.036em] md:tracking-[-0.005em]">We appreciate you taking the time to give a rating. If you ever need more support, don&apost hesitate to get in touch!</p>
        </div>
    )
}

export default ThankYou