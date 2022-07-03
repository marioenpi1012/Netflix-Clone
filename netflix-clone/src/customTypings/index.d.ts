declare module 'myProps'{
    type myProps = {
        carouselTitle?:string,
        imageConfig:any,
        genres:[],
        data:[],
        locationName?:string,
        category?:string,
    }
    interface UserProps{
        user : myProps
    }
}
module.exports ={
    myProps,
    userProps
}