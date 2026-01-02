#!/bin/bash

# Personality Test App - Setup Script
echo "🚀 Setting up Personality Test Application..."
echo ""

# Check Node version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js >= 18.0.0 required. You have $(node -v)"
    exit 1
fi
echo "✅ Node.js $(node -v) detected"
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 pnpm not found. Installing pnpm..."
    npm install -g pnpm
    echo "✅ pnpm installed"
else
    echo "✅ pnpm $(pnpm -v) detected"
fi
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install
echo ""

# Run type check
echo "🔍 Type checking..."
pnpm type-check
if [ $? -ne 0 ]; then
    echo "⚠️  Type check warnings found (but continuing...)"
fi
echo ""

# Run tests
echo "🧪 Running tests..."
pnpm test
if [ $? -ne 0 ]; then
    echo "❌ Some tests failed. Please fix them before proceeding."
    exit 1
fi
echo "✅ All tests passed!"
echo ""

# Success message
echo "✨ Setup complete! Your app is ready."
echo ""
echo "🎯 Next steps:"
echo "   pnpm dev          - Start development server"
echo "   pnpm test:watch   - Run tests in watch mode"
echo "   pnpm build        - Build for production"
echo ""
echo "🌐 The app will be available at: http://localhost:3000"
echo ""
