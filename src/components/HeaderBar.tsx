import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GridBgIcon from './GridBgIcon';
import ProfilePic from './ProfilePic';

interface HeaderProps {
  title?: string;
}
const HeaderBar: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <GridBgIcon
        name="menu"
        size={FONTSIZE.size_16}
        color={COLORS.primaryLightGreyHex}
      />
      <Text style={styles.headerText}>{title}</Text>

      <ProfilePic />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
