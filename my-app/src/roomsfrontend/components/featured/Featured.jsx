import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featured.css"

const featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=india"
  )
  
  return (
    <div className="featured">
      {loading ? ("Loading please wait" ):( <><div className="featuredItem">
      

      <img src="h4.jpg" alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>INDIA</h1>
        <h2>{data[0]} Paradise Inn</h2>
      </div>
      </div></>)}
      
    </div>
  )
}

export default featured