
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {useState} from "react";

interface FarmPatchProps {
    collected: unknown,
    grownPercent: unknown,
    timeToGrow: unknown,
    coins: number,
    setCoins: (value: (((prevState: number) => number) | number)) => void,
    setFarmPatches: (value: ({ grownPercent: number; timeToGrow: number; collected: boolean } | {
        grownPercent: number;
        timeToGrow: unknown;
        collected: unknown
    })[]) => void,
    farmPatches: ({ grownPercent: number; timeToGrow: number; collected: boolean })[]
}

export const FarmPatch = ({ collected, grownPercent, timeToGrow, coins, setCoins, setFarmPatches, farmPatches }: FarmPatchProps) => {

    const [readyToHarvest, setReadyToHarvest] = useState(false);
    const [treeGrownPercentage, setTreeGrownPercentage] = useState(0)

    const handleState = () => {
        if (treeGrownPercentage === 0) {
            return (
                <div className={`p-2`}>🫘</div>
            );
        } else if (treeGrownPercentage < 4) {
            return (
                <div className={`p-2`}>🌱</div>
            );
        } else if (treeGrownPercentage < 10) {
            return (
                <div className={`p-2`}>🪴</div>
            );
        } else if (treeGrownPercentage === 10) {
            return (
                <div className={`p-2`}>🌲</div>
            );
        }
    };

    const plantSeed = () => {
        // check if nothing is growing already
        if (treeGrownPercentage > 0) {
            alert('Already growing a tree here');
        } else if (treeGrownPercentage === 0) {
            // start incrementing treeGrownPercentage every second
            const intervalId = setInterval(() => {
                setTreeGrownPercentage((prevPercentage) => {
                    if (prevPercentage < 10) {
                        return prevPercentage + 1;
                    } else {
                        clearInterval(intervalId); // Stop incrementing when fully grown
                        setReadyToHarvest(true);
                        return prevPercentage;
                    }
                });
            }, 1000); // 1000 milliseconds = 1 second
        }
    };


    // @ts-ignore
    const harvest = () => {
        if(treeGrownPercentage == 10 && readyToHarvest) {
            console.log('harvesting');
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            setCoins(coins + randomNumber);
            setTreeGrownPercentage(0)
        } else {
            console.log('not harvesting');
            alert('not finished growing')
        }
    }

    return(
            <>
                <div className="p-4 mx-5 text-2xl border border-lime-600 bg-stone-800 rounded  cursor-pointer">
                <Dialog>
                    <DialogTrigger>{handleState()}</DialogTrigger>
                    <DialogContent className={`bg-stone-900 text-white border-stone-900`}>
                        <DialogHeader>
                            <DialogTitle className={`mb-2`}>Farm Patch Options</DialogTitle>
                            <DialogClose asChild>
                                <button onClick={plantSeed} className={`border border-stone-800 rounded hover:bg-green-600`}>Plant seed
                                </button>
                            </DialogClose>
                            <DialogClose asChild>
                                <button onClick={harvest} className={`border border-stone-800 rounded hover:bg-green-600`}>Harvest
                                </button>
                            </DialogClose>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                </div>


            </>
    )
}
