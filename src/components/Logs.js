import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View, ActivityIndicator,TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


export default class Logs extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'Lịch sử vay'),
        };
    };

    constructor(props){
        super(props);

        this.state = {
            lists:[],
            isLoading:true,
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd']
            ]
        }
    }
    

    componentDidMount(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const other = navigation.getParam('other', 'others');

        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading: false,
                lists: responseJson.movies,
            }, function(){

            });

        })
        .catch((error) =>{
            console.error(error);
        });
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }
    
    render() {        
        const { lists } = this.state;
        const state = this.state;
        console.log(state);
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }

        const element = (data, index) => (
        <TouchableOpacity onPress={() => this._alertIndex(index)}>
            <View style={styles.btn}>
            <Text style={styles.btnText}>button</Text>
            </View>
        </TouchableOpacity>
        );

        return (
        <View style={styles.container}>
            
            {/* <FlatList
            data={lists}
            renderItem={({item}) => <Text style={styles.item}>{item.title} - {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
            /> */}

            <Table borderStyle={{borderColor: 'transparent'}}>
                <Row style={styles.head} textStyle={styles.text}/>
                {
                    state.tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                        {
                        rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                        ))
                        }
                    </TableWrapper>
                    ))
                }
            </Table>

            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Main')}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
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
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
})
