import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { filterData,apiUrl } from './data';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [data,setData] = useState([]);
  async function fetchData()
  {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Save data
      setData(output.data);
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-[100vw] h-[100%] flex-col flex bg-bgDark2'>
    <div>
        <Navbar></Navbar>
    </div>
    <div>
      <Filter  filterData={filterData}></Filter>
      

    </div>
    <div>
     
      <Cards courses={data}></Cards>
    </div>
    </div>
  );
}

export default App;
