import React,{ useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import axios from "axios"


function GetDataByPage(){
     const [page, setPage] = useState(1)
    const retriveData = async (page=1) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${page}`)
        return response
    }
const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({queryKey:['postsData',page],queryFn:() => retriveData(page),placeholderData:keepPreviousData})
    return (
          <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          
           {data.data.map(project => (
            <p key={project.id}>{project.name}</p>
          ))} 
          
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
              >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
    )
}

export default GetDataByPage