import React from "react";
import Header from "./(componentes)/Header";
import Section from "./(componentes)/Section";
import Footer from "./(componentes)/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-4">
        <Section
          imageSrc="/device.jpg"
          imgSrc2="/device02.jpg"
          title="Desafio"
          description="A ideia surge da necessidade de unir vendedores e compradores que desejam desapegar de produtos que ainda estão em bom uso, mas que sentem dificuldade de encontrar uma plataforma segura."
          isDark={true}
          isReversed
        />
        <Section
          imageSrc="/codigo02.jpg"
          imgSrc2="/codigo01.jpg"
          title="Desenvolvimento"
          description="Aplicação desenvolvida utilizando o react-native com compatibilidade para dispositivos ios e android. "
        />
        <Section
          imageSrc="/solution02.jpg"
          imgSrc2="/srs.jpg"
          title="Solução"
          description="O aplicativo surge como uma alternativa para promover um ambiente seguro de negociação. Tornando a experiência do usuário basilar ao seu desenvolvimento!"
          isDark={true}
          isReversed
        />
      </main>
      <Footer />
    </div>
  );
}
