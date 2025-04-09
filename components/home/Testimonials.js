'use client'
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [containerWidth, setContainerWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);
    const autoScrollRef = useRef(null);
    
    const testimonials = [
        {
            description: '"KaziPOS has transformed how I run my shop in Nakuru. Before, I struggled with tracking sales and managing stock, but now everything is so easy. I can see what\'s selling and what needs restocking with just a few taps. It\'s saved me hours every week"',
            name: "Felix",
            title: "Founder Lex",
            image: "/assets/Bookshop.jpg",
            isFirst: true
        },
        {
            description: '"As a small business owner in Mombasa, I needed something simple but powerful. KaziPOS gives me exactly that - I can manage my inventory, track daily sales, and even get reports on my best-selling items. The customer support is exceptional too!"',
            name: "Amina",
            title: "Owner, Coastal Crafts",
            image: "/assets/Bookshop.jpg",
            isFirst: false
        },
        {
            description: '"I was skeptical about switching to digital systems for my hardware store, but KaziPOS made the transition painless. Now I wonder how I ever managed without it. The ability to track payments and generate invoices instantly has improved my customer relationships."',
            name: "John",
            title: "Manager, Nairobi Hardware",
            image: "/assets/Bookshop.jpg",
            isFirst: false
        },
        {
            description: '"The inventory management feature alone is worth every shilling! I used to lose track of products and overorder or run out at the worst times. KaziPOS has helped me optimize my stock levels and increase my profits by at least 20%."',
            name: "Grace",
            title: "Proprietor, Eldoret Essentials",
            image: "/assets/Bookshop.jpg",
            isFirst: false
        },
        {
            description: '"As my business grew from one stall to three locations, KaziPOS scaled perfectly with me. I can monitor all my shops from one dashboard and make data-driven decisions. It\'s like having a business consultant in my pocket!"',
            name: "David",
            title: "CEO, Kisumu Retail Group",
            image: "/assets/Bookshop.jpg",
            isFirst: false
        }
    ];

    // Create a circular array by duplicating items for infinite scrolling
    const circularTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Update cards per view and container width based on screen size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setContainerWidth(width);
            
            // Set cards per view and adjust mobile state
            if (width < 640) {
                setCardsPerView(1);
                setIsMobile(true);
            } else if (width < 768) {
                setCardsPerView(1);
                setIsMobile(false);
            } else if (width < 1024) {
                setCardsPerView(2);
                setIsMobile(false);
            } else if (width < 1440) {
                setCardsPerView(3);
                setIsMobile(false);
            } else {
                setCardsPerView(4);
                setIsMobile(false);
            }
        };

        // Set initial values
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Reset to first slide when reaching the end of original testimonials
    useEffect(() => {
        if (currentSlide >= testimonials.length) {
            // Wait for animation to complete before resetting
            const timer = setTimeout(() => {
                setCurrentSlide(currentSlide % testimonials.length);
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, [currentSlide, testimonials.length]);

    // Auto-scrolling functionality
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
            }, 5000); // Change slide every 5 seconds
        };

        const stopAutoScroll = () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };

        // Start auto-scrolling
        startAutoScroll();

        // Cleanup
        return () => stopAutoScroll();
    }, [circularTestimonials.length]);

    const totalSlides = testimonials.length;

    const nextSlide = () => {
        clearInterval(autoScrollRef.current); // Reset auto-scroll when user interacts
        setCurrentSlide((prev) => 
            (prev + 1) % circularTestimonials.length
        );
        
        // Restart auto-scroll after user interaction
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    const prevSlide = () => {
        clearInterval(autoScrollRef.current); // Reset auto-scroll when user interacts
        setCurrentSlide((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
        
        // Restart auto-scroll after user interaction
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    const goToSlide = (slideIndex) => {
        clearInterval(autoScrollRef.current); // Reset auto-scroll when user interacts
        setCurrentSlide(slideIndex);
        
        // Restart auto-scroll after user interaction
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    // Calculate card dimensions and gap based on screen size
    const getCardDimensions = () => {
        // Base gap value
        let gap = 14;
        let cardWidth = 359; // Default from design

        // Adjust gap and card width based on screen size
        if (containerWidth < 640) {
            // Mobile: full width minus padding
            gap = 10;
            cardWidth = containerWidth - 40; // 20px padding on each side
        } else if (containerWidth < 768) {
            // Small tablets
            gap = 12;
            cardWidth = Math.min(359, containerWidth - 40); // Don't exceed original size
        } else if (containerWidth < 1024) {
            // Tablets
            gap = 14;
            const availableWidth = containerWidth - 60; // 30px padding on each side
            cardWidth = Math.min(359, (availableWidth - gap) / 2); // For 2 cards
        } else if (containerWidth < 1440) {
            // Small desktops
            gap = 14;
            const availableWidth = containerWidth - 80; // 40px padding on each side
            cardWidth = Math.min(359, (availableWidth - gap * 2) / 3); // For 3 cards
        } else {
            // Large desktops - use original design values
            cardWidth = 359;
        }

        return { cardWidth, gap };
    };

    const { cardWidth, gap } = getCardDimensions();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8 md:py-12">
            <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-10 relative">
                {/* Navigation Buttons - Hidden on mobile */}
                {!isMobile && (
                    <>
                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                            aria-label="Previous testimonials"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                            aria-label="Next testimonials"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Carousel Container */}
                <div 
                    ref={carouselRef}
                    className="overflow-hidden mx-auto"
                    style={{ 
                        maxWidth: `${cardsPerView * cardWidth + (cardsPerView - 1) * gap}px`,
                        margin: "0 auto"
                    }}
                >
                    {/* Testimonials */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${(currentSlide % testimonials.length) * (cardWidth + gap)}px)`,
                            gap: `${gap}px`
                        }}
                    >
                        {circularTestimonials.map((testimonial, index) => (
                            <div 
                                key={index} 
                                style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                            >
                                <TestimonialCard 
                                    description={testimonial.description} 
                                    name={testimonial.name} 
                                    title={testimonial.title} 
                                    image={testimonial.image} 
                                    isFirst={testimonial.isFirst}
                                    cardWidth={cardWidth}
                                    isMobile={isMobile}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center mt-6 md:mt-8 gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-colors ${
                                currentSlide % testimonials.length === index ? 'bg-red_reign' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

export const TestimonialCard = ({ description, name, title, image, isFirst = false, cardWidth, isMobile }) => {
    // Calculate text width proportionally based on the card width
    // Original design: 294px text width in a 359px card
    const textWidthRatio = 294 / 359;
    const textWidth = Math.floor(cardWidth * textWidthRatio);
  
    // Adjust height for mobile and different card widths
    const getCardHeight = () => {
      if (isMobile) {
        return 375; // Slightly shorter on mobile
      }
      // Scale height proportionally based on width
      const heightRatio = Math.min(1, cardWidth / 359);
      return Math.max(350, Math.floor(418 * heightRatio));
    };
  
    const cardHeight = getCardHeight();
  
    // Adjust padding and gap for smaller cards
    const getPadding = () => {
      if (cardWidth < 280) {
        return { px: 8, py: 32, gap: 20 };
      } else if (cardWidth < 320) {
        return { px: 10, py: 40, gap: 25 };
      } else {
        // Original values
        return { px: 12, py: 51, gap: 35 };
      }
    };
  
    const { px, py, gap } = getPadding();
  
    return (
      <div
        className={`${isFirst ? 'bg-red_reign' : 'bg-neutral-light'} flex flex-col justify-center items-center rounded-[25px] mx-auto transition-all duration-300`}
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          padding: `${py}px ${px}px`,
          gap: `${gap}px`,
        }}
      >
        {/* Text Container with Scroll */}
        <div className="flex-1 overflow-auto">
          <p
            className={`font-inter text-[15px] sm:text-[16px] leading-[26px] sm:leading-[32px] ${
              isFirst ? 'text-white' : 'text-red_reign'
            }`}
            style={{ width: `${textWidth}px` }}
          >
            {description}
          </p>
        </div>
  
        {/* Profile Div */}
        <div className="w-full">
          <div className="flex items-center gap-[15px]">
            <Image
              src={image}
              alt="Profile"
              width={55}
              height={55}
              className={`w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full border-[1px] ${
                isFirst ? 'border-white' : 'border-red_reign'
              }`}
            />
            <div
              className={`${isFirst ? 'text-white' : 'text-red_reign'} flex flex-col px-[15px] sm:px-[20px]`}
            >
              <h3 className="font-inter font-medium text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px]">
                {name}
              </h3>
              <p className="font-inter text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px]">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };