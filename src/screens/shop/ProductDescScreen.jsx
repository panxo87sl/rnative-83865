import { StyleSheet, View, Pressable, Image, ScrollView, useWindowDimensions } from "react-native";
import { colors } from "../../global/colors";
import { useDispatch, useSelector } from "react-redux";
import CyberText from "../../components/CyberTextComponent";
import { addItemCart } from "../../store/slices/cartSlice";

const ProductDescScreen = () => {
  const product = useSelector((state) => state.shopReducer.productSelected);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.productContainer}>
      <CyberText>{product.brand}</CyberText>
      <CyberText style={styles.textTitle}>{product.title}</CyberText>
      <Image
        source={{ uri: product.mainImage }}
        alt={product.title}
        width="100%"
        height={width * 0.7}
        resizeMode="contain"
      />
      <CyberText style={styles.longDescription}>{product.longDescription}</CyberText>
      <View style={styles.tagsContainer}>
        <View style={styles.tags}>
          <CyberText style={styles.tagText}>Tags : </CyberText>
          {product.tags?.map((tag) => (
            <CyberText key={Math.random()} style={styles.tagText}>
              {tag}
            </CyberText>
          ))}
        </View>

        {product.discount > 0 && (
          <View style={styles.discount}>
            <CyberText style={styles.discountText}>-{product.discount}%</CyberText>
          </View>
        )}
      </View>
      {product.stock <= 0 && <CyberText style={styles.noStockText}>Sin Stock</CyberText>}
      <CyberText style={styles.price}>Precio: ${product.price}</CyberText>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1 }, styles.addToCartButton]}
        onPress={() => dispatch(addItemCart({ product: product, quantity: 1 }))}
      >
        <CyberText style={styles.textAddToCart}>Agregar al carrito</CyberText>
      </Pressable>
    </ScrollView>
  );
};

export default ProductDescScreen;

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  textBrand: {
    color: colors.grisOscuro,
  },
  textTitle: {
    fontSize: 24,
  },
  longDescription: {
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  tags: {
    flexDirection: "row",
    gap: 5,
  },
  tagText: {
    fontSize: 14,
    color: colors.purple,
  },
  discount: {
    backgroundColor: colors.brightOrange,
    width: 52,
    height: 52,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    color: colors.white,
    textAlign: "center",
    verticalAlign: "center",
  },
  noStockText: {
    color: colors.red,
  },
  price: {
    fontSize: 24,
    alignSelf: "center",
    paddingVertical: 16,
  },
  addToCartButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.purple,
    borderRadius: 16,
    marginVertical: 16,
  },
  textAddToCart: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
  },
});
