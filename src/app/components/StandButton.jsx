export default ({ label, className, onClick }) => {
    return <p onClick={onClick} className={`font-viga text-center text-2xl text-[#01783F] bg-[#91FFCA] hover:shadow-[8px_8px_0_0_rgba(101,255,153)]  py-3 px-5 rounded-sm shadow-[4px_4px_0_0_rgba(101,255,153)] cursor-pointer ${className}`}>{label}</p>

}