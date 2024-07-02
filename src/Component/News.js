import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News =(props)=> {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)

  const  updateNews=async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa183c812e5048cbad6e4aef3de7e029&page=${page}&pageSize=
  ${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  
    props.setProgress(100);

  }
  useEffect(() => {
   updateNews();
  }, [])
  
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa183c812e5048cbad6e4aef3de7e029&page=1&pageSize=
  //   // ${props.pageSize}`;
  //   //setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   //setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // })
  //  updateNews();

  // }



  // handlePrevClick = async () => {
  //   // console.log("prev")

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa183c812e5048cbad6e4aef3de7e029&page=${page - 1}&pageSize=${props.pageSize}`;
  //   //setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   //setState({
  //   //   page: page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })
  //  setState({ page: page - 1 })
  //  updateNews();

  // }

  // handleNextClick = async () => {

  //   // if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa183c812e5048cbad6e4aef3de7e029&page=${page + 1}&pageSize=${props.pageSize}`;
  //   //  setState({ loading: true })
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json()

  //   //  setState({
  //   //     page: page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false
  //   //   })

  //   // }
  //  setState({ page: page + 1 })
  //  updateNews();
  // // ----------Removing the previous button and Next button due to adding the scrol baar infinity
  // }
  const fetchMoreData = async () => {
   
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa183c812e5048cbad6e4aef3de7e029&page=${page}&pageSize=
    ${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
   


  }
  

    return (


      <>
        <h1 className="text-center" style={{ margin: '40px 0px' }}>My News-Top Headline IN india</h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lengthe !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3 ">


            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}
                    source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &larr;</button>
        </div> */}
      </>

    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
