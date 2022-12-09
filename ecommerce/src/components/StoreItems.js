import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from './contextProvider';

const Store = ({id,title,desc,category}) => {

    const {setCount,count}=useShoppingCart()
    return (
        <Card className="h-100" style={{ width: "30%"  }}>
            <Card.Body>
                <Card.Title className='mb-4'>
                    <p>{title}</p>
                    <p>{desc}</p>
                    <p>{category}</p>
                </Card.Title>
                <Button onClick={()=>count(setCount+1)}>+</Button>
                {count}
                <Button>-</Button>
            </Card.Body>
        </Card>
    )
}

export default Store
