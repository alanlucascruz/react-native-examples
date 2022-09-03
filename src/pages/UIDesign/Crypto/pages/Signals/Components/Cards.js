import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Seus Tokens</Text>

        <TouchableOpacity style={styles.orderContainer} activeOpacity={0.6}>
          <Text style={styles.textOrder}>Ordenar</Text>
          <MIcon name="unfold-more" size={24} color={Colors.lightGray} />
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView
          style={styles.scrollHoriz}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {[0, 1, 2, 3].map((item, index) => (
            <View
              style={[styles.card, {marginRight: 3 === index ? 32 : 16}]}
              key={index}>
              <View style={styles.cardTitleContainer}>
                <MCIcon name="bitcoin" size={36} color={Colors.yellow} />
                <View style={{marginLeft: 16}}>
                  <Text style={styles.textCardTitle}>Bitcoin</Text>
                  <View style={styles.cardSubtitleContainer}>
                    <Text
                      style={[
                        styles.textCardSubtitle,
                        styles.textCardSubtitlePercent,
                      ]}>
                      +11%
                    </Text>
                    <Text style={styles.textCardSubtitle}> em 30 min</Text>
                  </View>
                </View>
              </View>

              <View style={styles.cardBodyContainer}>
                <Text style={styles.textCardBody}>R$ 45.875,98</Text>
                <View style={styles.cardBodySeparator}></View>
                <Text style={styles.textCardBody}>-12,77 (20%)</Text>
              </View>

              <View style={styles.cardFooterContainer}>
                {['30min', '1h', '4h', '1d', '7d'].map((item, index) => (
                  <TouchableOpacity
                    style={styles.cardFooterFilter}
                    activeOpacity={0.6}
                    key={index}>
                    {index === 0 ? (
                      <Text
                        style={[
                          styles.textCardFooterFilter,
                          styles.textCardFooterFilterActive,
                        ]}>
                        {item}
                      </Text>
                    ) : (
                      <Text style={styles.textCardFooterFilter}>{item}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  textTitle: {
    color: Colors.light,
    fontSize: 21,
    fontWeight: '500',
  },
  orderContainer: {
    flexDirection: 'row',
  },
  textOrder: {
    color: Colors.lightGray,
    fontSize: 16,
    marginRight: 4,
  },
  scrollHoriz: {
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 48,
  },
  card: {
    backgroundColor: Colors.darkGray,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCardTitle: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitleContainer: {
    flexDirection: 'row',
  },
  textCardSubtitle: {
    color: Colors.lightGray,
  },
  textCardSubtitlePercent: {
    color: Colors.green,
    fontWeight: '700',
  },
  cardBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -24,
    paddingHorizontal: 24,
    marginVertical: 16,
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: Colors.darkGray2,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.darkGray2,
  },
  textCardBody: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: '500',
  },
  cardBodySeparator: {
    marginHorizontal: 16,
  },
  cardFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCardFooterFilter: {
    color: Colors.light,
    fontWeight: '500',
  },
  textCardFooterFilterActive: {
    backgroundColor: '#3d4863',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
