import React from "react";
import CardContent from "./CardContent";

const Card = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center mt-[29px] mb-[24px] md:mt-[176px] md:mb-[150px] bg-white max-w-[342px] max-h-[610px] md:max-w-[600px] md:max-h-[450px] rounded">
            <img 
                src="image-product-desktop.jpg"
                className="max-w-[300px] hidden md:block"
                alt="perfume"
            />
            <img 
                src="image-product-mobile.jpg"
                className="max-w-[450px] md:hidden"
                alt="perfume"
            />
            <CardContent />
        </div>
    )
}

export default Card