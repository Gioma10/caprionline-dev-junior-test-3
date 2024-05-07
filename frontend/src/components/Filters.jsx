import { forwardRef } from "react"

const Filters= forwardRef(function Filters({onCheck, onRate}, ref){


    return (
        <div className="my-10 flex justify-between gap-5">
            <div className="flex gap-4 items-center">
                <label htmlFor="recent">Più recenti</label>
                <input name="recent" type="checkbox" onClick={onCheck} />
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="rate border border-red-600">Valutazione</label>
                <div className="flex items-center gap-2">
                    <input className="w-1/3" name="rate" type="number" ref={ref}/>
                    <button className="w h-full border border-black p-2" onClick={onRate}>Aggiorna</button>
                </div>
                
            </div>
        </div>
    )
})

export default Filters