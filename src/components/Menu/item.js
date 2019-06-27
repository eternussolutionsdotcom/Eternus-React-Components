export default {
    items: [
        {
            name: "Dashboard",
            url: "/",
            icon: "fa fa-dashcube"
        },
        {
            name: "About",
            url: "/abc",
            icon: "fa fa-dashcube"
        },
        {
            name: "Home",
            url: "/",
            icon: "fa fa-dashcube",
            children: [
                {
                    name: "Link1",
                    url: "/",
                    icon: "fa fa-dashcube",
                },
                {
                    name: "Link2",
                    url: "/",
                    icon: "fa fa-dashcube",
                    children: [
                        {
                            name: "naatu1",
                            url: "/",
                            icon: "fa fa-dashcube",
                        },
                        {
                            name: "Link3",
                            url: "/",
                            icon: "fa fa-dashcube",
                            children: [
                                {
                                    name: "SubLink1",
                                    url: "/",
                                    icon: "fa fa-dashcube",
                                },
                                {
                                    name: "SubLink2",
                                    url: "/",
                                    icon: "fa fa-dashcube",
                                    children: [
                                        {
                                            name: "SubLink",
                                            url: "/",
                                            icon: "fa fa-dashcube"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Contact",
            url: "/",
            icon: "fa fa-dashcube",
            children: [
                {
                    name: "Email",
                    url: "/",
                    icon: "fa fa-dashcube"
                }
            ]
        },

    ]
};