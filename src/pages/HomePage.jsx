import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import ProdInfo from '../components/homePage/ProdInfo'

const HomePage = () => {

    const products = useSelector((store) => store.products)

    const dispatch = useDispatch()

    // console.log(products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

  return (
    <div className="header-container"> 
      <h3>e-commerce</h3>
      <h1>Don YUCA</h1>
    <div>
        {
            products?.map((prod) => (
                <ProdInfo 
                key={prod.id} 
                prod={prod}/>
            ))
        }
    </div>
    </div>
  )
}

export default HomePage