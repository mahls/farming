interface InventoryProps {
    inventory: {
        name: any;
    }[]
}

export const Inventory = ({inventory}: InventoryProps) => {
    return(
        <div className={`fixed bottom-5 align-middle flex text-stone-400 justify-center right-5 left-5 border border-stone-400 bg-stone-800 rounded p-2`}>
            <div>Inventory:</div>
            {
                inventory.map((item, index) => {
                    return (
                        <div className={`pr-2`}>
                            <div className={``}>{item?.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
