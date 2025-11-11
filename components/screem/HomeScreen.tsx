import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>MEGA LLANTAS</Text>
        <Text style={styles.heroSubtitle}>Luana</Text>
        <Text style={styles.heroDescription}>Llantas y accesorios para tu auto</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Encuentra tus llantas</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar por tamaño</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Llantas</Text>
          <Text style={styles.categorySubtext}>Todos los tipos</Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Accesorios</Text>
          <Text style={styles.categorySubtext}>Para tu auto</Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Servicios</Text>
          <Text style={styles.categorySubtext}>Instalación</Text>
        </View>
      </View>

      {/* Marcas */}
      <View style={styles.brandSection}>
        <Text style={styles.sectionTitle}>Marcas disponibles</Text>
        <View style={styles.brandGrid}>
          <View style={styles.brandItem}>
            <Text style={styles.brandName}>DUNLOP</Text>
          </View>
          <View style={styles.brandItem}>
            <Text style={styles.brandName}>GOODYEAR</Text>
          </View>
          <View style={styles.brandItem}>
            <Text style={styles.brandName}>KUMHO</Text>
          </View>
          <View style={styles.brandItem}>
            <Text style={styles.brandName}>JINYU</Text>
          </View>
        </View>
      </View>

      {/* Benefits */}
      <View style={styles.benefitsSection}>
        <Text style={styles.sectionTitle}>Por qué elegirnos</Text>
        
        <View style={styles.benefitItem}>
          <Text style={styles.benefitTitle}>Garantía garantizada</Text>
          <Text style={styles.benefitText}>Toda nuestras llantas incluyen garantía</Text>
        </View>

        <View style={styles.benefitItem}>
          <Text style={styles.benefitTitle}>Entrega rápida</Text>
          <Text style={styles.benefitText}>Servicio de instalación a domicilio</Text>
        </View>

        <View style={styles.benefitItem}>
          <Text style={styles.benefitTitle}>Mejor precio</Text>
          <Text style={styles.benefitText}>Garantizamos los mejores precios del mercado</Text>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Contactar</Text>
        </TouchableOpacity>
        <Text style={styles.ctaText}>+1 (555) 123-4567</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Mega Llantas Luana</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Hero Section
  hero: {
    backgroundColor: "#FFD700",
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "900",
    color: "#000000",
    letterSpacing: -1,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#DC143C",
    marginTop: 4,
    letterSpacing: 2,
  },
  heroDescription: {
    fontSize: 14,
    color: "#000000",
    marginTop: 12,
    fontWeight: "500",
  },

  // Search Section
  searchSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: "#000000",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // Categories
  categoriesSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  categoryCard: {
    backgroundColor: "#F9F9F9",
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#DC143C",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  categorySubtext: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },

  // Brands
  brandSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  brandItem: {
    width: "48%",
    backgroundColor: "#F0F0F0",
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  brandName: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
  },

  // Benefits
  benefitsSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  benefitItem: {
    marginBottom: 24,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DC143C",
    marginBottom: 6,
  },
  benefitText: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },

  // CTA Section
  ctaSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  ctaButton: {
    backgroundColor: "#DC143C",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 4,
    marginBottom: 12,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  ctaText: {
    fontSize: 14,
    color: "#666666",
  },

  // Footer
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#999999",
  },
});