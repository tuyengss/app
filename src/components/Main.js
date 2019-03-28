import React, { Component } from "react";
import AppStyle from '../theme';
import {View,Text,Button,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import FBLoginButton from "../common/FBLoginButton";

export default class Main extends Component {
    static navigationOptions = {
        title:'Authentication',
    };

    render(){
        return(
            <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
                <Text>Đăng Nhập</Text>
                <TouchableWithoutFeedback accessibilityComponentType="button"
                    onPress={this._onPress}>
                    <View style={AppStyle.StyleCommon.button_face}>
                        <Text onPress={() => this.props.navigation.push('Nav', {
                        itemId:10,
                        other:'text',                
                        })} style={styles.buttonText}>Login Facebook</Text>
                    </View>
                </TouchableWithoutFeedback>
              
                <Button
                title="Login Google"
                color={'red'}                
                onPress={() => this.props.navigation.push('Nav', {
                itemId:10,
                other:'text',
                })}
                />
                <Button
                title="Login Zalo"
                buttonStyle={AppStyle.StyleCommon.button}
                onPress={() => this.props.navigation.push('Nav', {
                itemId:10,
                other:'text',
                })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
})