import React, { useEffect } from 'react'
import axiosInstance from './axios/axios';
import { View, Text } from 'react-native';

export default function PlayerDetails({ route }) {
  const search = route.params;
  console.log(search)
  useEffect(() => {
    axiosInstance.get(`https://aoe4world.com/api/v0/players/search?query=${search.props}`).then(data => console.log(data))
  }, [])

  return (
    // {search && (<div>asdasd</div>)}
    <Text>adas</Text>
  )
}
