import DetailsBox from "../components/DetailsBox"
import SectionHeader from "../components/SectionHeader"

export default () => {
    return <>
        <div className="flex flex-col sm:gap-6 gap-2">
            <SectionHeader text={'Detallitos'} />
            <div className="w-full flex flex-col md:flex-row md:gap-8 justify-between">
                <DetailsBox title={'De 0 a profesional'} description={'Descubre funcionalidades que nos ofrece Figma para eficientar tu trabajo con estilos, componentes, variantes y mas propiedades'} />
                <DetailsBox title={'Homework'} description={`Don't worry! Simplemente serán pequeños ejercicios para practicar y venir con dudas a la siguiente sesión.`} />
            </div>
            <div className="w-full flex flex-col md:flex-row md:gap-8 justify-between">
                <DetailsBox title={'Practica con ejercicios'} description={'En las primeras partes de las sesiones será mas “teórico” y una vez nos quedemos con el concepto, lo pondremos en practica hasta dominarlo.'} />
                <DetailsBox title={'Comunidad Discord'} description={`Crearemos una comunidad antes de cada curso y para compartir experiencias, dudas o conocimiento y no perder el contacto. Nunca se sabe ✨😌`} />
            </div>
        </div>
    </>
}