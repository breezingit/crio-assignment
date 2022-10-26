import React from "react";
import Home from "../src/session1-takehome/UserDashboard/home";

function App() {
  // const [image, setImage] = useState(
  //   "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
  // );

  // const [data, setData] = useState([]);

  // const setparams = async (num) => {
  //   const res = await FetchData(num);
  //   setData(res);
  //   setImage(res[2]);
  // };

  return (
    <Home />
    // <div className="bg-gray-500 flex flex-col justify-center items-center h-screen ">
    //   <div className=" bg-gray-400 flex content-center items-center h-1/2 flex-col rounded overflow-hidden shadow-lg justify-center items-center">
    //     <img className="max-h-40 w-50" src={image} alt="Display" />
    //     <div className="mt-5">
    //       <ul class="list-disc">
    //         <li class="text-blue-600/100">Email: {data[0]}</li>
    //         <li class="text-blue-600/100">Name: {data[1]}</li>
    //       </ul>
    //     </div>
    //     <div className="">
    //       <button class="btn-primary" onClick={() => setparams(1)}>
    //         1
    //       </button>
    //       <button class="btn-primary" onClick={() => setparams(2)}>
    //         2
    //       </button>
    //       <button class="btn-primary" onClick={() => setparams(3)}>
    //         3
    //       </button>
    //       <button class="btn-primary" onClick={() => setparams(100)}>
    //         100
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
export default App;
