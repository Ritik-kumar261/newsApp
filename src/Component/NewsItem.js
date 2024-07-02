
import React from 'react'

// export class NewsItem extends Component {
// function me convert 
const NewsItem = (props) => {


  // issme humne distructure kaa use 
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div className="source" style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: 0
        }}>
          <span className=" badge rounded-pill bg-danger" >
            {source}
          </span>
        </div>
        <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2023/10/market_volatile1-3-770x433.jpg"}
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {title}.....</h5>

          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target="blank" className="btn btn-sm btn-dark">Continue Read</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
