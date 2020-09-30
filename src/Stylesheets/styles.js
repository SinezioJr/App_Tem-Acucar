import {StyleSheet} from 'react-native';

export const favorsStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  topContainer: {
    paddingTop: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '35%',
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    padding: 16,
    fontSize: 16,
    width: '60%',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  button_primary: {
    width: 316,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
    textAlign: 'center',
    marginLeft: 16,
    backgroundColor: '#3326E0',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    fontWeight: 'bold',
    color: 'white',
  },
  button_cancel: {
    width: 316,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
    textAlign: 'center',
    marginLeft: 16,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E02653',
  },

  button_done: {
    width: 316,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
    textAlign: 'center',
    marginLeft: 16,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26E065',
  },

  input_height: {
    height: 50,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
  },

  dropdown: {
    backgroundColor: '#EBE6E6',
  },

  inputs: {
    height: 50,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#EBE6E6',
    paddingHorizontal: 16,
  },

  long_input: {
    height: 250,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#EBE6E6',
    paddingLeft: 16,
    textAlignVertical: 'top',
    paddingVertical: 20
  },

  button_cotainner: {
    top: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topTimeContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeOptions: {
    display: 'flex',
  },

  large_btn: {
    height: 50,
    borderRadius: 14,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#3326E0',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  itensList: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'space-around',
  },
  item: {
    width: 100,
    height: 100,
    display: 'flex',
    backgroundColor: '#861CF0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteText: {
    color: 'white',
  },

  centerContainner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  topContainerBlue: {
    paddingTop: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '35%',
    backgroundColor: '#861CF0',
  },

  mainTitleWhite: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    maxWidth: '80%',
    textAlign: 'center',
  },
  subTitleWhite: {
    padding: 16,
    fontSize: 16,
    width: '60%',
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'white',
  },

  statusAberto: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EAE116',
  },

  statusAndamento: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#861CF0',
  },

  statusFinalizado: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F0351C',
  },

  subTitleStatus: {
    textAlign: 'center',
    marginLeft: 32,
    marginRight: 32,
  },
  itensSubTitle: {
    marginTop: 16,
    marginLeft: 28,
  },
  userPic: {
    marginHorizontal: 10,
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 63,
    height: 63,
    width: 63,
  },
  favorListItem: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
  },
  favorTitle: {
    fontSize: 22,
    lineHeight: 28,
    color: '#861CF0',
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    fontFamily: 'Roboto',
  },
  favorDescription: {
    marginBottom: 4,
  },
  date: {
    marginBottom: 4,
    fontWeight: '100',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    color: '#861CF0',
  },
  state: {
    color: '#861CF0',
  },
});
