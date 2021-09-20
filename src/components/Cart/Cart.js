import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import { NavLink, Link } from 'react-router-dom'

const Cart = ({
    cart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart }) => {
    const classes = useStyles()
    let itemsToRender;



    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1">
                Your Have No Items In Your Shopping Cart,
                <NavLink to='/'>Start Adding Some!</NavLink>
            </Typography>
        )

    }
    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {itemsToRender = cart.line_items.map((item) => {
                        return <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item}

                                onUpdateQty={handleUpdateCartQty}
                                onRemoveCart={handleRemoveFromCart}

                            />
                        </Grid>
                    })}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" variant="contained" type="button" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" variant="contained" type="button" color="secondary">Checkout</Button>
                    </div>
                </div>
            </>)
    }
    if (!cart.line_items) return "Loading ......?";

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom> Your Shopping Cart </Typography>
            {!cart.line_items?.length ? <EmptyCart /> : <FilledCart />}

        </Container>
    )
}


export default Cart
