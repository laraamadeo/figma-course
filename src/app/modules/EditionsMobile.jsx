import { useState } from "react";
import EditionBox from "../components/EditionBox"
import SectionHeader from "../components/SectionHeader"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import StandButton from "../components/StandButton";
import { editions } from "../data";

export default ({ onJoin }) => {
    const [open, setOpen] = useState(1)

    const handleOpen = (value) => setOpen(open === value ? 0 : value)

    return <>
        <div className=" flex flex-col gap-6 sm:hidden">
            <SectionHeader text={'Fechas y precios'} />
            <div className="flex flex-col">
                {editions.map((ed, index, key) => {
                    return <Accordion key={index} open={open === ed.edition} className="mb-2 rounded-lg border bg-white border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] hover:bg-[#f8fffc] cursor-pointer px-4 w-auto" onClick={() => handleOpen(index + 1)}>
                        <AccordionHeader className={`border-b-0 font-pixel text-4xl transition-colors text-grey-900`}>
                            {`${ed.edition}º edición`}
                        </AccordionHeader>
                        <AccordionBody className={`pt-0 text-base font-normal text-gray-900 py-4 -mt-5 ${open !== ed.edition && 'hidden'}`}>
                            <div className="flex flex-col border-b-[1px] border-gray-300 gap-2 pb-4">
                                <p className="text-xl ">{ed.dates.days} de {ed.dates.month}</p>
                            </div>

                            <div className="flex flex-col border-b-[1px] border-gray-300 gap-2 py-4">
                                <p className="text-xl">{`${ed.hours.day} de ${ed.hours.hour}h`}</p>
                                <p className="font-bold text-xl ">{`${ed.spots} plazas`}</p>
                            </div>

                            <div className="flex flex-col gap-2 pt-4">
                                <p className={`text-4xl font-bold mb-2`}>{`${ed.price}€`}</p>
                                <StandButton onClick={onJoin} className={!ed.enabled && 'opacity-40'} label={ed.enabled ? 'Me apunto! 🥳' : 'Soon'} />
                            </div>
                        </AccordionBody>
                    </Accordion>
                })}
            </div>
        </div>
    </>
}