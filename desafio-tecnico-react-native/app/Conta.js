import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>américanas</Text>
      </View>

      {/* Mensagem central */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Para uma melhor experiência,{"\n"}
          entre ou cadastre-se
        </Text>
      </View>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Cadastrar conta</Text>
      </TouchableOpacity>

      {/* Opção de login */}
      <TouchableOpacity style={styles.loginOption}>
        <Text style={styles.loginOptionText}>- Entrar com e-mail</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Aviso de Privacidade</Text>
          <Text style={styles.footerText}>Suporte</Text>
        </View>
        <Text style={styles.footerText}>Ks Desenvolvido por Kobe v11.2/9/5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e60014',
    textTransform: 'lowercase',
  },
  messageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  registerButton: {
    backgroundColor: '#e60014',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginOption: {
    padding: 10,
    alignItems: 'center',
  },
  loginOptionText: {
    color: '#e60014',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});