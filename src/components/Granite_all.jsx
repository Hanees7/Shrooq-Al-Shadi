import React from "react";
import { useParams } from "react-router-dom";

const GraniteDetail = () => {
  const { id } = useParams(); // Fetch the dynamic route parameter

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">Granite Detail</h1>
      <p className="text-gray-600 mt-4">
        You are viewing details for granite ID: <strong>{id}</strong>.
      </p>
    </div>
  );
};

export default GraniteDetail;
