import Header from "../components/Header";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/gallery/1763268658104.webp",
    thumbnail: "/gallery/1763268658104.webp",
  },
  {
    original: "/gallery/1763268686319.webp",
    thumbnail: "/gallery/1763268686319.webp",
  },
  {
    original: "/gallery/2025-11-15_00.44.49.webp",
    thumbnail: "/gallery/2025-11-15_00.44.49.webp",
  },
  {
    original: "/gallery/2025-11-19_21.45.03.webp",
    thumbnail: "/gallery/2025-11-19_21.45.03.webp",
  },
  {
    original: "/gallery/2025-12-01_00.44.32.webp",
    thumbnail: "/gallery/2025-12-01_00.44.32.webp",
  },
  {
    original: "/gallery/image-2.webp",
    thumbnail: "/gallery/image-2.webp",
  },
  {
    original: "/gallery/image-3.webp",
    thumbnail: "/gallery/image-3.webp",
  },
  {
    original: "/gallery/image-58.webp",
    thumbnail: "/gallery/image-58.webp",
  },
  {
    original: "/gallery/image.webp",
    thumbnail: "/gallery/image.webp",
  },
  {
    original: "/gallery/Messenger_creation_4D22338D-DE21-4C33-974E-8CA6B3260A4C.webp",
    thumbnail: "/gallery/Messenger_creation_4D22338D-DE21-4C33-974E-8CA6B3260A4C.webp",
  },
];

export default function Gallery() {
    return (
        <div className="min-h-screen">
            <Header />

            <div className="py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-6 font-bold">Gallery</h1>
                <div className="bg-purple-900/20 rounded-lg p-4 w-full overflow-hidden">
                    <ImageGallery items={images} showThumbnails={false} />
                </div>
            </div>
        </div>
    )
}