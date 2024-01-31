
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import DynamicIllustration from "./DynamicIllustration";

export default () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return <>
        <div className="flex w-full">
            <div className="md:w-2/4 w-full">

                <Accordion open={open === 1} className="mb-2 rounded-lg border bg-white border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] hover:bg-[#f8fffc] cursor-pointer px-4 w-auto" onClick={() => handleOpen(1)}>
                    <AccordionHeader className={`border-b-0 font-pixel text-4xl transition-colors text-grey-900`}>
                        Semana 1
                    </AccordionHeader>
                    <AccordionBody className={`pt-0 text-base font-normal text-gray-900 ${open != 1 && 'hidden'}`}>
                        Introducción al software. Haremos una overview por todas las secciones de Figma.
                        Incorporaremos conceptos básicos de Figma (Shapes, Texts, Frames, layout-grid, masks...)
                        Auto-layout. Nos meteremos en profundidad y lo machacaremos hasta dominarlo.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="mb-2 rounded-lg border bg-white border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] hover:bg-[#f8fffc] cursor-pointer px-4 w-auto" onClick={() => handleOpen(2)}>
                    <AccordionHeader className={`border-b-0 font-pixel text-4xl transition-colors text-grey-900`}>
                        Semana 2
                    </AccordionHeader>
                    <AccordionBody className={`pt-0 text-base font-normal text-gray-900 ${open != 2 && 'hidden'}`}>
                        Nos adentraremos en las variables, tokens y su pequeño mundillo. Guías de estilos y cómo sacarle su máximo potencial. Entenderemos el proceso de componer y la lógica de hacer masters.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="mb-2 rounded-lg border bg-white border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] hover:bg-[#f8fffc] cursor-pointer px-4 w-auto" onClick={() => handleOpen(3)}>
                    <AccordionHeader className={`border-b-0 font-pixel text-4xl transition-colors text-grey-900`}>
                        Semana 3
                    </AccordionHeader>
                    <AccordionBody className={`pt-0 text-base font-normal text-gray-900 ${open != 3 && 'hidden'}`}>
                        Continuaremos con la componetización y creación de variantes para un entendimiento profundo de los component props e instancias anidadas y cómo eficientan la construcción de componentes.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} className="mb-2 rounded-lg border bg-white border-[#0008C9] shadow-[4px_4px_0_0_rgba(101,255,153)] hover:bg-[#f8fffc] cursor-pointer px-4 w-auto" onClick={() => handleOpen(4)}>
                    <AccordionHeader className={`border-b-0 font-pixel text-4xl transition-colors text-grey-900`}>
                        Semana 4
                    </AccordionHeader>
                    <AccordionBody className={`pt-0 text-base font-normal text-gray-900 ${open != 4 && 'hidden'}`}>
                        Prototiparemos en Figma. Descubriremos que Figma sirve hasta para hacer motion. Descubriremos los plugins, cómo buscarlos y aplicarlos.
                    </AccordionBody>
                </Accordion>
            </div>
            <div className="sm:w-2/4 hidden sm:block">
                <DynamicIllustration num={open} />
            </div>
        </div>
    </>
}