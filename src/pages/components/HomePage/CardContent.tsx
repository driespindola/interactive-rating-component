import React from "react";

const CardContent = () => {
    return(
        <div className="mt-[23px] ml-[22px] mb-[24px] md:mt-[30px] md:ml-[30px] md:mb-[31px]">
            <p className="font-montserrat font-medium text-[14px] tracking-[3.5px] uppercase text-[#6C7289]">Perfume</p>
            <p className="mt-[11px] mr-[10px] md:mt-[18px] md:mr-[74px] font-fraunces text-[32px] leading-[32px] text-[#1C232B]">Gabrielle Essence Eau De Parfum</p>
            <p className="font-montserrat mt-[16px] mr-[24px] md:mt-[30px] md:mr-[31px] text-[14px] leading-[23px] text-[#6C7289]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className="flex flex-row mt-[9px] md:mt-[16px] items-center">
                <p className="font-fraunces text-[32px] text-[#3D8168]">$149.99</p>
                <p className="ml-[17px] md:ml-[19px] font-montserrat text=[14px] text-[#6C7289]"><s>$169.99</s></p>
            </div>
            <button className="flex flex-row items-center mt-[15.5px] md:mt-[22px] p-auto bg-[#3D8168] hover:bg-[#1A4031] py-[12px] px-[80px] md:px-[51px] text-white font-montserrat font-bold rounded">
                <img src="icon-cart.svg" className="mr-[11px]" alt="card-icon" />
                Add to Cart
            </button>
        </div>
    )
}

export default CardContent