import { UploadCloud } from "lucide-react"

const Uploader = () => {
    return (
        <div className="w-full text-center">
            <div className="px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md cursor-pointer">
                {/* <input {...getInputProps()} /> */}
                <span className="mx-auto flex justify-center">
                    <UploadCloud className="text-3xl text-primary" />
                </span>
                <p className="text-sm mt-2">Drag your image here</p>
                <em className="text-xs text-muted-foreground">
                    (Only *.jpeg and *.png images will be accepted)
                </em>
            </div>
            <aside className="flex flex-row flex-wrap mt-4">
                {/* {multiple && imageUrl ? (
                imageUrl?.map((img, index) => (
                    <img
                    key={index + 1}
                    className="inline-flex border rounded-md border-border w-24 max-h-24 p-2"
                    src={img}
                    alt="product"
                    />
                ))
                ) : imageUrl ? (
                <img
                    className="inline-flex border rounded-md border-border w-24 max-h-24 p-2"
                    src={imageUrl}
                    alt="product"
                />
                ) : (
                thumbs
                )} */}
            </aside>
        </div>
    )
}

export default Uploader