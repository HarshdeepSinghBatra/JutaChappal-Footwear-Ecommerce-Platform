import React, { useEffect, useRef, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RelatedProducts from '../components/RelatedProducts'
import ProductImagesSlider from '../components/ProductImagesSlider'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShoeDetails = () => {

    const [shoeData, setShoeData] = useState() 

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

    const [activeImgURL, setActiveImgURL] = useState("")

    const curr_size = watch('productSize', false)
    const curr_quantity = watch('productQuantity', false)

    const scrollPosRef = useRef()
    const sizeRef = useRef()

    const { shoeSlug } = useParams()

    const getDataBySlug = async (slug) => {
        try {
            const res = await axios.get(`/api/shoes/${slug}`)
            const data = res.data
            setShoeData(data)
            setActiveImgURL(data.images[0])
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (shoeSlug) {
            getDataBySlug(shoeSlug)
        }
    }, [shoeSlug])

    useEffect(() => {
        if (shoeData) setValue('status', shoeData.status)
    }, [shoeData])
    
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

    const notifyToastSuccess = () => {
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
    const notifyToastFailure = () => {
        toast.error('Item out of stock', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    }

    const notifyToastNotLoggedIn = () => {
        toast.error('Login first to add item to cart', {
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
        if (!localStorage.getItem('userName')) notifyToastNotLoggedIn()
        else if (!data.status) notifyToastFailure()
        else notifyToastSuccess()
    }

    return (
        <main>
            <section className='product-overview'>                
                <div className='product-images'>
                    <div className="thumbnails">
                        {shoeData?.images.map((item, index) => (
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
                <ProductImagesSlider images={shoeData?.images} />
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
                        {shoeData?.name}
                    </h1>
                    <p className='product-cost'>
                        Rs. {shoeData?.cost} <span>(Inclusive of all taxes)</span>
                    </p>
                    <p className='product-status'>
                        AVAILABILITY:{' '}
                        <span className='available'> {shoeData?.status ? (<span className='available'>IN STOCK</span>) : ((<span className='not-available'>OUT OF STOCK</span>))}</span>
                        <input type="hidden" {...register("status")} />
                    </p>
                    <div className='product-size'>
                        <p>
                            SIZE: <span>{curr_size}</span>
                        </p>
                        <fieldset>
                            <ul ref={sizeRef}>
                                {shoeData?.size.map((item, index) => (
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
                    {shoeData?.details}
                </p>
            </section>
            <section className='related-products'>
                <h2>RELATED PRODUCTS</h2>
                <RelatedProducts shoeItem={shoeData} />
            </section>
        </main>
    )
}

export default ShoeDetails
