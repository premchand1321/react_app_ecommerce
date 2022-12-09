import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { details } from '../Data'
import StoreItems from '../StoreItems'

const Store = () => {
  return (
    <>
      <div>
        Store
      </div>
      <Row>
        {details.map((item) => {
          return (
            <><Col key={item.id}></Col>
            <StoreItems {... item} /></>
            )
        })}

      </Row>
    </>

  )
}

export default Store
