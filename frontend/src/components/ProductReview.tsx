import { useState } from "react";
import {ProductReviewFragmentFragment} from "../types.d";

type Props = {
    product: ProductReviewFragmentFragment;
    submitting: boolean;
    onSubmit: (comment: string) => Promise<any>;
};

export default function ProductReview({
                                          product,
                                          submitting,
                                          onSubmit
                                      }: Props) {
    const [myComment, setMyComment] = useState("");
    if (!product) return null;
    return (
        <>
            {product.reviews.length ? (
                <ul>
                    {product.reviews.map(r => (
                        <li key={r.id}>
                            <div>★: {r.star}</div>
                            <p>{r.commentBody}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>レビューはまだありません</p>
            )}
            <form
                onSubmit={async e => {
                    e.preventDefault();
                    await onSubmit(myComment);
                    setMyComment("");
                }}
            >
                <div>
                    <label>
                        コメント
                        <textarea
                            value={myComment}
                            onChange={e => setMyComment(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit" disabled={submitting}>
                    追加
                </button>
            </form>
        </>
    );
}