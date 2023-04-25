import React from 'react'
import {
    Route,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom'
import List from './List'

function Product(props) {
    const navigate = useNavigate()
    const { productId } = useParams()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const offset = searchParams.get('offset')
    const limit = searchParams.get('limit')
    return (
        <>
            <h3>{productId}번 상품 페이지입니다.</h3>
            <ul>
                <li>
                    hash:
                    {location.hash}
                </li>
                <li>
                    pathname:
                    {location.pathname}
                </li>
                <li>
                    search:
                    {location.search}
                </li>
                <li>
                    state:
                    {location.state}
                </li>
                <li>
                    key:
                    {location.key}
                </li>
            </ul>
            <ul>
                <li>
                    offset:
                    {offset}
                </li>
                <li>
                    limit:
                    {limit}
                </li>
            </ul>
            <ul>
                <li>
                    <button type="button" onClick={() => navigate(-2)}>
                        Go 2 pages back
                    </button>
                    <button type="button" onClick={() => navigate(-1)}>
                        Go back
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Product
