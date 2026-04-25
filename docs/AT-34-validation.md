# AT-34 - Evidencias e validacao

## Escopo da tarefa

- Estrutura de pastas em Clean Architecture.
- Navegacao com Stack Navigator e Tab Navigator.
- Projeto rodando em Android e iOS.

## Entrega implementada

- Estrutura em camadas criada em `src/`:
  - `domain/`
  - `application/`
  - `infrastructure/`
  - `presentation/`
  - `shared/`
- Navegacao base com Stack + Tabs (Home, Pecas, Veiculos, Servicos, Perfil).
- Tema do app aplicado em camada compartilhada.
- CI adicionada para build Android e iOS em GitHub Actions:
  - `.github/workflows/android-ci.yml`
  - `.github/workflows/ios-ci.yml`

## Validacao Android (local)

Status: bloqueado por ambiente local.

Diagnostico (`npx react-native doctor`):
- JDK encontrado: 24.0.2 (React Native suporta 17-20 para este setup).
- `adb` nao encontrado.
- `ANDROID_HOME`/`ANDROID_SDK_ROOT` nao configurados.
- Android Studio/SDK ausentes.

Erro observado em `run-android`: falha de Gradle por incompatibilidade de ambiente Java/Android.

## Validacao iOS

No Windows nao e possivel compilar iOS localmente.

Validacao configurada via CI em runner macOS (`ios-ci.yml`) para executar `pod install` e `xcodebuild` no simulador.

## Proximos passos para concluir 100%

1. Configurar ambiente Android local (JDK 17 + Android SDK + adb + emulador).
2. Rodar `npx react-native run-android` com emulador ativo.
3. Executar CI da PR e anexar status (Android/iOS) no Jira.
4. Mover a task para Done apos evidencias de build verde.
