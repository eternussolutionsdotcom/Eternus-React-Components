export default {
    items: [
        {
            name: "Dashboard",
            url: "/",
            
          
        },
        {
            name: "About",
            url: "/abc",
          
        },
        {
            name: "Home",
            url: "/",
            
          
            children: [
                {
                    name: "Link1",
                    url: "/",
                  
                },
                {
                    name: "Link2",
                    url: "/",
                    rootItem:true,
                   
                    children: [
                        {
                            name: "Link1",
                            url: "/",
                           
                        },
                        {
                            name: "Link3",
                            url: "/",
                            rootItem:true,
                            children: [
                                {
                                    name: "SubLink1",
                                    url: "/",
                                   
                                },
                                {
                                    name: "SubLink2",
                                    url: "/",
                                                                   
                                    children: [
                                        {
                                            name: "SubLink",
                                            url: "/",
                                           
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            rootItem:true
        },
        {
            name: "Contact",
            url: "/",
          
            children: [
                {
                    name: "Email",
                    url: "/",
                   
                }
            ]
        },

    ]
};