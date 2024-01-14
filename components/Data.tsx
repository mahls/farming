"use client";
import Lottie from 'react-lottie';
import * as animationData from '../animation-coins.json'
import AnimatedNumbers from "react-animated-numbers"

interface DataProps {
    mouseX: number,
    mouseY: number,
    level: number,
    experience: number,
    coins: number,
    isStoppedLottieCoins: boolean,
    setIsStoppedLottieCoins: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};



export const Data = ({ mouseX, mouseY, level, experience, coins, isStoppedLottieCoins, setIsStoppedLottieCoins }: DataProps) => {




    return(
        <div className={`text-stone-400 w-[25%] flex p-2 fixed left-5 top-5 border border-stone-400 bg-stone-800 rounded`}>
            <div className={`pr-2`}>MouseX: {mouseX}</div>
            <div className={`pr-2`}>MouseY: {mouseY}</div>
            <div className={`pr-2`}>Coins: {coins}</div>
            <Lottie  className={`absolute right-20`}
                     options={defaultOptions}
                     height={40}
                     width={40}
                     isStopped={isStoppedLottieCoins}
            />
            <div className={`pr-2`}>Time: 0</div>
            <div className={`pr-2`}>level: {level}</div>
            <div className={`pr-2`}>EXP: {experience}</div>
        </div>
    )
}
