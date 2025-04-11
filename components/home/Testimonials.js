'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [slideWidth, setSlideWidth] = useState(0);
    const autoScrollRef = useRef(null);
    const carouselRef = useRef(null);

    const testimonials = [
        {
            description: '"KaziPOS has transformed how I run my shop in Nakuru. Before, I struggled with tracking sales and managing stock, but now everything is so easy. I can see what\'s selling and what needs restocking with just a few taps. It\'s saved me hours every week"',
            name: "Felix",
            title: "Founder Lex",
            image: "/assets/Bookshop.jpg"
        },
        {
            description: '"As a small business owner in Mombasa, I needed something simple but powerful. KaziPOS gives me exactly that - I can manage my inventory, track daily sales, and even get reports on my best-selling items. The customer support is exceptional too!"',
            name: "Amina",
            title: "Owner, Coastal Crafts",
            image: "/assets/Bookshop.jpg"
        },
        {
            description: '"I was skeptical about switching to digital systems for my hardware store, but KaziPOS made the transition painless. Now I wonder how I ever managed without it. The ability to track payments and generate invoices instantly has improved my customer relationships."',
            name: "John",
            title: "Manager, Nairobi Hardware",
            image: "/assets/Bookshop.jpg"
        },
        {
            description: '"The inventory management feature alone is worth every shilling! I used to lose track of products and overorder or run out at the worst times. KaziPOS has helped me optimize my stock levels and increase my profits by at least 20%."',
            name: "Grace",
            title: "Proprietor, Eldoret Essentials",
            image: "/assets/Bookshop.jpg"
        },
        {
            description: '"As my business grew from one stall to three locations, KaziPOS scaled perfectly with me. I can monitor all my shops from one dashboard and make data-driven decisions. It\'s like having a business consultant in my pocket!"',
            name: "David",
            title: "CEO, Kisumu Retail Group",
            image: "/assets/Bookshop.jpg"
        }
    ];

    const circularTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

    // Calculate responsive values (unchanged)
    useEffect(() => {
        const updateCarouselDimensions = () => {
            const width = window.innerWidth;
            let cardsToShow = 4;
            let cardWidth = 300;
            let gapSize = 20;

            if (width < 640) {
                cardsToShow = 1;
                cardWidth = Math.min(300, width - 40);
                gapSize = 16;
            } else if (width < 768) {
                cardsToShow = 1;
                cardWidth = Math.min(320, width - 40);
                gapSize = 16;
            } else if (width < 1024) {
                cardsToShow = 2;
                cardWidth = Math.min(320, (width - 60 - gapSize) / 2);
                gapSize = 20;
            } else if (width < 1280) {
                cardsToShow = 3;
                cardWidth = Math.min(320, (width - 80 - gapSize * 2) / 3);
                gapSize = 20;
            } else {
                cardsToShow = 4;
                cardWidth = Math.min(320, (width - 100 - gapSize * 3) / 4);
                gapSize = 20;
            }

            setCardsPerView(cardsToShow);
            setSlideWidth(cardWidth + gapSize);

            if (carouselRef.current) {
                const cards = carouselRef.current.querySelectorAll('.testimonial-card');
                cards.forEach(card => {
                    card.style.width = `${cardWidth}px`;
                    card.style.marginRight = `${gapSize}px`;
                });
            }
        };

        updateCarouselDimensions();
        window.addEventListener('resize', updateCarouselDimensions);

        return () => {
            window.removeEventListener('resize', updateCarouselDimensions);
        };
    }, []);

    // Auto-scrolling (unchanged)
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
            }, 5000);
        };

        startAutoScroll();

        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };
    }, []);

    // Handle hold start and end
    const handleHoldStart = (e) => {
        if (!e.target.closest('.nav-button') && autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
            document.addEventListener('mouseup', handleHoldEnd);
            document.addEventListener('touchend', handleHoldEnd);
        }
    };

    const handleHoldEnd = () => {
        if (!autoScrollRef.current) {
            autoScrollRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
            }, 5000);
        }
        document.removeEventListener('mouseup', handleHoldEnd);
        document.removeEventListener('touchend', handleHoldEnd);
    };

    // Attach hold event listeners
    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('mousedown', handleHoldStart);
            carousel.addEventListener('touchstart', handleHoldStart);

            return () => {
                carousel.removeEventListener('mousedown', handleHoldStart);
                carousel.removeEventListener('touchstart', handleHoldStart);
                document.removeEventListener('mouseup', handleHoldEnd);
                document.removeEventListener('touchend', handleHoldEnd);
            };
        }
    }, []);

    const nextSlide = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    const prevSlide = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        setCurrentSlide(prev => (prev - 1 + circularTestimonials.length) % circularTestimonials.length);
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    const goToSlide = (index) => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        const targetIndex = testimonials.length + index;
        setCurrentSlide(targetIndex);
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % circularTestimonials.length);
        }, 5000);
    };

    const displayedSlide = currentSlide % testimonials.length;

    return (
        <div className="flex flex-col items-center justify-center mb-[162px]">
            <h1 className="text-red_republic md:pt-[16px] pb-10 sm:pb-16 md:pb-20 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-inter text-center">
                <span>We let Our <span className="text-red_reign">Clients Success</span></span>
                <br />
                <span>Speak for us</span>
            </h1>

            <div className="w-full mx-auto px-4 sm:px-1 relative">
                <div className="hidden sm:block">
                    <button 
                        onClick={prevSlide}
                        className="nav-button absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="nav-button absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className="overflow-hidden mx-auto max-w-full" style={{ width: slideWidth * cardsPerView }}>
                    <div 
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
                    >
                        {circularTestimonials.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className="testimonial-card flex-shrink-0"
                            >
                                <TestimonialCard 
                                    description={testimonial.description} 
                                    name={testimonial.name} 
                                    title={testimonial.title} 
                                    image={testimonial.image} 
                                    isMiddle={index === currentSlide + Math.floor((cardsPerView - 1) / 2)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                displayedSlide === index ? 'w-8 bg-red_reign' : 'w-2 bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// TestimonialCard component remains unchanged
const TestimonialCard = ({ description, name, title, image, isMiddle = false }) => {
    return (
        <div
            className={`${isMiddle ? 'bg-red_reign' : 'bg-neutral-light'} flex flex-col justify-between rounded-3xl h-[400px] md:h-[420px] transition-all duration-300 py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6`}
        >
            <div className="flex-1 mb-6">
                <p className={`font-inter text-sm sm:text-base leading-6 sm:leading-7 ${isMiddle ? 'text-white' : 'text-red_reign'}`}>
                    {description}
                </p>
            </div>
            <div className="w-full">
                <div className="flex items-center gap-3 sm:gap-4">
                    <Image
                        src={image}
                        alt={`${name}'s profile`}
                        width={55}
                        height={55}
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border ${isMiddle ? 'border-white' : 'border-red_reign'} object-cover`}
                    />
                    <div className={`${isMiddle ? 'text-white' : 'text-red_reign'} flex flex-col px-2`}>
                        <h3 className="font-inter font-medium text-base sm:text-lg leading-tight">
                            {name}
                        </h3>
                        <p className="font-inter text-sm sm:text-base leading-tight mt-1">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;