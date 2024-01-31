import StandButton from "./StandButton"

export default ({ onJoin, enabled, edition, dates: { days, month }, hours: { hour, day }, spots, price }) => {
    return <>
        <div className={`flex flex-col gap-4 p-6 w-auto min-w-80 bg-white border border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] rounded-xl`}>

            <div className="flex flex-col border-b-[1px] border-gray-300 gap-2 pb-4">
                <p className="font-pixel text-5xl">{`${edition}º edición`}</p>
                <p className="text-xl ">{days} de {month}</p>
            </div>

            <div className="flex flex-col border-b-[1px] border-gray-300 gap-2 pb-4">
                <p className="text-xl">{`${day} de ${hour}h`}</p>
                <p className="font-bold text-xl ">{`${spots} plazas`}</p>
            </div>

            <div className="flex flex-col gap-2 ">
                <p className={`text-4xl font-bold mb-2`}>{`${price}€`}</p>
                <StandButton onClick={onJoin} className={!enabled && 'opacity-40'} label={enabled ? 'Me apunto! 🥳' : 'Soon'} />
            </div>

        </div>
    </>
}