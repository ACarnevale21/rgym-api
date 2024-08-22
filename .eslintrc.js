export default {
  parser: '@typescript-eslint/parser', // Especifica el parser para TypeScript
  extends: [
    'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript
    'prettier', // Desactiva las reglas de ESLint que pueden entrar en conflicto con Prettier
    'prettier/@typescript-eslint', // Desactiva reglas específicas de TypeScript que pueden entrar en conflicto con Prettier
  ],
  plugins: ['@typescript-eslint', 'prettier'], // Plugins para TypeScript y Prettier
  rules: {
    'prettier/prettier': 'error', // Muestra errores cuando el código no sigue el formato de Prettier
    '@typescript-eslint/explicit-function-return-type': 'off', // Desactiva la necesidad de declarar el tipo de retorno explícitamente
    '@typescript-eslint/no-explicit-any': 'off', // Permite el uso de "any"
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
