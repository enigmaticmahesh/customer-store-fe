import { useState, type ComponentPropsWithoutRef } from "react"

type ImgFallbackProps = {
    src: string|undefined
    fallback?: string
}

type ImgWrapperProps = ImgFallbackProps & ComponentPropsWithoutRef<'img'>
const fallbackUrl = "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"

const ImageWithFallback = ({src, fallback = fallbackUrl, className = "", ...props}: ImgWrapperProps) => {
    const [imgErr, setImgErr] = useState(false)

    const imgClass = `object-cover transition duration-150 ease-linear transform group-hover:scale-105 p-2 ${className}`

    const handleErr = () => setImgErr(true)

    if (imgErr) return <img {...props} src={fallback} className={imgClass} />
    return <img {...props} src={src} alt="product" onError={handleErr} className={imgClass} />
}

export default ImageWithFallback