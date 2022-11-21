import Landing from './Landing'
import style from '../styles/Landing.module.scss'
import Carousel from './Carousel'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
import {useRetrieveData} from '../components/hooks/useRetrieveData'
type Props = {
    imageConfig?:any,
    genres:[],
    
}
interface state{
    loading:Boolean,
    error:string,
    data:[]
    results:[]
}
interface props{
    title:string,
    genre:string,
    selector:any,
    id:number
}
const HomePage:React.FC<Props> = ({genres }) => {
    const movies:[props] = useRetrieveData('movies')
    console.log({movies})
    return (
        <div className={style.HomePage}>
            {movies && movies.map(((props:props) =>(
            props.id === 0 &&
                    <Landing
                        key={props.id}
                        props={props}
                    /> 
                
                
            )))}
            {movies && movies.map(props => (
                <Carousel key={props.id} props={props} />
            ))}
            {
                // movies &&  movies.map(((props:props)=>(
                //     <Carousel genres={genres} key={props.id} props={props} carouselTitle={props.title} category={props.genre} />
                // )))
            }
        </div>
    )
}

export default HomePage
