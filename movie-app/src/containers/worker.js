
export default function worker () {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (e) => {
    const response =  e.data.sort((a,b)=>{
        return a.Year - b.Year });
    // eslint-disable-next-line no-restricted-globals
    self.postMessage(response);
    };
}