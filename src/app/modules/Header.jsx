import StandButton from "../components/StandButton"

export default ({ onJoin }) => {

    return <>
        <div className="w-full flex flex-col items-center">
            <img className="w-9 mb-32 sm:mb-10" src="/figma-logo.svg" />
            <div className="flex flex-col items-center mb-16">
                <p className="font-pixel text-5xl sm:text-7xl">Curso intensivo</p>
                <p className="font-pixel text-5xl sm:text-7xl mb-16"><span className="text-4xl sm:text-6xl">✨</span> Figma <span className="text-4xl sm:text-6xl">✨</span></p>
                <div className="flex flex-col items-center gap-2">
                    <p className="font-pixel text-3xl"><span className="font-viga text-2xl">12h</span> de clases en directo</p>
                    <p className="font-pixel text-3xl"><span className="font-viga text-2xl">100%</span> prácticas</p>
                    <p className="font-pixel text-3xl">Online</p>
                </div>
            </div>
            <StandButton onClick={onJoin} enabled={true} label={'Me apunto!'} />
        </div>
    </>
}