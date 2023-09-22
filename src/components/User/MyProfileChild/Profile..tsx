import React, { useState } from 'react'
import DropdownProfile from '../../Helper/DropdownProfile'
import SelectComponent from '../../Helper/SelectComponent/SelectComponent'


const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
    { label: "Sixth", value: 6 },
]

const Profile = () => {
    const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

    return (
        <div>
            <SelectComponent options={options} value={value}
                selectOnChange={(o) => setValue(o)} />
        </div>
    )
}

export default Profile