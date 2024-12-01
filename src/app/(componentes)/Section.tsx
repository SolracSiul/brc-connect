import Image from "next/image";

interface SectionProps {
  imageSrc?: string;
  imgSrc2?: string;
  title: string;
  description: string;
  isDark?: boolean;
  isReversed?: boolean;
}

const Section: React.FC<SectionProps> = ({
  imageSrc,
  title,
  description,
  isDark = false,
  isReversed = false,
  imgSrc2
}) => {
  return (
    <div className={`${
        isDark ? 'bg-[#E1ECFF] text-white' : 'bg-white text-gray-900'
      }`}>
    <section
      className={`max-w-[1200px] mx-auto flex flex-col justify-center items-center md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-6 px-6 py-10 ${
        isDark ? 'bg-[#E1ECFF] text-white' : 'bg-white text-gray-900'
      }`}
    >
      {imgSrc2 && (
        <div className="flex flex-col justify-center items-center w-full md:w-1/4  ">
          <Image
            src={imgSrc2}
            alt="Imagem menor"
            width={250}
            height={100}
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {imageSrc && (
        <div className="flex flex-col justify-center items-center w-full md:w-1/4 ">
          <Image
            src={imageSrc}
            alt={title}
            width={250}
            height={100}
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-[#B34B4B]">{title}</h2>
        <p className="text-justify text-[#7a2b2bfa]">{description}</p>
      </div>
    </section>
    </div>
  );
};

export default Section;
