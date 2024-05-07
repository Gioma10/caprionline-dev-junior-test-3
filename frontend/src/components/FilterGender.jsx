import { forwardRef } from "react"

const FilterGender= forwardRef(function Filters({onGender}, ref){

    const genders= ['Azione', 'Drama', 'Animazione', 'Romantico', 'Horror', 'Thriller']

    return (
            <div className="flex gap-4 items-center">
                <select name="genders" id="gen">
                    <option disabled></option>
                    {genders.map((gender)=>{
                        return (
                            <option key={gender} ref={ref} onClick={onGender} value={gender}>{gender}</option>
                        )
                    })
                    }
                </select>
            </div>
            
    )
})

export default FilterGender