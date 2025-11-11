import { Redirect } from 'expo-router';

export default function NotFoundScreen() {
  // Esto redirigirá cualquier ruta no encontrada a la pantalla 'index'
  return <Redirect href="/home" />;
}