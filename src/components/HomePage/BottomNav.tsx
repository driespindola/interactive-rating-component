import Link from "next/link";
import React from "react";

const BottomNav = () => {
    return(
        <p className="text-center">
            Challenge by 
            <Link href="https://www.frontendmentor.io/" target="_blank" className="text-[#3D8168]"> Frontend Mentor</Link>. 
            Coded by
            <Link href="https://github.com/driespindola" target="_blank" className="text-[#3D8168]"> Dri Espindola</Link>.
        </p>
    )
}

export default BottomNav