import Card from "@/components/Card"
import React from 'react';
import Button from '../components/Button';
  
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small - Rounded Sm" styles="text-sm rounded-sm px-3 py-1" />
        <Button title="Small - Rounded Md" styles="text-sm rounded-md px-3 py-1" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full px-3 py-1" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium - Rounded Sm" styles="text-base rounded-sm px-4 py-2" />
        <Button title="Medium - Rounded Md" styles="text-base rounded-md px-4 py-2" />
        <Button title="Medium - Rounded Full" styles="text-base rounded-full px-4 py-2" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large - Rounded Sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large - Rounded Md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large - Rounded Full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </main>
  );
};

export default Landing;
