import React, { Component } from "react";
import AppStyle from '../theme';
import {View,Text,Button} from 'react-native';

export default class Profile extends Component {
    static navigationOptions = {
        title:'Quản lý tài khoản',
    };

    render(){
        return(
            <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
                <Text>Quản lý tài khoản</Text>
                <Button
                title="Lịch sử vay"
                style={{ width: 58, height: 18, backgroundColor: 'red',  borderRadius: 2,marginTop:10 }}
                onPress={() => this.props.navigation.push('Logs', {
                itemId:10,
                other:'text',
                })}
                />
            </View>
        );
    }
}