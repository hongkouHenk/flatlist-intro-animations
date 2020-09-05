import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  cover: ViewStyle;
  title: TextStyle;
  footerView: ViewStyle;
  footerLabel: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 200,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cover: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#1D88EB',
    opacity: 0.8,
  },
  title: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    fontSize: 18,
    padding: 16,
    color: 'white',
    fontWeight: '600',
  },
  footerView: { flex: 1, justifyContent: 'center', paddingLeft: 16 },
  footerLabel: { fontWeight: '600', color: '#1D88EB' },
});

export default styles;
