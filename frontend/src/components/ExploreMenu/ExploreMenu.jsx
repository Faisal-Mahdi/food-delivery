import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category,setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu' >
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Here are some foods that we provide. It not only looks like tasty but also hygienic. To see the more menu details go and visit to the below.</p>
    <div className="explore-menu-list">
        {
            menu_list.map((item, index)=>{
                return (
                    <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' >
                        <img  className={category===item.menu_name?"active":""} src={item.menu_image} />
                        <p>{item.menu_name}</p>
                        </div>
                )
            })
        }
    </div>
    <hr />
</div>
  )
}

export default ExploreMenu
