const useTruncate = (text:string, max:number) =>{
    return (text.length > max) ? text.substr(0, max -1) + '...' : text;
}

export default useTruncate