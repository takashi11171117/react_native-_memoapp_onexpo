import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.memoEditInput} value="Hi" multiline />
                <CircleButton>
                    {'\uf00c'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
        paddingTop: 32,
        fontSize: 16,
    },
});

export default MemoEditScreen;
