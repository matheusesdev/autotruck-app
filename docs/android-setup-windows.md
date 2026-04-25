# Android setup no Windows (React Native CLI)

## 1) Instalar JDK 17

Instale JDK 17 (Temurin ou Oracle) e configure:

- `JAVA_HOME` apontando para o JDK 17
- `%JAVA_HOME%\\bin` no `Path`

Verifique:

```powershell
java -version
```

Esperado: versao 17.x.

## 2) Instalar Android Studio + SDK

No Android Studio, instale:
- Android SDK Platform (API recomendada pelo projeto)
- Android SDK Build-Tools
- Android SDK Platform-Tools
- Android Emulator

## 3) Configurar variaveis de ambiente

Exemplo (ajuste o caminho conforme sua maquina):

```powershell
setx ANDROID_HOME "C:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk"
setx ANDROID_SDK_ROOT "C:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk"
setx PATH "$env:PATH;C:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk\\emulator"
```

Feche e abra o terminal.

## 4) Criar e iniciar emulador

No Android Studio Device Manager, crie um AVD e inicie.

Valide:

```powershell
adb devices
```

## 5) Rodar o app

Na raiz do projeto:

```powershell
npm install
npx react-native doctor
npx react-native run-android
```

Se falhar, rode:

```powershell
cd android
.\\gradlew clean
cd ..
npx react-native run-android
```
