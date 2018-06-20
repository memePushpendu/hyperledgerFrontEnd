import React, { Component } from 'react';
import { Form, Input, Icon, Radio, Button, notification } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Redirect, NavLink } from 'react-router-dom';
import loginData from '../../Services/signipapi';
import 'react-loading-bar/dist/index.css';


const RadioGroup = Radio.Group;
const FormItem = Form.Item;

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
    this.onChangeLoginName = this.onChangeLoginName.bind(this);
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


  onChangeLoginName(e) {

    this.setState({ [e.target.name]: e.target.value });
    console.log('onchangeusername', e.target.value, '+', e.target.name)

  }

  login = () => {
    if (this.state.email && this.state.password) {
      loginData(this.state).then((result) => {
        let response = result;
        if (response.error == false) {
          if (response.user) {
            sessionStorage.setItem('userId', response.user._id);
          }
        }
      });
    }
  }


  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to="/layout/wall" />
    }
    const { userName } = this.state;

    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <div>
        <div>
              <div>                
                <div>
                      <Form>
                        <FormItem>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="email"
                              onChange={this.onChangeLoginName}
                            />
                        </FormItem>

                        <FormItem>
                            <Input
                              placeholder=" Password"
                              type="password"
                              name="password"
                              onChange={this.onChangeLoginName}
                            />
                        </FormItem>
                      </Form>
                      <div>
                        <Button onClick={this.login}>Submit</Button>
                      </div>
                </div>
              </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
Form.create()(Signup);

export default Form.create()(Signup);
// export default LoginClass;


