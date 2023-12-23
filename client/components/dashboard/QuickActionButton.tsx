import { TouchableOpacity, Text, View } from 'react-native';
import { RCard } from '@packrat/ui';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { theme } from '../../theme';
import useTheme from '../../hooks/useTheme';
import useCustomStyles from '~/hooks/useCustomStyles';

const QuickActionButton = ({ onPress, iconName, text }) => {
  const styles = useCustomStyles(loadStyles);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <RCard elevate style={styles.card}>
        <RCard.Header padded alignItems="center">
          <MaterialIcons
            name={iconName}
            size={24}
            color={theme.colors.iconColor}
            style={styles.icon}
          />
          <Text style={styles.text}>{text}</Text>
        </RCard.Header>
      </RCard>
    </TouchableOpacity>
  );
};

const loadStyles = (theme) => {
  const { currentTheme } = theme;
  return {
    container: {
      marginRight: 10,
    },
    card: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
      paddingVertical: 60,
      backgroundColor: currentTheme.colors.primary,
    },
    icon: {
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      color: currentTheme.colors.iconColor,
    },
  };
};

export default QuickActionButton;
