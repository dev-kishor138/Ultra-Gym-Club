import { useEffect, useState } from "react"

const useDumble = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/dumble.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return items
}

export default useDumble