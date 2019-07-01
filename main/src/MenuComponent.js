import React, {Component} from 'react'
import {Menu} from '../../src';
import eternusLogo from "./eternus.png";
import profile from "./profile.png";

export default class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchKey: ''
        };
    }
    onSearchKeyChange = (e) => {
        //...
    }

    onSearch = () => {
        //....
    }

    render() {
            const menuOptions = [{
                    name: "Dashboard",
                    url: "/",
                    icon: "fa fa-tasks"

                },
                {
                    name: "Home",
                    url: "/",
                    icon: "fa fa-home",
                    rootParent: true,
                    children: [{
                        name: "Link1",
                        url: "/",
                        icon: "fa fa-user",
                        children: [
                            //Upto any level
                        ]
                    }],
                }
            ]

            const profileOptions = [{
                name: "Logout",
                url: "#",
                icon: "fa fa-sign-out"
            }]

        return (
            <div>
                {/* ---- For horizontal menu */}
                {/* <Menu 
                    alignment = "horizontal"
                    menuOptions={menuOptions}
                    logoUrl={eternusLogo}
                    brandName="Eternus"  //optional
                    //profileUrl={profile}
                    searchOption={true}
                    profileOptions={profileOptions}
                    onSearchKeyChange ={this.onSearchKeyChange}
                    searchKey = {this.state.searchKey}
                    onSearch = {this.onSearch} /> */}

                {/* ---- For vertical menu */}
                <Menu 
                    alignment="vertical" 
                    menuOptions={menuOptions}
                    brandName="Eternus" //optional
                    logoUrl={eternusLogo}
                    />
            </div>
        )
    }
}
