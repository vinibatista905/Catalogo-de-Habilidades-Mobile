import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { btnAmarelo, btnAzul, txBranco, txCinzaEscuro } from '../UI/variaveis';

export default function UserProjectsCards({ id, name, manager, startDate, conclusionDate, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8}) {
  
    return (
        <View key={id} activeOpacity={0.5} style={styles.projectCard}>
            <View style={styles.wrap}>
            <Image source={require("../../assets/project-3.png")} style={styles.image} />
            <Text style={styles.projectName}>{name}</Text>
            <Text style={styles.info}>Gestor: {manager}</Text>
            <Text style={styles.info}>Data de Início: {startDate}</Text>
            <Text style={styles.info}> Data de Conclusão: {conclusionDate}</Text>
            <Text style={styles.info}>Skills:</Text>
            <View style={styles.skillsWrap}>
            {skill1 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill1}</Text></View>}
            {skill2 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill2}</Text></View>}
            {skill3 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill3}</Text></View>}
            {skill4 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill4}</Text></View>}
            {skill5 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill5}</Text></View>}
            {skill6 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill6}</Text></View>}
            {skill7 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill7}</Text></View>}
            {skill8 === null ? null : <View style={styles.skillTag}><Text style={styles.skill}>{skill8}</Text></View>}
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    projectCard: {
        width: 320,
        height: 520,
        backgroundColor: txBranco,
        borderRadius: 12,
        borderColor: btnAmarelo,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      },

      wrap: {
        justifyContent: "center",
        alignItems: "center",
      },

      image: {
        width: 180,
        height: 180
      },

      projectName: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        fontFamily: "BoldFont",
        textAlign: "center",
        color: btnAzul,
        marginBottom: 20
      }, 

      info: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        fontFamily: "BoldFont",
        textAlign: "left",
        color: txCinzaEscuro,
      },  

      skillsWrap: {
       flexDirection: 'row',
       flexWrap: "wrap",
       justifyContent: "center",
        alignItems: "center",
       
      },  


      skillTag: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 45,
        borderRadius: 15,
        backgroundColor: btnAzul,
        margin: 5
      },

      skill: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 12,
        fontFamily: "BoldFont",
        textAlign: "center",
        color: txBranco
      },
    
  });
  