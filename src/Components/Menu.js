import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { Badge, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewFooter from '../NewFooter';
import Footer from './Footer';
import Product from './Product'
import { Link } from 'react-router-dom';
export default function Menu({ products, onAddToCart, totalItems, open, handleClose, price, cart }) {
    const [food, setFood] = useState([]);


    const [check, setCheck] = useState("");

    const [checkRadiobtn, setCheckRadiobtn] = useState("")

    const [toolTipTitle, setToolTipTitle] = useState("You must choose one of the options below - يجب عليك اختيار احد الخيارات ادناه للبحث")

    const [disabledStatus, setDisabledStatus] = useState(true)


    const [textfield, setTextField] = useState(null)

    const [error, setError] = useState("")


    const testFunction = (e) => {
        setTextField(e.target.value.length)
    }




    const setCheckRadiobtnOut = (e) => {
        setCheckRadiobtn(e.target.value)
        setDisabledStatus(false)

        setToolTipTitle("Search field - حقل البحث ")
    }


    // search
    console.log(textfield)
    const filter = (e) => {
        testFunction(e)
        let val = e.target.value.toUpperCase();
        if (checkRadiobtn === "Search by Name") {

            if (val !== "" && e.target.value.match(/\d/g) === null) {
                setError("")
                const newFood = products.filter(item => item.name.toUpperCase().startsWith(val))
                //     const x = products.filter(item => item.name.toUpperCase().indexOf(val) >= 0)

                // console.log(x)

                console.log(products.map(item => item.name.toUpperCase()))

                setFood(newFood)

            } else {
                console.log(e.target.value.match(/\d/g))
                setError("This value must be not include number !")
                setFood(products)
            }

        } else if (checkRadiobtn === "Search by Price") {
            setError("")
            if (val !== "" && Number(val)) {
                const newFood = products.filter(item => item.price.raw >= val)
                setFood(newFood)
            } else {
                setError("This value must be Number !")
                setFood(products)
            }
        } else{
            if(val !== "" && e.target.value.match(/\d/g) === null){
                setError("")
                     const x = products.filter(item => item.name.toUpperCase().indexOf(val) >= 0)
                     setFood(x)
                console.log(x)
            } else {
                setError("This value must be not include number !")
                setFood(products)
            }
        }
        console.log(products)
    }
    useEffect(() => {
        setFood(products)
    }, [])
    return (
        <div>

            <Link to="/cart">{cart.total_items > 0 ? <div className="cart-fixed"><Tooltip title="Go to your cart - اذهب الى سلة المشتريات"><Badge badgeContent={cart.total_items} color="info">🛒</Badge></Tooltip></div> : ""}</Link>

            <div className="textBox-section">

                <Tooltip title={toolTipTitle}>
                    <TextField fullWidth disabled={disabledStatus} id="outlined-basic" onChange={filter} placeholder={check} color="warning" label="Search" variant="outlined" />
                </Tooltip>

                <Tooltip title="يوجد خطاً في القيمه المدخله">
                    <p className="errorText">{textfield == 0 ? "" : error}</p>
                </Tooltip>

                <FormControl>
                    <RadioGroup>
                        <Tooltip title="البحث عن طريق الأسم  طريقه البحث (انجليزي فقط)">
                            <FormControlLabel onClick={setCheckRadiobtnOut} value="Search by Name" control={<Radio color="warning" />} label="Search by Name" />
                        </Tooltip>
                        <Tooltip title="البحث عن طريق السعر (أبتداءاً من)">
                            <FormControlLabel onClick={setCheckRadiobtnOut} value="Search by Price" control={<Radio color="warning" />} label="Search by Price (start from)" />
                        </Tooltip>
                        <Tooltip title="البحث بشكل عام هو بحث في الكلمه التي تحتوي على كلمه البحث طريقه البحث هي (انجليزي / عربي) (ينصح به)">
                            <FormControlLabel onClick={setCheckRadiobtnOut} value="Search in General" control={<Radio color="warning" />} label="Search in General  - (recommended)" />
                        </Tooltip>
                    </RadioGroup>
                </FormControl>

            </div>

            <Grid container spacing={3}>


                {food.map(item => (

                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <Paper>
                            <Product product={item} onAddToCart={onAddToCart} totalItems={totalItems} open={open} handleClose={handleClose} price={price} cart={cart} />
                        </Paper>
                    </Grid>

                ))}
            </Grid>
            <div className="mt-3"></div>
            {food.length > 0 ? <Footer /> : <NewFooter />}
        </div>
    )
}
