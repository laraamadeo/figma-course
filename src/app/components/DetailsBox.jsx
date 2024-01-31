export default ({ title, description }) => {
    return <div className="w-full max-w-[440px] py-2">
        <p className="font-viga text-xl mb-1">{title}</p>
        <p className="text-base">{description}</p>
    </div>

}