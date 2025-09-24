import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../../global/colors";
import FlatCard from "../../components/FlatCard";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import CyberText from "../../components/CyberTextComponent";
import { removeItemsCart, resetCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch();

  const FooterComponent = () => (
    <View style={styles.footerContainer}>
      <CyberText style={styles.footerTotal}>Total: $ {total} </CyberText>
      <View style={styles.footerButtonContainer}>
        <Pressable style={styles.confirmButton}>
          <CyberText style={styles.confirmButtonText}>Confirmar</CyberText>
        </Pressable>
        <Pressable style={styles.clearButton} onPress={() => dispatch(resetCart())}>
          <CyberText style={styles.clearButtonText}>Vaciar Carrito</CyberText>
        </Pressable>
      </View>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <FlatCard style={styles.cartContainer}>
      <View>
        <Image source={{ uri: item.mainImage }} style={styles.cartImage} resizeMode="cover" />
      </View>
      <View style={styles.cartDescription}>
        <CyberText style={styles.title}>{item.title}</CyberText>
        <CyberText style={styles.description}>{item.shortDescription}</CyberText>
        <CyberText style={styles.price}>Precio unitario: $ {item.price}</CyberText>
        <CyberText stlyle={styles.quantity}>Cantidad: {item.quantity}</CyberText>
        <CyberText style={styles.total}>Total: $ {item.quantity * item.price}</CyberText>
        <Pressable onPress={() => dispatch(removeItemsCart({ product: item, quantity: 1 }))}>
          <Icon name="delete" size={24} color={colors.red} style={styles.trashIcon} />
        </Pressable>
      </View>
    </FlatCard>
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
          ListHeaderComponent={<CyberText style={styles.cartScreenTitle}>Tu carrito:</CyberText>}
          ListFooterComponent={<FooterComponent />}
        />
      ) : (
        <View style={styles.centered}>
          <CyberText>Aún no hay productos en el carrito</CyberText>
        </View>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-start",
    margin: 16,
    alignItems: "center",
    gap: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  cartImage: {
    width: 80,
    height: 80,
  },
  cartDescription: {
    width: "80%",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    marginBottom: 16,
  },
  total: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "700",
  },
  trashIcon: {
    alignSelf: "flex-end",
    marginRight: 16,
  },
  footerContainer: {
    padding: 32,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footerButtonContainer: {
    flexDirection: "row",
    padding: 32,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footerTotal: {
    fontSize: 16,
    fontWeight: "700",
  },
  confirmButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.purple,
    borderRadius: 16,
    marginBottom: 24,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  clearButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.red,
    borderRadius: 16,
    marginBottom: 24,
  },
  clearButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  cartScreenTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 8,
  },
});
