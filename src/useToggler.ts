import { useState } from "react"

function useToggler(defaultOnValue: boolean = false) {
    const [on, setOn] = useState(defaultOnValue)

    function toggle() {
        setOn((prev: boolean) => !prev)
    }

    return { on, toggle }
}

export default useToggler
