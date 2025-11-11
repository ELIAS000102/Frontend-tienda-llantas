
// components/NavBar.tsx
import {
  ExternalPathString,
  RelativePathString,
  useRouter,
  useSegments,
} from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomNavBar() {
  const router = useRouter();
  const segments = useSegments();

  // 'segments.pop()' o 'segments[segments.length - 1]' te da la ruta activa.
  // Usamos 'index' como default si 'segments' está vacío.
  const activeRoute = segments[segments.length - 1] || "home";

  // Función para navegar. Usamos 'replace' para que no haya un botón "atrás"
  const navigateTo = (
    path: RelativePathString | ExternalPathString | "/home" | "/setting"
  ) => {
    router.push(path);
  };

  return (
    // SafeAreaView asegura que la barra no se ponga debajo de la hora/batería
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.navBar}>
        {/* Lado Izquierdo: La Marca */}
        <Text style={styles.brand}>Mi App</Text>

        {/* Lado Derecho: Los Enlaces */}
        <View style={styles.linksContainer}>
          <Pressable onPress={() => navigateTo("/home")}>
            {/* 'index' se refiere a app/index.tsx */}
            <Text
              style={[
                styles.link,
                activeRoute === "home" && styles.linkActive,
              ]}
            >
              Home
            </Text>
          </Pressable>

          <Pressable onPress={() => navigateTo("/setting")}>
            {/* 'ajustes' se refiere a app/ajustes.tsx */}
            <Text
              style={[
                styles.link,
                activeRoute === "setting" && styles.linkActive,
              ]}
            >
              Productos
            </Text>
          </Pressable>

          {/* Puedes añadir más enlaces si creas más pantallas */}
          {/* <Pressable onPress={() => navigateTo('/link')}>
            <Text style={[styles.link, activeRoute === 'link' && styles.linkActive]}>
              Link
            </Text>
          </Pressable> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

// Estilos para que se parezca a la imagen de React-Bootstrap
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000000ff", // Color oscuro de fondo
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0e75dbff",
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: "100%",
  },
  brand: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000ff",
    position: "static",
  },
  linksContainer: {
    position: "relative",
    marginLeft: "auto", // Empuja los enlaces a la derecha
    flexDirection: "row",

  },
  link: {
    color: "rgba(255, 255, 255, 0.55)", // Color de enlace inactivo
    marginLeft: 20, // Espacio entre enlaces
    fontSize: 16,
  },
  linkActive: {
    color: "#ffffff", // Color de enlace activo
    fontWeight: "500",
  },
});
