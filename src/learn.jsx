import { useEffect, useState } from 'react';
import './App.css';
import useWindowSize from './tutorials/customHook/useWindowWidth'
import Counter, { DarkTheme, Status } from './tutorials/useReducer/useReducer';
import { ThemeContext } from './tutorials/useReducer/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GetData, { GetData2 } from './tutorials/reactQuery/get';
import CreatePost from './tutorials/reactQuery/post';
import UpdatePost from './tutorials/reactQuery/put';
import DeletePost from './tutorials/reactQuery/delete';
import GetDataByPage from './tutorials/reactQuery/pagination';

function CustomHook() {
  const [width,height] = useWindowSize()

  return (
    <div className="App">
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}

function UseReducer() {

  return (
    <Status/>
);
}

function ToogleTheme() {
    return (
        <ThemeContext.Provider value={"dark"}>
            <DarkTheme/>
            <button>toogle</button>
        </ThemeContext.Provider>
    )
}


function ReactQuery() {
  const queryClient = new QueryClient()
  return (
    <div>
        <QueryClientProvider client={queryClient}>
          {/* <GetData/> */}
          {/* <h1>----------get data form cach -----------</h1> */}
          {/* <GetData2/> */}

          {/* <h1>----------create(add) data -----------</h1> */}
          {/* <CreatePost/> */}

          {/* <h1>----------update data -----------</h1> */}
          {/* <UpdatePost/> */}

          {/* <h1>----------delete data -----------</h1> */}
          {/* <DeletePost/> */}

          <GetDataByPage/>
        </QueryClientProvider>
    </div>
    )

}

function Learn() {
    return (
        <div>
            {/* topic 1 custom hook  */}
            {/* <CustomHook/> */}

            {/* topic 2 useReducer and context api */}
            {/* <UseReducer/> */}
            {/* <ToogleTheme/> */}

            {/* topic 3 react-query  */}
            <ReactQuery/>

        </div>
    )
}

export default Learn