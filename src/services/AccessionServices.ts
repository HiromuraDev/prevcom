

export const PostJSON = async function (register: JSON) {
        
    try 
    {const response = await
         fetch("http://localhost:8084/atlprevcomp/v1/tl2/gravar-ficha", 
         {method: "POST",
         headers: {
            "Content-Type": 
            "application/json",
        },
        body: JSON.stringify(register),
    });
    
    const result = await 
    response.json();
 console.log("Success:", result);
} catch (error) {
 console.error("Error:", error);
}
}
