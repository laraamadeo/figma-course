import { useEffect, useState } from "react"
import StandButton from "../components/StandButton"
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import okayGo from '../../../public/okayGo.mp3'
import { editions } from "../data"





export default ({ onCancel, onSend }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [play, setPlay] = useState(false)


    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = 'unset'
    }, [])

    const onSendClick = () => {
        const edition = editions.find(obj => obj.enabled === true)
        const data = { recipient: email, to_name: name, message: `Gracias por animarte a hacer la ${edition.edition}º del curso. A continuación te dejo la información relevante:`, days: edition.dates.days, month: edition.dates.month, price: edition.price, hours: edition.hours.hour, day: edition.hours.day }

        onSend(data)
    }
    const onPlayClick = () => {
        const audio = document.getElementById("audio_tag")
        const delayId = setTimeout(() => {
            if (!play) {
                setPlay(true)
                const audio = document.getElementById("audio_tag")
                audio.play()
            } else if (play) {
                setPlay(false)
                audio.pause()
            }

        }, 200)
        return () => clearTimeout(delayId)

    }


    return <>
        <audio src={okayGo} id="audio_tag" />
        <div className="flex justify-center items-center fixed w-screen h-screen z-[1000]">
            <div className="w-screen h-screen absolute bg-[#16281f] opacity-60">
            </div>
            <div className="bg-white absolute p-6 rounded-lg border border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] sm:max-w-[440px] mx-4 sm:mx-auto">
                <div className="flex justify-between items-center  mb-4">
                    <p className="font-pixel text-[28px] sm:text-4xl">Okaaay... let's go!</p>
                    {play ? <StopIcon className={`cursor-pointer w-8 text-[#718bff] hover:text-[#6581ff] `} onClick={onPlayClick} /> : <PlayIcon className="cursor-pointer w-8 text-[#718bff] hover:text-[#6581ff]" onClick={onPlayClick} />}
                </div>
                <p className="text-base sm:text-lg mb-4">Me alegro de que te animes con el curso 🥳. Déjame tu email y te llegaran las instrucciones para terminar la inscripción.</p>

                <div className="mb-4">
                    <p className='font-medium mb-1'>Name</p>
                    <input className="rounded-xl text-base w-full box-border py-3 px-3 border-none bg-[#dfe5ff] active:border-3 active:border-[#bac3f1] active:bg-[#cdd3ec]focus:bg-[#cdd3ec]" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div className="mb-10">
                    <p className='font-medium mb-1'>Email</p>
                    <input className="rounded-xl text-base w-full box-border py-3 px-3 border-none bg-[#dfe5ff] active:border-3 active:border-[#bac3f1] active:bg-[#cdd3ec]focus:bg-[#cdd3ec]" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="flex gap-4">
                    <StandButton onClick={onSendClick} label={'Enviar'} className={'text-xl py-1 w-full'} />
                    <StandButton onClick={onCancel} label={'Cancelar'} className={'text-xl py-1 w-full text-[#01783F] bg-[#d6f5e6] shadow-[4px_4px_0_0_rgba(186,239,204)] hover:shadow-[8px_8px_0_0_rgba(186,239,204)]'} />
                </div>
            </div>
        </div>
    </>
}