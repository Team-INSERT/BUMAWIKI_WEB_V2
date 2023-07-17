const seoContentParser = (contents: string) => {
  return contents.replace(/<[^>]*>/g, "");
};

export default seoContentParser;
