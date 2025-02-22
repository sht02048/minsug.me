import BlockQuote from "./BlockQuote.astro";
import Heading from "./Heading.astro";
import MdxImage from "./MdxImage.astro";

const commonComponents = {
  h2: Heading,
  blockquote: BlockQuote,
  img: MdxImage,
};

export default commonComponents;
