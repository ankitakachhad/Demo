import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Colors} from '../../assest/assestRoot';
import useCheckoutHook from './CheckoutHook';
import {styles} from './CheckoutScreenStyles';
import moment from 'moment';
import {currency} from '../../utils/utils';
import { Button } from '../../component/componentRoot';

const CheckoutScreen = () => {
  const {navigation,createRazorPayOrder} = useCheckoutHook();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Checkout`,
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailcontainer}>
        <Text style={styles.dateText}>
          {moment().format('Do MMMM YYYY, LT')}
        </Text>

        <View style={styles.alignrow}>
          <Text style={styles.order}>Order ID :</Text>
          <Text style={styles.value}>123</Text>
        </View>

        <View style={styles.alignrow}>
          <Text style={styles.order}>No.Items </Text>
          <Text style={styles.value}>2</Text>
        </View>
        <View style={styles.separator} />
        <View style={{gap: 15}}>
          <View style={styles.priceDetailsRow}>
            <Text style={styles.priceLabel}>Product Items Price</Text>
            <Text style={styles.priceValue}>{currency(43)}</Text>
          </View>
          <View style={styles.priceDetailsRow}>
            <Text style={styles.priceLabel}>Delivery Charge</Text>
            <Text style={styles.priceValue}>{currency(0)}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.priceDetailsRow}>
          <Text style={styles.grandTotalLabel}>Grand Total</Text>

          <Text style={styles.grandTotalAmountText}>{currency(100)}</Text>
        </View>
      </View>
      <Button title='Pay' buttonStyle={{marginTop:40}} onPress={createRazorPayOrder}/>
    </View>
  );
};

export default CheckoutScreen;
