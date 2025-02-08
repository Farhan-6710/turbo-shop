import Image from "next/image"; // Import the Image component from Next.js
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/extension/Carousel";

interface SpecialCarouselProps {
  images: string[]; // Expect an array of image URLs
}

const SpecialCarousel: React.FC<SpecialCarouselProps> = ({ images }) => {
  return (
    <Carousel
      orientation="vertical"
      className="flex justify-center items-center gap-2 w-full xl:w-5/12 bg-whiteTwo dark:bg-blackTwo py-6 md:py-10 sm:px-4 border border-gray-200 dark:border-stone-800 rounded-md"
    >
      <CarouselThumbsContainer className="h-56 sm:h-72 basis-1/4">
        {images.map((image, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="flex items-center justify-center h-full w-full cursor-pointer bg-background">
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                layout="responsive" // Keeps the image responsive within its container
                width={300} // You can specify the desired width for the thumbnail
                height={100} // You can specify the desired height for the thumbnail
                className="w-full h-full object-cover rounded-md"
              />
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
      <div className="relative basis-3/4">
        <CarouselMainContainer className="h-56 sm:h-72 xl:h-96">
          {images.map((image, index) => (
            <SliderMainItem
              key={index}
              className="flex items-center justify-center h-52"
            >
              <div className="w-full h-full aspect-square relative">
                <Image
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  layout="fill" // Makes the image take up the full parent container
                  objectFit="contain" // Ensures the image covers the area without distortion
                  className="rounded-md"
                />
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
    </Carousel>
  );
};

export default SpecialCarousel;
