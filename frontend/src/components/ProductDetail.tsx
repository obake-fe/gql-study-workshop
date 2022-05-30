import { useParams } from "react-router-dom";
import {useProductReviewMutationMutation, useProductDetailQueryQuery} from "../types.d";
import ProductReview from "./ProductReview";

export default function ProductDetail() {
    const { productId } = useParams<{ readonly productId: string }>();
    const { data, loading, refetch } = useProductDetailQueryQuery(
        {
            variables: {
                id: productId
            }
        })

    const [addReview, { loading: submitting }] = useProductReviewMutationMutation({
        // Mutation 実行後に動作する関数
        update(_, { data }) {
            if (!data?.addReview) return;
            refetch();
        }});

    if (loading) return <div>loading...</div>;
    if (!data?.product) return <div>not found </div>;
    const { product } = data;
    return (
        <>
            <h1>{product.name}</h1>
            <p style={{ whiteSpace: "pre-wrap" }}>{product.description}</p>
            <div>
                <h2>レビュー</h2>
                <ProductReview
                    product={product}
                    onSubmit={comment =>
                        addReview({ variables: { pid: productId, comment } })
                    }
                    submitting={submitting}
                />
            </div>
        </>
    );
}