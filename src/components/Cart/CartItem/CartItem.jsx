import React from 'react'
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core'
import useStyles from './style'
import { ClassTwoTone } from '@material-ui/icons'
const CartItem = ({ item, onUpdateQty,
    onRemoveCart }) => {
    const classes = useStyles()
    console.log(item)

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>


            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity - 1)}> - </Button>
                    <Typography variant="h5">{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity + 1)}> + </Button>
                </div>
            </CardActions>
            <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveCart(item.id)} >remove</Button>
        </Card>
    )
}

export default CartItem
