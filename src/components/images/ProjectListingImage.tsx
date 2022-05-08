import Image from "next/image";

import { ImageOrientation } from "../../types/components";

interface ListingImageProps {
  imageUrl: string;
  altTag: string;
  titleTag: string;
  orientation: ImageOrientation;
}

export const ProjectListingImage: React.FC<ListingImageProps> = ({
  imageUrl,
  altTag,
  titleTag,
  orientation,
}) => {
  switch (orientation) {
    case "horizontal": {
      return (
        <Image
          src={imageUrl}
          width={1300}
          height={600}
          layout="responsive"
          alt={altTag}
          title={titleTag}
        />
      );
    }
    case "vertical": {
      return (
        <Image
          src={imageUrl}
          width={600}
          height={1300}
          layout="responsive"
          alt={altTag}
          title={titleTag}
        />
      );
    }
    default: {
      return null;
    }
  }
};
