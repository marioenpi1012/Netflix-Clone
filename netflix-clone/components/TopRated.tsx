import Carousel from "./Carousel"
import {myProps} from 'myProps'
import style from '../styles/TopRated.module.scss'
const TopRated:React.FC<myProps> = ({data, imageConfig, genres}) => {
    return (
        <div className={style.TopRated}>
            <Carousel data={data} imageConfig={imageConfig} genres={genres} category='topRated' carouselTitle='Top rated'/>
        </div>
    )
}

export default TopRated
