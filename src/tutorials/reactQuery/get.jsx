import { useQuery } from "@tanstack/react-query"
import axios from "axios"


function GetData(){
    const retriveData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        return response
    }
    const {data:posts,error,isLoading} = useQuery({queryKey:'postsData',queryFn:retriveData})
    if (isLoading) return <p>loading</p>
    if (error) return <p>error{error}</p>
    return (
        <div>
            {
                posts.data.map((val) => <p>{val.id}</p>)
            }
            
        </div>
    )
}
// here this function again retrive the data but doesnot fetch it retrive data form the cach
export function GetData2(){
    const {data:posts,error,isLoading} = useQuery({queryKey:'postsData'})
    if (isLoading) return <p>loading</p>
    if (error) return <p>error{error}</p>
    return (
        <div>
            {
                posts.data.map((val) => <p>{val.id}</p>)
            }
            
        </div>
    )
}
export default GetData