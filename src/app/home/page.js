'use client';
import React from 'react'
import Earth from './components/Earth';
import Moon from './components/Moon';
import Mars from './components/Mars';
import SpaceSystem from './components/SpaceSystem';

export default function Home() {
  return (
    <div>
      <Earth />
      <Moon />
      <Mars />
      <SpaceSystem />
    </div>
  )
}
