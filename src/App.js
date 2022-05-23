import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios"
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [flag,setflag] = useState(true);
  const [order,setOrder] = useState("ASC");
  useEffect(()=>{
    getData(page,order);
   
  },[page,order])
  useEffect(()=>{
    
    if(flag==true){
      setOrder("ASC")
    }
    else{
      setOrder("DESC");
      
    }
  },[flag])

  const getData =(page,order=`ASC`,)=>{
    axios("https://json-server-mocker-masai.herokuapp.com/candidates",{
      method:"GET",
      params:{
        _limit:5,
        _page:page,
        _sort:"salary",
        _order:order
      }
    }).then(res=>{setData(res.data)
      console.log(data)})
      
  }

 

  return (
    <div className="App">
      <div>
        {data.length==0 && <div id="loading-container">...Loading</div>}
        <Button onClick={()=>{setflag(!flag)}}   id="SORT_BUTTON" title={!flag?`Sort by Ascending Salary`:`Sort by Descending Salary`} />
        <Button disabled={page==1}  onClick={()=>{setPage(prev=>prev-1)}} title="PREV" id="PREV" />
        <Button onClick={()=>{setPage(prev=>prev+1)}} id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
        return <CandidateCard key={item.id} data = {item}/>
      })}
    </div>
  );
}
