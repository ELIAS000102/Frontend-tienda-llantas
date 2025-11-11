import { Stack } from 'expo-router';
import CustomNavBar from '../components/NavBar'; // Importa tu barra

export default function AppLayout() {
  return (
    // Esto es un Stack Navigator
    <Stack
      // Opciones aplicadas a todas las pantallas dentro del Stack
      screenOptions={{
        animation: 'fade', // Animación de transición

        // Aquí está la magia:
        // Le decimos al Stack que renderice NUESTRO componente
        // en lugar de la cabecera por defecto.
        header: () => <CustomNavBar/>,
      }}
    >
      {/* Estas son las pantallas que se cargarán dentro del Layout.
        No necesitan más configuración porque ya la hicimos en 'screenOptions'.
        Cuando navegues entre 'index' y 'ajustes', la barra de arriba
        NO se moverá, solo se actualizará el estado "activo" del enlace.
      */}
      <Stack.Screen name="home" />
      <Stack.Screen name="setting" />

    </Stack>
  );
}