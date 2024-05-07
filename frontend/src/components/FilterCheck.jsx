export default function FilterCheck({onCheck}){
    return (
        <div className="flex gap-4 items-center">
                <label htmlFor="recent">Più recenti</label>
                <input name="recent" type="checkbox" onClick={onCheck} />
        </div>
    )
}