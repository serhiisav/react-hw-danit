import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      dataModal: {
        header: 'Modal',
        closeButton: true,
        text: 'Are you sure you want to delete it',
        btnActionOk: 'OK',
        btnActionCancel: 'CANCEL',
        backgroundColor: '#b46c7b'
      },
    }
  }
  render() {
    const { isOpened, dataModal: { header, closeButton, text, backgroundColor } } = this.state

    return (
      <>
        <div className="App">

          <Modal header={header} text={text} closeButton={closeButton} isOpened={isOpened} onClick={this.onClick} actions={this.getModalButtons} backgroundColor={backgroundColor} />

          <Button buttonId={'btn-modal1'} backgroundColor={'lightskyblue'} text={'Open first modal'} onClick={this.getDataModal} />
          <Button buttonId={'btn-modal2'} backgroundColor={'lightseagreen'} text={'Open second modal'} onClick={this.getDataModal} />

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </>
    );
  }

  getModalButtons = () => {
    const { dataModal: { btnActionOk, btnActionCancel } } = this.state
    return (
      <>
        <button onClick={this.onClick} id='btnModalOk' className='btnModal' type='button'>{btnActionOk}</button>
        <button onClick={this.onClick} id='btnModalCancel' className='btnModal' type='button'>{btnActionCancel}</button>
      </>
    )
  }

  onClick = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  getDataModal = (e) => {
    if (e.target.id === 'btn-modal1') {
      this.setState({
        isOpened: !this.state.isOpened,
        dataModal: {
          ...this.state.dataModal,
          header: 'Modal 1',
          closeButton: true,
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit et consequuntur impedit voluptatibus aspernatur laboriosam cumque tempore quaerat mollitia?',
          btnActionOk: 'Ok',
          btnActionCancel: 'Cancel',
          backgroundColor: '#b46c7b'
        }
      })
    } else if (e.target.id === 'btn-modal2') {
      this.setState({
        isOpened: !this.state.isOpened,
        dataModal: {
          ...this.state.dataModal,
          header: 'Modal 2',
          closeButton: false,
          text: 'Nulla id, tempora harum perferendis quos, qui, aliquid omnis deleniti esse reprehenderit dolore. Suscipit, libero! Harum nulla odio ab dolorem necessitatibus iure dolorum aut adipisci doloribus eius obcaecati numquam accusantium quod perferendis molestias accusamus eum mollitia, aliquam qui, laboriosam totam perspiciatis itaque ex inventore! Rem reiciendis delectus totam cum recusandae ab velit nostrum amet natus ipsum repellat incidunt eius illum reprehenderit, nobis necessitatibus quibusdam temporibus saepe praesentium. Alias consequuntur ex repudiandae dignissimos dicta numquam voluptate tempora rerum deleniti dolorum earum veritatis eum deserunt, ad nulla officia ullam quod incidunt ipsam! Eligendi, itaque saepe quam consectetur illum explicabo nihil similique blanditiis quis autem labore, debitis adipisci suscipit maxime dignissimos quaerat commodi esse nostrum ratione, animi odio doloremque excepturi quas dolore! Id cum facere, assumenda consequatur ea qui. Illo, aperiam at voluptate obcaecati et nobis quae in fuga corrupti voluptatem dolorum voluptas repellendus doloremque neque. Ipsa cum culpa sapiente velit hic eaque voluptates ea esse voluptas! Sapiente esse dicta officiis iste laboriosam quas molestias molestiae sunt a ut voluptate, quidem assumenda facilis dolores suscipit fuga error provident ipsum ipsam magnam quam voluptates neque maiores. Voluptatum at modi inventore ratione quasi ad et autem sed! Neque, autem nihil. Aliquam, facere!',
          btnActionOk: 'Agree',
          btnActionCancel: 'Close',
          backgroundColor: '#6cb496'
        }
      })
    } else return
  }

}

export default App;
