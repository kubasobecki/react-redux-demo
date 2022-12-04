import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
    {
        title: 'Test item 1',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        title: 'Test item 2',
        price: 3,
        description: 'This is a second product - amazing!'
    },
    {
        title: 'Test item 3',
        price: 4,
        description: 'This is a third product - amazing!'
    }
];

const Products = props => {
    const productItems = products.map(item => {
        return (
            <ProductItem
                key={item.title}
                id={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
            />
        );
    });

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>{productItems}</ul>
        </section>
    );
};

export default Products;
