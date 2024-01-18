import React, {useEffect} from "react";
import { memo } from 'react';


interface SeedSelectionProps {
    setSelectedSeed: React.Dispatch<React.SetStateAction<string>>;
    selectedSeed: string;
}


// eslint-disable-next-line react/display-name
export const SeedSelection = memo( ({ setSelectedSeed, selectedSeed }: SeedSelectionProps) => {

    let seedSelectStyle = `rounded bg-stone-900 py-2 m-2 align-center transition flex justify-center text-center hover:bg-stone-600 cursor-pointer`

    const changeSeed = (a: string) => {
        let seed: string = a;
        console.log(seed)
        setSelectedSeed(seed);
        alert(`selected Seed is ${seed}`)
    };

    return(
        <div
            className={` flex flex-col  align-center p-2 text-stone-400 fixed left-5 top-40 rounded bg-stone-800 border-stone-400 w-24`}>
            <div className={`text-center mb-2`}>
                Tree
            </div>
            <div className={`flex flex-col`}>
                <div onClick={()=>changeSeed('A')} className={seedSelectStyle}>🌵</div>
                <div onClick={()=>changeSeed('B')} className={seedSelectStyle}>🌳</div>
                <div onClick={()=>changeSeed('C')} className={seedSelectStyle}>🌲</div>
                <div onClick={()=>changeSeed('D')} className={seedSelectStyle}>🌿</div>

            </div>
        </div>
    )
})
