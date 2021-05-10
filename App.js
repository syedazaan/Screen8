import React from 'react';
import { StyleSheet,Text,View,  Image,
  ImageBackground,} from 'react-native';

export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
           <View style={styles.notificationblock}>
                   <View style={styles.leftarrownotificationblock}></View>
                   <View style={styles.Textnotificationblock}></View>
                   <View style={styles.menunotificationblock}></View>
           </View>
           
           <View style={styles.Todayheaderblock}>
             {/* <Text>Today</Text> */}
           </View>
           
           
           <View style={styles.TopContentblock}>
                <View style={styles.BedroomTopContentblock}>
                       <View style={styles.iconBedroomTopContentblock}></View>
                       <View style={styles.ContentBedroomTopContentblock}></View>
                </View>
              
                <View style={styles.BathroomTopContentblock}>
                      <View style={styles.iconBathroomTopContentblock}></View>
                      <View style={styles.ContentBathroomTopContentblock}></View>
                </View>
                
                
                <View style={styles.LivingTopContentblock}>
                      <View style={styles.iconLivingTopContentblock}></View>
                      <View style={styles.ContentLivingTopContentblock}></View>
                </View>
                
                
                <View style={styles.DiningTopContentblock}>
                <View style={styles.iconDiningTopContentblock}></View>
                      <View style={styles.ContentDiningTopContentblock}></View>
                </View>
            
            
            </View>                
           
           <View style={styles.lastweekblock}></View>
          
           <View style={styles.BottomContentblock}>
               <View style={styles.ACBottomContentblock}>
                      <View style={styles.iconACBottomContentblock}></View>
                      <View style={styles.ContentACBottomContentblock}></View>
               </View>

               <View style={styles.bottomDiningBottomContentblock}>
                      <View style={styles.iconbottomDiningBottomContentblock}></View>
                      <View style={styles.ContentbottomDiningBottomContentblock}></View>
               </View>
               
               
               <View style={styles.StorageBottomContentblock}>
               <View style={styles.iconbottomDiningBottomContentblock}></View>
                      <View style={styles.ContentbottomDiningBottomContentblock}></View>
               </View>
           </View>
     
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    marginBottom:18,
    backgroundColor:'#fff',

  },
  notificationblock:{
  flex:1,
  flexDirection:'row',
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderWidth:1,
  },
  leftarrownotificationblock:{
   flex:1,
   justifyContent:'center',
   borderWidth:1,
  },


  Textnotificationblock:{
   flex:10,
   borderWidth:1,
  },
  menunotificationblock:{
    flex:1,
    justifyContent:'center',
    borderWidth:1,
  },

  Todayheaderblock:{
    flex:1,
  borderWidth:1,
  },

  TopContentblock:{
    flex:5,
    marginLeft:15,
    marginRight:15,
    borderWidth:1,
  },

  BedroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    borderWidth:1,
    
  },
  iconBedroomTopContentblock:{
   flex:1,
   marginLeft:8,
   marginTop:8,
   marginRight:8,
   marginBottom:8,
   borderRadius:10,
   borderWidth:1,
  },
  ContentBedroomTopContentblock:{
   flex:6,
   borderWidth:1,
  },



  BathroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderWidth:1,
  },

  iconBathroomTopContentblock:{
    flex:1,
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    borderWidth:1,
  },

 

  ContentBathroomTopContentblock:{
    flex:6,
    borderWidth:1,
  },




  LivingTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderWidth:1,
  },
  iconLivingTopContentblock:{
    flex:1,
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    borderWidth:1,
  },

  ContentLivingTopContentblock:{
    flex:6,
    borderWidth:1,
  },


  DiningTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderWidth:1,
  },
  iconDiningTopContentblock:{
    flex:1,
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    borderWidth:1,
  },

  ContentDiningTopContentblock:{
    flex:6,
    borderWidth:1,
  },

  lastweekblock:{
    flex:1,
    borderWidth:1,
  },

BottomContentblock:{
  flex:4,
  marginLeft:15,
  marginRight:15,
  // marginBottom:5,
  // marginTop:5,
  borderWidth:1,
},
ACBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderWidth:1,
},

iconACBottomContentblock:{
 flex:1,
 marginLeft:8,
 marginTop:8,
 marginRight:8,
 marginBottom:8,
 borderRadius:10,
 borderWidth:1,
},

ContentACBottomContentblock:{
  flex:6,
  borderWidth:1,
},

bottomDiningBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderWidth:1,
},
iconbottomDiningBottomContentblock:{
  flex:1,
  marginLeft:8,
  marginTop:8,
  marginRight:8,
  marginBottom:8,
  borderRadius:10,
  borderWidth:1,
},
ContentbottomDiningBottomContentblock:{
  flex:6,
  borderWidth:1,
},



StorageBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderWidth:1,
},
iconbottomDiningBottomContentblock:{
  flex:1,
  marginLeft:8,
  marginTop:8,
  marginRight:8,
  marginBottom:8,
  borderRadius:10,
  borderWidth:1,
},
ContentbottomDiningBottomContentblock:{
  flex:6,
  borderWidth:1,
},


});