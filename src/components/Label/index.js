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
import { Text } from 'react-native';

export default function Label({ fgColor }) {
  return (
    <Text style={{ color: fgColor }}>
      {children}
    </Text>
  );
}
