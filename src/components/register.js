import React, { Component } from 'react';
import './register.css';
import { Layout, Select, Menu, Breadcrumb, Row, Tabs, Col, Button, Modal, Divider, Checkbox, Form, AutoComplete, Input, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Redirect, NavLink } from 'react-router-dom';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="background">
                <div>
                    <h className="title">YOUR SIGN IN IS REQUIRED</h>
                    <Form className="element">
                    <FormItem>
                        <Input type="text" placeholder="Email"/>
                    </FormItem>
                    <FormItem>
                        <Input type="text" placeholder="Password"/>
                    </FormItem>
                    <Button className ="button">Login</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default Form.create()(WrappedNormalLoginForm);