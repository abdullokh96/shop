import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

const CartItem = ({images, title, description, price, brand, rating, onClick, children, deleteToCart}) => {
    return(
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '230px' }}  variant="top" src={images[0]} />
      <Card.Body style={{ height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'  }}>
        <div className='d-flex justify-content-between'>
            <Card.Title> {title} </Card.Title>
            <Card.Title> {brand} </Card.Title>
        </div>
        <Card.Text> {description} </Card.Text>
        <ReactStars
            value={rating}
            count={5}
            size={30}
            color2={'#ffd700'} />
        <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
            <Button onClick={onClick} deleteToCart={deleteToCart} style={{ width: '50%', marginTop: '5px' }} variant="primary"> {children} </Button>
            <h4> $ {price} </h4>
        </div>
      </Card.Body>
    </Card>
        </div>
    )
}

export default CartItem