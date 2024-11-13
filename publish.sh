#!/bin/bash

echo "Removing cache.."
sudo rm -rf .next/*

echo "Rebuilding.."
npm run build

echo "Pausing container.."
docker container pause $(docker ps --filter "name=website*" -q)

echo "Removing cache & copying new content.."
sudo rm -rf .next-live/*
cp -r .next/* .next-live

echo "Restarting container.."
docker container restart $(docker ps --filter "name=website*" -q)

