import { StyleSheet } from 'react-native';

const StyleCommon = StyleSheet.create({
    viewMain: {
        padding: 20
    },
    button_red: {
        backgroundColor: 'red',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    button_face: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 10,
        marginTop: 16,
        flexDirection: 'row',
    },
    button_menu: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        marginTop: 16,
        flexDirection: 'row',
    },
    input: {
        height:40,
        borderWidth: 1,
        backgroundColor:'white',
        flexDirection: 'row',
    }
});
export default StyleCommon;
