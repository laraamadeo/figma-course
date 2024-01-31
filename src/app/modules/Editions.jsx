import EditionBox from "../components/EditionBox"
import SectionHeader from "../components/SectionHeader"
import { editions } from "../data"

export default ({ onJoin }) => {
    return <>
        <div className=" sm:flex sm:flex-col sm:gap-6 hidden">
            <SectionHeader text={'Fechas y precios'} />
            <div className="flex gap-6">
                {editions.map((ed, key) => <EditionBox key={key} onJoin={onJoin} enabled={ed.enabled} edition={ed.edition} dates={{ days: ed.dates.days, month: ed.dates.month }} hours={{ hour: ed.hours.hour, day: ed.hours.day }} spots={ed.spots} price={ed.price} />)}
            </div>
        </div>
    </>
}