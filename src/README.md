# Estrutura Clean Architecture (MVP)

## Camadas

- `domain/`: entidades e regras de negocio.
- `application/`: casos de uso, estado e orquestracao.
- `infrastructure/`: integracoes externas (API, storage).
- `presentation/`: telas, componentes e navegacao.
- `shared/`: tema, constantes e utilitarios compartilhados.

## Regra de dependencia

As camadas externas dependem das internas.
A `presentation` deve consumir `application`.
A `application` pode usar `domain` e abstrair `infrastructure`.
