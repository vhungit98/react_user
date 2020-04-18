import React from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      hienThiForm: true,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  deleteButtonClick = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    });
  }

  getUserInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }

  changeEditEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    // console.log('Da ket noi');
    this.setState({
      userEditObject: user
    });
    // console.log(user);
  }

  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission
    var items = this.state.data;
    items.push(item)
    this.setState({
      data: items
    });
    // console.log(this.state.data);
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  // thongBao = () => { alert("Ket noi thanh cong"); }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    return (
      <div style={{paddingBottom: '50px'}}>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              getUserInfoApp = {(info) => this.getUserInfoApp(info)} 
              userEditObject={this.state.userEditObject}
              ketNoi={() => this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm} 
              checkConnectProps = {(dl) => this.getTextSearch(dl)} 
              editUserStatus={this.state.editUserStatus} 
              changeEditEditUserStatus = {() => this.changeEditEditUserStatus()}
              />
              <TableData 
              deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)} 
              dataUserProps={ketqua} 
              editFun={(user) => this.editUser(user)} 
              changeEditEditUserStatus = {() => this.changeEditEditUserStatus()} />
              <AddUser 
              hienThiForm={this.state.hienThiForm} 
              add={(name, tel, permission) => this.getNewUserData(name, tel, permission) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;