import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    position: 'absolute',
    top: 9,
    left: 14,
    zIndex: 3,
  },
  textInput: {
    width: 335,
    height: 40,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingHorizontal: 36,
  },
});

export default styles;
