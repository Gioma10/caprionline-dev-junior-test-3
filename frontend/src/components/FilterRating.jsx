import { forwardRef } from "react"

const FilterRating= forwardRef( function FilterRating({onRate}, ref){
    return (
        <div className="flex gap-4 items-center">
            <label htmlFor="rate">Valutazione</label>
            <div className="flex items-center gap-2">
                <input min='1' max='10' className="w-2/3" name="rate" type="number" ref={ref}/>
                <button className="w h-full border border-black p-2" onClick={onRate}>Cerca</button>
            </div>
        </div>
    )
})

export default FilterRating;