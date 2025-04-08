const FeatureCard = ({ icon, title, description, className }) => {
  return (
    // <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48">
    <div className={`absolute bg-white w-[262px] h-[118px] rounded-[30px] px-[25px] py-[26px] flex flex-col gap-[10px] ${className}`}>
      <div className="flex items-center gap-[10px]">
        <p>{icon}</p>
        <h3 className="text-red_republic text-[12px] font-inter">{title}</h3>
      </div>
      <p className="text-neutral-dark text-[14px]">{description}</p>
    </div>
  );
};

export default FeatureCard;
