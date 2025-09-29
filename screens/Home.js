import React from 'react'
import styled from 'styled-components/native'
import ToolBar from '../components/Toolbar'
import MainSeparator from '../components/MainSeparator'


const View = styled.View`
    align-items: center;
    height: 500px;`

const Home = () => {
    return (

        <View>
            <Text>Home Screen</Text>
            <ToolBar/>
            <MainSeparator/>
        </View>
    )
}
export default Home