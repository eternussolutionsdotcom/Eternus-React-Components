import React from 'react'
import PropTypes from 'prop-types';
import {
    Button
} from "react-bootstrap";
import XLSX from "xlsx";

const ExportToExcel = props => {

        const exportToExcel = (e) => {
            e.preventDefault();
            let fileName = props.fileName + '.' + props.extension;
            let worksheet = XLSX.utils.json_to_sheet(props.data);
            let workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, props.sheetName);
            XLSX.writeFile(workbook, fileName);
        }

        return <Button 
                    variant="info" 
                    onClick={(e) => exportToExcel(e)}
                >
                <i className="fa fa-upload"></i> {props.title}
                </Button>
    
}
ExportToExcel.propTypes = {
    fileName: PropTypes.string.isRequired,
    sheetName : PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    variant: PropTypes.string,
    title: PropTypes.string.isRequired,

}
ExportToExcel.defaultProps = {
    fileName: 'excel',
    extension: 'xlsx',
    data: [],
    variant: 'info',
    title: 'Export to Excel',
    sheetName : 'sheet1'
}

export default ExportToExcel;
