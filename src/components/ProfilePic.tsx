import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.imageCOntainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  imageCOntainer: {
    borderRadius: SPACING.space_12,
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  image: {
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});
