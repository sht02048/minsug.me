import BlockQuote from "./BlockQuote.astro";
import Heading1 from "./Heading1.astro";
import Heading2 from "./Heading2.astro";
import Heading3 from "./Heading3.astro";
import MdxImage from "./MdxImage.astro";

const commonComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  blockquote: BlockQuote,
  img: MdxImage,
};

export default commonComponents;
