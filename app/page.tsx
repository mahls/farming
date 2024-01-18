"use client"
import {Data} from '@/components/Data'
import {Inventory} from '@/components/Inventory'
import {Shop} from '@/components/Shop'
import { SeedSelection } from '@/components/SeedSelection'
import {useEffect, useState, useRef} from 'react';
import {FarmPatch} from '@/components/FarmPatch'
import Lottie from 'react-lottie';
import * as animationData from '../animation-coins.json'

export default function Home() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [level, setLevel] = useState(1);
    const [experience, setExperience] = useState(0);
    const [droptable, setRewards] = useState([]);
    const [coins, setCoins] = useState(200);
    const [time, set] = useState();
    const [isStoppedLottieCoins, setIsStoppedLottieCoins] = useState(true)
    const [selectedSeed, setSelectedSeed] = useState('A')


    const [farmPatches, setFarmPatches] = useState([
        {collected: false, grownPercent: 0, timeToGrow: Math.floor(Math.random() * 100) + 1},
        {collected: false, grownPercent: 0, timeToGrow: Math.floor(Math.random() * 100) + 1},
        {collected: false, grownPercent: 0, timeToGrow: Math.floor(Math.random() * 100) + 1},
        {collected: false, grownPercent: 0, timeToGrow: Math.floor(Math.random() * 100) + 1},
    ])

    const [inventory, setInventory] = useState([        {name: '', image: ''},
    ])

    let shopItems = [
        {name: 'White Rabbit', image:'data:image/jpeg;base64,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', price: 100},
        {name: 'Big Rabbit', image:'https://i.pinimg.com/736x/55/53/2f/55532f406e160e3c492e07d6b2709e70.jpg', price: 400},
        {name: 'XXL Rabbit', image:'data:image/jpeg;base64,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', price: 1000},

    ]


// add && statement to the if else to check the value of selectedSeed and render accordingly

    useEffect(() => {
        // Use a function to calculate the new level based on the current experience
        const calculateLevel = () => {
            if (experience >= 0 && experience < 100) {
                return 1;
            } else if (experience >= 100 && experience < 200) {
                return 2;
            } else if (experience >= 200) {
                alert('level 3 congratulations')
                return 3;
            } else if (experience >= 400) {
                return 4;
            } else if (experience >= 600) {
                return 5;
            }
            else {
                return level; // Return the current level if experience is negative (or unexpected)
            }
        }
        // Update the level state based on the calculated level
            setLevel(calculateLevel());
    }, [experience, level]);


    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
    <main onMouseMove={handleMouseMove} className="flex min-h-screen bg-stone-900 text-white">
        <SeedSelection setSelectedSeed={setSelectedSeed} selectedSeed={selectedSeed}/>
        <Data setIsStoppedLottieCoins={setIsStoppedLottieCoins} isStoppedLottieCoins={isStoppedLottieCoins} coins={coins} mouseX={mousePosition.x} mouseY={mousePosition.y} level={level} experience={experience}/>
        <Inventory inventory={inventory}/>
        <Shop shopItems={shopItems} setInventory={setInventory} setCoins={setCoins} inventory={inventory} coins={coins}/>
        <div className={`flex justify-center align-items-center align-center w-screen items-center`}>
            {
                Array.isArray(farmPatches) && farmPatches.map((patch, index) => (
                    <div className={``} key={index}>
                        <FarmPatch
                            collected={patch.collected}
                            grownPercent={patch.grownPercent}
                            timeToGrow={patch.timeToGrow}
                            key={index}
                            coins={coins}
                            setCoins={setCoins}
                            farmPatches={farmPatches}
                            setFarmPatches={setFarmPatches}
                            level={level}
                            setLevel={setLevel}
                            experience={experience}
                            setExperience={setExperience}
                            selectSeed={selectedSeed}
                        />
                    </div>
                ))
            }


        </div>

    </main>
    )
}
