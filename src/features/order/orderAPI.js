

  export  function createOrder(order) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:4000/orders',{
        method:"POST",
        body:JSON.stringify(order),
        headers:{"content-type":"application/json"}
      })
      const data = await response.json();
      // TODO : on server it will only return some info of user (not password)
      resolve({data})
    }
    );
  }
  

  export  function updateOrder(order) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:4000/orders/'+order.id,{
        method:"POST",
        body:JSON.stringify(order),
        headers:{"content-type":"application/json"}
      })
      const data = await response.json();
      // TODO : on server it will only return some info of user (not password)
      resolve({data})
    }
    );
  }
  