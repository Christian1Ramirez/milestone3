import { useState, useEffect } from 'react'

export default function Tours() {
    const [Guests, setGuests] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/Guests')
            const json = await response.json()
            setGuests(json)
        }
        fetchData()
    }, [])

    return (
        <div> 
          <h1>Tours</h1>
          <ul>
            { Guests.map ((guest, index) => (
                <li key={index}>
                    <div>{guest.name}</div>
                    <div>{guest.owner}</div>
                    <div>{guest.non_owner}</div>
                    <div>{guest.gift}</div>
                    <div>{guest.pp}</div>
                    <div>{guest.tour_date}</div>
                    <div>{guest.notes}</div>
                </li>
            ))}
          </ul>
        </div>
    )
}