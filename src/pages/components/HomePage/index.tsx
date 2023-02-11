import React from "react"
import Card from "./Card"
import BottomNav from "./BottomNav"

const Home = () => {
    return (
      <div className="flex flex-col justify-center items-center m-auto max-w-[375px] max-h-[667px] md:max-w-[1140px] md:max-h-[800px]">
        <Card />
        <BottomNav />
      </div>
    )
}

export default Home