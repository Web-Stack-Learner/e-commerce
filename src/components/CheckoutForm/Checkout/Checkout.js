import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './style'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
const steps = ['Shipping Address', 'Payment Details']
const Checkout = ({ cart }) => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setChekoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const Confirmation = () => {
        return <div>Confirmation</div>
    }
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                console.log(token)
                setChekoutToken(token)

            } catch (err) {
                console.error(err)
            }
        }
        generateToken()

    }, [cart])
    const next = (data) => {
        setShippingData(data)
        nextStep()
    }
    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const backStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm nextStep={nextStep} shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} />
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography align="center" variant="h4">
                        Checkout
                    </Typography>
                    <Stepper activeStep={0} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>
                                    {step}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}

                </Paper>

            </main>

        </>
    )
}

export default Checkout
