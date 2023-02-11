import Link from "next/link";
import React from "react";

const BottomNav = () => {
    return(
        <p className="text-center text-white">
            Challenge by 
            <Link href="https://www.frontendmentor.io/" target="_blank" className="text-[#FC7613]"> Frontend Mentor</Link>. 
            Coded by
            <Link href="https://github.com/driespindola" target="_blank" className="text-[#FC7613]"> Dri Espindola</Link>.
        </p>
    )
}

export default BottomNav