import React, { Component } from "react";
import AppStyle from '../theme';
import {View,Text,Button,StyleSheet} from 'react-native';

export default class Nav extends Component {
    static navigationOptions = {
        title:'Navigation',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Menu</Text>
                <Button
                style={AppStyle.StyleCommon.button_menu}
                title="Chấm điểm tín dụng"
                onPress={() => this.props.navigation.push('Score', {
                itemId:10,
                other:'text',                
                })}
                />
                <Button
                title="Đăng ký vay nhanh"
                style={AppStyle.StyleCommon.button_menu}
                onPress={() => this.props.navigation.push('SignLoan', {
                itemId:10,
                other:'text',
                })}
                />
                <Button
                title="Quản lý Tài khoản"
                style={{ width: 58, height: 18, backgroundColor: 'red',  borderRadius: 2,marginTop:10 }}
                onPress={() => this.props.navigation.push('Profile', {
                itemId:10,
                other:'text',
                })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: 'red',  borderRadius: 2,marginTop:10 },
    btnText: { textAlign: 'center', color: '#fff' }
})