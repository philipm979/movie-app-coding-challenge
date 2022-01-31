
export default function worker () {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (e) => {
        const searchArray = e.data.map((movie)=>{
            const firstPart = movie.Year.split('-')[0];
            return {...movie, Year: firstPart}})
        
            const response =  searchArray.sort((a,b)=>{
            return a.Year - b.Year });
    // eslint-disable-next-line no-restricted-globals
    self.postMessage(response);
    };
}