import React from 'react'
import { TextField, Grid, Select, MenuItem } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                    <TextField
                        label={label}
                        name={name}
                        required={required}
                        as={TextField}
                    />
                )}
                control={control}
                fullWidth

            />

        </Grid>
    )
}

export default FormInput
