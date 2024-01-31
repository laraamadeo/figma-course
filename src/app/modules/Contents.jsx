import Accordion from "../components/Accordion"
import SectionHeader from "../components/SectionHeader"

export default () => {

    return <>
        <div className=" flex flex-col gap-6">
            <SectionHeader text={'Contenidos del curso'} />
            <Accordion />
        </div>
    </>
}