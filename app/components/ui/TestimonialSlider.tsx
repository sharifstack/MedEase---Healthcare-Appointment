import Image from "next/image";

const TestimonialSlider = ({
  src,
  alt,
  docName,
  docSpeciality,
  docDesc,
}: {
  src: string;
  alt: string;
  docName: string;
  docSpeciality: string;
  docDesc: string;
}) => {
  return (
    <div className="flex justify-center gap-2 hover:scale-102 transition-transform duration-300 cursor-pointer">
      <div>
        <Image width={318} height={368} src={src} alt={alt} />
      </div>
      <div className="flex flex-col px-6 py-10 rounded-2xl bg-background w-136.5">
        <div>
          <p className="font-medium text-2xl ">{docDesc}</p>

          <h4 className="font-medium text-2xl text-primary pt-10 pb-1">
            {docName}
          </h4>
          <h6 className="font-normal text-lg text-secondary">
            {docSpeciality}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
