/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Habilita o modo estrito do React
    webpack(config, { isServer }) {
      // Aqui você pode modificar o comportamento do Webpack, se necessário.
      return config;
    },
    // Se você estiver usando imagens externas, adicione as configurações aqui
    images: {
      domains: ['example.com'],
    },
  };
  
  export default nextConfig;