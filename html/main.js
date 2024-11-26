function responderButtonLoadProducts(){
    const url = "https://fakestoreapi.com/products";

    fetch(url,{ 
        method: 'GET'
        }).then((response)=>{ 
            return response.json();
        }).then((data)=>{
            
            for (let i=0;i<9;i++){
                localStorage.setItem("image"+i, data.image)
                localStorage.setItem("title"+i, data.title)
                localStorage.setItem("description"+i, data.description)
                localStorage.setItem("price1"+i, data.price)
            }
            
        }).catch((error)=>{

    });

}