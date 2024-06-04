/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sign-in/[[...sign-in]]',
        destination: '/app/sign-in/[[...sign-in]]/page',
      },
      {
        source: '/sign-up/[[...sign-up]]',
        destination: '/app/sign-up/[[...sign-up]]/page',
      },
      // Add more rewrites as needed
    ];
  },
};

export default nextConfig;