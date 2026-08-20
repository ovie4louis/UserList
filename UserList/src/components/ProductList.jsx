const ProductList = () => {
const    products = [

        {
            id : 1,
            name : "Phone",
            price : "$699"

        },
        {
            id : 2,
            name : "Laptop",
            price : "$1200"
        },
        {
            id : 3,
            name : "HeadPhone",
            price : "$122"
        }

    ]
  return (

    <div>

{products.map(({name, price}) => (
    <div key={products.id}>
        <li>{name}</li>
        <li>{price}</li>

    </div>
))}
</div>
  )
}

export default ProductList