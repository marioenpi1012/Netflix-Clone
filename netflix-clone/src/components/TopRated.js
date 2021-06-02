import Carousel from "./Carousel"

const TopRated = ({data}) => {
    return (
        <div className='TopRated'>
            <div className="title">Top Rated</div>
            <Carousel data={data} />
        </div>
    )
}

export default TopRated
