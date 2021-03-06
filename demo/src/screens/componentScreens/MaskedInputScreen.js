import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import _ from 'lodash';
import {
  View,
  Assets,
  Constants,
  Button,
  Colors,
  Text,
  TextInput,
  TextArea,
  Typography,
  MaskedInput,
} from 'react-native-ui-lib'; //eslint-disable-line
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class MaskedInputScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  renderTimeText(value) {
    const paddedValue = _.padStart(value, 4, '0');
    const hours = paddedValue.substr(0, 2);
    const minutes = paddedValue.substr(2, 2);

    return (
      <Text text20 dark20 center>
        {hours}
        <Text red10>h</Text>
        {minutes}
        <Text red10>m</Text>
      </Text>
    );
  }

  renderPrice(value) {
    const hasValue = Boolean(value && value.length > 0);
    return (
      <View row center>
        <Text text30 dark50>-</Text>
        <Text text30 dark10={hasValue} dark60={!hasValue}>
          {hasValue ? value : '00'}
        </Text>
        <Text text80 dark60>$</Text>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
        getTextInputRefs={() => [this.noUnderline, this.hugeText]}
      >
        <Text text40 marginB-20>
          Masked Inputs
        </Text>

        <Text text70 marginT-20>
          Time Format
        </Text>
        <MaskedInput
          renderMaskedText={this.renderTimeText}
          caretHidden
          keyboardType={'numeric'}
          maxLength={4}
        />
        <Text text70 marginT-40>
          Price/Discount
        </Text>
        <MaskedInput
          renderMaskedText={this.renderPrice}
          caretHidden
          keyboardType={'numeric'}
        />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 25,
  },
  title: {
    ...Typography.text20,
  },
  header: {
    ...Typography.text60,
    marginVertical: 20,
  },
});
