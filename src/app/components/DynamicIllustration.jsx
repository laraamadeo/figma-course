export default ({ num }) => {
    const selectImg = () => {
        switch (num) {
            case 0: return '/calendar.png'
            case 1: return '/week1.png'
            case 2: return '/week2.png'
            case 3: return '/week3.png'
            case 4: return '/week4.png'
        }
    }
    return <div className="md:pr-12 md:pl-32 md:pb-12">
        <img className="w-full" src={selectImg()}></img>
    </div>
}