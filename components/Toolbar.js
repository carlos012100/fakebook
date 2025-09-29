import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from './Avatar'
import Menu from '../screens/Menu';


const Container = styled.View`
    width: 100%;
    HeaderHeightContext: 92px`

const Row = styled.View `
    flex-direction: row;
    background: #FFFFFF;
    width: 100%;
    padding: 0 11px;
    align-items: center;
    `
const Input = styled.TextInput`
    height: 40px;
    width: 85%;
    padding: 0 8px;
    border: 1px solid #DDD;
    margin: 10px;
    border-radius: 30px;
    `
const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background:  #DDDDDD;
    `

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;`

const ToolBar = () => {
    return (
        <Container>
            <Row>
                <Avatar source={require('../assets/12.jpg')} />
                <Input placeholder = "¿Que esta pensando?" />
            </Row>
            <Divider/>
            <Row>
                <Menu>
                    <MaterialCommunityIcons name ="video-account" size={20} color="#F44337"/>
                </Menu>
                <Separator/>
                <Menu>
                    <MaterialCommunityIcons name= "video-plus" size={20} colors="#A748EE"/>
                    <Menu>Sala</Menu>
                </Menu>
            </Row>
        </Container>
    )
}
export default ToolBar