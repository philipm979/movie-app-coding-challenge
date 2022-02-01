
// export default function worker () {
//     // eslint-disable-next-line no-restricted-globals
//     self.onmessage = (e) => {
//         const searchArray = e.data.map((movie)=>{
//             const firstPart = movie.Year.split('-')[0];
//             return {...movie, Year: firstPart}});
        
//     // const response = searchArray.reduce((r,a) => {
//     //                     r[a.Year] = r[a.Year] || [];
//     //                     r[a.Year].push(a);
//     //                     return r;
//     //                 }, Object.create(null))
//       // // eslint-disable-next-line no-restricted-globals
//     self.postMessage(searchArray);

//               }

export default function worker () {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (e) => {
        const searchArray = e.data.map((movie)=>{
            const firstPart = movie.Year.split('-')[0];
            return {...movie, Year: firstPart}});

            const response = searchArray.reduce((r,a) => {
                r[a.Year] = r[a.Year] || [];
                r[a.Year].push(a);
                return r;
                        }, Object.create(null))
        
       // eslint-disable-next-line no-restricted-globals      
    self.postMessage(response);
    };
}



   
        