import React, { Component } from "react";
import AppStyle from '../theme';
import {View,Text,Button,TextInput} from 'react-native';
import t from 'tcomb-form-native';

const Loan = t.struct({
    username:t.maybe(t.String),
    cmnd:t.String,
    loan:t.String,
    term:t.Boolean,
});

const Form = t.form.Form;

const options = {
    fields: {
        email: {
            error: 'Without an email address how are you going to reset your password when you forget it?'
          },
          password: {
            error: 'Choose something you use on a dozen other sites or something you won\'t remember'
          },
        terms: {
            label: 'Agree to Terms',
        },
    },
};

const formStyles = {
    ...Form.stylesheet,
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }


export default class SignLoan extends Component {
    static navigationOptions = {
        title:'Đăng ký vay nhanh',
    };

    constructor(props) {
        super(props);
        this.state = {
            value: {
                name: 'Giulio',
                surname: 'Canti'
            },
            text:'Nhập vào mã xác thực',
            errors:'',
            hasError:false
        }
    }

    handleSubmit(){
        var value = this.refs.form.getValue();
        if (value) {
        console.log(value);
        }

        fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        }),
        });
    }

    onChange(value) {
        this.setState({value});
    }

    render(){
        return(
            <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' }}>
                <Text>Đăng ký vay nhanh</Text>
                <Form
                    ref="form"
                    type={Loan}  
                    options={options} // pass the options via props    
                    style={formStyles}
                    onChange={this.onChange}
                />
                <Button
                style={AppStyle.StyleCommon.button_menu}
                title="Đăng ký vay"
                onPress={() => this.handleSubmit()}
                />
                
            </View>
        );
    }
}