import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Header,
  Title,
  OwnerActivity,
  AllActivities,
  Mine,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
  ActivityBorderBottom,
  ActivityContainer
} from "./styles";

import avatar from "../../../assets/images/avatar.png";

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = React.useState('All'); // Mine or All

  const handleActivity = (selected) => {
    setSelectedActivity(selected);
  }

  return (
    <Container>
      <Header>
        <Title>Atividades</Title>

        <OwnerActivity>
        <TouchableOpacity onPress={() => handleActivity('All')}>
          <ActivityContainer>
            <AllActivities isActive={selectedActivity === 'All'}>Todas</AllActivities>
            {selectedActivity === 'All' ? (<ActivityBorderBottom />) : null}
          </ActivityContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleActivity('Mine')}>
          <ActivityContainer>
            <Mine isActive={selectedActivity === 'Mine'}>Minhas</Mine> 
            {selectedActivity === 'Mine' ? (<ActivityBorderBottom />) : null}        
          </ActivityContainer>
        </TouchableOpacity>
        </OwnerActivity>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar}></Avatar>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@seila</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Wesley Arizio</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 29,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 1 dia</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
