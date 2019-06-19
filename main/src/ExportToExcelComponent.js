import React, { Component } from 'react'
import {ExportToExcel} from "../../src";
export default class ExportToExcelComponent extends Component {
   
    render() {
        const data= [
            {id : 1, name: 'name1', gender: 'female'},
            {id : 2, name: 'name2', gender: 'female'},
            {id : 3, name: 'name3', gender: 'male'},
            {id : 4, name: 'name4', gender: 'female'},
            {id : 5, name: 'name5', gender: 'male'},
        ]
        return (
            <div>
                <ExportToExcel 
                    variant="success" 
                    title="Export to excel" 
                    data={data} 
                    fileName="dataFile" 
                    sheetName="sheet1"/>
            </div>
        )
    }
}
