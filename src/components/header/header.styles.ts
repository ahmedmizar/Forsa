import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imageContainer: {
    height: 300,
    paddingHorizontal:25
  },
  headerContainer:{
    flex:1,
    marginBottom:400
  },
  contentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:57,
  },
  rightContent:{
    flexDirection:'row',
    justifyContent: 'flex-end',
    flex: 1.5,

  },
  icon:{
    marginLeft:15
  },
  leftElementContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1.5,
  },
  titleContainer: { flex: 4, justifyContent: 'center', alignItems: 'center' },

});
