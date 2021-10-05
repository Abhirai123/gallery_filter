import React, { useState } from 'react'
import Data from './Data'

const Gallery = () => {

    const [items, setItem] = useState();

    const clickEvent = (curval)=>{
        const change_cat = curval.filter((elearr, index)=>{
            return curval === elearr.category
        })
        setItem(change_cat);
    }

    return (
        <div className="gallery_section">
            <h1>Gallery Portfollio</h1>
            <div className="cate_list">
                <button className="cat_btn btn btn-warning" onClick={()=>{clickEvent('cat1')}}>Cat 1</button>
                <button className="cat_btn btn btn-warning" onClick={()=>{clickEvent('cat2')}}>Cat 2</button>
                <button className="cat_btn btn btn-warning" onClick={()=>{clickEvent('cat3')}}>Cat 3</button>
                <button className="cat_btn btn btn-warning" onClick={()=>{clickEvent('cat4')}}>Cat 4</button>
                <button className="cat_btn btn btn-warning" onClick={()=>{clickEvent('cat5')}}>Cat 5</button>
                <button className="cat_btn btn btn-warning" onClick={setItem(Data)}>All</button>
            </div>
            <div className="row">

                
                 <div className="gal_item col-lg-4 col-sm-6 col-12">
                               <div className="gall_img">
                                  <img src="" alt="gallery_pic" />
                                 </div>
                            <div className="gall_info">
                               <h3>Pic </h3>
                             </div>
                    
                           </div>
            </div>
        </div>
    )
}

export default Gallery
