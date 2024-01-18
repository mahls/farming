"use client";
import Lottie from 'react-lottie';
import * as animationData from '../animation-coins.json'
import SlotCounter from 'react-slot-counter';

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



export const Data = ({ mouseX, mouseY, level, experience, coins, isStoppedLottieCoins, }: DataProps) => {




    // @ts-ignore
    return(
        <div className={`text-stone-400 w-[25%] flex p-2 fixed left-5 top-5 border-stone-400 bg-stone-800 rounded`}>
            <div className={`pr-2`}>MouseX: {mouseX}</div>
            <div className={`pr-2`}>MouseY: {mouseY}</div>
            <div className={`pr-2`}>Coins: <SlotCounter value={coins}/> </div>
            <div className={`fixed left-36`}>
                <Lottie
                    options={defaultOptions}
                    height={40}
                    width={60}
                    isStopped={isStoppedLottieCoins}
                />
            </div>

            <div className={`pr-2`}>Time: 0</div>
            <div className={`pr-2`}>level: <SlotCounter value={level}/></div>
            <div className={`pr-2`}>EXP: <SlotCounter value={experience}/></div>
        </div>
    )
}
