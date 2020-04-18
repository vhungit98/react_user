import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)  
    }
    // props.editUser
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow stt={key} key={key}
        userName={value.name} 
        tel={value.tel} 
        permission={value.permission} 
        id = {value.id} 
        editFunClick={(user) => this.props.editFun(value)} 
        changeEditEditUserStatus = {() => this.props.changeEditEditUserStatus()} 
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)} />
    ))
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;