#!/bin/bash

# Vercel build script for Fernando Feijoo portfolio
echo "🚀 Starting Vercel build process..."

# Set Node.js version
export NODE_VERSION="18.17.1"
echo "📦 Using Node.js version: $NODE_VERSION"

# Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Install dependencies with specific flags for Vercel
echo "📥 Installing dependencies..."
npm ci --production=false --silent

# Install Rollup binaries explicitly
echo "🔧 Installing Rollup binaries..."
npm install @rollup/rollup-linux-x64-gnu --save-optional --silent

# Set memory options for Node.js
export NODE_OPTIONS="--max-old-space-size=4096"

# Run Astro build
echo "🏗️ Building Astro project..."
npm run build

echo "✅ Build completed successfully!"
