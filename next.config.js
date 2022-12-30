/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://akamai-aws-s3-ibin-bucket.lokicdn.com"],
  },
};

module.exports = nextConfig;
