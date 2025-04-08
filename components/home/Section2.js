import Image from 'next/image';

const SectionLayout = ({ title, description, image, isReversed }) => {
    return (  
        <div className={`w-[90%] flex flex-col${isReversed ? '-reverse' : ''} md:flex-row${isReversed ? '-reverse' : ''} items-start justify-between gap-[61px] p-5 mx-[64px]`}>  
            {/* Left  */}
            <div className='flex flex-col gap-[31px] w-[493px]'>
                <h3 className='font-inter font-medium text-[36px] leading-[120%]'>{title}</h3>
                    <p className='font-inter text-[18px] leading-[32px]'>{description}</p>
            </div>
            {/* Right  */}
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="w-[645px] h-[619px]"   
            />
        </div>
    );
}
 
export default SectionLayout;
