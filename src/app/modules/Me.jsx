import SectionHeader from "../components/SectionHeader"

export default () => {
    const texto1 = `Jelou! Soy Lara y soy diseñadora de producto digital. También me he formado en desarrollo frontend por lo que tengo una combi de conocimientos bastante interesante 🤙.`

    const texto2 = `No busques mi nombre en google esperando que te salga una eminencia en diseño digital porque no lo soy y como mucho te aparecerá mi perfil de LinkedIn.`

    const texto3 = `Simplemente conozco Figma muy bien y me gusta enseñar. No tiene más truco.`

    return <>
        <div className="flex flex-col gap-4">
            <SectionHeader text={'Quién soy'} />
            <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <div className="flex flex-col gap-4 mb-8 sm:mb-0">
                    <p className="sm:w-3/4 text-lg w-full">{texto1}</p>
                    <p className="sm:w-3/4 text-lg w-full">{texto2}</p>
                    <p className="sm:w-3/4 text-lg w-full">{texto3}</p>
                </div>
                <img className="w-2/4 sm:w-1/4 sm:-mt-14" src="/me.png"></img>
            </div>
        </div>
    </>
}