import React from 'react'

const SlickArrowNext = ({ className, style, onClick }) => {
    // const { className, style, onClick } = props;

    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
        >
            <img src="https://firebasestorage.googleapis.com/v0/b/miscellaneous-b661a.appspot.com/o/SlickSliderArrowNext.png?alt=media&token=1c3a245a-25ae-458f-84d0-266abbd2f6d5" alt="" />
        </button>
    )
}

export default SlickArrowNext
