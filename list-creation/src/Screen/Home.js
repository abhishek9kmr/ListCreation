import { useEffect, useState } from "react";
import "../Screen/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // // State to track loading state
  // const [isLoading, setIsLoading] = useState(true);
  // // State to track error state
  // const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from an API
        const response = await fetch(
          "https://apis.ccbp.in/list-creation/lists"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse JSON response
        const jsonData = await response.json();
        //console.log(jsonData);
        // Update state with fetched data
        setData(jsonData);
        // Set loading state to false
        //setIsLoading(false);
      } catch (error) {
        console.log(error);
        // Set error state if fetching data fails
        //setError(error);
        // Set loading state to false
        // setIsLoading(false);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []);

  console.log(data);
  console.log(data.lists);

  const list1 = data?.lists?.filter((item) => item.list_number === 1);
  const obj1 = { name: 1, checked: false, items: list1 };

  const list2 = data?.lists?.filter((item) => item.list_number === 2);
  const obj2 = { name: 2, checked: false, items: list2 };

  const allList = [obj1, obj2];
  console.log(allList);
  return (
    <div className="App">
      <div className="Heading">
        <h1>List Creation</h1>
        <button
          className="create-list-btn"
          type="button"
          onClick={() => navigate("/NewList", { state: { obj2: obj2 } })}
        >
          <div>Create list</div>
        </button>
      </div>
      <div className="list-container">
        {allList?.map((item, index) => (
          <li key={index}><input type="checkbox" checked={item?.checked} onChange={(a)=>item?.checked}/>
            List {item.name} ({item?.items?.length})
            <ul className="list-item">
              {item?.items?.map((item, index) => (
                <li className="each-item" key={index}>
                  <h5>{item.name}</h5>
                  <div>{item.description}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Home;
