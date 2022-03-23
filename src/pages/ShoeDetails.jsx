import React, { useEffect, useRef, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RelatedProducts from '../components/RelatedProducts'
import ProductImagesSlider from '../components/ProductImagesSlider'

const ShoeDetails = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            productQuantity: 1,
        },
    })

    const [activeImgURL, setActiveImgURL] = useState("https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225")

    const curr_size = watch('productSize', false)
    const curr_quantity = watch('productQuantity', false)

    const scrollPosRef = useRef()
    const sizeRef = useRef()

    useEffect(() => {
        if(!errors.productSize || !sizeRef) return
        if (window.innerWidth <= 768) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    observer.unobserve(sizeRef.current)
                    return
                }
                window.scrollTo(0, scrollPosRef.current.offsetTop)
                observer.unobserve(sizeRef.current)
            }, {
                threshold: 1,
            })
    
            observer.observe(sizeRef.current)
        }

        sizeRef.current.classList.add("shake-error")
        sizeRef.current.addEventListener("animationend", () => {
            sizeRef.current.classList.remove("shake-error")
        })

    }, [errors.productSize], sizeRef)

    useEffect(() => {
        if (curr_quantity < 1) setValue('productQuantity', 1)
    }, [curr_quantity, setValue])

    const PRODUCT_SIZES = [40, 41, 42, 43, 44, 45]

    const PRODUCT_IMAGES = [
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225",
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225",
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225",
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225",
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225",
        "https://images.stockx.com/360/Air-Jordan-4-Retro-Infrared/Images/Air-Jordan-4-Retro-Infrared/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1645637225"
    ]

    const handleImageActive = e => {
        document.querySelector(".img-container.active-thumbnail").classList.remove("active-thumbnail")
        e.target.classList.add("active-thumbnail")
        setActiveImgURL(e.target.firstChild.getAttribute("src"))
    }

    const handleSizeActive = e => {
        document
            .querySelector('label.active-size')
            ?.classList.remove('active-size')
        e.target.classList.add('active-size')        
    }

    const notifyToast = () => {
        toast.success('Item added to cart', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    }

    const onSubmit = data => {
        console.log(data)
        notifyToast()
    }

    return (
        <main>
            <section className='product-overview'>                
                <div className='product-images'>
                    <div className="thumbnails">
                        {PRODUCT_IMAGES.map((item, index) => (
                            <div className={`img-container ${index === 0 && "active-thumbnail"}`} key={index} onClick={e => handleImageActive(e)}>
                                <img src={item} alt="thumbnail-product" />
                            </div>
                        ))}
                    </div>
                    <div className="active-img">
                        <div className="img-container">
                        <img src={activeImgURL} alt="active-product" />
                        </div>
                    </div>
                </div>
                <ProductImagesSlider images={PRODUCT_IMAGES} />
                <form
                    className='product-text'
                    onSubmit={handleSubmit(onSubmit)}
                    ref={scrollPosRef}
                >
                  <ToastContainer
                    position='top-right'
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                />
                    <h1 className='product-title'>
                        FAUSTO Men's Olive Green Lace Up Trendy Stylish Outdoor
                        Fashion Sneakers
                    </h1>
                    <p className='product-cost'>
                        Rs. 1299.00 <span>(Inclusive of all taxes)</span>
                    </p>
                    <p className='product-status'>
                        AVAILABILITY:{' '}
                        <span className='available'>IN STOCK</span>
                    </p>
                    <div className='product-size'>
                        <p>
                            SIZE: <span>{curr_size}</span>
                        </p>
                        <fieldset>
                            <ul ref={sizeRef}>
                                {PRODUCT_SIZES.map((item, index) => (
                                    <li key={index}>
                                        <label
                                            htmlFor={`size${index}`}
                                            onClick={e => handleSizeActive(e)}
                                        >
                                            {item}
                                        </label>
                                        <input
                                            type='radio'
                                            id={`size${index}`}
                                            value={item}
                                            {...register('productSize', {
                                                required: true,
                                            })}
                                        />
                                    </li>
                                ))}
                            </ul>
                            {
                                errors.productSize?.type === 'required' && (
                                    <p className='form-error'>
                                        Please choose a size
                                    </p>
                                ) }
                        </fieldset>
                    </div>
                    <div className='product-quantity'>
                        <button
                            type='button'
                            onClick={() =>
                                setValue(
                                    'productQuantity',
                                    curr_quantity > 1 ? parseInt(curr_quantity) - 1 : 1
                                )
                            }
                        >
                            <AiOutlineMinus />
                        </button>
                        <input type='number' {...register('productQuantity')} />
                        <button
                            type='button'
                            onClick={() =>
                                setValue('productQuantity', parseInt(curr_quantity) + 1)
                            }
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <button type='submit' className='btn-submit'>
                        ADD TO CART
                    </button>
                </form>
            </section>
            <section className='product-details'>
                <span>DETAILS</span>
                <p>
                    Sneakers only pair of shoes people wanted to wear because of how comfortable and trendy they were. These FAUSTO sneakers can be worn with anything - dresses, overalls, shorts - which is what truly makes them perfect look every time.
                </p>
            </section>
            <section className='related-products'>
                <h2>RELATED PRODUCTS</h2>
                <RelatedProducts />
            </section>
        </main>
    )
}

export default ShoeDetails
