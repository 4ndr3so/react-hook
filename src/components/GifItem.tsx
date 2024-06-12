

type CustomeProperties = {
    image: {
        id: string,
        title: string,
        url: string
    }
}

export const GifItem = ({ image }: CustomeProperties) => {
    return (

        <div className='card'>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>

    )
}

