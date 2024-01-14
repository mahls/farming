

interface DataProps {
    mouseX: number,
    mouseY: number,
    level: number,
    experience: number,
    coins: number
}

export const Data = ({ mouseX, mouseY, level, experience, coins }: DataProps) => {


    return(
        <div className={`text-stone-400 flex p-2 fixed left-5 top-5 border border-stone-400 bg-stone-800 rounded`}>
            <div className={`pr-2`}>MouseX: {mouseX}</div>
            <div className={`pr-2`}>MouseY: {mouseY}</div>
            <div className={`pr-2`}>Coins: {coins}</div>
            <div className={`pr-2`}>Time: 0</div>
            <div className={`pr-2`}>level: {level}</div>
            <div className={`pr-2`}>EXP: {experience}</div>
        </div>
    )
}
