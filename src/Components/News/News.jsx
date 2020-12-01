import React from 'react'
import New from './New'
import HotNew from './HotNew'


export default function News() {
    return (
        <div className="main__news">  
            <HotNew />
         <div className="main__news__last">
             <New />
             <New />
         </div>
     </div>
    )
}
