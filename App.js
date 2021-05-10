import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconi from 'react-native-vector-icons/Ionicons';   
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';   
import Iconmm from 'react-native-vector-icons/MaterialIcons';   
import Icona from 'react-native-vector-icons/AntDesign'; 

import { styles1} from  "./styles/styles"

const myIcon = <Icon name="bath" size={30} color="#ffffff" />;  
const myIcon1 = <Iconi name="bed" size={30} color="#ffffff" />; 
const myIcon2 = <Iconm name="sofa" size={30} color="#ffffff" />; 
const myIcon3 = <Iconmm name="dinner-dining" size={30} color="#ffffff" />; 
const myIcon4 = <Icon name="info-circle" size={30} color="#ffffff" />;  
const myIcon5 = <Iconi name="menu" size={30} color="#ffffff" />; 
const myIcon6 = <Icon name="angle-left" size={20} color="#8491AC" />;  
const myIcon7 = <Icon name="ellipsis-v" size={20} color="#8491AC" />;  
const myIcon8 = <Icona name="clockcircle" size={10} color="#9EAAC3" />;

export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
           <View style={styles.notificationblock}>
                   <View style={styles.leftarrownotificationblock}>{myIcon6}</View>
                   <View style={styles.Textnotificationblock}>
                           <Text style={styles.Textnotificationblock1}>NOTIFICATION</Text>
                   </View>
                  <View style={styles.menunotificationblock}>{myIcon7}</View>
           </View>
           
           <View style={styles.Todayheaderblock}>
             <Text style={styles.Todayheaderblock1}>TODAY</Text>
           </View>
           
           
           <View style={styles.TopContentblock}>
                <View style={styles.BedroomTopContentblock}>
                       <View style={styles.iconBedroomTopContentblock}>{myIcon1}</View>
                       
                       <View style={styles.ContentBedroomTopContentblock}>
                              <View style={styles.headerContentBedroomTopContentblock}>
                                     
                                      <View style={styles.BedroomtextheaderContentBedroomTopContentblock}>
                                            <Text style={styles.BedroomtextheaderContentBedroomTopContentblock1}>Bedroom</Text>
                                      </View>
                                      
                                      {/* <View style={[styles1.padding12,styles1.bgBlue ]}>
                                            <Text style={styles.BedroomtextheaderContentBedroomTopContentblock1}>Bedroom</Text>
                                      </View> */}

                                      <View style={styles.TimetextheaderContentBedroomTopContentblock}>
                                            <Text style={styles.TimetextheaderContentBedroomTopContentblock1}>{myIcon8}  11.34 AM</Text>
                                      </View>
                              
                              </View>
                              
                              <View style={styles.RanktextContentBedroomTopContentblock}>
                                <View style={styles.rank1TopBedroom}>
                                      <Text style={styles.rank1TopBedroom1}>
                                            Rank tall boy man them over post now off into she
                                      </Text>
                                </View>
                                
                                <View style={styles.rank1BottomBedroom}>
                                      <Text style={styles.rank1BottomBedroom1}>
                                            bed long fat room favourite get
                                       </Text>
                                </View>
                              </View>
                       
                       </View>
                </View>
              
                <View style={styles.BathroomTopContentblock}>
                      <View style={styles.iconBathroomTopContentblock}>{myIcon}</View>
                      
                      
                      <View style={styles.ContentBathroomTopContentblock}>
                        
                         <View style={styles.headerContentBathroomTopContentblock}>
                                      <View style={styles.BathroomtextheaderContentBathroomTopContentblock}>
                                            <Text style={styles.BathroomtextheaderContentBathroomTopContentblock1}>Bathroom Light On</Text>
                                      </View>
                                      <View style={styles.TimetextheaderContentBathroomTopContentblock}>
                                              <Text style={styles.TimetextheaderContentBathroomTopContentblock1}>{myIcon8}  11.34 AM
                                                      
                                              </Text>
                                      </View>
                         </View>
                        
                         <View style={styles.RanktextContentBathroomTopContentblock}>
                                  <View style={styles.rank2TopBathroom}>
                                         <Text style={styles.rank2TopBathroom1}>
                                                  Rank tall boy man them over post now off into she
                                          </Text>
                                  </View>
                                 
                                 
                                  <View style={styles.rank2BottomBathroom}>
                                          <Text style={styles.rank2BottomBathroom1}>
                                                  bed long fat room favourite get
                                          </Text>
                                  </View>
                         </View>
                     
                      </View>
                
                </View>
                
                
                <View style={styles.LivingTopContentblock}>
                      <View style={styles.iconLivingTopContentblock}>{myIcon2}</View>
                      
                      <View style={styles.ContentLivingTopContentblock}>
                            
                             <View style={styles.headerContentLivingTopContentblock}>
                                      
                                      <View style={styles.LivingToptextheaderContentLivingTopContentblock}>
                                         
                                          <Text style={styles.LivingToptextheaderContentLivingTopContentblock1}>
                                                Living Room AC On
                                            </Text>
                                      
                                      </View>
                                      
                                      <View style={styles.TimetextheaderheaderContentLivingTopContentblock}>
                                              <Text style={styles.ACTimegraycolor}>{myIcon8}  11.34 AM
                                                      
                                              </Text>
                                      </View>
                             </View>
                             
                             
                             <View style={styles.RanktextContentLivingTopContentblock}>
                                     <View style={styles.rank3TopContent}>
                                            <Text style={styles.rank3TopContent1}>
                                                      Rank tall boy man them over post now off into she
                                             </Text>
                                     </View>
                                     <View style={styles.rank3BottomContent}>
                                          <Text style={styles.rank3BottomContent1}>
                                                  bed long fat room favourite get
                                           </Text>
                                     </View>
                             </View>
                      </View>
                
                </View>
                
                
                <View style={styles.DiningTopContentblock}>
                      <View style={styles.iconDiningTopContentblock}>{myIcon3}</View>
                      
                      
                      <View style={styles.ContentDiningTopContentblock}>
                            <View style={styles.headerContentDiningTopContentblock}>
                            
                                      <View style={styles.DiningToptextheaderContentDiningTopContentblock}>
                                        <Text style={styles.DiningToptextheaderContentDiningTopContentblock1}>
                                           Dining Room
                                        </Text>
                                      </View>
                                      
                                      <View style={styles.TimetextheaderheaderContentDiningTopContentblock}>
                                               <Text style={styles.TimetextheaderheaderContentDiningTopContentblock1}>{myIcon8}  11.34 AM
                                                      
                                              </Text>
                                      </View>

                            </View>
                           
                            <View style={styles.RanktextContentDiningTopContentblock}>
                                     <View style={styles.rank4TopDining}>
                                             <Text style={styles.rank4TopDining1}>
                                                      Rank tall boy man them over post now off into she
                                             </Text>
                                     </View>
                                     <View style={styles.rank4BottomDining}>
                                             <Text style={styles.rank4BottomDining1}>
                                             bed long fat room favourite get
                                             </Text>
                                     </View>
                            </View>
                      </View>
               
                </View>
            
            
            </View>                
           
           <View style={styles.lastweekblock}>
             <Text style={styles.lastweekblock1}>LAST WEEK</Text>
           </View>
          
           <View style={styles.BottomContentblock}>
               
               <View style={styles.ACBottomContentblock}>
                      <View style={styles.iconACBottomContentblock}>{myIcon4}</View>
                      
                      <View style={styles.ContentACBottomContentblock}>
                         
                               <View style={styles.headerContentACBottomContentblock}>
                                     
                                     <View style={styles.ACTextToptextheaderContentACBottomContentblock}>
                                          <Text style={styles.ACTextToptextheaderContentACBottomContentblock1}>
                                                AC Not Working 
                                           </Text>
                                     </View>
                                    
                                     <View style={styles.TimetextheaderContentACBottomContentblock}>
                                                <Text style={styles.ACgraytime1}>{myIcon8}  11.34 AM
                                                      
                                                </Text>
                                     </View>
                              
                                </View>
                         
                                <View style={styles.RanktextContentACBottomContentblock}>
                         
                                          <View style={styles.rank5TopAC}>
                                                 <Text style={styles.Rrank5TopAC1}>
                                                      Rank tall boy man them over post now off into she
                                                  </Text>
                                          </View>
                                         
                                          <View style={styles.rank5BottomAC}>
                                                  <Text style={styles.rank5BottomAC1}>
                                                       bed long fat room favourite get
                                                   </Text>
                                          </View>
                                 
                                 </View>
                      </View>
               
               </View>

               <View style={styles.bottomDiningBottomContentblock}>
                      <View style={styles.iconbottomDiningBottomContentblock}>{myIcon3}</View>
                      
                      
                      <View style={styles.ContentbottomDiningBottomContentblock}>
                            
                             <View style={styles.headerContentbottomDiningBottomContentblock}>
                                     
                                     <View style={styles.DiningTextbottomToptextheaderContentACBottomContentblock}>
                                               <Text style={styles.DiningTextbottomToptextheaderContentACBottomContentblock1}>
                                                 Dining Room
                                               </Text>
                                     </View>
                                     
                                     <View style={styles.TimetextheaderContentDiningBottomContentblock}>
                                                <Text style={styles.TimetextheaderContentDiningBottomContentblock1}>{myIcon8}  11.34 AM
                                                      
                                                </Text>
                                     </View>
                              </View>
                         
                         <View style={styles.RanktextContentbottomDiningBottomContentblock}>
                                 
                                  <View style={styles.rank6TopDining}>
                                                <Text style={styles.rank6TopDining1}>
                                                      Rank tall boy man them over post now off into she
                                                 </Text>
                                  </View>
                                 
                                  <View style={styles.rank6BottomDining}>
                                                  <Text style={styles.rank6BottomDining1}>
                                                       bed long fat room favourite get
                                                   </Text>
                                  </View>
                         </View>
                      </View>
              
               </View>
               
               
               <View style={styles.StorageBottomContentblock}>
                      <View style={styles.iconbottomStorageBottomContentblock}>{myIcon5}</View>
                     
                      <View style={styles.ContentbottomStorageBottomContentblock}>
                                                      
                            <View style={styles.headerContentbottomStorageBottomContentblock}>
                                     <View style={styles.StorageTextbottomToptextheaderContentbottomStorageBottomContentblock}>
                                          <Text style={styles.StorageTextbottomToptextheaderContentbottomStorageBottomContentblock1}>
                                               Storage Full
                                          </Text>
                                     </View>
                                     <View style={styles.TimetextheaderContentbottomStorageBottomContentblock}>
                                                <Text style={styles.TimetextheaderContentbottomStorageBottomContentblock1}>{myIcon8}  11.34 AM
                                                     
                                                </Text>
                                     </View>
                            </View>
                           
                           
                            <View style={styles.RanktextContentbottomStorageBottomContentblock}>
                                   
                                   <View style={styles.rank7TopStorage}>
                                                 <Text style={styles.rank7TopStorage1}>
                                                      Rank tall boy man them over post now off into she
                                                 </Text>
                                   </View>
                                   
                                   <View style={styles.rank7BottomStorage}>
                                                   <Text style={styles.rank7BottomStorage1}>
                                                                  bed long fat room favourite get
                                                   </Text>
                                   </View>
                            </View>
                     
                      </View>
               
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
  borderBottomColor:'lightgray',
  borderBottomWidth:0.3,
  // borderWidth:1,
  },
  leftarrownotificationblock:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
  //  borderWidth:1,
  },


  Textnotificationblock:{
   flex:10,
   alignItems:'center',
   justifyContent:'center',

  //  borderWidth:1,
  },

  Textnotificationblock1:{
    fontSize:20,
    fontWeight:'bold',
    color:'rgb(27,55,113)',
  },



  menunotificationblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:1,
  },

  Todayheaderblock:{
    flex:1,
    justifyContent:'center',
    marginLeft:10,
  // borderWidth:1,
  },
  Todayheaderblock1:{
    fontSize:16,
    fontWeight:'900',
    color:'rgb(204,209,219)',
  },

  TopContentblock:{
    flex:5,
    marginLeft:15,
    marginRight:15,
    // borderWidth:1,
  },

  BedroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    borderColor:'lightgray',
    borderWidth:0.1,

    // borderWidth:1,
    
  },
  iconBedroomTopContentblock:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'rgb(37,189,237)',
   marginLeft:8,
   marginTop:8,
   marginRight:8,
   marginBottom:8,
   borderRadius:10,
  //  borderWidth:1,
  },
  ContentBedroomTopContentblock:{
   flex:6,
  //  borderWidth:1,
  },

  headerContentBedroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    // borderWidth:1,
  },
  BedroomtextheaderContentBedroomTopContentblock:{
   flex:5,
   justifyContent:'center',
  //  borderWidth:1,
  },
  BedroomtextheaderContentBedroomTopContentblock1:{
   fontSize:17,
   color:'rgb(27,55,113)',
   fontWeight:'bold',
  },

  TimetextheaderContentBedroomTopContentblock:{
  flex:1.5,
  justifyContent:'center',
  alignItems:'center',
  // borderWidth:1,
  },
  TimetextheaderContentBedroomTopContentblock1:{
     fontSize: 10,
     fontWeight:'700',
     color:'rgb(155,167,193)',
    //  fontWeight:'600',
    //  color:'rgb(178,186,205)',
  },


  RanktextContentBedroomTopContentblock:{
 flex:1.3,
//  borderWidth:1,
  },

  rank1TopBedroom:{
   flex:1,
  //  borderWidth:1,
  },
  rank1BottomBedroom:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },
  rank1TopBedroom1:{
    fontSize:12,
    
    fontWeight:'700',
    color:'rgb(155,167,193)',
    // color:'rgb(178,186,205)',
  },

  rank1BottomBedroom1:{
    fontSize:12,
    fontWeight:'700',
    color:'rgb(155,167,193)',
    // fontWeight:'600',
    // color:'rgb(155,167,193)',
  },


  BathroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderColor:'lightgray',
    borderWidth:0.1,

    // borderWidth:1,
  },

  iconBathroomTopContentblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(243,185,68)',
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    // borderWidth:1,
  },

 

  ContentBathroomTopContentblock:{
    flex:6,
    // borderWidth:1,
  },

  headerContentBathroomTopContentblock:{
    flex:1,
    flexDirection:'row',
    // borderWidth:1,
  },

  BathroomtextheaderContentBathroomTopContentblock:{
    flex:5,
    justifyContent:'center',
    // borderWidth:1,
  },

  BathroomtextheaderContentBathroomTopContentblock1:{
    fontSize:17,
    color:'rgb(27,55,113)',
    fontWeight:'bold',
  },

  TimetextheaderContentBathroomTopContentblock:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:1,
  }, 

  TimetextheaderContentBathroomTopContentblock1:{
   
    fontSize: 10,
    fontWeight:'700',
    color:'rgb(155,167,193)',
    // fontWeight:'600',
  },

  RanktextContentBathroomTopContentblock:{
    flex:1.3,
    // borderWidth:1,
  },

  rank2TopBathroom:{
    flex:1,
    justifyContent:'center',
  //  borderWidth:1,
  },
  rank2TopBathroom1:{
    fontSize:12,
    fontWeight:'700',
    color:'rgb(155,167,193)',
    // fontWeight:'600',
  },
  rank2BottomBathroom:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },
  rank2BottomBathroom1:{
    fontSize:12,
    fontWeight:'700',
    color:'rgb(155,167,193)',
    // fontWeight:'600',
  },


  LivingTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderColor:'lightgray',
    borderWidth:0.1,

    // borderWidth:1,
  },
  iconLivingTopContentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(93,134,243)',
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    // borderWidth:1,
  },

  ContentLivingTopContentblock:{
    flex:6,
    // flexDirection:'row',
    // borderWidth:1,
  },
  headerContentLivingTopContentblock:{
    flex:1,
    flexDirection:'row',
    // borderWidth:1,
  },
 

  
  LivingToptextheaderContentLivingTopContentblock:{
    flex:5,
    justifyContent:'center',
    // borderWidth:1,
  },

  LivingToptextheaderContentLivingTopContentblock1:{
    fontSize:17,
    color:'rgb(27,55,113)',
    fontWeight:'bold',
  },

  TimetextheaderheaderContentLivingTopContentblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',

    // borderWidth:1,
  },

  ACTimegraycolor:{
    fontSize: 10,
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },
  

  TimetextheaderheaderContentLivingTopContentblock1:{
    fontSize: 10,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },

  RanktextContentLivingTopContentblock:{
    flex:1.3,
    // borderWidth:1,
  },

  rank3TopContent:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },

  rank3TopContent1:{
    fontSize:12,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },

  rank3BottomContent:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },
  rank3BottomContent1:{
    fontSize:12,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },

  DiningTopContentblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    marginTop:5,
    borderColor:'lightgray',
    borderWidth:0.1,

    // borderWidth:1,
  },
  iconDiningTopContentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(124,36,237)',
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    marginBottom:8,
    borderRadius:10,
    // borderWidth:1,
  },

  ContentDiningTopContentblock:{
    flex:6,
    // borderWidth:1,
  },

  headerContentDiningTopContentblock:{
    flex:1,
    flexDirection:'row',
    // borderWidth:1,
  },
  DiningToptextheaderContentDiningTopContentblock:{
    flex:5,
    // borderWidth:1,
  },
  DiningToptextheaderContentDiningTopContentblock1:{
    fontSize:17,
    color:'rgb(27,55,113)',
    fontWeight:'bold',
  },


  TimetextheaderheaderContentDiningTopContentblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },
  TimetextheaderheaderContentDiningTopContentblock1:{
    fontSize: 10,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },

  RanktextContentDiningTopContentblock:{
    flex:1.3,
    // borderWidth:1,
  },
  rank4TopDining:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },

  rank4TopDining1:{
    fontSize:12,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },

  rank4BottomDining:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },
  rank4BottomDining1:{
    fontSize:12,
    // fontWeight:'600',
    fontWeight:'700',
    color:'rgb(155,167,193)',
  },


  lastweekblock:{
    flex:1,
    marginLeft:10,
    justifyContent:'center',
    // borderWidth:1,
  },

  lastweekblock1:{
    fontSize:16,
    fontWeight:'900',
    color:'rgb(204,209,219)',
  },

BottomContentblock:{
  flex:4,
  marginLeft:15,
  marginRight:15,
  // marginBottom:5,
  // marginTop:5,
  // borderWidth:1,
},
ACBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderColor:'lightgray',
  borderWidth:0.1,

  // borderWidth:1,
},

iconACBottomContentblock:{
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'rgb(245,25,78)',
 marginLeft:8,
 marginTop:8,
 marginRight:8,
 marginBottom:8,
 borderRadius:10,
//  borderWidth:1,
},

ContentACBottomContentblock:{
  flex:6,
  // borderWidth:1,
},

headerContentACBottomContentblock:{
  flex:1,
  flexDirection:'row',
  // borderWidth:1,
},

ACTextToptextheaderContentACBottomContentblock:{
  flex:5,
  justifyContent:'center',
  // borderWidth:1,
},

ACTextToptextheaderContentACBottomContentblock1:{
  fontSize:17,
  fontWeight:'bold',
  color:'rgb(27,55,113)',
},

TimetextheaderContentACBottomContentblock:{
  flex:1.5,
  alignItems:'center',
  justifyContent:'center',
  // borderWidth:1,
},

ACgraytime1:{
  fontWeight:'700',
  color:'rgb(155,167,193)',
fontSize:10,

},

TimetextheaderContentACBottomContentblock1:{
  fontSize: 10,
  fontWeight:'600',
},

RanktextContentACBottomContentblock:{
  flex:1.3,
  // borderWidth:1,
},
rank5TopAC:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},

Rrank5TopAC1:{
  fontSize:12,
  fontWeight:'700',
  color:'rgb(155,167,193)',
},


rank5TopAC1:{
  fontSize:12,
  fontWeight:'600',
},


rank5BottomAC:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},
rank5BottomAC1:{
  fontSize:12,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},


bottomDiningBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderColor:'lightgray',
  borderWidth:0.1,

  // borderWidth:1,
},
iconbottomDiningBottomContentblock:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgb(127,39,239)',
  marginLeft:8,
  marginTop:8,
  marginRight:8,
  marginBottom:8,
  borderRadius:10,
  // borderWidth:1,
},
ContentbottomDiningBottomContentblock:{
  flex:6,
  // borderWidth:1,
},
headerContentbottomDiningBottomContentblock:{
  flex:1,
  flexDirection:'row',
  // borderWidth:1,
},
DiningTextbottomToptextheaderContentACBottomContentblock:{
  flex:5,
  justifyContent:'center',
  // borderWidth:1,
},

DiningTextbottomToptextheaderContentACBottomContentblock1:{
  fontSize:17,
  fontWeight:'bold',
  color:'rgb(27,55,113)',
  
},

TimetextheaderContentDiningBottomContentblock:{
  flex:1.5,
  alignItems:'center',
  justifyContent:'center',
  // borderWidth:1,
},
TimetextheaderContentDiningBottomContentblock1:{
  fontSize: 10,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},


RanktextContentbottomDiningBottomContentblock:{
  flex:1.3,
  // borderWidth:1,
},

rank6TopDining:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},

rank6TopDining1:{
  fontSize:12,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},

rank6BottomDining:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},
rank6BottomDining1:{
  fontSize:12,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},

StorageBottomContentblock:{
  flex:1,
  flexDirection:'row',
  borderRadius:15,
  marginBottom:5,
  marginTop:5,
  borderColor:'lightgray',
  borderWidth:0.1,

  // borderWidth:1,
},
iconbottomStorageBottomContentblock:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgb(70,229,163)',
  marginLeft:8,
  marginTop:8,
  marginRight:8,
  marginBottom:8,
  borderRadius:10,
  // borderWidth:1,
},

ContentbottomStorageBottomContentblock:{
  flex:6,
  // borderWidth:1,
},
headerContentbottomStorageBottomContentblock:{
  flex:1,
  flexDirection:'row',
  // borderWidth:1,
},

StorageTextbottomToptextheaderContentbottomStorageBottomContentblock:{
  flex:5,
  justifyContent:'center',
  // borderWidth:1,
},
StorageTextbottomToptextheaderContentbottomStorageBottomContentblock1:{
  fontSize:17,
  fontWeight:'bold',
  color:'rgb(27,55,113)',
},

TimetextheaderContentbottomStorageBottomContentblock:{
  flex:1.5,
  alignItems:'center',
  justifyContent:'center',
  // borderWidth:1,
},
TimetextheaderContentbottomStorageBottomContentblock1:{
  fontSize: 10,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},

RanktextContentbottomStorageBottomContentblock:{
  flex:1.3,
  // borderWidth:1,
},
rank7TopStorage:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},
rank7TopStorage1:{
  fontSize:12,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},
rank7BottomStorage:{
  flex:1,
  justifyContent:'center',
  // borderWidth:1,
},
rank7BottomStorage1:{
  fontSize:12,
  // fontWeight:'600',
  fontWeight:'700',
  color:'rgb(155,167,193)',
},

});