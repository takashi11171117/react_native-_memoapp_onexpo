import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    state = {
        memo: {},
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    dateString = (date) => {
        const str = date.toISOString();
        return str.split('T')[0];
    }

    returnMemo = (memo) => {
        this.setState({ memo });
    }

    render() {
        const { memo } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
                    <Text style={styles.memoHeaderDate}>{this.dateString(memo.createdOn)}</Text>
                </View>
                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton
                    color="white"
                    style={styles.editButton}
                    onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo, returnMemo: this.returnMemo }); }}
                >
                    {'\uf040'}
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
    memoHeader: {
        backgroundColor: '#17313C',
        height: 100,
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        padding: 20,
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#fff',
    },
    memoBody: {
        lineHeight: 22,
        fontSize: 15,
    },
    editButton: {
        top: 77,
    },
});

export default MemoDetailScreen;
