

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 120 },

    { 

    field: 'user',
    headerName: 'User',
    width: 280,
    renderCell: (params) =>{
        return (
            <div className="cellWithImg">
                <img className="Img" src={params.row.img} alt="image" /> 
                {params.row.username}
            </div>
        )
    }
    
    
    },

 
    
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },



    {
      field: 'age',
      headerName: 'Age',
      width: 160,

     },


     { 
    
      field: 'status',
      headerName: 'Status', 
      width: 180,
    
      renderCell: (params) =>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
    
      
    },


     
  ];












export const userRows = [
    {
     id : 1,
     username: "Snow",
     img : "images/promise.jpg",
     status: "Active",
     email: "snow@gmail.com",
     age: 35,
    },
    {
     id : 2,
     username: "Jane",
     img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Q/82233_1574806415.jpg",
     status: "Passive",
     email: "jane@gmail.com",
     age: 32,
     },
     {
        id : 3,
        username: "Robert",
        img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/180029_1637760211.jpg",
        status: "Active",
        email: "robert@gmail.com",
        age: 30,
         
         
        },
        {
        
        id : 4,
        username: "Promise",
        img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
        status: "Pending",
        email: "promise@gmail.com",
        age: 20,
        },

        {
            id : 5,
            username: "Steph",
            img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Q/82233_1574806415.jpg",
            status: "Active",
            email: "steph@gmail.com",
            age: 46,
           },
           {
            id : 6,
            username: "Chima",
            img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Q/82233_1574806415.jpg",
            status: "Passive",
            email: "chima@gmail.com",
            age: 23,
            },
            {
               id : 7,
               username: "Ikenna",
               img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/180029_1637760211.jpg",
               status: "Pending",
               email: "ikenna@gmail.com",
               age: 21,
                
                
               },
               {
               
               id : 8,
               username: "Ifeyinwa",
               img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
               status: "Pending",
               email: "ifeyi@gmail.com",
               age: 29,
               },

               {
                id : 9,
                username: "Joe",
                img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/180029_1637760211.jpg",
                status: "Passive",
                email: "ijoe@gmail.com",
                age: 67,
                 
                 
                },
                {
                
                id : 10,
                username: "Grace",
                img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
                status: "Active",
                email: "grace@gmail.com",
                age: 44,
                  },
   ];
