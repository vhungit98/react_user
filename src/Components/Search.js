import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserInfoApp(info)
    }

    // props.changeEditEditUserStatus

    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo={(info) => this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditEditUserStatus={() => this.props.changeEditEditUserStatus()} />
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }


    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >Thêm mới</div>
        }
    }


    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Nhập tên cần tìm" style={{ width: '772px' }} />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)} >Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;