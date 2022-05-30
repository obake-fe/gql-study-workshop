import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddReviewInput = {
  commentBody: Scalars['String'];
  star?: InputMaybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** 指定した商品にレビューを追加する */
  addReview?: Maybe<Review>;
  /** 指定したレビューを削除する */
  deleteReview?: Maybe<Scalars['ID']>;
  /** レビューの Star 数 を増やす */
  incrementReviewStars?: Maybe<Review>;
};


export type MutationAddReviewArgs = {
  addReviewInput: AddReviewInput;
  productId: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};


export type MutationIncrementReviewStarsArgs = {
  reviewId: Scalars['ID'];
};

/** 商品。だがし。 */
export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageURL: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  reviews: Array<Review>;
};

export type Query = {
  __typename?: 'Query';
  /** IDを指定した商品単品取得 */
  product?: Maybe<Product>;
  /** 商品の全件取得 */
  products: Array<Product>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};

/** 商品のレビュー */
export type Review = {
  __typename?: 'Review';
  commentBody: Scalars['String'];
  id: Scalars['ID'];
  star: Scalars['Int'];
};

export type ProductReviewMutationMutationVariables = Exact<{
  pid: Scalars['ID'];
  comment: Scalars['String'];
}>;


export type ProductReviewMutationMutation = { __typename?: 'Mutation', addReview?: { __typename?: 'Review', id: string } | null };

export type ProductDetailQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductDetailQueryQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, reviews: Array<{ __typename?: 'Review', id: string, star: number, commentBody: string }> } | null };

export type ProductReviewFragmentFragment = { __typename?: 'Product', reviews: Array<{ __typename?: 'Review', id: string, star: number, commentBody: string }> };

export type ProductsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQueryQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string }> };

export const ProductReviewFragmentFragmentDoc = gql`
    fragment ProductReviewFragment on Product {
  reviews {
    id
    star
    commentBody
  }
}
    `;
export const ProductReviewMutationDocument = gql`
    mutation ProductReviewMutation($pid: ID!, $comment: String!) {
  addReview(productId: $pid, addReviewInput: {commentBody: $comment, star: 0}) {
    id
  }
}
    `;
export type ProductReviewMutationMutationFn = Apollo.MutationFunction<ProductReviewMutationMutation, ProductReviewMutationMutationVariables>;

/**
 * __useProductReviewMutationMutation__
 *
 * To run a mutation, you first call `useProductReviewMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductReviewMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productReviewMutationMutation, { data, loading, error }] = useProductReviewMutationMutation({
 *   variables: {
 *      pid: // value for 'pid'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useProductReviewMutationMutation(baseOptions?: Apollo.MutationHookOptions<ProductReviewMutationMutation, ProductReviewMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProductReviewMutationMutation, ProductReviewMutationMutationVariables>(ProductReviewMutationDocument, options);
      }
export type ProductReviewMutationMutationHookResult = ReturnType<typeof useProductReviewMutationMutation>;
export type ProductReviewMutationMutationResult = Apollo.MutationResult<ProductReviewMutationMutation>;
export type ProductReviewMutationMutationOptions = Apollo.BaseMutationOptions<ProductReviewMutationMutation, ProductReviewMutationMutationVariables>;
export const ProductDetailQueryDocument = gql`
    query ProductDetailQuery($id: ID!) {
  product(id: $id) {
    id
    name
    description
    ...ProductReviewFragment
  }
}
    ${ProductReviewFragmentFragmentDoc}`;

/**
 * __useProductDetailQueryQuery__
 *
 * To run a query within a React component, call `useProductDetailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductDetailQueryQuery(baseOptions: Apollo.QueryHookOptions<ProductDetailQueryQuery, ProductDetailQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDetailQueryQuery, ProductDetailQueryQueryVariables>(ProductDetailQueryDocument, options);
      }
export function useProductDetailQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailQueryQuery, ProductDetailQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDetailQueryQuery, ProductDetailQueryQueryVariables>(ProductDetailQueryDocument, options);
        }
export type ProductDetailQueryQueryHookResult = ReturnType<typeof useProductDetailQueryQuery>;
export type ProductDetailQueryLazyQueryHookResult = ReturnType<typeof useProductDetailQueryLazyQuery>;
export type ProductDetailQueryQueryResult = Apollo.QueryResult<ProductDetailQueryQuery, ProductDetailQueryQueryVariables>;
export const ProductsQueryDocument = gql`
    query ProductsQuery {
  products {
    id
    name
  }
}
    `;

/**
 * __useProductsQueryQuery__
 *
 * To run a query within a React component, call `useProductsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQueryQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQueryQuery, ProductsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQueryQuery, ProductsQueryQueryVariables>(ProductsQueryDocument, options);
      }
export function useProductsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQueryQuery, ProductsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQueryQuery, ProductsQueryQueryVariables>(ProductsQueryDocument, options);
        }
export type ProductsQueryQueryHookResult = ReturnType<typeof useProductsQueryQuery>;
export type ProductsQueryLazyQueryHookResult = ReturnType<typeof useProductsQueryLazyQuery>;
export type ProductsQueryQueryResult = Apollo.QueryResult<ProductsQueryQuery, ProductsQueryQueryVariables>;