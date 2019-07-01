export default {
    items: [
        {
            name: "Dashboard" ,
            url: "/",
            icon:"fa fa-home"
          
        },
        {
            name: "About",
            url: "/abc",
            icon:""
        },
        {
            name: "Home",
            url: "/",
            rootParent : true,
            children: [
                {
                    name: "Link1",
                    url: "/",
                    icon:""
                },
                {
                    name: "Link2",
                    url: "/",
                   
                    children: [
                        {
                            name: "Link1",
                            url: "/",
                            icon:""
                        },
                        {
                            name: "Link3",
                            url: "/",
                            children: [
                                {
                                    name: "SubLink1",
                                    url: "/",
                                    icon:""
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
        }
        

    ]
};