import { useState, useRef, useEffect } from "react";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface ShopProps {
    inventory: ({
        price: number;
        image: string; name: string
    } | { image: string; name: string })[],
    coins: number,
    setCoins: (value: (((prevState: number) => number) | number)) => void,
    setInventory: (value: (((prevState: ({ image: string; name: string })[]) => ({ image: string; name: string })[]) | ({
        image: string;
        name: string
    })[])) => void
}

interface ShopProps {
    shopItems: ({ image: string; price: number; name: string })[]
}

export const Shop = ({ inventory, coins, setCoins, setInventory, shopItems }: ShopProps) => {
    const [shopOpen, setShopOpen] = useState(false);
    const shopRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            if (shopRef.current && !shopRef.current?.contains(event.target)) {
                // Clicked outside the shop menu, close it
                setShopOpen(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("click", handleOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [shopOpen]);

    const toggleMenu = () => {
        setShopOpen(!shopOpen);
    };

    const purchaseItem=(price: any, name: string, image: string)=>{
        if(coins >= price){
            setCoins(coins - price);
            setInventory([...inventory, {name: name, image: image,}]);
            alert(`purchased ${name} for ${price}`);
            console.log(`purchased ${name} for ${price}`)
        } else if(coins < price){
            alert('not enough coins to purchase')
            console.log("not enough coins :(")
        }
    }


    return (
        <>
            <div
                onClick={toggleMenu}
                className={`p-2 border border-stone-400 text-stone-400 bg-stone-800 rounded fixed right-5 top-5 cursor-pointer`}
            >
                Shop
            </div>
            <div
                ref={shopRef}
                className={`${shopOpen ? "fixed" : "hidden"} top-20 right-5 p-2 border border-stone-400 bg-stone-800 rounded`}
            >
                {shopItems.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Dialog key={index}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <DialogTrigger className={`mr-4 text-stone-400`}>{item.name} <img height="60" width="60" src={item.image} alt="rabbit"/> {item.price}</DialogTrigger>
                        <DialogContent className={``}>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    <DialogClose asChild>
                                        <button onClick={() => purchaseItem(item?.price, item.name, item.image)} className={`border border-stone-800 rounded hover:bg-stone-200 p-2`}>Purchase item
                                        </button>
                                    </DialogClose>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </>
    );
};
