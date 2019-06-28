import React, { Component } from 'react';
import {Menu} from '../../src';
//import eternus from '../../src/components/Menu/eternus.png';
import profile from '../../src/components/Menu/profile.png'

export default class MenuComponent extends Component {

    render() {

        const menuoptions =  [
            {
                name: "Dashboard",
                url: "/aaa",
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
            rootParent:true,
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
                            name: "Sublink1",
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
                rootParent:true,
                children: [
                    {
                        name: "Email",
                        url: "/",
                        icon: "fa fa-dashcube"
                    }
                ]
            },
    
        ]
        const profileOptions =  [
            {
                name: "Login",
                url: "/",
                icon: "fa fa-dashcube"
            },
            {
                name: "Log Out",
                url: "/abc",
                icon: "fa fa-dashcube"
            }]

        return (
            <Menu
                Menuoptions={Menuoptions}
                brandName="Brandname"
                //logoUrl = {eternus}
                profileOptions={profileOptions}
                profileUrl={profile}
                searchOption={true}
            ></Menu>
        )
    }

}