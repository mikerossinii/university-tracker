#!/bin/bash

echo "🎓 University Tracker - Setup Script"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js non è installato!"
    echo "Installa Node.js da: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js trovato: $(node --version)"
echo "✅ npm trovato: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installazione dipendenze..."
echo ""

echo "1/3 Installazione dipendenze root..."
npm install

echo ""
echo "2/3 Installazione dipendenze client..."
cd client && npm install && cd ..

echo ""
echo "3/3 Creazione file .env..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ File .env creato"
else
    echo "ℹ️  File .env già esistente"
fi

echo ""
echo "✅ Setup completato!"
echo ""
echo "🚀 Per avviare l'app:"
echo "   npm run dev"
echo ""
echo "📚 Guide disponibili:"
echo "   - QUICK_START.md - Guida rapida"
echo "   - DEPLOYMENT_GUIDE.md - Deploy su Render"
echo "   - COME_AGGIUNGERE_UNIVERSITA.md - Aggiungere università"
echo ""
echo "Buon lavoro! 🎉"
