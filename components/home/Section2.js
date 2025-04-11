import Image from 'next/image';

const SectionLayout = ({ title, description, image, isReversed }) => {
    return (
        <div
            className={`mx-auto  my-12 flex flex-col-reverse ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            } justify-between items-center md:items-start  gap-10 md:gap-[100px] 2xl:gap-[180px]`}
        >
            {/* Text Section */}
            <div className="flex flex-col gap-6 w-full md:max-w-[641px] 2xl:max-w-[700px]">
                <h3 className="font-inter font-medium text-xl sm:text-3xl md:text-[36px] 2xl:text-[48px] leading-snug md:leading-[120%]">
                    {title}
                </h3>
                <p className="font-inter text-xs sm:text-lg md:text-[18px] 2xl:text-[20px] leading-relaxed md:leading-[32px] 2xl:leading-[36px]">
                    {description}
                </p>
            </div>

            {/* Image Section */}
            <div className="w-[75%] max-w-sm sm:max-w-lg md:max-w-[415.12px]">
                <div className="relative w-full aspect-[415.12/392]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionLayout;
