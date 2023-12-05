

export function TableEl({ text, txtClr }) {
    return <td className={`${txtClr ? txtClr : "text-white"} p-3 w-[150px] text-center border-solid border border-white font-semibold `}>{text}</td>
}