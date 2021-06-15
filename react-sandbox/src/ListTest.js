import { useEffect, useState } from 'react'

const ListTest = () => {
    const [myList, setMyList] = useState([])

    useEffect(() => {
        const updatedList = [{ id: 1 }, { id: 2 }, { id: 3 }]
        setMyList(updatedList)
    }, [])

    return (
        <div>
            {myList && myList.map((each) => <div key={each.id}>{each.id}</div>)}
        </div>
    )
}

export default ListTest
