import { Link } from "react-router-dom";
import {useProductsQueryQuery} from "../types.d";


export default function Products() {
    const { data, loading } = useProductsQueryQuery();
    if (loading || !data) return null;
    return (
        <>
            <ul>
                {data.products.map((product) => (
                    <Link to={"/products/" + product.id}>{product.name}</Link>
                ))}
            </ul>
        </>
    );
}