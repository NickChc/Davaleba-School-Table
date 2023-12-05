

export function Button({ text, click, active }) {
    return <button className={`p-3 outline-none rounded-lg cursor-pointer border-solid border border-[blue] font-semibold ${active && "bg-[blue] text-white"}`} onClick={click}>{text}</button>
}