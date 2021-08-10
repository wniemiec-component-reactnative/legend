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
import LegendItem from '../components/LegendItem';

/**
 * Displays the meaning of a set of colors.
 * 
 * @param    {array: object} [mapping=[{color: '', label: ''}]] Mapping 
 * containing the meaning (label) of each color
 * @param    {string} [fgColor='#555'] Text color
 */
export default function Legend({ 
  mapping=[{color: '', label: ''}], 
  fgColor='#555' 
}) {
  return (
    <View style={styles.area}>
      {mapping.map((item, index) => (
        <LegendItem 
          key={index} 
          text={item.label} 
          bgColor={item.color} 
          fgColor={fgColor} 
        />
      ))}
    </View>
  );
}
