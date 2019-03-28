import React, { Component } from "react";
import AppStyle from '../theme';
import {View,Text,Button,TextInput} from 'react-native';
import t from 'tcomb-form-native';


export default class Score extends Component {
    static navigationOptions = {
        title:'Chấm điểm tín dụng',
    };

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            results: {
                point: 0,
                loan: 12,
                interest_rate:12,
            },
            text:'Nhập vào mã xác thực',
            errors:'',
            hasError:false
        }
    }

    onSubmit(){

    }

    render(){
        return(
            <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' }}>
                <Text>Chấm điểm tín dụng</Text>
                <TextInput
                    style={AppStyle.StyleCommon.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                style={AppStyle.StyleCommon.button_menu}
                title="Chấm điểm ngay"
                onPress={() => this.props.navigation.push('Logs', {
                itemId:10,
                other:'text',                
                })}
                />
                
            </View>
        );
    }
}