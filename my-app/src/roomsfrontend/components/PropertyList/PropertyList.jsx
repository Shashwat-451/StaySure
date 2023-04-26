import React from 'react'
import useFetch from '../../hooks/useFetch';
import "./propertyList.css"

const propertyList = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByType"
  );
  return (
    <div className="pList">
        {loading ? ("loading") : ( <><div className="pListItem">
         <img src="v1.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1>
           <h2>233 hotels</h2>
        </div> 
        </div>
        <div className="pListItem">
         <img src="v4.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Decoration</h1>
           <h2>167 hotels</h2> 
        </div> 
        </div>
        <div className="pListItem">
         <img src="v2.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1>
           <h2>789 hotels</h2> 
        </div> 
        </div>
        <div className="pListItem">
         <img src="v3.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1>
           <h2>754 hotels</h2> 
        </div> 
        </div></>)}
    </div>
  )
}

export default propertyList