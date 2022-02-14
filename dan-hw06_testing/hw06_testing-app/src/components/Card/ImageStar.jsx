import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoritesList } from "../../store/thunk";

const ImageStar = (props) => {
    const favoritesList = useSelector(state => state.favoritesList);
    const dispatch = useDispatch();

    const handleFavoriteClick = (id) => {
        dispatch(changeFavoritesList(id));
    };
    return (
        <svg
            onClick={e => handleFavoriteClick(props.id)}
            className={
                favoritesList.includes(props.id) ?
                    "favorite-card active" :
                    "favorite-card"
            }
            xmlns="http://www.w3.org/2000/svg"
            width="27" height="27"
            fill="#f6f6f6"
            stroke="#666" strokeWidth="1"
            viewBox="0 0 27 27">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
    )
}

export default ImageStar;