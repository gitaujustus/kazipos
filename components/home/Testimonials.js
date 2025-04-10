'use client'
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

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

    // Create a circular array for infinite scrolling
    const circularTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Calculate responsive values on mount and window resize
    useEffect(() => {
        const updateCarouselDimensions = () => {
            const width = window.innerWidth;
            let cardsToShow = 4;
            let cardWidth = 300;
            let gapSize = 20;
            
            // Set cards per view based on screen width
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
            
            // Update inline style for card width if carousel exists
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

    // Auto-scrolling functionality
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                setCurrentSlide(prev => {
                    // When we reach the end of all testimonials, reset to beginning
                    if (prev >= testimonials.length * 2 - 1) {
                        return testimonials.length;
                    }
                    return prev + 1;
                });
            }, 5000);
        };
        
        startAutoScroll();
        
        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };
    }, [testimonials.length]);
    
    // Reset to original position after scrolling through first set
    useEffect(() => {
        if (currentSlide >= testimonials.length * 2) {
            setTimeout(() => {
                setCurrentSlide(testimonials.length);
            }, 0);
        }
    }, [currentSlide, testimonials.length]);

    const nextSlide = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        
        setCurrentSlide(prev => {
            if (prev >= testimonials.length * 2 - 1) {
                return testimonials.length;
            }
            return prev + 1;
        });
        
        // Restart auto-scroll
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => {
                if (prev >= testimonials.length * 2 - 1) {
                    return testimonials.length;
                }
                return prev + 1;
            });
        }, 5000);
    };

    const prevSlide = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        
        setCurrentSlide(prev => {
            if (prev <= 0) {
                return testimonials.length - 1;
            }
            return prev - 1;
        });
        
        // Restart auto-scroll
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => {
                if (prev >= testimonials.length * 2 - 1) {
                    return testimonials.length;
                }
                return prev + 1;
            });
        }, 5000);
    };

    const goToSlide = (index) => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        
        setCurrentSlide(testimonials.length + index);
        
        // Restart auto-scroll
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => {
                if (prev >= testimonials.length * 2 - 1) {
                    return testimonials.length;
                }
                return prev + 1;
            });
        }, 5000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-700">
            {/* 1. Heading Section */}
            <h1 className="text-red_republic pt-[10px] sm:pt-[120px] md:pt-[162px] pb-10 sm:pb-16 md:pb-20 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-inter text-center">
                <span>We let Our <span className="text-red_reign">Clients Success</span></span>
                <br />
                <span>Speak for us</span>
            </h1>

            {/* 2. Carousel Section */}
            <div className="w-full  mx-auto px-4 sm:px-1 relative">
                {/* Navigation Buttons - Hidden on mobile */}
                <div className="hidden sm:block">
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Carousel Container */}
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
                                    isFirst={testimonial.isFirst}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Pagination Dots */}
                <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-colors ${
                                currentSlide % testimonials.length === index ? 'bg-red_reign' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

const TestimonialCard = ({ description, name, title, image, isFirst = false }) => {
    return (
        <div
            className={`${
                isFirst ? 'bg-red_reign' : 'bg-neutral-light'
            } flex flex-col justify-between rounded-3xl h-[400px] md:h-[420px] transition-all duration-300 py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6`}
        >
            {/* Text Container with Scroll */}
            <div className="flex-1 mb-6">
                <p className={`font-inter text-sm sm:text-base leading-6 sm:leading-7 ${
                    isFirst ? 'text-white' : 'text-red_reign'
                }`}>
                    {description}
                </p>
            </div>

            {/* Profile Div */}
            <div className="w-full">
                <div className="flex items-center gap-3 sm:gap-4">
                    <Image
                        src={image}
                        alt={`${name}'s profile`}
                        width={55}
                        height={55}
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border ${
                            isFirst ? 'border-white' : 'border-red_reign'
                        } object-cover`}
                    />
                    <div className={`${isFirst ? 'text-white' : 'text-red_reign'} flex flex-col px-2`}>
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