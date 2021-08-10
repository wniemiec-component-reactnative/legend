/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Box from '../Box';
import Label from '../Label';

export default function LegendItem({ key, text, bgColor, fgColor }) {
  return (
    <View key={key} style={styles.legendItem}>
      <Box bgColor={bgColor} />
      <Label fgColor={fgColor}>
        {text}
      </Label>
    </View>
  );
}
