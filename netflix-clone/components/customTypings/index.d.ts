declare module "myProps"{
    type myProps = {
        carouselTitle?:string,
        imageConfig?:any,
        genres?:[],
        data?:any,
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
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png";



