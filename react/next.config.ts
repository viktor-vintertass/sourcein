import type { NextConfig } from "next";

const path = require('path');

const nextConfig: NextConfig = {
  distDir: path.join(__dirname, '..', '.next') // outputs one folder up
  output: "export"
};

export default nextConfig;
