import { Button, Link } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'

export default function Finsh({na , setName , setAddress}) {
    const history = useHistory()
    return (
        <div>
            Finsh {na}
            
            <input onChange={(e) => setName(e.target.value)} />
            <input onChange={(e) => setAddress(e.target.value)} />
            <button onClick={() => history.push("/checkout")}>check</button>
        </div>
    )
}
