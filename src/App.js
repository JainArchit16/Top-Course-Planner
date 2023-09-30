import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { filterData,apiUrl } from './data';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Spinner from './components/Spinner';

function App() {
  const [data,setData] = useState([]);
  const [loader,setLoader]=useState(true);
  // console.log(filterData[0].title);
  const [category,setCategory]=useState(filterData[0].title);
  async function fetchData()
  {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Save data
      setData(output.data);
      // setCourses(output);
    setLoader(false);

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
      <Filter  filterData={filterData}
                category={category}
                setCategory={setCategory}
      ></Filter>
      

    </div>
    <div className='flex w-[100%] justify-center h-[100%]  min-h-[100vh] mx-auto flex-wrap items-center'>
    {
      loader?<Spinner></Spinner>:<Cards courses={data} category={category}></Cards>
    }
    </div>
    </div>
  );
}

export default App;
