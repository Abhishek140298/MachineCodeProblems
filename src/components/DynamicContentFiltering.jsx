import React, { useEffect, useState } from "react";
import productDataJson from "../product.json";

const DynamicContentFiltering = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [categoryList, setCategoryList] = useState([
    { categoryId: 2, categoryName: "Home & Kitchen" },
    { categoryId: 1, categoryName: "Electronics" },
  ]);
  const [categorySelected, setCategorySelected] = useState("All");
  const [totalPages,setTotalPages]=useState()
  const[totalItems,setTotalItems]=useState()

  const fetchProductDataApi = async (page, limit, category = 0) => {
    let totalItems = productDataJson.length;
    let totalPages = Math.ceil(totalItems / limit);
    console.log("Total",totalItems,totalPages,productData)
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;
    if (categorySelected === "All") {
      return {
        data: productDataJson.slice(startIndex, endIndex),
        totalItems: totalItems,
        totalPages: totalPages,
        status: "success",
        message: "Product Fetched Succesfully",
      };
    } else {
      let limitedData = productDataJson?.slice(startIndex, endIndex);
      let filteredData = limitedData?.filter(
        (data, index) => category == data?.categoryId
      );
      return {
        data: filteredData,
        totalItems: totalItems,
        totalPages: totalPages,
        status: "success",
        message: "Product Fetched Succesfully",
      };
    }
  };

  useEffect(() => {
    const fethProductData = async () => {
      setLoading(true);
      const res = await fetchProductDataApi(page, limit, categorySelected);
      if (res?.status == "success") {
        setProductData(res?.data);
        setTotalItems(res?.totalItems)
        setTotalPages(res?.totalPages)
        console.log("Total Pages",res?.totalPages)
        setLoading(false);
      }
    };
    fethProductData();
  }, [categorySelected,page,limit]);

  const handleFilterSelect = (e) => {
    console.log("E", e.target.value);
    setCategorySelected(e.target.value);
  };

const handlePagination=(value)=>{
    if(value==="prev"){
      if(page>0){
        setPage(prev=>prev-1)
      }
    }
    else if(value==="next"){
        setPage(prev=>prev+1)
    }
    else{
        console.log("Value")
    }
}

  return (
    <div>
      <h1>Product List</h1>
      <select value={categorySelected} onChange={handleFilterSelect}>
        <option value="">Select option</option>
        {categoryList?.map((category) => (
          <option value={category?.categoryId}>{category?.categoryName}</option>
        ))}
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {console.log("Product Dtata", productData)}
        {productData?.map((product, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span key={product.id}>{product?.name}</span>
              <span key={product.categoryId}>{product?.categoryName}</span>
            </div>
          );
        })}
        <div style={{ display: "flex" }}>
          {" "}
        { page>1?<div onClick={()=>handlePagination("prev")}>Prev</div>:null}
        {page < totalPages? <div onClick={()=>handlePagination("next")}>Next</div>:null}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentFiltering;
