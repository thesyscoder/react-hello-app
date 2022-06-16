import NewsListItem from "./news_list_item";
const NewsList = (props) => {
  const news = props.news.map((item) => <NewsListItem item={item} />);
  return (
    <>
      {news}
      {props.children}
    </>
  );
};

export default NewsList;
