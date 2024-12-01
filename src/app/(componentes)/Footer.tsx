import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-start bg-white text-black p-8 font-sans">
     
      <div className="flex-1 text-center border-r-2 border-white">
        <h2 className="text-xl font-bold mb-2">Créditos</h2>
        <p className="text-lg font-semibold">Professor Responsável</p>
        <p className="text-md">Bruno Rafael Vasconcelos</p>
      </div>
      <div className="w-px bg-white mx-4"></div>
      <div className="flex-1 text-center border-r-2 border-white">
        <h2 className="text-xl font-bold mb-1">Alunos</h2>
        <p className="text-md">Luis Carlos Rodrigues Silva</p>
        <p className="text-md">Hiandra Alves Costa</p>
        <p className="text-md">Diego dos Santos Silva</p>
      </div>
      <div className="w-px bg-white mx-4"></div>
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold mb-1">Apoiadores</h2>
        <p className="text-md">Unifacisa</p>
      </div>
    </div>
  );
};

export default Footer;
