
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Title: {
        paddingVertical: 40,
        marginHorizontal: "auto",
    },
    Card: {
        flexDirection: "row",
        alignItems:'center',
    },
    CardInfo: {
        flexDirection: "column",
    },
    ImagemPerfil: {
        marginHorizontal: 10,
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 63,
        height: 63,
        width: 63,
    },
    BannerLogin: {
        marginHorizontal: 10,
        borderWidth: 1,
        marginVertical: 50,
        borderRadius: 13,
        height: 163,
        width: 163,
    },
    BannerLogo: {
        marginTop: -112,
        marginBottom: 20,
        alignSelf: "center",
        height: 143,
        width: 143,
    },
    PrimaryButton: {
        height: 50,
        marginVertical: 10,
        backgroundColor: "#04003C",
        justifyContent: "center",
        borderRadius: 4,
    },
    LongButton: {
        height: 50,
        backgroundColor: "#04003C",
        justifyContent: "center",
        position: "absolute",
        left: 0, right: 0, bottom: 0,
    },
    BubbleCadastro: {
        paddingVertical: 40,
        backgroundColor: "#3326E0",
        borderBottomEndRadius: 60,
        borderBottomLeftRadius: 60,
        alignSelf: "center"
    }
})