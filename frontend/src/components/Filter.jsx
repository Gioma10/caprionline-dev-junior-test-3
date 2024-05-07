
export default function Filter({onCheck}){

    
    return (
        <div className="my-10">
            <div className="flex gap-4 items-center">
                <label htmlFor="rate">Più recenti</label>
                <input name="rate" type="checkbox" onClick={onCheck} />
            </div>
        </div>
    )
}
