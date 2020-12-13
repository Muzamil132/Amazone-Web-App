import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
        
         <img  className="home-image" src="https://9to5toys.com/wp-content/uploads/sites/5/2020/03/amazon-prime-video-cinema.jpg?quality=82&strip=all" alt="" />
         <div className="product_row">
         <Product id="1245" title="The lean Startup " price="11.7" image="https://bukharibooks.com/wp-content/uploads/2020/01/the-lean-startup.png" rating={5}/>
          <Product id="12345" title="The lean Startup " price="11.7" image="https://images.philips.com/is/image/philipsconsumer/218350dfdd2b49f292ccaaf000eeadf7?wid=470&$pnglarge$" rating={5}/>
        </div>
        <div className="product_row">
        <Product id="123745" title="The lean Startup " price="11.7" image="https://www.chiptrolls.com/Images/20200214024951.png" rating={5}/>
        <Product id="123sd45" title="The lean Startup " price="11.7" image="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/2020/05/25/realme_smartwatch.png?itok=rLi7zHac" rating={5}/>
        <Product id="123sd45" title="The lean Startup " price="11.7" image="https://www.parallelimported.co.nz/media/catalog/product/cache/1/image/700x/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_lite_1_1.png" rating={5}/>
        </div>
        <div className="product_row">
        <Product id="1234fg5" title="The lean Startup " price="11.7" image="https://i.pcmag.com/imagery/articles/04cprBwUUBz0r7wIdyL2oDE-2.fit_lim.size_2452x1665.v_1569470710.png" rating={5}/>

        </div>
        <div className="product_row">
        <Product id="123asd45" title="The lean Startup " price= "11.7" image="https://img.pngio.com/refrigerator-png-clipart-background-png-play-refrigerator-png-1500_1500.png" rating={5}/>
        <Product id="12cvb345" title="The lean Startup " price="11.7" image="https://images.ctfassets.net/8utyj17y1gom/79UmEZ3eno2LOHHThbIVB1/c9b14767ddd42dc1a437d9761b9a364d/galaxy-note20-ultra-mystic-bronze-angle.png" rating={5}/>
        <Product id="12355sff45" title="The lean Startup " price="11.7" image="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/mate30-pro-5g/mate30-pro-orange.png" rating={5}/>

        </div>
        </div>
          
    )
}

export default Home
