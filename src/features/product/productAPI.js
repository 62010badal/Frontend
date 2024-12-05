export function fetchAllProducts() {
    return new Promise(async (resolve) =>{
      // TODO: we will not hardcode server URL here
      const response = await fetch('http://localhost:4000/products/')
      const data = await response.json();
      resolve({data})
    }
    );
  }

  export function fetchProductById(id) {
    return new Promise(async (resolve) =>{
      // TODO: we will not hardcode server URL here
      const response = await fetch('http://localhost:4000/products/'+id);
      const data = await response.json();
      resolve({data});
    });
  }

  export  function fetchProductsByFilters(filter, sort, pagination) {
    // filter = {"category": ["smartphone", "laptops"]}
    // sort = {_sort: "price", order="-price"}
    // pagination = {_page:1, _limit=10} 
    // TODO : on server it will support multiple categories
    let queryString = '';
    for(let key in filter){
      const categoryValues = filter[key]
      if(categoryValues.length){
        const lastCategoryValue = categoryValues[categoryValues.length-1]
        queryString += `${key}=${lastCategoryValue}&`;
      }
    }

    for(let key in sort){
      queryString += `${key}=${sort[key]}&`;
    }
    console.log(pagination);

    for(let key in pagination){
      queryString += `${key}=${pagination[key]}&`;
    }

    return new Promise(async (resolve) =>{
      // TODO: we will not hardcode server URL here
      const response = await fetch(`http://localhost:4000/products?` +queryString);
      const data = await response.json();
      const totalItems = 194;
      resolve({ data: { products: data, totalItems: +totalItems } });
    }
    );
  }


  export function fetchCategories() {
    return new Promise(async (resolve) =>{
      // TODO: we will not hardcode server URL here
      const response = await fetch('http://localhost:4000/categories')
      const data = await response.json();
      resolve({data})
    }
    );
  }


  export function fetchBrands() {
    return new Promise(async (resolve) =>{
      // TODO: we will not hardcode server URL here
      const response = await fetch('http://localhost:4000/brands')
      const data = await response.json();
      resolve({data})
    }
    );
  }



  