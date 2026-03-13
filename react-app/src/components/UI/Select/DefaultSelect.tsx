import type { DefaultSelectType } from "../../../types/types"

function DefaultSelect({options, defaultValue, value, onChange}: React.SelectHTMLAttributes<HTMLSelectElement> & DefaultSelectType) {
    return(
        <select 
            value={value} 
            onChange={event => onChange(event.target.value)}
            className="my-2 px-2 border-2 rounded-lg">
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default DefaultSelect