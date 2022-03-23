import React from 'react'

const SlickArrowPrev = ({ className, style, onClick }) => {
    // const { className, style, onClick } = props;

    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
        >
            <img src="https://firebasestorage.googleapis.com/v0/b/miscellaneous-b661a.appspot.com/o/SlickSliderArrowPrev.png?alt=media&token=fda513c2-c011-4402-96d9-20792be7544f" alt="" />
        </button>
    )
}

export default SlickArrowPrev