import React from 'react'
import PropTypes from 'prop-types'

const ExportToExcel = props => {
    return (
        <div>
            <input type="file" multiple={false}/>
        </div>
    )
}

ExportToExcel.propTypes = {

}

export  default ExportToExcel;
